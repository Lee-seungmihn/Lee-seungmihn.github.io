export const h = (tag, props, ...children) => ({
  tag,
  props: props ?? {},
  children: children
    .flat(Infinity)
    .filter(c => c !== null && c !== undefined && c !== false && c !== '')
});
