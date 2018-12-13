import {store} from '../index';
import { createNewArrayLinksImages } from '../store/actions';

import {  bindActionCreators } from 'redux';

export async function fetch_link(){
     //loadUrlForImages
    var imgJSON = await fetch(store.getState().urlForLinksImage);
    const data = await imgJSON.json();    
    const createLinksImage = bindActionCreators (createNewArrayLinksImages, store.dispatch);
    createLinksImage(data.message);
}