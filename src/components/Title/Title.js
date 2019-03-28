import React, {Component} from 'react';
import {Image, Container} from 'semantic-ui-react';
import './Title.css';

class Title extends Component{
    render(){
        return (
            <Container text>
                <Image src="./assets/logo.png" alt="ADAM Audio Logo" id="logo" 
                className="animated fadeInDown slow"/>
            </Container>
        )
    }
}

export default Title;