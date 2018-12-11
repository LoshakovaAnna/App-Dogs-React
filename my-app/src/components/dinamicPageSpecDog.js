import React from 'react';

import ImageDogsList from './ImageDogsList';

const urlPart1 = "https://dog.ceo/api/breed/";
const urlPart2 = "/images/random/3";

export default   function dinamicPageSpecDog(props) {
  var url  = urlPart1 + props.match.params.sm+ urlPart2;
  
  
  return ( <div>
            <h1>{props.match.params.sm}</h1>
          
             {/* <ImageDogsList src={""} countDogs={3} />
              <button onClick ={getListDogs(url)} >dd</button>*/}
          </div>
      );

      async function  getListDogs (url){
        console.log(url);
        var imgJSON = await fetch(url);
        const data = await imgJSON.json();
        console.log(data.message);
    
    
    }

  };

  