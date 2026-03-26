import { useState, useEffect } from 'react';

export function useFavorites() {
    const [favorites, setFavorites] = useState(() => {
        try {
            const savedFavorites = localStorage.getItem('blog_favorites');
            if (savedFavorites) {
                return JSON.parse(savedFavorites);
            }
        } catch (e) {
            console.error("Failed to parse favorites from local storage", e);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('blog_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (post) => {
        setFavorites((prev) => {
            if (prev.find(p => p.id === post.id)) return prev;
            return [...prev, post];
        });
    };

    const removeFavorite = (postId) => {
        setFavorites((prev) => prev.filter(p => p.id !== postId));
    };

    const isFavorite = (postId) => {
        return favorites.some(p => p.id === postId);
    };

    const toggleFavorite = (post) => {
        if (isFavorite(post.id)) {
            removeFavorite(post.id);
        } else {
            addFavorite(post);
        }
    };

    return { favorites, isFavorite, toggleFavorite };
}
