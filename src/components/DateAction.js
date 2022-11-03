import React from 'react'
import {Row, Col} from "react-bootstrap"
export default function DataCount({onDelete,onShow}) {
    return (
        <Row className="justify-content-center my-2">
            <Col className="d-flex justify-content-between" sm="8">
                <button onClick={onDelete} className="btn-style">مسح الكل</button>
                <button onClick={onShow} className="btn-style">عرض الكل</button>
            </Col>
        </Row>
    )
}
