import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import './Footer.css';
import hltlogo from '../../assets/hltlogo.png'

class Footer extends Component{
    render(){
        return(
            <Container text id="footer-wrapper" className="animated fadeIn slow delay-5s">
                <img src={hltlogo} alt="halilit logo" height="50px" width="auto" className="halilit-logo"/>
            </Container>
        )
    }
}

export default Footer;
