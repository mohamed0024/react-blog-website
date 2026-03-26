import React from "react";
import { useFavorites } from "../hooks/useFavorites";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import emptyBg from "../assets/empty_fav_background.png";
import "./FavPage.css";

const FavPage = () => {
    const { favorites } = useFavorites();

    return (
        <div className="fav-page-wrapper">
            <main className="fav-container">
                <section className="fav-header">
                    <h1>Your Favorites</h1>
                    <p>Explore and review your saved stories anytime</p>
                </section>

                {favorites.length > 0 ? (
                    <div className="fav-grid">
                        {favorites.map((item) => (
                            <PostCard key={item.id} post={item} />
                        ))}
                    </div>
                ) : (
                    <div className="fav-empty-state">
                        <img
                            src={emptyBg}
                            alt="No favorites"
                            className="fav-empty-img"
                        />
                        <div className="fav-empty-msg">
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

export default FavPage;
