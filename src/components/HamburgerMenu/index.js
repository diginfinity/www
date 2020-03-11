/** @format */

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const createRootElement = id => {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
};

const addRootElement = rootEl => {
  document.body.insertBefore(
    rootEl,
    document.body.lastElementChild.nextElementSibling
  );
};

const usePortal = id => {
  const rootElementRef = useRef(null);

  useEffect(function setupElement() {
    const existingParent = document.querySelector(`#${id}`);

    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    parentElem.appendChild(rootElementRef.current);

    return function removeElement() {
      rootElementRef.current.remove();
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []); // eslint-disable-line
  function getRootElem() {
    if (!rootElementRef.current) {
      rootElementRef.current = document.createElement("div");
    }
    return rootElementRef.current;
  }
  return getRootElem();
};

const HamburgerMenu = ({ id, children }) => {
  const target = usePortal(id);

  return createPortal(children, target);
};

export default HamburgerMenu;
