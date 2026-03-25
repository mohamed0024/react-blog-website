const newsData = [
  {
    id: 1,
    title: "Green Algeria 2026: Goal of 7 Million Trees by Year-End",
    date: "March 23, 2026",
    description: "The national reforestation program reaches a decisive milestone this month.",
    image: "https://images.unsplash.com/photo-1600540520314-cbc1ddc91f3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBzcGFjZXN8ZW58MHx8MHx8fDA%3D",
    detailImage: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e",
    content: "The vast 'Green Dam' plan has been officially relaunched with technical support from forest conservations nationwide. For 2026, the focus is on biodiversity: instead of monoculture, experts now prioritize resilient endemic species such as Atlas cedar and Aleppo pine. Over 50,000 volunteers from civil society and environmental associations have mobilized across the Northern and High Plateau provinces. The goal is not just to plant, but to ensure a survival rate of over 80% through solar-powered drip irrigation systems."
  },
  {
    id: 2,
    title: "World Athletics: Algeria Dominates Indoor Championships in Torun",
    date: "March 22, 2026",
    description: "Algerian athletes deliver historic performances in Poland, leading the African medal table.",
    image: "https://images.unsplash.com/photo-1709133636649-7cb8959ddcb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmxkJTIwYXRobGV0aWNzfGVufDB8fDB8fHww",
    detailImage: "https://images.unsplash.com/photo-1526676023131-d352424236a2",
    content: "A magical night for national sports. At the World Indoor Athletics Championships in Torun, Poland, the national anthem played three times. Our middle-distance runners literally dominated the track. This success is the result of two years of intensive preparation at the Souidania elite training center. International observers highlight the resurgence of the Algerian middle-distance school, reminiscent of the glory days of the 1990s."
  },
  {
    id: 3,
    title: "Import Regulations: Ministry of Commerce Sets Strict New Guidelines",
    date: "March 23, 2026",
    description: "The Ministry reminds operators of the crucial April 30 deadline for the digital platform.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    detailImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
    content: "In an urgent statement, the Ministry of Commerce and Export Promotion reminded economic operators that the 'Algeria-Export' digital platform is now the sole channel for flow management. This total digitalization aims to eradicate bureaucracy and provide real-time visibility on national market needs. Importers have until April 30 to submit their annual purchase forecasts to stabilize prices and avoid artificial shortages."
  },
  {
    id: 4,
    title: "Energy: $5.4 Billion Sonatrach and MEA Project Validated",
    date: "March 23, 2026",
    description: "The Official Gazette confirms a massive investment to transform the industrial landscape.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    detailImage: "https://images.unsplash.com/photo-1535391821627-5e509e667c79",
    content: "Algeria is stepping up its petrochemical strategy. The latest issue of the Official Gazette details the strategic agreement between the national giant Sonatrach and the international MEA consortium. This $5.4 billion project involves building an integrated industrial complex in Skikda. It will produce high-value petroleum derivatives, creating over 3,000 direct jobs and thousands of indirect roles in local subcontracting."
  },
  {
    id: 5,
    title: "Road Safety: New Smart Radars Significantly Reduce Fatality Rates",
    date: "March 21, 2026",
    description: "The DGSN reports a major improvement in road safety figures within urban areas.",
    image: "https://media.istockphoto.com/id/2174588833/fr/photo/homme-conduisant-une-voiture-moderne-vue-de-dos-sur-lautoroute-les-mains-sur-le-volant.webp?a=1&b=1&s=612x612&w=0&k=20&c=WYYSk6ZVjykJ4GhaQ-WvPoT0TT4YADL_nw6GXF5JSqg=",
    detailImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
    content: "The fight against road insecurity is starting to bear concrete fruit. According to the latest report from the General Directorate for National Security (DGSN), traffic accidents dropped by 15% in the first quarter of 2026. This decline is directly correlated to the massive deployment of next-generation radars capable of detecting speeding, phone use while driving, and failure to wear seatbelts."
  },
  {
    id: 6,
    title: "Water Crisis: Tizi Ouzou Launches 36 Billion DA Emergency Plan",
    date: "March 20, 2026",
    description: "A massive investment to secure drinking water supply and renovate aging networks.",
    image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285",
    detailImage: "https://images.unsplash.com/photo-1541544741938-0af808871cc0",
    content: "Facing challenges posed by climate change, the Tizi Ouzou province has unlocked a historic budget of 36.5 billion dinars. This emergency plan aims to end recurring water cuts affecting several municipalities. The project focuses on three major axes: rehabilitating main transfer pipes, drilling new deep wells in mountain areas, and interconnecting regional dams for better resource distribution."
  },
  {
    id: 7,
    title: "Digital Economy: Algeria Surpasses 2,500 Certified Startups",
    date: "March 19, 2026",
    description: "The year 2026 marks a true takeoff for the national technological ecosystem.",
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGVjb25vbWllfGVufDB8fDB8fHww",
    detailImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    content: "The Algerian economic landscape is undergoing a profound mutation. The Ministry of Knowledge Economy and Startups announced that the country now has over 2,500 companies labeled as 'Startups' or 'Innovative Projects.' This explosion is the result of bold reforms, including total tax exemptions for the first years of activity and simplified business creation procedures."
  },
  {
    id: 8,
    title: "Archaeology: New Rock Art Discoveries in the Tassili Massif",
    date: "March 18, 2026",
    description: "A team of experts documents unprecedented engravings in the Sahara desert.",
    image: "https://images.unsplash.com/photo-1730809019029-ecfdb9bb1934?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGVvbG9naWV8ZW58MHx8MHx8fDA%3D",
    detailImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    content: "A major discovery has been announced in the Tassili n'Ajjer National Park. A scientific mission of Algerian archeologists and UNESCO experts uncovered rock paintings dating back over 8,000 years. These works depict daily life scenes and animals that have long since disappeared from the region, such as giraffes and hippos, confirming the Sahara was once a green, populated region."
  },
  {
    id: 9,
    title: "Football / Ligue 1: USMA Prepares for Decisive Title Clash",
    date: "March 17, 2026",
    description: "The national championship enters its final phase with a high-tension match for the top spot.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2",
    detailImage: "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D",
    content: "Pressure is mounting in the capital. As the big Ligue 1 Mobilis clash approaches, USMA players show a focused calm. Currently leading the standings by a narrow margin, the 'Red and Blacks' must win this weekend to secure their position. The coach emphasized defensive cohesion and fast offensive transitions during training sessions."
  },
  {
    id: 10,
    title: "Ramadan 2026: Exemplary Surge of Solidarity Across the Country",
    date: "March 16, 2026",
    description: "Over 60 'Rahma' restaurants mobilized to offer meals to travelers and the needy.",
    image: "https://images.unsplash.com/photo-1742294627422-800b930fd29c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29saWRhcml0eSUyMHJhbWFkYW58ZW58MHx8MHx8fDA%3D",
    detailImage: "https://images.unsplash.com/photo-1542332213-31f87348057f",
    content: "The holy month of Ramadan 2026 is marked by an unprecedented citizen mobilization. Across Algeria, 'Mercy Tables' (Meidat El Rahma) are in full swing. Under the guidance of the Algerian Red Crescent and generous local donors, thousands of complete meals are served every evening at Iftar. Beyond food aid, these moments foster brotherhood and social ties."
  }
];

export default newsData;

   
 
   
