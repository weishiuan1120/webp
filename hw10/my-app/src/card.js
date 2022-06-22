import React from "react";
  
function UserInfoCard({ userData }) {
    return (
        <div className="datacontainer">
            {userData.avatar_url ? (<div className="dataitem">
            <img src={userData.avatar_url} height="100" width="100"
            alt="avatar" /></div>) : (<div></div>)}
            {userData.login ? (<div className="dataitem">Login: 
            {userData.login}</div>) : (<div></div>)}
            {userData.name ? (<div className="dataitem">
            Name : {userData.name}</div>) : (<div></div>)}
            {userData.company ? (<div className="dataitem">
            company: {userData.company}</div>) : (<div></div>)}
            {userData.blog ? (<div className="dataitem">
            blog: {userData.blog}</div>) : (<div></div>)}
        </div>
    );
}
  
export default UserInfoCard;