import React, { Component} from 'react';
import { connect } from 'react-redux';

import {fetch_list} from '../func/FetchList';


class  PageListDogs  extends Component {
    
    render() {
        return (
            <div >
                <div id = "listNames"  className = "list"  ></div>
            </div>
        );
    };

    componentDidMount(){
        var listDogs = this.props.listDogs;
        var showListDogs = this.showListDogs;
        fetch_list().then(() => {
            showListDogs(listDogs);    
        });  
    }

    showListDogs(listDogs){
        var listMenuElem = document.getElementById('listNames');
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
        listDogs : state.listDogs
    };
};

export default connect(putStateToProps)(PageListDogs);