import React from 'react';

import logoPng from './image-1774193130033.png'; 

const Footer = () => {
  return (
    <footer className="news-footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Outfit:wght@700;800&display=swap');

        .news-footer { 
          background-color: #fff; 
          padding: 80px 5% 40px 5%; 
          font-family: 'Inter', sans-serif;
          border-top: 1px solid #f0f0f0;
          width: 100%;
          box-sizing: border-box;
        }

        .footer-content { 
          max-width: 1300px; /* Un peu plus large pour laisser respirer le logo */
          margin: 0 auto; 
          display: flex; 
          justify-content: space-between; 
          align-items: flex-start; 
          gap: 60px; 
        }

        /* --- LOGO PLUS GRAND SANS TOUCHER AU RESTE --- */
        .logo-container { 
          flex: 0 0 auto; /* Empêche le container du logo de rétrécir ou de pousser les autres */
          margin-top: -10px; /* Ajustement visuel pour l'alignement */
        }

        .footer-logo-img {
          width: 280px; /* Taille augmentée ici (était à 180px/200px) */
          height: auto;
          display: block;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .footer-logo-img:hover {
          transform: scale(1.02); /* Petit effet de zoom discret au survol */
        }

        .footer-links-grid { 
          display: flex; 
          gap: 70px;
          flex: 1; /* Prend tout l'espace restant sans être écrasé */
          justify-content: flex-end;
        }

        .f-col h4 { 
          font-family: 'Outfit', sans-serif; 
          font-size: 20px; 
          font-weight: 800; 
          margin-bottom: 25px; 
          color: #1a1a1a;
          position: relative; 
          white-space: nowrap; /* Évite que les titres ne passent sur 2 lignes */
        }

        .f-col h4::after { 
          content: ''; 
          position: absolute; 
          bottom: -8px; 
          left: 0; 
          width: 30px; 
          height: 3px; 
          background-color: #e1522d; 
        }

        .f-col ul { padding: 0; margin: 0; list-style: none; }
        
        .f-col ul li { 
          font-family: 'Inter', sans-serif;
          margin-bottom: 15px; 
          font-size: 15px; 
          font-weight: 500; 
          color: #555; 
          cursor: pointer; 
          transition: color 0.2s;
        }

        .f-col ul li:hover { color: #e1522d; }

        .about-text {
          font-family: 'Inter', sans-serif;
          max-width: 250px; 
          font-size: 14px; 
          line-height: 1.6;
          color: #666;
        }

        .footer-bottom-reserved {
          width: 100%;
          text-align: center;
          margin-top: 80px;
          padding-top: 30px;
          border-top: 1px solid #f5f5f5;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #999;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
      `}</style>

      <div className="footer-content">
        <div className="logo-container">
          <img src={logoPng} alt="NewsUp Logo" className="footer-logo-img" />
        </div>

        <div className="footer-links-grid">
          <div className="f-col">
            <h4>Quick links</h4>
            <ul><li>Home</li><li>Trending</li><li>Posts</li></ul>
          </div>
          <div className="f-col">
            <h4>About us</h4>
            <p className="about-text">
              NewsUp is a modern blog platform built to keep you informed and ahead of the curve with real-time updates.
            </p>
          </div>
          <div className="f-col">
            <h4>Contact</h4>
            <ul><li>Gmail</li><li>Instagram</li><li>Facebook</li></ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-reserved">
        © 2026 NEWSUP — ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
