import React, { useEffect, useState } from 'react';
import infoArr from "../../infoArr";
import { useNavigate, Link } from 'react-router-dom';
import './Booklist.css';
import Footer from '../Footer/Footer';
import Typewriter from "typewriter-effect";

const Booklist = () => {
    const [favorites, setFavorites] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredBooks = infoArr.filter(info =>
        info.bookName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const navigateToBook = (info) => {
        navigate(info.id, { state: { id: info.id } });
    };

    const toggleFavorite = (info) => {
        if (favorites.some(fav => fav.id === info.id)) {
            setFavorites(favorites.filter(fav => fav.id !== info.id));
        } else {
            setFavorites([...favorites, info]);
        }
    };

    return (
        <div className="booklist-container">
            <div className="header">
                <div className="searchDiv">
                    <input
                        type="text"
                        placeholder="Search Books"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="booklist-input"
                    />
                </div>
                <div className="favorites-link">
                    <Link to="/favorites">My Favorite Books</Link>
                </div>
            </div>
            <div className="typewriter-container">
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        strings: ["welcome to our library!"],
                    }}
                />
            </div>

            <div className='wraper'>
                {
                    filteredBooks.map((info, index) => (
                        <div key={index} className="book-item" onClick={() => navigateToBook(info)}>
                            <img src={info.imageUrl} alt={info.bookName} />
                            <h1>{info.bookName}</h1>
                            <button onClick={(e) => { e.stopPropagation(); toggleFavorite(info); }}>
                                {favorites.some(fav => fav.id === info.id) ? '❤️' : '🤍'}
                            </button>
                        </div>
                    ))
                }
            </div>

            <Footer searchTerm={searchTerm} />
        </div>
    );
};

export default Booklist;
