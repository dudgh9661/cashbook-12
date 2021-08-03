import Component from '@lib/Component';

export default (tagName, attributes, ...childNodes) => {
  const $element = document.createElement(tagName);

  Object.keys(attributes).forEach(key => {
    $element.setAttribute(key, attributes[key]);
  });

  const $fragment = document.createDocumentFragment();

  childNodes.forEach(child => {
    if (child instanceof Component) {
      $fragment.appendChild(child.getElement());
    } else if (child instanceof HTMLElement) {
      $fragment.appendChild(child);
    } else if (typeof child === 'string') {
      $fragment.appendChild(document.createTextNode(child));
    }
  });

  $element.appendChild($fragment);
  return $element;
};
