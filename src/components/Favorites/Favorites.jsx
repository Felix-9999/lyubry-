import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './favorites.css'; // Make sure to uncomment or create this if needed
const Favorites = () => {


    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    const navigateToBook = (info) => {
        navigate(`/book/${info.id}`, { state: { id: info.id } });
    };

    const removeFavorite = (info) => {
        const newFavorites = favorites.filter(fav => fav.id !== info.id);
        setFavorites(newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    };



    return (
        <div div className="favorite-books-container" >
            <h1 className="favorite-books-title">My Favorite Books</h1>
            <Link>
                <div className="book-wrapper">
                    {favorites.map((info, index) => (
                        <div key={index} className="book-card">
                            <div onClick={() => navigateToBook(info)}>
                                <img src={info.imageUrl} alt={info.bookName} />
                            </div>
                            <button className="remove-btn" onClick={(e) => { e.stopPropagation(); removeFavorite(info); }}>
                                Remove Favorite
                            </button>
                        </div>
                    ))}
                </div>
            </Link>

        </div >

    );
};

export default Favorites;
