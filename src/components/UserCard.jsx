import React from "react";
import { ListGroup } from "react-bootstrap";

export const UserCard = ({userInf}) => {
    return (
        <div>
            <h2>{userInf.name}</h2>
            <ListGroup className="mb-3">
                <ListGroup.Item> <strong>Имя пользователя:</strong> {userInf.username}</ListGroup.Item>
                <ListGroup.Item> <strong>Почта:</strong> {userInf.email}</ListGroup.Item>
                <ListGroup.Item> <strong>Адрес:</strong> {userInf.address.city}, {userInf.address.street}, {userInf.address.suite}, {userInf.address.zipcode}</ListGroup.Item>
                <ListGroup.Item> <strong>Телефон:</strong> {userInf.phone}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}
