import React from "react";
import { Card } from "react-bootstrap";

export const CommentsItem = ({ email, body }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{email}</Card.Title>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    )
}
