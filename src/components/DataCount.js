import React from 'react'
import {Row, Col} from "react-bootstrap"
export default function DataCount({person}) {
    return (
        <Row className="justify-content-center my-2">
            <Col className="" sm="8">
            لديك {person.length} مواعيد اليوم
            </Col>
        </Row>
    )
}
