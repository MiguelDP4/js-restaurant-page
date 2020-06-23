const writeParagraph = (text) => {
  const paragraph = document.createElement('p');
  const textNode = document.createTextNode(text);
  paragraph.appendChild(textNode);
  return paragraph;
};

export { writeParagraph as default };