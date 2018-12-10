import React, { Component} from 'react';
import ImageDog from './ImageDog';


class  ImageDogsList  extends Component {
  
    render() {    
        const srcArray =  this.props.src;
      
        var listImg = srcArray.map(function (el, index){
        return (            
                 <ImageDog key={index} src={el} />
            )
        });

        return (
           listImg
        );
    };    
   
};
/*
ImageDogsList.propTypes = {
    src: PropTypes.array.isRequired
}*/

export default ImageDogsList;