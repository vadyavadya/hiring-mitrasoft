import React from "react";
import { Accordion, Button, Card, Stack, useAccordionButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Loader from "./Loader";
import { getCommentsId } from "../store/postsSlice";

export const Comments = ({ post }) => {
    const dispatch = useDispatch();

    function CustomToggle({ children, eventKey, post }) {
        const decoratedOnClick = useAccordionButton(eventKey, () => {
            if (post.comment.comments.length === 0) dispatch(getCommentsId({ id: post.id }));
        }
        );

        return (
            <Button
                type="button"
                className='mb-3'
                onClick={() => decoratedOnClick()}
            >
                {children}
            </Button>
        );
    }

    return (
        <Accordion >
            <CustomToggle eventKey="0" post={post}>Go comments</CustomToggle>
            <Accordion.Collapse eventKey="0">
                <Card>
                    <Card.Body>
                        <Card.Title>Comments:</Card.Title>

                        {
                            post.comment.status === 'loading' &&
                            <Loader />
                        }


                        {
                            post.comment.status === 'succeeded' &&
                            <Stack gap={2}>
                                {
                                    post.comment.comments.map((comment) => {
                                        return (

                                            <Card key={comment.id}>
                                                <Card.Body>
                                                    <Card.Title>{comment.email}</Card.Title>
                                                    <Card.Text>{comment.body}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }
                            </Stack>
                        }


                        {
                            post.comment.status === 'error' &&
                            post.comment.comments
                        }

                    </Card.Body>
                </Card>
            </Accordion.Collapse>
        </Accordion>
    )
}

