import React from "react";
import PropTypes from "prop-types";

const Profile_component = (props) => {
    
    return ( <div>
    
    <h1 style={{ color: "lightskyblue", fontSize: 60 }}>Hi My name is {props.fullName} </h1>
    <h4 style={{ color: "cornflowerblue", fontSize: 40 }}>I'm {props.profession}</h4> <br></br>
     {props.children}
    <p style={{textIndent: 50,textAlign: "Center",letterSpacing: 3}}>{props.bio}</p>
    
     
    <button onClick={props.handleName}> click me</button>
    </div>  );
};
Profile_component.defaultProps={
    fullName:"salma", bio:"",profession:"web developper"
}
Profile_component.propTypes = {
    
    fullName: PropTypes.string,
   bio: PropTypes.string,
    profession: PropTypes.string,
   
   };

export default Profile_component;
