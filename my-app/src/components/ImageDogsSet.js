import React, { Component} from 'react';
import ImageDog from './ImageDog';


class  ImageDogsSet  extends Component {  
    render() {    
        const srcArray =  this.props.src;
      
        var ImageSet = srcArray.map(function (src, index){
            return (            
                <ImageDog key={index} src={src} />
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

export default ImageDogsSet;