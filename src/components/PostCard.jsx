import './PostCard.css'
import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
    if (!post) return null

    return (
        <div className="post-card">
            <div className="post-card-img-wrapper">
                <img src={post.image} alt={post.title} className="post-card-img" />
            </div>
            <div className="post-card-body">
                <span className="post-card-date">{post.date}</span>
                <h3 className="post-card-title">{post.title}</h3>
                <p className="post-card-preview">{post.preview}</p>
                <div className="post-card-footer">
                    <Link to={`/posts/${post.id}`} className="read-article">
                        <span className="arrow">&#8594;</span> Read Article
                    </Link>
                    <div className="source-icon">
                        {post.source.charAt(0)}
                    </div>
                </div>
            </div>
        </div>
    )
}
