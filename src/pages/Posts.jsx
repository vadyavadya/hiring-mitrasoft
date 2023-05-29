import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/postsSlice";
import { Container } from "react-bootstrap";
import Loader from "../components/Loader";

import { PostList } from "../components/PostList";





export const Posts = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (posts.posts.length === 0) dispatch(getPosts());
        // eslint-disable-next-line
    }, [])

    return (
        <Container fluid='xl' >

            {posts.error && <h2>{posts.error}</h2>}

            {posts.status === 'loading' &&
                <div className="text-center mb-3">
                    <Loader />
                </div>
            }

            <PostList posts={posts.posts} />

        </Container>
    )
}
