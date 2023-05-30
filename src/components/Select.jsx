import React from "react";
import { CloseButton, Col, Form, Row } from "react-bootstrap";

export const Select = ({ value, setValue, defaultOption, defaultOptionValue, options, closeButton, label }) => {
    return (
        <Row xs={2}>
            <Col xs={10} sm="auto">
                {
                    label &&
                    <Form.Label>{label}</Form.Label>
                }
                <Form.Select
                    value={value}
                    onChange={e => setValue(e.target.value)}>
                    <option disabled value={defaultOptionValue}>{defaultOption}</option>
                    {
                        options.map((option) =>
                            <option key={option.value} value={option.value}>{option.body}</option>
                        )
                    }
                </Form.Select>
            </Col>
            <Col xs={2}>
                {
                    value !== defaultOptionValue &&
                    closeButton &&
                    <CloseButton onClick={() => setValue(defaultOptionValue)} />
                }
            </Col>
        </Row>
    )
}
