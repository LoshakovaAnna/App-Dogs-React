import { store } from '../index';
import { putBreedDogToList } from '../store/actions';
import {  bindActionCreators } from 'redux';

export async function loadListBreedDogs(){ //loadListBreedDogs
    var  urlAllBreeds = store.getState().urlAllBreeds;
    var message, breedDog;
    const putBreed = bindActionCreators (putBreedDogToList, store.dispatch);

    return fetch(urlAllBreeds)
        .then(function(response) {
            return response.json()
        }).then(function(data) {
            message = data.message;
            for (var key in message) {
                if (message[key].length !== 0) {
                for (let i = 0; i < message[key].length; i++) {
                    breedDog = key + '-' + message[key][i];
                    putBreed(breedDog); ;
                }
            }
            else{
                breedDog = key;
                putBreed(breedDog);
            }
        };
    });
}