import React, { useContext } from "react";
import { AccordionContext, Button, useAccordionButton } from "react-bootstrap";

export function CommentsButton({ children, eventKey, callback }) {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback());

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Button
            type="button"
            className='mb-3'
            variant={isCurrentEventKey ? "danger" : "primary"}
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}