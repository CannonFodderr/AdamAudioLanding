import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import './Content.css';

class Content extends Component{
    render(){
        return(
            <Container text style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}} id="content-container" className="animated fadeIn delay-2s">
            <Header as='h2' className="title top animated fadeIn delay-2s" inverted size="huge">חדש בחלילית!</Header>
                <p style={{direction: 'rtl', margin: "1vh 1vw"}} className="animated fadeIn delay-2s">
                חברת Adam Audio ידועה במוניטורים מקצועיים המוצעים במגוון גדלים וטווחי-מחיר.

ה-A77X הוא מוניטור two 1/2 way בעיצוב אופקי המשלב בתוכו את כל החידושים הטכניים של סדרת ה-AX. היכולת שלו לשדר עוצמה מוזיקלית

ללא compression תוך שמירה על דינמיות וצלילות הופכת אותו למתאים כמוניטור nearfield וכ-midfield ביעילות רבה.

העיצוב המיוחד של ה-A77X בא לידי ביטוי רב בשימוש בשני וופרים בקוטר "7. שני הוופרים מתחילים לשדר בתדר נמוך של 38Hz באופן צלול ומוזיקלי.
                </p>
            </Container>
        )
    }
}

export default Content;