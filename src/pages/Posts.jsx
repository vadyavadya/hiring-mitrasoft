import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/postsSlice";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "../components/Loader";

import { PostList } from "../components/PostList";
import { useSearchParams } from "react-router-dom";
import { PostsSearch } from "../components/PostsSearch";
import { Select } from "../components/Select";
import { usePosts } from "../components/hooks/usePosts";


export const Posts = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const [sort, setSort] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search') || '';

    let postShow = usePosts(posts.posts, search, sort)

    useEffect(() => {
        if (posts.posts.length === 0) dispatch(getPosts());
        // eslint-disable-next-line
    }, [])

    return (
        <Container fluid='xl' >

            <PostsSearch searchParams={search} setSearchParams={setSearchParams} />

            <Row className="mb-3">
                <Col xs="auto">
                    <Select
                        value={sort}
                        setValue={setSort}
                        defaultOption='По алфавиту'
                        options={[
                            { value: '1', body: 'от A до z' },
                            { value: '2', body: 'от Z до a' }
                        ]}
                    />
                </Col>
            </Row>

            {posts.error && <h2>{posts.error}</h2>}

            {
                posts.status === 'loading' &&
                <div className="text-center mb-3">
                    <Loader />
                </div>
            }

            {
                postShow.length === 0 &&
                posts.status !== 'loading' &&
                <h2>Посты не найдены</h2>
            }

            <PostList posts={postShow} />

        </Container>
    )
}
