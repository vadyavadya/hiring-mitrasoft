import  { useMemo } from "react";

export const useQueryPost = (posts, query) => {
    let postFilter = useMemo(() => {
        return posts.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    }, [posts, query])


    return postFilter
}

export const usePosts = (posts, query, sort) => {
    const searchPost = useQueryPost(posts, query);

    const searchAndSortPosts = useMemo(() => {
        return [...searchPost].sort((a, b) =>
            sort === '1' ?
                a.title.localeCompare(b.title) :
                sort === '2' ?
                    b.title.localeCompare(a.title) :
                    0
        )
    }, [searchPost, sort])

    return searchAndSortPosts
}
