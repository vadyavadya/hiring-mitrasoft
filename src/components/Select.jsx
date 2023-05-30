import React from "react";
import { Form } from "react-bootstrap";

export const Select = ({ value, setValue, defaultOption, options }) => {
    return (
        <Form.Select
            value={value}
            onChange={e => setValue(e.target.value)}>
            <option disabled value=''>{defaultOption}</option>
            {
                options.map((option) =>
                    <option key={option.value} value={option.value}>{option.body}</option>
                )
            }
        </Form.Select>
    )
}
