import React, { Component} from 'react';


class  ImageDog  extends Component {  
    render() {
        return (                
                <div>
                    <img className="dog-image" src={this.props.src} alt="dog" ></img>
                </div>             
        );
    };  
};

export default ImageDog;