import React from 'react'
import {Row, Col} from "react-bootstrap"
export default function DataCount({person}) {
    return (
        <Row className="justify-content-center">
            <Col className="" sm="8">
                <div className="rectangle p-3">
                {
                    person.length?
                    person.map(per => {
                        return (
                        <div key={per.id} className="d-flex border-bottom mx-2 my-2">
                            <img className="img-avatar" src={per.img} alt="avatar"/>
                            <div className="px-3">
                            <p className="d-inline fs-5">{per.name}</p>
                            <p className="fs-6">{per.date}</p>
                            </div>
                        </div>
                        )
                    })
                    :<h3 className="p-5 text-center">لا يوجد مواعيد اليوم</h3>
                }
                </div>
            </Col>
        </Row>
    )
}
