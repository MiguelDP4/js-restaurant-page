export const removeElementAnimation = (element, insertParent, insertChild) => {
  element.style.position = 'relative';
  element.style.right = '0px'
  let positionRight = 0;
  const timer = setInterval(() => {
    if (positionRight > window.outerWidth) {
      clearInterval(timer);
      element.parentNode.removeChild(element);
      insertParent.append(insertChild);
    }
    element.style.right = `${positionRight}px`;
    positionRight += positionRight*0.30 + 1;
  }, 10);
};