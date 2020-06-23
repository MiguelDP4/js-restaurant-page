import { globals } from './globals'
import { writeParagraph } from './writeParagraph';
export const drawHome = () => {
  if(globals.tagState != 'home'){  
    let pageContainer = document.getElementById('content');
    let containerFluid = document.getElementById('container-fluid');
    let homeRow = document.createElement('div');
    homeRow.classList.add('row', 'background-dark-gray', 'pt-5', 'pb-5');
    let homeContainer = document.createElement('div');
    homeContainer.classList.add('container');
    let innerRow = document.createElement('div');
    innerRow.classList.add('row');
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('col-sm-12');
    let titleTag = document.createElement('h2');
    titleTag.appendChild(document.createTextNode('Welcome to Fictional Restaurant'));
    titleDiv.append(titleTag);
    innerRow.append(titleDiv);
    let leftColumnDiv = document.createElement('div');
    leftColumnDiv.classList.add('col-sm-12', 'col-lg-6');
    leftColumnDiv.append(writeParagraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lobortis tortor nec dignissim. Duis semper aliquam urna eu mollis. Donec in finibus tellus. Vivamus mollis euismod consectetur. Aliquam pulvinar orci nec feugiat aliquet. Cras scelerisque ex in leo mollis, sit amet faucibus mi consequat. Donec dictum, erat et laoreet dapibus, nibh libero scelerisque justo, eget aliquam nunc leo sed nibh. Mauris velit orci, cursus sit amet iaculis et, pharetra non odio. Nunc malesuada massa quis velit mollis mattis. Aliquam sit amet semper lacus. Nulla dui ante, aliquam vel augue vel, rhoncus maximus mi. Vivamus commodo diam eget enim pellentesque, molestie volutpat mi efficitur. Sed iaculis dolor eu faucibus porttitor. Integer sagittis sagittis fermentum. Mauris convallis eget massa ac posuere.'))
    leftColumnDiv.append(writeParagraph('Fusce lobortis, eros id convallis euismod, massa quam tincidunt odio, ut dignissim turpis nunc pharetra augue. Vestibulum id luctus ante. Cras id ullamcorper risus. Praesent a mauris sit amet quam aliquam efficitur. In molestie maximus efficitur. Duis interdum lorem ac neque convallis imperdiet. Morbi gravida, nunc in aliquam semper, massa ipsum facilisis eros, sit amet pulvinar felis purus sed enim. Aliquam bibendum, nibh et ullamcorper finibus, massa odio tristique ante, id iaculis massa nisi sed leo. Praesent rutrum iaculis lorem et ullamcorper. Sed et leo tortor. Morbi sed arcu lorem. Phasellus blandit finibus lobortis. Nullam a vulputate nisl. Donec non vestibulum elit. Vestibulum consectetur ut felis nec dictum. Fusce est erat, facilisis et placerat ac, blandit ut nibh.'));
    innerRow.append(leftColumnDiv);
    let rightColumnDiv = document.createElement('div');
    rightColumnDiv.classList.add('col-sm-12','col-lg-6');
    let pretendImage = document.createElement('div');
    pretendImage.classList.add('fictional-image');
    pretendImage.append(writeParagraph("Pretend this is an image"));
    rightColumnDiv.append(pretendImage);
    innerRow.append(rightColumnDiv);
    homeContainer.append(innerRow);
    homeRow.append(homeContainer);
    containerFluid.append(homeRow);
    globals.tagState = 'home';
    let homeTag = document.getElementById('home-tag');
    let menuTag = document.getElementById('menu-tag');
    let aboutTag = document.getElementById('about-tag');
    let venuesTag = document.getElementById('venues-tag');
    homeTag.style.backgroundColor = '#b00';
    menuTag.style.backgroundColor = 'transparent';
    aboutTag.style.backgroundColor = 'transparent';
    venuesTag.style.backgroundColor = 'transparent';
  }
};