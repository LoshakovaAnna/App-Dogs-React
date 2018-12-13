import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {  setChoosenBreed } from '../store/actions';

import {fetch_list} from '../func/FetchList';

class  PageSpecificDogs  extends Component {
   
    render() {    
        return (        
            <div >                
               <div className="flex-row">                 
                    <div id="list-for-choose"></div>                
                   <div>
                        <Link className="link-btn"  to={`/specific-dog/${this.props.choosenBreed}`}>choose</Link>
                    </div>
                </div>
            </div>
        );
    };

    componentDidMount(){
        const  getList =this.getListDogs;
        
        fetch_list().then(() => {
            getList();     
         });
    };

    change = (event)=>{
       this.props.setChoosenBreed(event.target.value);
    };
    
    getListDogs = () =>{
        var divList  = document.getElementById('list-for-choose');
        var listSelectElem = document.createElement("select");
        const arrnames = this.props.listDogs;
   
        listSelectElem.onchange = this.change;
    
        for (let i = 0; i < arrnames.length; i++) {           
            var option = this.createOptionOfSelect(  arrnames[i]);
                listSelectElem.appendChild(option); 
            }  
            divList.appendChild(listSelectElem);            
    };
     
    createOptionOfSelect (breed) {            
        var option = document.createElement("option");   
        option.className="select-option";
        option.value= breed;
        if ( breed.indexOf('-') !== -1)   
        {          
            var subbreed = breed.split('-');
            option.textContent =  subbreed[1].charAt(0).toUpperCase() + subbreed[1].substr(1).toLowerCase()+ " " +
                subbreed[0].charAt(0).toUpperCase() + subbreed[0].substr(1).toLowerCase();
        
        }else  {    
            option.textContent =  breed.charAt(0).toUpperCase() + breed.substr(1).toLowerCase();    
        }
        return option;
    };

};

const putStateToProps  = (state) =>{
    return {
        choosenBreed : state.choosenBreed,
        listDogs : state.listDogs
    }
};

const  putActionToProps = (dispatch) =>{
    return {
        setChoosenBreed : bindActionCreators (setChoosenBreed, dispatch)
    }
};

export default connect(putStateToProps, putActionToProps)(PageSpecificDogs);