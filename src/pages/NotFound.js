import React from "react";

import NotFoundImg from "../images/img404.webp";
import "./styles/NotFound.css";

function NotFound() {
    return (
        <div className="not-found">
            <div className="container">
                <img
                    className="not-found__image"
                    src={NotFoundImg}
                    alt="404 Not Found"
                />
                <h1 className="not-found__title">404: Not Found</h1>
            </div>
        </div>
    );
}

export default NotFound;
