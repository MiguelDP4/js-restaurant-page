export const drawContainer = () => {
  let contentPage = document.getElementById('content');
  let containerFluid = document.createElement('div');
  containerFluid.classList.add('container-fluid');
  containerFluid.id = "container-fluid";
  contentPage.append(containerFluid);
};