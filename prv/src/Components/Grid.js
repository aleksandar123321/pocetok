import React from "react"
import {Row, Col} from 'react-bootstrap'
import Card from "./Card"

class Grid extends React.Component{

    render() {
        return(
<Row>
    <Col> <Card/> </Col>
    <Col> <Card/></Col>
    <Col> <Card/> </Col>
</Row>
        )
        
    }
}

export default Grid