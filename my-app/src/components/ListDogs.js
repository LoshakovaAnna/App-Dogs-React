import React, { Component} from 'react';

import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { putNameDogToList } from '../store/actions';
class  ListDogs  extends Component {
    
    render() {
        const { urlAll, listDogs, putNameDogToList} = this.props;
        var mes, nameDog;
        var show= this.showListDogs;
        fetch(urlAll)
            .then(function(response) {
                return response.json()
            }).then(function(data) {
                mes = data.message;
                for (var key in mes) {
                    if (mes[key].length !== 0) {
                        for (let i = 0; i < mes[key].length; i++) {
                            nameDog = key + '-' + mes[key][i];
                            putNameDogToList(nameDog);
                        }
                    }
                    else{
                        nameDog = key;
                        putNameDogToList(nameDog);
                    }
                };
            }).then(function(data){
             show(listDogs);
            });

        return (
            <div >
                <div id = "listNames"  className = "list"  ></div>
            </div>
        );
    };
    
    showListDogs(listDogs){
       var mes = listDogs;
       var listMenuElem = document.getElementById('listNames');
      
        while (listMenuElem.firstChild){      
            listMenuElem.removeChild(listMenuElem.firstChild);
        }

        var ul = document.createElement("ul");   
        ul.className = "list-like-menu";
        for (let i = 0; i < mes.length; i++) {
            var li = document.createElement("li");   
            li.className="menu-item";
            li.textContent = mes[i];
            ul.appendChild(li);           
        }
        listMenuElem.appendChild(ul);
    };
     
};


const putStateToProps  = (state) =>{
    return {
        urlAll : state.urlAll,
        listDogs : state.listDogs
    }
};

const  putActionToProps = (dispatch) =>{
    return {
       putNameDogToList: bindActionCreators (putNameDogToList, dispatch) 
    }
  };







export default connect(putStateToProps, putActionToProps)(ListDogs);
