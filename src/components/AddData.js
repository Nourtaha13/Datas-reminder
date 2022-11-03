import React,{useRef} from 'react'
import {Row, Col} from "react-bootstrap"
export default function DataCount({onAdd}) {
    const name = useRef("")
    const time = useRef("")
    const addHandler = _=>{
        onAdd(name.current.value.trim(), time.current.value.trim())
    }
    return (
        <Row className="justify-content-center my-2">
            <Col className="d-flex justify-content-between" sm="8">
                <input ref={name} className="input-style" placeholder='الاسم'/>
                <input ref={time} className="input-style" placeholder='الوقت'/>
                <button onClick={addHandler} className="btn-style">اضافة</button>
            </Col>
        </Row>
    )
}
