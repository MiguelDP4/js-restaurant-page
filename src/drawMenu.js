import { globals } from './globals'
import { writeParagraph } from './writeParagraph';
export const drawMenu = () => {
  if(globals.tagState != 'menu'){
    globals.tagState = 'menu';
  }
};