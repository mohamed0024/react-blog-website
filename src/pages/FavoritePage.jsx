import React, { useState } from "react";
import { Link } from "react-router-dom";
import favoritesData from "../data/favorites";
import Footer from "../components/Footer";
import emptyBg from "../assets/empty_fav_background.png";
import "./FavoritePage.css";

const FavoritePage = () => {
    s
    const [favorites, setFavorites] = useState(favoritesData);

    return (
        <div className="favorites-page-wrapper">
            <main className="favorites-container">
                <section className="favorites-header">
                    <h1>Your Favorites</h1>
                    <p>Explore and manage your saved stories anytime.</p>
                </section>

                {favorites.length > 0 ? (
                    <div className="favorites-grid">
                        {favorites.map((item) => (
                            <article key={item.id} className="favorite-card">
                                <div className="card-img-container">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="card-body">
                                    <span className="card-date">{item.date}</span>
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-desc">{item.preview || item.description}</p>
                                    <Link to={`/posts/${item.id}`} className="card-link">→ Read Article</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="empty-state-wrapper">
                        <img
                            src={emptyBg}
                            alt="No favorites"
                            className="empty-img"
                        />
                        <div className="empty-msg">
                            <h2>No Favorites Yet</h2>
                            <p>You haven't saved any stories. Start exploring to add some!</p>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default FavoritePage;