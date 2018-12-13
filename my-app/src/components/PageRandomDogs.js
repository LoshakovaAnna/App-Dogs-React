import React, { Component} from 'react';
import ImageDogsSet from './ImageDogsSet'; 
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createNewArrayLinksImages } from '../store/actions';


class  PageRandomDogs  extends Component {
     
    render() {
        const {urlRandom, arrLinkImages, createNewArrayLinksImages } = this.props;
        return (
            <div >
                <div key="1">
                    <input type="text" id="inputCountDog"  className="input-coun-dog"
                        placeholder="input count dog"></input>
                    <input type="button" id="btnRandomImage" value="Random Image" 
                        className="btn-random-image" 
                        onClick={this.loadImages}></input>
                </div>
                <div key="2" id="imagePlace">
                    <ImageDogsSet src={arrLinkImages}  />
                </div>
            </div>
        );
    };
    
    loadImages = async () =>{
        let countDogsValue = document.getElementById('inputCountDog').value;
        let count;
        let urlRandomDogs = this.props.urlRandom;
        if (  parseInt(countDogsValue)) {
            
            count =  parseInt(countDogsValue);
            var imgJSON = await fetch(urlRandomDogs + count);
            const data = await imgJSON.json();
            this.props.createNewArrayLinksImages(data.message);
            /*
            this.setState({
                urlImage : data.message
            });        */
        } else 
            alert("Wrong value! Input number");
    }    
};

//export default PageRandomDogs;



const putStateToProps  = (state) =>{
    return {
        urlRandom : state.urlRandom,
        arrLinkImages : state.arrLinkImages
    }
};

const  putActionToProps = (dispatch) =>{
    return {
        createNewArrayLinksImages: bindActionCreators (createNewArrayLinksImages, dispatch) 
    }
  };


export default connect(putStateToProps, putActionToProps)(PageRandomDogs);

