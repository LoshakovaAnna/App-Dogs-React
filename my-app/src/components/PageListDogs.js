import React, { Component} from 'react';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { putNameDogToList } from '../store/actions';

import {ftch_lict} from '../func/FetchList';


class  PageListDogs  extends Component {
    
    render() {
        const { urlAll, listDogs, putNameDogToList} = this.props;
        var mes, nameDog;
        var show = this.showListDogs;
        
           // show(listDogs);

        return (
            <div >
                <div id = "listNames"  className = "list"  ></div>
            </div>
        );
    };
    
    componentDidMount(){
       var p = this.props.listDogs;
       var f = this.showListDogs;
        ftch_lict().then(() => {
           f(p);
    
        });
   
    }

    showListDogs(listDogs){
       var mes = listDogs;
       var listMenuElem = document.getElementById('listNames');
      //{alert("wor")}
       /* while (listMenuElem.firstChild){      
            listMenuElem.removeChild(listMenuElem.firstChild);
        }
*/
           var ul = document.createElement("ul");   
          ul.className = "list-like-menu";
            console.log(mes.length);
        
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


export default connect(putStateToProps, putActionToProps)(PageListDogs);
