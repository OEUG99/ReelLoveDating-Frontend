import React, { useState, useEffect } from "react";

function Main() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const jwtToken = localStorage.getItem("jwtToken");
        setToken(jwtToken);
    }, []);

    return (
        <div>
            <h2>JWT Token:</h2>
            <pre>{token}</pre>
        </div>
    );
}

export default Main;
