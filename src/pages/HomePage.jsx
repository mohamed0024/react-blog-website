import Footer from "../components/Footer";

function HomePage() {
  return ( <>
   <div id="home-section" style={{ minHeight: "160vh", padding: "50px" ,    background: "radial-gradient(circle at center, #f6e7dc 0%, #FED2C1 35%, #f6f3f1 100%)",
}}>

      {/* TITLE */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          marginBottom: "40px",
        }}
      >
        <p style={{ fontSize: "45px" }}>Trending News</p>
      </div>

      {/* 🔴 BIG CARD (Oscar news) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1200px",
            backgroundColor: "#f5f5f5",
            borderRadius: "15px",
            padding: "15px",
            gap: "15px",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="/src/assets/img4.png"
            alt="news"
            style={{
              width: "250px",
              height: "170px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <div style={{ flex: 1 }}>
            <p style={{ color: "#ff5a3c", fontSize: "12px" }}>
              18 Mar, 2026
            </p>

            <h3 style={{ margin: "5px 0", fontSize: "20px" }}>
              Best Picture and Best Actor at the Oscars 2026
            </h3>

            <p style={{ color: "#555", fontSize: "14px" }}>
              Short description of the news article goes here...
            </p>

            <button
              style={{
                marginTop: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                border: "none",
              }}
            >
              → Read Article
            </button>
          </div>
        </div>
      </div>

      {/* 🟡 ROW (3 cards only) */}
     <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
  {/* Card 1 */}
  <div
    style={{
      width: "300px",
      height: "300px",
      backgroundColor: "#f0f0f0",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <img
      src="/src/assets/img1.png"
      alt="Tech News"
      style={{
        width: "100%",
        height: "120px",
        objectFit: "cover",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    />
    <p style={{ color: "#ff5a3c", fontSize: "12px" }}>
              18 Mar, 2026
            </p>
    <h3 style={{ margin: "5px 0", fontSize: "18px" }}>One of the World’s Greatest Places of 2026</h3>
    <p style={{ color: "#555", fontSize: "14px", flex: 1 }}>
      TIME released its annual roundup of the top 100 most extraordinary places to visit
    </p>
    <button
      style={{
        marginTop: "10px",
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
      }}
    >
      → Read Article
    </button>
  </div>

  {/* Card 2 */}
  <div
    style={{
      width: "300px",
      height: "300px",
      backgroundColor: "#f0f0f0",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <img
      src="/src/assets/img2.png"
      alt="Health Tips"
      style={{
        width: "100%",
        height: "120px",
        objectFit: "cover",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    />
    <p style={{ color: "#ff5a3c", fontSize: "12px" }}>
              18 Mar, 2026
            </p>
    <h3 style={{ margin: "5px 0", fontSize: "18px" }}>UFC London LIVE: Evloev vs Murphy at The O2 Arena</h3>
    <p style={{ color: "#555", fontSize: "14px", flex: 1 }}>
UFC London will take place on Saturday, March 21 and is being held at The O2 in London.    </p>
    <button
      style={{
        marginTop: "10px",
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
      }}
    >
      → Read Article
    </button>
  </div>

  {/* Card 3 */}
  <div
    style={{
      width: "300px",
      height: "300px",
      backgroundColor: "#f0f0f0",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <img
      src="/src/assets/img3.png"
      alt="Movie Releases"
      style={{
        width: "100%",
        height: "120px",
        objectFit: "cover",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    />
    <p style={{ color: "#ff5a3c", fontSize: "12px" }}>
              18 Mar, 2026
            </p>
    <h3 style={{ margin: "5px 0", fontSize: "18px" }}>March Madness 2026 opens with UMBC vs. Howard</h3>
    <p style={{ color: "#555", fontSize: "14px", flex: 1 }}>
      New York Post may be compensated and/or receive an affiliate commission if
    </p>
    <button
      style={{
        marginTop: "10px",
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
      }}
    >
      → Read Article
    </button>
  </div>
  <div>
    
  </div>
  
</div>
<button
            style={{
              backgroundColor: "#E25724",
              color: "#fff",
              padding: "12px 25px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "50px",
              marginLeft: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Read More →
          </button>
    </div>
    <Footer />
    </>
  );
}

export default HomePage;