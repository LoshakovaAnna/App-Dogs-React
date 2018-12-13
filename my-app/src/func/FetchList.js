import {store} from '../index';
import { putNameDogToList } from '../store/actions';

import {  bindActionCreators } from 'redux';

export async function fetch_list(){
    var  urlAll = store.getState().urlAll;
    var mes;
    var nameDog;
    const putName = bindActionCreators (putNameDogToList, store.dispatch);
    return fetch(urlAll)
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        mes = data.message;
        for (var key in mes) {
            if (mes[key].length !== 0) {
                for (let i = 0; i < mes[key].length; i++) {
                    nameDog = key + '-' + mes[key][i];
                    putName(nameDog); ;
                }
            }
            else{
                nameDog = key;
                putName(nameDog);
            }
        };
    });
}