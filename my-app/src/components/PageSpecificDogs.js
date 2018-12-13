import React, { Component} from 'react';

import { Link } from 'react-router-dom';

import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createNewArrayLinksImages } from '../store/actions';

import { putNameDogToList, setChoosenBreed } from '../store/actions';

class  PageSpecificDogs  extends Component {
   
    render() {
    
        return (
        
            <div >
                
               <div className="flex-row"> 
                
                    <div id="list-for-choose"></div>
                
                   <div> <Link className="link-btn"  to={`/specific-dog/${this.props.choosenBreed}`}>choose</Link>
                    </div>
            </div>
            </div>
        );
    };

   
    componentDidMount(){
        var mes, nameDog;
        const  getList =this.getListDogs;
        const urlAll = this.props.urlAll;
        const addName = this.props.putNameDogToList;
    
        fetch(urlAll)
            .then(function(response) {
                return response.json()
            }).then(function(data) {
                mes = data.message;    
                for (var key in mes) {
                if (mes[key].length !== 0) {
                    for (let i = 0; i < mes[key].length; i++) {                     
                        nameDog = key + '-' + mes[key][i];
                        addName(nameDog);                        
                    }
                }
                else{
                    nameDog = key;
                    addName(nameDog);
                }
            };
        }).then(function(data){           
            getList();
        });

    };
    change = (event)=>{
       alert( event.target.value);
       this.props.setChoosenBreed(event.target.value);
    };
    upload = () =>{
        alert('click');
    }
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
        if ( breed.indexOf('-') != -1)   
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
        urlAll : state.urlAll,
        urlRandom : state.urlRandom,
        arrLinkImages : state.arrLinkImages,
        choosenBreed : state.choosenBreed,
        urlOneDogPart1 : state.urlOneDogPart1,
        urlOneDogPart2 : state.urlOneDogPart2, 
        nameOneDog : state.nameOneDog,
        listDogs : state.listDogs,
        arrLinkImages : state.arrLinkImages

        }
};

const  putActionToProps = (dispatch) =>{
    return {
        createNewArrayLinksImages: bindActionCreators (createNewArrayLinksImages, dispatch) ,
        putNameDogToList : bindActionCreators (putNameDogToList, dispatch),
        setChoosenBreed : bindActionCreators (setChoosenBreed, dispatch)
    }
  };


export default connect(putStateToProps, putActionToProps)(PageSpecificDogs);

