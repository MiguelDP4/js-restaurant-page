import { globals } from './globals'
import { writeParagraph } from './writeParagraph';
export const drawVenues = () => {
  if(globals.tagState != 'venues'){
    globals.tagState = 'venues';
    let homeTag = document.getElementById('home-tag');
    let menuTag = document.getElementById('menu-tag');
    let aboutTag = document.getElementById('about-tag');
    let venuesTag = document.getElementById('venues-tag');
    homeTag.style.backgroundColor = 'transparent';
    menuTag.style.backgroundColor = 'transparent';
    aboutTag.style.backgroundColor = 'transparent';
    venuesTag.style.backgroundColor = '#b00';
    let homeRow = document.getElementById('home-row');
    let menuRow = document.getElementById('menu-row');
    let aboutRow = document.getElementById('about-row');
    if(homeRow != null)
      homeRow.parentNode.removeChild(homeRow);
    if(menuRow != null)
      menuRow.parentNode.removeChild(menuRow);
    if(aboutRow != null)
      aboutRow.parentNode.removeChild(aboutRow);
  }
};