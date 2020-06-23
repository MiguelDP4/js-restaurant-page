import { globals } from './globals'
import { writeParagraph } from './writeParagraph';
import { removeElementAnimation } from './removeElementAnimation'
export const drawVenues = () => {
  if(globals.tagState != 'venues'){
    let containerFluid = document.getElementById('container-fluid');
    let venuesRow = document.createElement('div');
    venuesRow.id = "venues-row";
    venuesRow.classList.add('row', 'background-dark-gray', 'pt-5', 'pb-5');
    let venuesContainer = document.createElement('div');
    venuesContainer.classList.add('container');
    let innerRow = document.createElement('div');
    innerRow.classList.add('row');
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('col-sm-12');
    let titleTag = document.createElement('h2');
    titleTag.appendChild(document.createTextNode('Visit us at one of our venues'));
    titleDiv.append(titleTag);
    innerRow.append(titleDiv);
    venuesContainer.append(innerRow);
    containerFluid.append(venuesRow);

    let venueImage1 = document.createElement('div');
    let venueImage2 = document.createElement('div');
    let venueImage3 = document.createElement('div');
    let venueImage4 = document.createElement('div');
    let venueImage5 = document.createElement('div');
    let venueImage6 = document.createElement('div');
    venueImage1.classList.add('fictional-menu-image');
    venueImage2.classList.add('fictional-menu-image');
    venueImage3.classList.add('fictional-menu-image');
    venueImage4.classList.add('fictional-menu-image');
    venueImage5.classList.add('fictional-menu-image');
    venueImage6.classList.add('fictional-menu-image');
    let unorderedList1 = document.createElement('ul');
    unorderedList1.classList.add('list-group');
    let unorderedList2 = document.createElement('ul');
    unorderedList2.classList.add('list-group');
    let listItem1 = document.createElement('li');
    listItem1.classList.add('list-group-item');
    listItem1.append(venueImage1);
    let p11 = writeParagraph('Nulla eleifend mi nibh');
    p11.classList.add('my-0','ml-3');
    listItem1.append(p11);
    let listItem2 = document.createElement('li');
    listItem2.classList.add('list-group-item');
    listItem2.append(venueImage2);
    let p21 = writeParagraph('Aliquam erat volutpat');
    p21.classList.add('my-0','ml-3');
    listItem2.append(p21);
    let listItem3 = document.createElement('li');
    listItem3.classList.add('list-group-item');
    listItem3.append(venueImage3);
    let p31 = writeParagraph('Maecenas non venenatis risus');
    p31.classList.add('my-0','ml-3');
    listItem3.append(p31);
    let listItem4 = document.createElement('li');
    listItem4.classList.add('list-group-item');
    listItem4.append(venueImage4);
    let p41 = writeParagraph('Pellentesque mollis metus at ex ultrices rutrum');
    p41.classList.add('my-0','ml-3');
    listItem4.append(p41);
    let listItem5 = document.createElement('li');
    listItem5.classList.add('list-group-item');
    listItem5.append(venueImage5);
    let p51 = writeParagraph('Fusce nec dolor consequat ligula auctor facilisis');
    p51.classList.add('my-0','ml-3');
    listItem5.append(p51);
    let listItem6 = document.createElement('li');
    listItem6.classList.add('list-group-item');
    listItem6.append(venueImage6);
    let p61 = writeParagraph('Maecenas vel ligula eget lorem feugiat scelerisque');
    p61.classList.add('my-0','ml-3');
    listItem6.append(p61);
    unorderedList1.append(listItem1);
    unorderedList1.append(listItem2);
    unorderedList1.append(listItem3);
    unorderedList2.append(listItem4);
    unorderedList2.append(listItem5);
    unorderedList2.append(listItem6);
    let leftColumnDiv = document.createElement('div');
    leftColumnDiv.classList.add('col-sm-12', 'col-lg-6');
    leftColumnDiv.append(unorderedList1);
    let rightColumnDiv = document.createElement('div');
    rightColumnDiv.classList.add('col-sm-12', 'col-lg-6');
    rightColumnDiv.append(unorderedList2);
    innerRow.append(leftColumnDiv);
    innerRow.append(rightColumnDiv);

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
    if(homeRow != null){
      removeElementAnimation(homeRow, venuesRow, venuesContainer);
    }
    if(aboutRow != null){
      removeElementAnimation(aboutRow, venuesRow, venuesContainer);
    }
    if(menuRow != null){
      removeElementAnimation(menuRow, venuesRow, venuesContainer);
    }
  }
};