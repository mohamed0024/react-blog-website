import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPostById } from '../data/posts'
import { useFavorites } from '../hooks/useFavorites'
import Footer from '../components/Footer'
import './postDetailsPage.css'

export default function PostDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = getPostById(id);
    const { isFavorite, toggleFavorite } = useFavorites();

    if (!post) {
        return (
            <div className="post-details-page">
                <div className="post-details-container">
                    <h1>Post not found</h1>
                    <button onClick={() => navigate('/posts')}>Go back to Posts</button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="post-details-page">
            <div className="post-details-container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    &lt;
                </button>

                <article className="post-content-wrapper">
                    <div className="post-header-meta">
                        <div className="source-and-date">
                            <span className="source-icon">{post.source.charAt(0)}</span>
                            <span className="post-date">{post.date}</span>
                        </div>
                        <button
                            className="save-btn"
                            aria-label={isFavorite(post.id) ? "Remove from favorites" : "Save post"}
                            onClick={() => toggleFavorite(post)}
                            style={{ color: isFavorite(post.id) ? 'var(--primary)' : 'var(--dark)' }}
                        >
                            {isFavorite(post.id) ? '\u2665' : '\u2661'}
                        </button>
                    </div>

                    <h1 className="post-title">{post.title}</h1>
                    <img src={post.image} alt={post.title} className="post-hero-img" />

                    <div className="post-body">
                        {post.content.split('\n\n').map((paragraph, index) => {
                            const words = paragraph.split(' ');
                            const heading = words.slice(0, 3).join(' ');
                            return (
                                <div key={index} className="post-paragraph-block">
                                    {/* Only add heading for the first few paragraphs to match the mock */}
                                    {index < 2 && <h3 className="paragraph-heading">{heading}</h3>}
                                    <p>{paragraph}</p>
                                </div>
                            )
                        })}
                    </div>
                </article>
            </div>
            <Footer />
        </div>
    )
}
