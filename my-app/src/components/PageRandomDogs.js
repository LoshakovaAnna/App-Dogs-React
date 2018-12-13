import React, { Component} from 'react';
import ImageDogsSet from './ImageDogsSet'; 
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  changeUrlForLinksImage } from '../store/actions';

import {fetch_link} from '../func/FetchLinks';

class  PageRandomDogs  extends Component {
     
    render() {      
        return (
            <div >
                <div key="1">
                    <input type="text" id="inputCountDog"  className="input-coun-dog"
                        placeholder="input count dog"></input>
                    <input type="button" id="btnRandomImage" value="Load random Image" 
                        className="btn-random-image" 
                        onClick={this.loadImages}></input>
                </div>
                <div key="2" id="imagePlace">
                    <ImageDogsSet src={this.props.arrLinkImages}  />
                </div>
            </div>
        );
    };
    
    loadImages = () =>{
        let countDogsValue = document.getElementById('inputCountDog').value;
        let change = this.props.changeUrlForLinksImage;
        if (  parseInt(countDogsValue)) {            
            var newUrl = this.props.urlRandom + +countDogsValue;
            change(newUrl);
            fetch_link();         
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
        changeUrlForLinksImage : bindActionCreators (changeUrlForLinksImage, dispatch) ,
    }
  };


export default connect(putStateToProps, putActionToProps)(PageRandomDogs);

