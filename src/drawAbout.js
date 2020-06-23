import { globals } from './globals'
import { writeParagraph } from './writeParagraph';
export const drawAbout = () => {
  if(globals.tagState != 'about'){
    globals.tagState = 'about';
  }
};