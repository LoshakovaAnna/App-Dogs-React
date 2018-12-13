import React, { Component} from 'react';
import ImageDog from './ImageDog';

import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { putLinkImage } from '../store/actions';


class  ImageDogsSet  extends Component {  
    
    render() {
        const srcArray =  this.props.arrLinkImages;
      
        var ImageSet = srcArray.map(function (src, index){
            return (         
                <ImageDog key={index} src={src}  />
            )
        });

        return (
            ImageSet
        );
    };    
};
/*
ImageDogsList.propTypes = {
    src: PropTypes.array.isRequired
}*/




const putStateToProps  = (state) =>{
    return {
        arrLinkImages : state.arrLinkImages
    }
};

const  putActionToProps = (dispatch) =>{
    return {
        putLinkImage: bindActionCreators (putLinkImage, dispatch) 
    }
  };


export default connect(putStateToProps, putActionToProps)(ImageDogsSet);

