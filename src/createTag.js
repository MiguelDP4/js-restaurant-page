export const createTag = (parentId, childTag, childId = "") => {
  document.getElementById(parentId).innerHTML = `<${childTag} id="${childId}"></${childTag}>`;
}