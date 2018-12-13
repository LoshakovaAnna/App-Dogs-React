import React from 'react';

import ImageDogsSet from './ImageDogsSet';
import {ftch_lict} from '../func/FetchList';
const urlPart1 = "https://dog.ceo/api/breed/";
const urlPart2 = "/images/random/3";

export default   function dinamicPageSpecDog(props) {
  var url  = urlPart1 + props.match.params.sm+ urlPart2;
  
  
  return ( <div>

               <h1>{props.match.params.sm}</h1>
               <input type="text" id="inputCountDog"  className="input-coun-dog"
                        placeholder="input count dog"></input>

                 <input type="button" i value="fetch" 
                        className="btn-random-image" 
                        onClick={ftch_lict}></input>
              <div key="2" id="imagePlace">
                    <ImageDogsSet src=""  />
                </div>
          </div>
      );
    
    };

  