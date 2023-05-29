import React from "react";
import { Stack } from "react-bootstrap";

import { PostItem } from "./postItem/PostItem";

export const PostList = ({ posts }) => {
    return (
        <Stack gap="5">
            {
                posts.map((post, index) => {
                    return (
                        <PostItem key={post.id} post={post} indexPost={index} />
                    );
                })
            }
        </Stack>
    )
}
