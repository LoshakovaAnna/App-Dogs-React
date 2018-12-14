import React, { Component } from 'react';
import ImageDogsSet from './ImageDogsSet'; 
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  changeUrlForLoadLinksImage } from '../store/actions';

import { loadLinksOfImages } from '../load_function/LoadLinksOfImages';

class  PageRandomDogs  extends Component {
     
    render() {      
        return (
            <div >
                <div key="1">
                    <input 
                        type="text" 
                        id="inputCountDog"  
                        className="input-coun-dog"
                        placeholder="input count dog"
                    />
                    <input 
                        type="button" 
                        id="btnRandomImage" 
                        value="Load random Image" 
                        className="btn-random-image" 
                        onClick={this.loadImages}
                    />
                </div>
                <div key="2" id="imagePlace">
                    <ImageDogsSet src={this.props.arrLinkImages}  />
                </div>
            </div>
        );
    };
    
    loadImages = () =>{
        let countDogsValue = document.getElementById('inputCountDog').value;
        let changeUrlForLoadLinksImage = this.props.changeUrlForLoadLinksImage;
        if (  parseInt(countDogsValue)) {            
            var newUrl = this.props.urlRandom + +countDogsValue;
            changeUrlForLoadLinksImage(newUrl);
            loadLinksOfImages();         
        } else 
            alert("Wrong value! Input number");
    }    
};

const putStateToProps  = (state) =>{
    return {
        urlRandom : state.urlRandom,
        arrLinkImages : state.arrLinkImages
    }
};

const  putActionToProps = (dispatch) =>{
    return {
        changeUrlForLoadLinksImage : bindActionCreators (changeUrlForLoadLinksImage, dispatch) ,
    }
  };


export default connect(putStateToProps, putActionToProps)(PageRandomDogs);

