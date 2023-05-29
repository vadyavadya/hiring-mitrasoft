import React from "react";
import { Stack } from "react-bootstrap";
import { CommentsItem } from "./CommentsItem";

export const CommentsList = ({ comments }) => {
    return (
        <Stack gap={2}>
            {
                comments.map((comment) => {
                    return (
                        <CommentsItem key={comment.id} email={comment.email} body={comment.body} />
                    )
                })
            }
        </Stack>
    )
}
