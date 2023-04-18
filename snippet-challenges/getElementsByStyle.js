export function getElementsByStyle(property, value) {
  const elements = [];
  const stack = [document.body];

  while (stack.length) {
    const current = stack.pop();
    // ensure we get all the nodes in the next iteration
    if (current.children.length) {
      stack.push(...current.children);
    }
    // extract the style
    const style = getComputedStyle(current);

    // check if the property and value match
    if (style[property] === value) {
      elements.push(current);
    }
  }
  return elements;
}
