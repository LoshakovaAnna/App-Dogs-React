import React, { Component} from 'react';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {  changeUrlForLinksImage } from '../store/actions';
import ImageDogsSet from './ImageDogsSet';
import {fetch_link} from '../func/FetchLinks';

class dinamicPageSpecDog  extends Component {
   
    render() {
      return ( 
          <div>
              <h1>{this.props.choosenBreed}</h1>  
              <input type="text" id="inputCountDog"  className="input-coun-dog"
                      placeholder="input count dog"></input>

               <input type="button"  value="fetch" 
                        className="btn-random-image" 
                        onClick={this.loadImages}></input>
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
        var newUrl =  this.props.urlOneDogPart1 +  this.props.choosenBreed +  this.props.urlOneDogPart2 + countDogsValue
        change(newUrl);
        fetch_link(); 
      } else 
        alert("Wrong value! Input number");
  }
};

const putStateToProps  = (state) =>{
  return {
      arrLinkImages : state.arrLinkImages,
      choosenBreed : state.choosenBreed,
      urlOneDogPart1 : state.urlOneDogPart1,
      urlOneDogPart2 : state.urlOneDogPart2 
  }
};

const  putActionToProps = (dispatch) =>{
  return {
      changeUrlForLinksImage : bindActionCreators (changeUrlForLinksImage, dispatch)
  }
};

export default connect(putStateToProps, putActionToProps)(dinamicPageSpecDog);