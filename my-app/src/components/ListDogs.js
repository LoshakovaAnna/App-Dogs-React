import React, { Component} from 'react';

import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { putNameDogToList } from '../store/actions';
import ImageDogsList from './ImageDogsList';

const  urlListAllDogs = "https://dog.ceo/api/breeds/list/all";
const urlPart1 = "https://dog.ceo/api/breed/";
const urlPart2 = "/images/random";

class  ListDogs  extends Component {
    
    render() {
        const { urlListAllDogs, putNameDogToList} = this.props;
        return (

            <div >
                <div key="1">
                    <input type="button" id="btnRandomImagez" value="Load List Dogs" 
                        className="btn-random-image"   ></input>
                 
                        <div id = "listNames"  className = "list"  ></div>
                      
                      
                        <div id = "imND">
                        <h2>jj</h2>
                        {/*    <ImageDogsList src={this.state.srcList} />*/}
                        </div>
                </div>
               
            </div>
        );
    };
    
    componentDidMount(){
        console.log(this.props.urlAll);
       var url;
          fetch(this.props.urlAll)
            .then(function(response) {
             
                
              return response.json()
            }).then(function(data) {
              console.log('parsed json', data);
              url = data;
              console.log("output in fetc " + url.message);

              var mes = url.message;
              
        var listMenuElem = document.getElementById('listNames');
        var ul = document.createElement("ul");   
            ul.className = "list-like-menu";
    
        for (var key in mes) {
            if (mes[key].length !== 0) {
                for (let i = 0; i < mes[key].length; i++) {
                    
                    let menuItem = createMenuItem(key, mes[key][i]);
                    ul.appendChild(menuItem); 
            }
        }
        else{
            let menuItem = createMenuItem(key, "");
            ul.appendChild(menuItem); 
        }
            listMenuElem.appendChild(ul);
        };

            });
           // url = this._getNameOfResident(this.props.urlAll) ;
         console.log(url);   
            
  
    };

    getListDogs(mes){
    

        var listMenuElem = document.getElementById('listNames');
        var ul = document.createElement("ul");   
            ul.className = "list-like-menu";
    
        for (var key in mes) {
            if (mes[key].length !== 0) {
                for (let i = 0; i < mes[key].length; i++) {
                    
                    let menuItem = createMenuItem(key, mes[key][i]);
                    ul.appendChild(menuItem); 
            }
        }
        else{
            let menuItem = createMenuItem(key, "");
            ul.appendChild(menuItem); 
        }
            listMenuElem.appendChild(ul);
        };
    };

    getImage = async (e) =>{
        let el = e.target;
        console.log( el.className);
        if (el.className === "menu-item")
        {
            let src = urlPart1 + el.id + urlPart2;
            console.log(src);
            var imgJSON = await fetch(src);
            const data = await imgJSON.json();
          

            this.setState({names : el.id, srcList: [data.message]});
        }
    };

     
};

function createMenuItem (key, key2) {
        
    var li = document.createElement("li");   
    li.className="menu-item";
    
    //   let a = document.createElement("a");  
//    a.className = "menu-link";  
    var name;   
    if (key2)
    { 
        li.id = key+"-"+key2;
        name =  key2.charAt(0).toUpperCase() + key2.substr(1).toLowerCase()+ " " +  key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
    }else
    {    
        li.id = key;
        name =  key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
        }
            
    li.textContent = name;

    return li;
};


const putStateToProps  = (state) =>{
    return {
        urlAll : state.urlAll
    }
};

const  putActionToProps = (dispatch) =>{
    return {
       putNameDogToList: bindActionCreators (putNameDogToList, dispatch) 
    }
  }







export default connect(putStateToProps, putActionToProps)(ListDogs);
