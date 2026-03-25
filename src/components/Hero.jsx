function Hero() {
  return (
<section className="hero">
<div className="hero-content">
<h1>
Stay <span className="bold">Tuned</span> & check all <br />
<span className="orange">Trending News</span>
</h1>
    <p>Stay on top of the latest stories worldwide with News up</p>
  </div>
 

<div display style={{width : "380px", height:"600px",transform: "rotate(-22deg)", marginTop: "500px", marginRight: "1300px"}} className="card card1">
  <img display style={{ width: "300px", marginTop: "30px", marginLeft: "40px",  }} className="img1" src="/src/assets/img1.png" alt="" /> </div>


  <div display style={{width : "380px", height:"600px",transform: "rotate(12deg)", marginTop: "550px", marginRight: "1000px"}} className="card card2">
    <img display style={{ width: "300px", marginTop: "30px", marginLeft: "40px",  }} className="img2" src="/src/assets/img2.png" alt="" />
  </div>


  <div className="card card3" display style={{width : "380px", height:"600px",transform: "rotate(10deg)", marginBottom: "-830px", marginRight: "-50px", marginLeft: "700px"}}>
    <img className="img3" display style={{ width: "280px", marginTop: "30px", marginLeft: "40px",  }} src="/src/assets/img3.png" alt="" />
  </div>
<div>
<button
  style={{
    color: "black",
    background: "transparent",
    border: "none",
    fontSize: "50px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "30px",
    position: "relative",
    paddingBottom: "5px",
    width: "120px",
    height: "160px",
    top: "608px",
    right: "340px",
    gap: "10px",
  }}
  onClick={() => {
    document
      .getElementById("home-section")
      .scrollIntoView({ behavior: "smooth" });
  }}
  onMouseEnter={(e) => {
    e.target.style.letterSpacing = "1px";
  }}
  onMouseLeave={(e) => {
    e.target.style.letterSpacing = "0px";
  }}
>
  show more ↓
</button></div>
  
</section>
);
} 


export default Hero;