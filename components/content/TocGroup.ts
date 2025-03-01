import { NuxtLink } from "#components";
import type { DeepReadonly, VNode } from "vue";
import TocChildren from "./TocChildren.vue";

export default defineComponent({
  name: "TocGroup",
  props: {
    path: String,
    rootPath: {
      type: String,
      default: "/blog",
    },
    maxSiblings: {
      type: Number,
      default: 6,
    },
  },
  async setup(props) {
    const route = useRoute();

    const path = computed(() => props.path ?? route.path);

    const structuredContent = await getStructuredContent();

    const pathMeta = structuredContent.map.get(path.value)!;

    const expanded = ref(false)

    return () => {
      if (expanded.value) {
        return [h(TocChildren), h('button', {type: 'button', onClick: () => expanded.value = !expanded.value, class: 'underline font-black'}, 'show less')]
      }

      const createGroup = () =>
        createGroupLinkItems(pathMeta, props.maxSiblings, true).vnode;

      const showAllBtn =  h('button', {type: 'button', onClick: () => expanded.value = !expanded.value, class: 'underline font-black'}, 'show all')
      if (pathMeta.parent && pathMeta.parent.item.path !== props.rootPath) {
        return [createSiblingsAndParents(pathMeta, props.rootPath, createGroup), showAllBtn];
      }
      return [createGroup(), showAllBtn];
    };
  },
});

function createSiblingsAndParents(
  pathMeta: DeepReadonly<Content>,
  rootPath: string,
  createGroup: () => VNode
) {
  let currentParent = pathMeta.parent;
  const elements = [] as VNode[];
  while (currentParent && currentParent.item.path !== rootPath) {
    const parentList = [] as VNode[];
    const parent = currentParent;
    if (parent.prev) {
      if (parent.prev.prev) {
        parentList.push(h("li", { "aria-hidden": "true" }, "..."));
      }
      parentList.push(
        h(
          "li",
          {
            value: parent.prev.index + 1
          },
          h(
            NuxtLink,
            { to: parent.prev.item.path },
            () => parent.prev!.item.title
          )
        )
      );
    }

    parentList.push(
      h("li", {
        value: parent.index + 1
      },[
        h(
          NuxtLink,
          { to: parent.item.path, class: "!font-bold" },
          () => parent.item.title
        ),
        parent === pathMeta.parent ? createGroup() : undefined,
      ])
    );

    if (parent.next) {
      parentList.push(
        h(
          "li",
          { 
            value: parent.next.index + 1
          },    
          h(
            NuxtLink,
            { to: parent.next.item.path },
            () => parent.next!.item.title
          )
        )
      );
      if (parent.next.next) {
        parentList.push(h("li", { "aria-hidden": "true",  }, "..."));
      }
    }
    elements.unshift(h("ol", parentList));
    currentParent = currentParent.parent;
  }
  return elements;
}

function createGroupLinkItems(
  content: DeepReadonly<Content>,
  maxSiblings: number,
  isActive: boolean
): { vnode: VNode; items: number } {
  let prev = content.prev;
  let next = content.next;
  const children = content.children?.length
    ? createGroupLinkItems(content.children[0], maxSiblings, false)
    : null;
  let siblingCount = children?.items ?? 0;
  const group = [
    h("li", [
      h(
        NuxtLink,
        { to: content.item.path, class: isActive ? "!font-black" : undefined },
        () => content.item.title
      ),
      children?.vnode,
    ]),
  ];

  while (siblingCount < maxSiblings && (prev || next)) {
    if (prev) {
      const previous = prev;
      group.unshift(
        h(
          "li",
          {value: previous.index + 1}
          ,
          h(NuxtLink, { to: previous.item.path }, () => previous.item.title)
        )
      );
      prev = previous.prev;
      siblingCount++;
    }
    if (next && siblingCount < maxSiblings) {
      const nextItem = next;
      group.push(
        h(
          "li",
          {value: nextItem.index + 1},

          h(NuxtLink, { to: nextItem.item.path }, () => nextItem.item.title)
        )
      );
      next = nextItem.next;
      siblingCount++;
    }
  }
  if (prev) {
    group.unshift(h('li', { 'aria-hidden': true} ,'...'))
  }
  if (next) {
    group.push(h('li', { 'aria-hidden': true} ,'...'))
  }

  return { vnode: h("ol", group), items: group.length };
}
