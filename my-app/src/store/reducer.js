const initialState = {
  
    urlAll : 'https://dog.ceo/api/breeds/list/all',
    urlRandom : 'https://dog.ceo/api/breeds/image/random/',
    urlOneDogPart1 : 'https://dog.ceo/api/breed/',
    urlOneDogPart2 : '/images/random/',
    urlOneDog : '',
    urlForLinksImage : '',
    choosenBreed: '',
    listDogs : [],
    arrLinkImages : [],
    linkImage : 'AFFENPINSCHER'
    
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
      case 'PUT_NAME_DOG_TO_LIST' :
      {
        const newList = state.listDogs; 
        if (newList.indexOf(action.payload)=== -1) 
            newList.push(action.payload);
        return {...state, listDogs : newList};
      }
      case 'CREATE_NEW_ARRAY_LINKS_IMAGES' :
      {
        return {...state, arrLinkImages : action.payload};
      }
      case 'PUT_LINK_IMAGE' :
      {
        return {...state, linkImage : action.payload};
      }
      case 'SET_CHOOSEN_BREED' :
      {
        return {...state, choosenBreed : action.payload};
      }
      case 'CHANGE_URL_FOR_LINKS_IMAGE' :
      {
        return {...state, urlForLinksImage : action.payload};
      }
      default  :  
            return state;
    }
  };
