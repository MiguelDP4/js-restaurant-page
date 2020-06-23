const drawContainer = () => {
  const contentPage = document.getElementById('content');
  const containerFluid = document.createElement('div');
  containerFluid.classList.add('container-fluid');
  containerFluid.id = 'container-fluid';
  contentPage.append(containerFluid);
};

export { drawContainer as default };