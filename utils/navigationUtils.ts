import type { ContentCollectionItem } from "@nuxt/content";
import type { DeepReadonly } from "vue";

let structuredContent: RootContent | undefined;

export const getStructuredContent = async () => {
  return (structuredContent ??= (await _getStructuredContent()) as RootContent);
};

const _getStructuredContent = async () => {
  const pathMap = new Map<string, Content>();

  const getChildrenRecursivly = async (parent?: Content) => {
    const result: Content[] = [];

    const children = parent
      ? await queryCollection("content")
          .where("path", "<>", parent.item.path)
          .where("path", "LIKE", `${parent.item.path}/%`)
          .where("path", "NOT LIKE", `${parent.item.path}/%/%`)
          .all()
      : await queryCollection("content")
          .where("path", "NOT LIKE", `/_%/%`)
          .all();

    if (children.length === 0) return [] as Content[];

    let prev: Content | undefined;
    let index = 0;
    for (const child of children) {
      const content = {
        index: index++,
        item: child,
        prev: prev,
        parent: parent,
      } as Content;
      content.children = await getChildrenRecursivly(content);
      if (prev) {
        prev.next = content;
      }
      prev = content;
      pathMap.set(content.item.path, content);
      result.push(content);
    }
    return result;
  };

  const result = await getChildrenRecursivly();
  return {
    root: result,
    map: pathMap,
  };
};

type RootContent = {
  readonly root: readonly Content[];
  readonly map: ReadonlyMap<string, DeepReadonly<Content>>;
};

export type Content = {
  index: number
  item: ContentCollectionItem;
  parent?: Content;
  next?: Content;
  prev?: Content;
  children: Content[];
};
