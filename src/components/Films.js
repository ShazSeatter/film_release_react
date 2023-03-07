import React from "react";

function Films({name, url}) {
    return (
        <>
        <ul>
            <li><a href={url} target="_blank">{name}</a></li>
        </ul>

        </>
    );
}

export default Films;