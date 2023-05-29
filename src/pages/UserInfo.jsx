import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Button, Card, Container, ListGroup, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/postsSlice";

export const UserInfo = () => {
    const params = useParams();
    const [userInf, setUserInf] = useState({ isLoading: true, error: null })
    const navigate = useNavigate();

    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    async function getUSer(id) {
        try {
            setUserInf({ isLoading: true });
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            let data = await response.data;
            setUserInf({
                ...data,
                isLoading: false
            });
        } catch (error) {
            setUserInf({
                isLoading: false,
                error: error.message,
            });
        }
    }

    useEffect(() => {
        getUSer(params.id);
        if (posts.posts.length === 0) dispatch(getPosts());
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <Button variant="secondary" onClick={() => navigate(-1)}>Назад</Button>
            {
                userInf.isLoading &&
                <Loader />
            }
            {
                userInf?.name &&
                <div>
                    <h2>{userInf.name}</h2>
                    <ListGroup className="mb-3">
                        <ListGroup.Item> <strong>Имя пользователя:</strong> {userInf.username}</ListGroup.Item>
                        <ListGroup.Item> <strong>Почта:</strong> {userInf.email}</ListGroup.Item>
                        <ListGroup.Item> <strong>Адрес:</strong> {userInf.address.city}, {userInf.address.street}, {userInf.address.suite}, {userInf.address.zipcode}</ListGroup.Item>
                        <ListGroup.Item> <strong>Телефон:</strong> {userInf.phone}</ListGroup.Item>
                    </ListGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Посты пользователя</Card.Title>

                            <Stack gap={2}>
                                {
                                    posts.posts.filter((post) => post.userId === +params.id).map((post) => {
                                        return (
                                            <Card key={post.id}>
                                                <Card.Body>
                                                    <Card.Title>{post.title}</Card.Title>
                                                    <Card.Text>{post.body}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }
                            </Stack>

                        </Card.Body>
                    </Card>
                </div>
            }
            {
                userInf.error &&
                userInf.error
            }
        </Container >
    )
}
