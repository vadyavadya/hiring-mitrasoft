import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Button, Card, Container, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/postsSlice";
import { UserCard } from "../components/UserCard";
import { PostList } from "../components/PostList";

export const UserInfo = () => {
    const params = useParams();
    const [userInf, setUserInf] = useState({ isLoading: true, error: null })
    const navigate = useNavigate();

    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    async function getUSer(id) {
        try {
            setUserInf({ isLoading: true });
            await new Promise((resolve, reject) => setTimeout(resolve, 1000));
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

    let userPosts = posts.posts.filter((post) => post.userId === +params.id);

    return (
        <Container>
            <div className="mb-5 text-end">
                <Button variant="secondary" onClick={() => navigate(-1)}>Назад</Button>
            </div>

            {
                userInf.isLoading &&
                <Loader />
            }
            {
                userInf.error &&
                userInf.error
            }
            {
                userInf?.name &&
                <Stack gap={3}>
                    <UserCard
                        name={userInf.name}
                        username={userInf.username}
                        email={userInf.email}
                        city={userInf.address.city}
                        street={userInf.address.street}
                        suite={userInf.address.suite}
                        zipcode={userInf.address.zipcode}
                        phone={userInf.phone}
                    />

                    <Card>
                        <Card.Body>
                            <Card.Title>Посты пользователя</Card.Title>

                            <PostList posts={userPosts} />

                        </Card.Body>
                    </Card>
                </Stack>
            }

        </Container >
    )
}
