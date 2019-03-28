import React, {Component} from 'react';
import { Button, Container } from 'semantic-ui-react';

class Action extends Component{
    state = { actionLink: "https://www.halilit.com/g/5193-Brand/207910-ADAM-Audio"}
    handleActionClick = () => {
        window.location.href = this.state.actionLink;
    }
    render(){
        return(
            <Container text className="animated fadeIn delay-4s">
                <Button 
                negative 
                fluid 
                content="לקטלוג המוצרים באתר" 
                style={{direction: "rtl"}}
                size="huge"
                onClick={() => {this.handleActionClick()}}
                />
            </Container>
        )
    }
}

export default Action;