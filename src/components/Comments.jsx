import React from "react";
import { Accordion, Button, Card, useAccordionButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Loader from "./Loader";
import { getCommentsId } from "../store/postsSlice";

export const Comments = ({ post, index }) => {
    const dispatch = useDispatch();

    const toggleShowComment = (id, index, comment) => {
        if (!comment) dispatch(getCommentsId({ id, index }));
    };

    function CustomToggle({ children, eventKey, post, indexPost }) {
        const decoratedOnClick = useAccordionButton(eventKey, () => {
            toggleShowComment(post.id, indexPost, post.comment.comments.length !== 0);
        }
        );

        return (
            <Button
                type="button"
                className='mb-1'
                onClick={() => decoratedOnClick()}
            >
                {children}
            </Button>
        );
    }

    return (
        <Accordion >
            <CustomToggle eventKey="0" post={post} indexPost={index}>Go comments</CustomToggle>
            <Accordion.Collapse eventKey="0">
                <Card>
                    <Card.Body><h6>Comments:</h6></Card.Body>
                    {
                        post.comment.status === 'loading' &&
                        <Card.Body>
                            <Loader />
                        </Card.Body>
                    }

                    {
                        post.comment.status === 'succeeded' &&
                        post.comment.comments.map((comment) => {
                            return (
                                <Card.Body key={comment.id}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{comment.email}</Card.Title>
                                            <Card.Text>{comment.body}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            )
                        })
                    }
                    {
                        post.comment.status === 'error' &&
                        <Card.Body>
                            {post.comment.comments}
                        </Card.Body>
                    }
                </Card>
            </Accordion.Collapse>
        </Accordion>
    )
}

