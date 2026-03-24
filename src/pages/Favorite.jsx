import React ,{ useState } from "react";
import favoritesData from "../data/favorites";
import "./Favorite.css";
import empty from "../images/empty.png";
const Favorites = () => {
  const [favorites, setFavorites] = useState(favoritesData);

  return (
    <main className="favorites-container">
      
      <section className="favorites-header">
        <h1>Your Favorites</h1>
        <p>Explore and manage your saved stories anytime.</p>
      </section>

    
      {favorites.length > 0 ? (
        
        /* CAS 1 : SI le tableau contient des articles */
        <div className="favorites-grid">
          {favorites.map((item) => (
            <article key={item.id} className="favorite-card">
              <div className="card-img-container">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-body">
                <span className="card-date">{item.date}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
                <a href={item.link} className="card-link">→ Read Article</a>
              </div>
            </article>
          ))}
        </div>

      ) : (

        /* CAS 2 : SINON (Tableau vide) */
        <div className="empty-state-wrapper">
          <img 
    src={empty} 
    alt="No favorites" 
    className="empty-img" 
  />
        </div>

      )}
      
    </main>
  );
};

export default Favorites;