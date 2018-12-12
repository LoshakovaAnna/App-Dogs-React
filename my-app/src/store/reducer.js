const initialState = {
    urlAll : 'https://dog.ceo/api/breeds/list/all',
    urlRandom : 'https://dog.ceo/api/breeds/image/random/',
    urlOneDogPart1 : 'https://dog.ceo/api/breed/',
    urlOneDogPart2 : '/images/random/"',
    urlOneDog : '',
    listDogs : []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
      case 'PUT_NAME_DOG_TO_LIST' :
      {
        const newList = state.listDogs.push(action.payload);
        return {...state, listDogs : newList};
      }
      
    }
    return state;
  };
