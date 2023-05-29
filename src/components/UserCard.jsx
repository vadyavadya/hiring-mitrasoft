import React from "react";
import { ListGroup } from "react-bootstrap";

export const UserCard = ({ name, username, email, city, street, suite, zipcode, phone }) => {
    return (
        <div>
            <h2>{name}</h2>
            <ListGroup className="mb-3">
                <ListGroup.Item> <strong>Имя пользователя:</strong> {username}</ListGroup.Item>
                <ListGroup.Item> <strong>Почта:</strong> {email}</ListGroup.Item>
                <ListGroup.Item> <strong>Адрес:</strong> {city}, {street}, {suite}, {zipcode}</ListGroup.Item>
                <ListGroup.Item> <strong>Телефон:</strong> {phone}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}
