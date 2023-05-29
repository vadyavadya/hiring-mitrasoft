import React from "react";
import { Accordion, Card, } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Loader from "./Loader";
import { getCommentsId } from "../store/postsSlice";
import { CommentsList } from "./CommentsList";
import { CommentsButton } from "./CommentsButton";

export const Comments = ({ comment, postId }) => {

    const dispatch = useDispatch();

    function getComments() {
        if (comment.comments.length === 0) dispatch(getCommentsId({ id: postId }));
    }

    return (
        <Accordion >
            <CommentsButton eventKey="0" callback={getComments}>Go comments</CommentsButton>
            <Accordion.Collapse eventKey="0">
                <Card>
                    <Card.Body>
                        <Card.Title>Comments:</Card.Title>

                        {
                            comment.status === 'loading' &&
                            <Loader />
                        }

                        {
                            comment.status === 'error' &&
                            comment.comments
                        }

                        {
                            comment.status === 'succeeded' &&
                            <CommentsList comments={comment.comments} />
                        }
                    </Card.Body>
                </Card>
            </Accordion.Collapse>
        </Accordion>
    )
}

