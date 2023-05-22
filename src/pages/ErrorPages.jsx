import React from "react";
import { Link } from "react-router-dom";

export function ErrorPages() {

    return (
        <div>
            <h1 style={{ color: 'red', textAlign: 'center' }}>
                Вы пришли на не существующую страницу
            </h1>
            <p style={{ textAlign: 'center' }}>
                Вернуться <Link to='/'>Просты </Link>
            </p>
        </div>
    )
}
