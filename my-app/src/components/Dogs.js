import React, { Component} from 'react';
import ImageDogsList from './ImageDogsList'; 

const  urlRandomDogs = "https://dog.ceo/api/breeds/image/random/";

class  Dogs  extends Component {
    state = { 
        urlImage : [],
        countDog : 1
    }
     
    render() {
        return (
            <div >
                <div key="1">
                    <input type="text" id="inputCountDog"  className="input-coun-dog"
                        placeholder="input count dog"></input>
                    <input type="button" id="btnRandomImage" value="Random Image" 
                        className="btn-random-image" 
                        onClick={this.getJSON}></input>
                </div>
                <div key="2" id="imagePlace">
                    <ImageDogsList src={this.state.urlImage} countDogs={this.state.countDog} />
                </div>
            </div>
        );
    };
    
    getJSON = async () =>{
        let coundDogElval = document.getElementById('inputCountDog').value;
        let count;
        if (  parseInt(coundDogElval)) {
            alert("number") ;
            count =  parseInt(coundDogElval);
            var imgJSON = await fetch(urlRandomDogs+count);
            const data = await imgJSON.json();
            this.setState({urlImage:data.message , countDog : count});        
        } else 
            alert("wrong val");
    }    
};

export default Dogs;