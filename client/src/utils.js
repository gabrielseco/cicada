// @flow
export const addEventsToDocument = (eventMap: {
  click: Function,
  touchend: Function
}) => {
  Object.keys(eventMap).forEach(key => {
    document.addEventListener(key, eventMap[key], false);
  });
};

export const removeEventsFromDocument = (eventMap: {
  click: Function,
  touchend: Function
}) => {
  Object.keys(eventMap).forEach(key => {
    document.removeEventListener(key, eventMap[key], false);
  });
};

export const targetIsDescendant = (event: any, parent: any) => {
  let node = event.target;
  while (node !== null) {
    if (node === parent) return true;
    node = node.parentNode;
  }
  return false;
};
