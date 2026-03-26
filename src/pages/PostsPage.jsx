import React, { useState } from 'react'
import './PostsPage.css'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import posts from '../data/posts'

export default function PostsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const currentPosts = posts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="posts-page">
            <div className="posts-page-content">
                <h1 className="page-title">All News</h1>
                <div className="posts-grid">
                    {currentPosts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="pagination">
                        <button onClick={handlePrev} disabled={currentPage === 1}>&lt;</button>
                        <button onClick={handleNext} disabled={currentPage === totalPages}>&gt;</button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}
