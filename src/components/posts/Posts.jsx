import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/postsSlice";
import { Link } from "react-router-dom";
import { Card, Container, Image, Stack } from "react-bootstrap";
import Loader from "../Loader";
import cls from './posts.module.css'
import { Comments } from "../Comments";

import imgAvatar from "../../imgs/avatar.jpg"



export const Posts = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container fluid='xl' >

            {posts.error && <h2>{posts.error}</h2>}

            <Stack gap={5}>
                {posts.status === 'loading' &&
                    <Stack className="align-items-center">
                        <Loader />
                    </Stack>
                }
                {posts.posts.map((post, index) => {
                    return (
                        <Card key={post.id}>
                            <Card.Header >
                                <Link to={`/user/${post.userId}`}>
                                    <div className={cls.avatar}>
                                        <Image className={cls.avatarImage} src={imgAvatar} alt="" />
                                    </div>
                                </Link>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    {post.body}
                                </Card.Text>

                                <Comments post={post} index={index} />
                            </Card.Body>
                        </Card>
                    );
                })}
            </Stack>
        </Container>
    )
}
