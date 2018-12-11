import React, { Component} from 'react';

import { Link } from 'react-router-dom';

const  urlListAllDogs = "https://dog.ceo/api/breeds/list/all";
/*
import ImageDogsList from './ImageDogsList';

const  urlListAllDogs = "https://dog.ceo/api/breeds/list/all";
const urlPart1 = "https://dog.ceo/api/breed/";
const urlPart2 = "/images/random";
*/
class  SpecificDogs  extends Component {
    state = {
        link : ""
    }
    render() {
        return (
        
            <div >
                
               <div>choose
                    <select className="select-name"  id = "select-name" >
                    
                    </select>
                    </div>
                    <Link  to={`/specific-dog/${this.state.link}`}>choose</Link>
              
            
            </div>
        );
    };

    changeLink(val){

        this.setState(
            { link : val}
            );
     
    }
    componentDidMount(){
        
        this.getListDogs();
    };

    getListDogs = async () =>{
        var imgJSON = await fetch(urlListAllDogs);
        const data = await imgJSON.json();
        var mes = data.message
    

        var listSelectElem = document.getElementById('select-name');
     
        for (var key in mes) {
            if (mes[key].length !== 0) {
                for (let i = 0; i < mes[key].length; i++) {
                    
                    let selOption = this.createOptionOfSelect(key, mes[key][i]);
                    listSelectElem.appendChild(selOption); 
            }
        }
        else{
            let menuItem = this.createOptionOfSelect(key, "");
             listSelectElem.appendChild(menuItem); 
        }
        };
    };
     
 createOptionOfSelect (key, key2) {
        
    var option = document.createElement("option");   
    option.className="select-option";
    
    if (key2)
    { 
        option.value = key+"-"+key2;
        option.textContent =  key2.charAt(0).toUpperCase() + key2.substr(1).toLowerCase()+ " " +  key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
        option.onclick = this.changeLink(option.value);
     }else
    {    
        option.value= key;
        option.textContent =  key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
        option.onclick = this.changeLink(option.value);
        }
            

    return option;
};

};


export default SpecificDogs;



