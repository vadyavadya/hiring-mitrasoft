import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/postsSlice";
import { Container, Stack } from "react-bootstrap";
import Loader from "../components/Loader";

import { PostList } from "../components/PostList";
import { useSearchParams } from "react-router-dom";
import { PostsSearch } from "../components/PostsSearch";
import { Select } from "../components/Select";
import { usePosts } from "../components/hooks/usePosts";
import { countPages } from "../components/utils/pages";
import { PostPagination } from "../components/PostPagination";


export const Posts = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const [paramsPage, setParamsPage] = useSearchParams();

    const [params, setParams] = useState({
        search: paramsPage.get('search') || '',
        p: +paramsPage.get('p') || 1,
        order: paramsPage.get('order') || '',
        con: paramsPage.get('con') || 10,
    });

    useEffect(() => {
        let paramsValue = {};
        if (params.search) paramsValue.search = params.search;
        if (params.p && params.p !== 1) paramsValue.p = params.p;
        if (params.order) paramsValue.order = params.order;
        if (params.con && +params.con !== 10) paramsValue.con = params.con;
        setParamsPage(paramsValue);
        // eslint-disable-next-line
    }, [params])


    const [pageCurrent, setPageCurrent] = useState(params.p);
    const [pageTotal, setPageTotal] = useState('');

    let searchAndSortPosts = usePosts(posts.posts, params.search, params.order);

    const [postShow, setPostShow] = useState([]);


    
    useEffect(() => {
        if (posts.posts.length === 0) dispatch(getPosts());
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setPostShow(searchAndSortPosts.slice((pageCurrent - 1) * params.con, pageCurrent * params.con));
        // eslint-disable-next-line
    }, [searchAndSortPosts])

    useEffect(() => {
        let numbersPage = countPages(searchAndSortPosts.length, params.con);
        setPageTotal(numbersPage);
        if (pageCurrent > numbersPage && numbersPage !== 0) {
            setPageCurrent(numbersPage);
        }
        setPostShow(searchAndSortPosts.slice((pageCurrent - 1) * params.con, pageCurrent * params.con));
        // eslint-disable-next-line
    }, [searchAndSortPosts.length, params.con])

    useEffect(() => {
        setParams({ ...params, p: +pageCurrent })
        setPostShow(searchAndSortPosts.slice((pageCurrent - 1) * params.con, pageCurrent * params.con));
        // eslint-disable-next-line
    }, [pageCurrent])



    function setSearchParams(search) {
        setParams({ ...params, search })
    }

    function setSortParams(value) {
        setParams({ ...params, order: value })
    }

    function setCountParams(value) {
        setParams({ ...params, con: +value })
    }



    return (
        <Container fluid='xl' >
            <Stack gap={3}>
                <PostsSearch searchParams={params.search} setSearchParams={setSearchParams} />

                <Select
                    value={params.order}
                    setValue={setSortParams}
                    defaultOption='Сортировать'
                    defaultOptionValue=''
                    options={[
                        { value: 1, body: 'от A до z' },
                        { value: 2, body: 'от Z до a' }
                    ]}
                    closeButton={true}
                />

                <Select
                    value={params.con}
                    setValue={setCountParams}
                    defaultOptionValue={10}
                    defaultOption='Количество постов на странице: 10'
                    options={[
                        { value: 5, body: 'Количество постов на странице: 5' },
                        { value: 25, body: 'Количество постов на странице: 25' },
                        { value: 100, body: 'Количество постов на странице: 100' },
                    ]}
                    closeButton={true}
                />

                <PostPagination clsName='justify-content-end'
                    pageTotal={pageTotal}
                    pageCurrent={pageCurrent}
                    setPageCurrent={setPageCurrent} />

                {posts.error && <h2>{posts.error}</h2>}

                {
                    posts.status === 'loading' &&
                    <Loader />
                }

                {
                    postShow.length === 0 &&
                    posts.status !== 'loading' &&
                    <h2>Посты не найдены</h2>
                }

                <PostList posts={postShow} />
            </Stack>
        </Container>
    )
}
