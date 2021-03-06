import globals from './globals';
import writeParagraph from './writeParagraph';
import removeElementAnimation from './removeElementAnimation';

const drawHome = () => {
  if (globals.tagState !== 'home') {
    const containerFluid = document.getElementById('container-fluid');
    const homeRow = document.createElement('div');
    homeRow.id = 'home-row';
    homeRow.classList.add('row', 'background-dark-gray', 'pt-5', 'pb-5');
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('container');
    const innerRow = document.createElement('div');
    innerRow.classList.add('row');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('col-sm-12');
    const titleTag = document.createElement('h2');
    titleTag.appendChild(document.createTextNode('Welcome to Fictional Restaurant'));
    titleDiv.append(titleTag);
    innerRow.append(titleDiv);
    const leftColumnDiv = document.createElement('div');
    leftColumnDiv.classList.add('col-sm-12', 'col-lg-6');
    leftColumnDiv.append(writeParagraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lobortis tortor nec dignissim. Duis semper aliquam urna eu mollis. Donec in finibus tellus. Vivamus mollis euismod consectetur. Aliquam pulvinar orci nec feugiat aliquet. Cras scelerisque ex in leo mollis, sit amet faucibus mi consequat. Donec dictum, erat et laoreet dapibus, nibh libero scelerisque justo, eget aliquam nunc leo sed nibh. Mauris velit orci, cursus sit amet iaculis et, pharetra non odio. Nunc malesuada massa quis velit mollis mattis. Aliquam sit amet semper lacus. Nulla dui ante, aliquam vel augue vel, rhoncus maximus mi. Vivamus commodo diam eget enim pellentesque, molestie volutpat mi efficitur. Sed iaculis dolor eu faucibus porttitor. Integer sagittis sagittis fermentum. Mauris convallis eget massa ac posuere.'));
    leftColumnDiv.append(writeParagraph('Fusce lobortis, eros id convallis euismod, massa quam tincidunt odio, ut dignissim turpis nunc pharetra augue. Vestibulum id luctus ante. Cras id ullamcorper risus. Praesent a mauris sit amet quam aliquam efficitur. In molestie maximus efficitur. Duis interdum lorem ac neque convallis imperdiet. Morbi gravida, nunc in aliquam semper, massa ipsum facilisis eros, sit amet pulvinar felis purus sed enim. Aliquam bibendum, nibh et ullamcorper finibus, massa odio tristique ante, id iaculis massa nisi sed leo. Praesent rutrum iaculis lorem et ullamcorper. Sed et leo tortor. Morbi sed arcu lorem. Phasellus blandit finibus lobortis. Nullam a vulputate nisl. Donec non vestibulum elit. Vestibulum consectetur ut felis nec dictum. Fusce est erat, facilisis et placerat ac, blandit ut nibh.'));
    innerRow.append(leftColumnDiv);
    const rightColumnDiv = document.createElement('div');
    rightColumnDiv.classList.add('col-sm-12', 'col-lg-6');
    const pretendImage = document.createElement('div');
    pretendImage.classList.add('fictional-image');
    pretendImage.append(writeParagraph('Pretend this is an image'));
    rightColumnDiv.append(pretendImage);
    innerRow.append(rightColumnDiv);
    homeContainer.append(innerRow);
    containerFluid.append(homeRow);
    const homeTag = document.getElementById('home-tag');
    const menuTag = document.getElementById('menu-tag');
    const aboutTag = document.getElementById('about-tag');
    const venuesTag = document.getElementById('venues-tag');
    homeTag.style.backgroundColor = '#b00';
    menuTag.style.backgroundColor = 'transparent';
    aboutTag.style.backgroundColor = 'transparent';
    venuesTag.style.backgroundColor = 'transparent';
    const menuRow = document.getElementById('menu-row');
    const aboutRow = document.getElementById('about-row');
    const venuesRow = document.getElementById('venues-row');
    if (menuRow != null) {
      removeElementAnimation(menuRow, homeRow, homeContainer);
    }
    if (aboutRow != null) {
      removeElementAnimation(aboutRow, homeRow, homeContainer);
    }
    if (venuesRow != null) {
      removeElementAnimation(venuesRow, homeRow, homeContainer);
    }
    if (globals.tagState === '') homeRow.append(homeContainer);
    globals.tagState = 'home';
  }
};

export { drawHome as default };