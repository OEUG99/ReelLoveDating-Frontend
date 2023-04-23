import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { userId } = useParams();
    const [profileData, setProfileData] = useState({});
    const [favoriteActor, setFavoriteActor] = useState(null);
    const [favoriteDirector, setFavoriteDirector] = useState(null);
    const [favoriteMovie, setFavoriteMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId) {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'GET',
                },
            };

            fetch(`http://localhost:8000/api/profile/${userId}`, requestOptions)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Network response was not ok.');
                    }
                })
                .then((data) => {
                    console.log(data);
                    setProfileData(data);
                    if (data.favoriteActor) {
                        fetch(`http://localhost:8000/api/actor/${data.favoriteActor}`, requestOptions)
                            .then((response) => {
                                if (response.ok) {
                                    return response.json();
                                } else {
                                    throw new Error('Network response was not ok.');
                                }
                            })
                            .then((actorData) => {
                                setFavoriteActor(actorData);
                            })
                            .catch((error) => {
                                console.error('There was a problem with the fetch operation:', error);
                            });
                    }
                    if (data.favoriteDirector) {
                        fetch(`http://localhost:8000/api/director/${data.favoriteDirector}`, requestOptions)
                            .then((response) => {
                                if (response.ok) {
                                    return response.json();
                                } else {
                                    throw new Error('Network response was not ok.');
                                }
                            })
                            .then((directorData) => {
                                setFavoriteDirector(directorData);
                            })
                            .catch((error) => {
                                console.error('There was a problem with the fetch operation:', error);
                            });
                    }
                    if (data.favoriteMovies) {
                        fetch(`http://localhost:8000/api/movie/${data.favoriteMovies}`, requestOptions)
                            .then((response) => {
                                if (response.ok) {
                                    return response.json();
                                } else {
                                    throw new Error('Network response was not ok.');
                                }
                            })
                            .then((movieData) => {
                                setFavoriteMovie(movieData);
                            })
                            .catch((error) => {
                                console.error('There was a problem with the fetch operation:', error);
                            });
                    }
                })
                .catch((error) => {
                    console.error('There was a problem with the fetch operation:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [userId]);

    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
    } else {
        return (
            <div>
                <h1>User Profile</h1>
                {Object.keys(profileData).length > 0 && profileData.firstName && profileData.lastName ? (
                    <>
                        <p>Profile ID: {userId}</p>
                        <p>Name: {profileData.firstName} {profileData.lastName}</p>
                        {/* Display other profile data */}
                        {favoriteActor && favoriteActor.firstName && favoriteActor.lastName && <p>Favorite Actor: {favoriteActor.firstName} {favoriteActor.lastName}</p>}
                        {favoriteDirector && favoriteDirector.firstName && favoriteDirector.lastName && <p>Favorite Director: {favoriteDirector.firstName} {favoriteDirector.lastName}</p>}
                        {favoriteMovie && favoriteMovie.name && <p>Favorite Movie: {favoriteMovie.name}</p>}
                    </>
                ) : (
                    <p>Empty</p>
                )}
            </div>
        );
    }
};

export default UserProfile;