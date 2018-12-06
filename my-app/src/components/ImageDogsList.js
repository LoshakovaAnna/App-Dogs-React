import React, { Component} from 'react';

import ImageDog from './ImageDog';


class  ImageDogsList  extends Component {
  
    render() {
        let idDog=1;
        const srcArray =  this.props.src;
        console.log(srcArray);
    /*    var listImg = srcArray.map(function (el, index){
            idDog++;
            return (
            
                 <ImageDog key={idDog} src={el} />
            )
        });*/

        return (
          // listImg
          <ImageDog key={idDog} src={""} /> 
        );
    };
    
   
};

ImageDogsList.propTypes = {
    src: PropTypes.array.isRequired
  }

export default ImageDogsList;