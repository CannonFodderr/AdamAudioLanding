import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <Container text id="footer-wrapper" className="animated fadeIn slow delay-5s">
                <img src="./assets/hltlogo.png" alt="halilit logo" height="50px" width="auto" className="halilit-logo"/>
            </Container>
        )
    }
}

export default Footer;
