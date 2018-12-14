import React, { Component} from 'react';
import { connect } from 'react-redux';

import {loadListBreedDogs} from '../load_function/LoadListBreedDogs';


class  PageListDogs  extends Component {
    
    render() {
        return (
            <div >
                <div id = "listBreeds"  className = "list"  ></div>
            </div>
        );
    };

    componentDidMount(){
        var listDogs = this.props.listBreedDogs;
        var showListDogs = this.showListDogs;
        loadListBreedDogs().then(() => {
            showListDogs(listDogs);    
        });  
    }

    showListDogs(listDogs){
        var listMenuElem = document.getElementById('listBreeds');
        var ul = document.createElement("ul");   
        ul.className = "list-like-menu";
        
        for (let i = 0; i < listDogs.length; i++) {
            var li = document.createElement("li");   
            li.className="menu-item";
            li.textContent = listDogs[i];
            ul.appendChild(li);           
        }
        listMenuElem.appendChild(ul);
    };
};

const putStateToProps  = (state) =>{
    return {
        listBreedDogs : state.listBreedDogs
    };
};

export default connect(putStateToProps)(PageListDogs);