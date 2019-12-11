import useOnClickOutside from 'use-onclickoutside';

const hasIgnoredClass = (element, ignoredClass) =>
  (element.correspondingElement
    ? element.correspondingElement
    : element
  ).classList.contains(ignoredClass);

const isInIgnoredElement = (element, ignoredClass) => {
  do {
    if (hasIgnoredClass(element, ignoredClass)) {
      return true;
    }
  } while ((element = element.parentElement));

  return false;
};

export default (ref, handler, ignoredClass = 'ignore-onClickOutside') =>
  useOnClickOutside(ref, event => {
    if (isInIgnoredElement(event.target, ignoredClass)) {
      return;
    }

    handler(event);
  });
