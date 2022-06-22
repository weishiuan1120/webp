// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";
import { FaBeer, FaHeart,FaComment } from 'react-icons/fa'
const LikeSection = props => {
  console.log("This is from LikeSection", props);
 
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
        
        <FaHeart class="fa-light fa-heart" onClick={props.addlikes}></FaHeart> 
        </div>
        <div className="like-section-wrapper">
        <FaComment class="fa-light fa-comment"></FaComment>
        </div>
      </div>
      <div className="like-number"   >{props.likes}</div>
    </div>
  );
};

export default LikeSection;
