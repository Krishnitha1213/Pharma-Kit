import React from 'react';
import "./Footer.css";

const Footer = (props) => {
    //console.log(props);
    return (
        <React.Fragment> 
            <hr/>
            <center>
                <h1>&copy; @Nikitha {props.year} {props.month}</h1>
            </center>
            <hr/>
        </React.Fragment>
    )
}

export default Footer;
