import { globals } from './globals'
import { writeParagraph } from './writeParagraph';
export const drawVenues = () => {
  if(globals.tagState != 'venues'){
    globals.tagState = 'venues';
  }
};