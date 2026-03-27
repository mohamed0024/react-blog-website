import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { getTrending, getFeatured, getRecent } from "../data/posts";
import "./HomePage.css";

function HomePage() {
    const navigate = useNavigate();
    const allTrending = getTrending();
    const featuredPost = getFeatured() || allTrending[0];
    const trendingPosts = allTrending.filter(p => p.id !== featuredPost?.id).slice(0, 3);

    // Pick posts for hero floating cards
    const heroCards = allTrending.slice(0, 4);

    // Recent posts with pagination
    const allRecent = getRecent();
    const recentPerPage = 3;
    const [recentPage, setRecentPage] = useState(0);
    const totalRecentPages = Math.ceil(allRecent.length / recentPerPage);
    const visibleRecent = allRecent.slice(
        recentPage * recentPerPage,
        recentPage * recentPerPage + recentPerPage
    );

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-arc"></div>
                <div className="hero-content">
                    <h1 className="hero-heading">
                        Stay <em>Tuned</em> &amp; <em>check</em> all
                        <br />
                        <span className="hero-highlight">Trending News</span>
                    </h1>
                    <p className="hero-subtitle">
                        Stay on top of the latest stories worldwide with
                        <br />
                        News up
                    </p>
                </div>

                {/* Floating cards */}
                <div className="hero-floating-cards">
                    {heroCards[0] && (
                        <div className="hero-float-card hero-float-left-1">
                            <img src={heroCards[0].image} alt={heroCards[0].title} />
                            <span className="hero-float-date">{heroCards[0].date}</span>
                        </div>
                    )}
                    {heroCards[1] && (
                        <div className="hero-float-card hero-float-left-2">
                            <img src={heroCards[1].image} alt={heroCards[1].title} />
                            <span className="hero-float-date">{heroCards[1].date}</span>
                        </div>
                    )}
                    {heroCards[2] && (
                        <div className="hero-float-card hero-float-right-1">
                            <img src={heroCards[2].image} alt={heroCards[2].title} />
                            <span className="hero-float-date">{heroCards[2].date}</span>
                        </div>
                    )}
                    {heroCards[3] && (
                        <div className="hero-float-card hero-float-right-2">
                            <img src={heroCards[3].image} alt={heroCards[3].title} />
                            <span className="hero-float-date">{heroCards[3].date}</span>
                        </div>
                    )}
                </div>

                {/* Scroll indicator */}
                <div className="hero-scroll-indicator">
                    <span>( Scroll for more )</span>
                    <div className="hero-scroll-arrow">↓</div>
                </div>
            </section>

            <div id="home-section" className="home-section">
                {/* TITLE */}
                <div className="home-title-container">
                    <h1 className="home-title">Trending News</h1>
                </div>

                {/* Featured news */}
                {featuredPost && (
                    <div className="featured-news-container">
                        <Link to={`/posts/${featuredPost.id}`} className="featured-card">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="featured-img"
                            />

                            <div className="featured-content">
                                <span className="featured-date">{featuredPost.date}</span>
                                <h2 className="featured-title">{featuredPost.title}</h2>
                                <p className="featured-preview">{featuredPost.preview}</p>
                                <div className="read-article-btn">
                                    → Read Article
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Trending grid */}
                <div className="trending-grid">
                    {trendingPosts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

                {/* Read More Button */}
                <div className="read-more-container">
                    <button
                        className="read-more-btn"
                        onClick={() => navigate("/posts")}
                    >
                        Read More →
                    </button>
                </div>
            </div>

            {/* RECENT POSTS SECTION */}
            <section className="recent-section">
                <h2 className="recent-title">Recent Posts</h2>
                <div className="recent-grid">
                    {visibleRecent.map(post => (
                        <Link
                            to={`/posts/${post.id}`}
                            key={post.id}
                            className="recent-card"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="recent-card-bg"
                            />
                            <div className="recent-card-overlay"></div>
                            <div className="recent-card-content">
                                <h3 className="recent-card-title">{post.title}</h3>
                                <div className="recent-card-footer">
                                    <div className="recent-card-meta">
                                        <div className="recent-source-icon">
                                            {post.source.charAt(0)}
                                        </div>
                                        <span className="recent-card-date">{post.date}</span>
                                    </div>
                                    <div className="recent-card-arrow">→</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {totalRecentPages > 1 && (
                    <div className="recent-pagination">
                        <button
                            className="recent-page-btn"
                            onClick={() => setRecentPage(p => Math.max(0, p - 1))}
                            disabled={recentPage === 0}
                        >
                            &lt;
                        </button>
                        <button
                            className="recent-page-btn"
                            onClick={() => setRecentPage(p => Math.min(totalRecentPages - 1, p + 1))}
                            disabled={recentPage === totalRecentPages - 1}
                        >
                            &gt;
                        </button>
                    </div>
                )}
            </section>

            <Footer />
        </>
    );
}

export default HomePage;