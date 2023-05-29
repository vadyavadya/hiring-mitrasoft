import React from "react";

import { Card, Image } from "react-bootstrap";

import { Comments } from "../Comments";
import cls from './post-item.module.css'

import imgAvatar from "../../imgs/avatar.jpg"
import { Link } from "react-router-dom";

export const PostItem = ({ post }) => {
    return (
        <Card>
            <Card.Header >
                <Link to={`/user/${post.userId}`}>
                    <div className={cls.avatar}>
                        <Image className={cls.avatarImage} src={imgAvatar} alt="" />
                    </div>
                </Link>
            </Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Comments comment={post.comment} postId={post.id} />
            </Card.Body>
        </Card>
    )
}
