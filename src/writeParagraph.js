export const writeParagraph = (text) => {
  let paragraph = document.createElement('p');
  let textNode = document.createTextNode(text);
  paragraph.appendChild(textNode);
  return paragraph;
};