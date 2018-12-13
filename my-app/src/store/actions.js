export const putNameDogToList = (newNameDog) =>{
    return {
      type: 'PUT_NAME_DOG_TO_LIST' ,
      payload: newNameDog
    };
  };

  
export const createNewArrayLinksImages = (newArrayLinkImages) =>{
  return {
    type: 'CREATE_NEW_ARRAY_LINKS_IMAGES' ,
    payload: newArrayLinkImages
  };
};


export const putLinkImage = (newLinkImage) =>{
  return {
    type: 'PUT_LINK_IMAGE' ,
    payload: newLinkImage
  };
};

export const setChoosenBreed = (chooseBreed) =>{
  return {
    type: 'SET_CHOOSEN_BREED' ,
    payload: chooseBreed
  };
};