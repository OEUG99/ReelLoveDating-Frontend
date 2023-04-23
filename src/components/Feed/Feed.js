import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

function Feed() {
    const navigate = useNavigate()
    const [user_id, setUserId] = useState("");
    const [loading, setLoading] = useState(!user_id);

    useEffect(() => {
        const jwtToken = localStorage.getItem("jwtToken");

        if (jwtToken === null) {
            navigate("/login")
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST',
            },
            body: JSON.stringify({
                "token": jwtToken,
            })
        }

        setLoading(true);
        fetch("http://localhost:8000/api/auth/validate", requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Network response was not ok.");
                }
            })
            .then(data => {
                setUserId(data.user_id);
                localStorage.setItem("user_id", data.user_id);
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            }).finally(() => {
            setLoading(false);
        });

    }, [navigate]);



    if (loading) {
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        );
    } else {
        return (
            <div>
                <h2>User ID:</h2>
                <pre>{user_id}</pre>
            </div>
        );
    }


}

export default Feed;
