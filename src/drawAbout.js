import { globals } from './globals'
import { writeParagraph } from './writeParagraph';
export const drawAbout = () => {
  if(globals.tagState != 'about'){
    globals.tagState = 'about';
    let homeTag = document.getElementById('home-tag');
    let menuTag = document.getElementById('menu-tag');
    let aboutTag = document.getElementById('about-tag');
    let venuesTag = document.getElementById('venues-tag');
    homeTag.style.backgroundColor = 'transparent';
    menuTag.style.backgroundColor = 'transparent';
    aboutTag.style.backgroundColor = '#b00';
    venuesTag.style.backgroundColor = 'transparent';
    let homeRow = document.getElementById('home-row');
    let menuRow = document.getElementById('menu-row');
    let venuesRow = document.getElementById('venues-row');
    if(homeRow != null)
      homeRow.parentNode.removeChild(homeRow);
    if(menuRow != null)
      menuRow.parentNode.removeChild(menuRow);
    if(venuesRow != null)
      venuesRow.parentNode.removeChild(venuesRow);
  }
};