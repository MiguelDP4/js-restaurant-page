import globals from './globals';
import writeParagraph from './writeParagraph';
import removeElementAnimation from './removeElementAnimation';

const drawAbout = () => {
  if (globals.tagState !== 'about') {
    const containerFluid = document.getElementById('container-fluid');
    const aboutRow = document.createElement('div');
    aboutRow.id = 'about-row';
    aboutRow.classList.add('row', 'background-dark-gray', 'pt-5', 'pb-5');
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('container');
    const innerRow = document.createElement('div');
    innerRow.classList.add('row');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('col-sm-12');
    const titleTag = document.createElement('h2');
    titleTag.appendChild(document.createTextNode('About Us'));
    titleDiv.append(titleTag);
    innerRow.append(titleDiv);
    const leftColumnDiv = document.createElement('div');
    leftColumnDiv.classList.add('col-sm-12', 'col-lg-6');
    const pretendImage = document.createElement('div');
    pretendImage.classList.add('fictional-image');
    pretendImage.append(writeParagraph('Pretend this is an image'));
    leftColumnDiv.append(pretendImage);
    innerRow.append(leftColumnDiv);
    const rightColumnDiv = document.createElement('div');
    rightColumnDiv.classList.add('col-sm-12', 'col-lg-6');
    rightColumnDiv.append(writeParagraph('Phasellus bibendum sapien eu varius sodales. Donec molestie fringilla est, sed ornare turpis bibendum vel. Aliquam aliquet vehicula nulla, non cursus lorem tempus non. Etiam interdum vitae justo id scelerisque. Aliquam erat volutpat. Ut quis eros vitae mauris euismod sagittis ac rhoncus lacus. Cras lacinia vitae lectus vitae lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam metus neque, eleifend quis congue eu, placerat pellentesque mi. Sed lacus enim, eleifend nec ullamcorper nec, dictum pretium mi. Nulla interdum, dui a viverra eleifend, risus orci mollis lectus, sed rhoncus eros diam a velit. Ut pretium vestibulum tortor vitae malesuada. Aliquam molestie lacus vel enim fermentum mattis. Etiam sodales cursus est. Sed eleifend at enim ut auctor. Quisque non lectus urna.'));
    rightColumnDiv.append(writeParagraph('Etiam nibh lorem, rhoncus vitae nulla ut, aliquam feugiat velit. Praesent pharetra in lorem et congue. Aliquam pellentesque ex nec leo luctus, non tincidunt tellus auctor. In non enim hendrerit, tempus ex vitae, ullamcorper ex. Quisque tincidunt nunc in erat efficitur dignissim. Quisque bibendum sagittis est sed convallis. Vestibulum non lacus egestas, posuere turpis finibus, bibendum sapien. Morbi vel nulla ut lorem eleifend pellentesque. Praesent a justo pharetra, euismod odio id, ullamcorper lorem. Vivamus non volutpat quam. Duis eu tortor est. Sed eleifend posuere elit. Morbi vel nulla ut lorem eleifend pellentesque. Praesent a justo pharetra, euismod odio id, ullamcorper lorem.'));
    innerRow.append(rightColumnDiv);
    aboutContainer.append(innerRow);
    containerFluid.append(aboutRow);


    globals.tagState = 'about';
    const homeTag = document.getElementById('home-tag');
    const menuTag = document.getElementById('menu-tag');
    const aboutTag = document.getElementById('about-tag');
    const venuesTag = document.getElementById('venues-tag');
    homeTag.style.backgroundColor = 'transparent';
    menuTag.style.backgroundColor = 'transparent';
    aboutTag.style.backgroundColor = '#b00';
    venuesTag.style.backgroundColor = 'transparent';
    const homeRow = document.getElementById('home-row');
    const menuRow = document.getElementById('menu-row');
    const venuesRow = document.getElementById('venues-row');
    if (homeRow != null) {
      removeElementAnimation(homeRow, aboutRow, aboutContainer);
    }
    if (venuesRow != null) {
      removeElementAnimation(venuesRow, aboutRow, aboutContainer);
    }
    if (menuRow != null) {
      removeElementAnimation(menuRow, aboutRow, aboutContainer);
    }
  }
};

export { drawAbout as default };