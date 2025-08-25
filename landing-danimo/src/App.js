import React from "react";
import "./App.css";

const colors = {
  color1: "#f7a1b2", // illusion rosa
  color2: "#f6c6d7", // azalea rosa bb
  fondo: "#f4e1e6",  // vanilla ice
  color4: "#e3c8e4", // snuff lavanda
  color5: "#d2a8d6", // lavanda oscuro
  oscuro: "#595154", // gris oscuro
};

const team = [
  { name: "Lucía Fernández", role: "CEO & Psicóloga", img: "/team/integrante1.jpg" },
  { name: "Martín Gómez", role: "Fullstack Dev", img: "/team/integrante2.jpg" },
  { name: "Ana Torres", role: "UX/UI Designer", img: "/team/integrante3.jpg" },
  { name: "Diego Ramírez", role: "IA Specialist", img: "/team/integrante4.jpg" },
  { name: "Sofía López", role: "Project Manager", img: "/team/integrante5.jpg" },
];

function App() {
  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: "100vh", fontFamily: "Poppins, sans-serif", color: colors.oscuro }}>
      
      {/* Header */}
      <header className="fade-in" style={{ backgroundColor: colors.color1, padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "0 0 12px 12px" }}>
        <h1 style={{ margin: 0, color: "#fff" }}>DANIMO 💖</h1>
        <button className="btn-dark">Descargar App</button>
      </header>

      {/* Hero Section */}
      <section className="hero fade-in" style={{ padding: "4rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-bg"></div>
        <h2 className="hero-title">Tu Compañero Emocional Inteligente 🌸</h2>
        <p className="hero-text">
          <b>DANI</b> no es un chatbot genérico. Es una inteligencia artificial entrenada para la salud mental.  
          Recuerda lo que viviste, entiende tus matices y adapta sus respuestas a vos.
        </p>
        <button className="btn-main">Probar Gratis</button>
      </section>

      {/* Pilares */}
      <section className="features">
        <div className="card" style={{ backgroundColor: colors.color2 }}>
          <h3>✨ Algoritmo</h3>
          <ul>
            <li>Filtros inteligentes</li>
            <li>Recomendación de rutinas</li>
            <li>Casos especiales detectados</li>
          </ul>
        </div>
        <div className="card" style={{ backgroundColor: colors.color4 }}>
          <h3>🧠 Seguridad</h3>
          <ul>
            <li>En caso de suicidio → bloqueo del chat</li>
            <li>Comentarios extremos → rutina inmediata</li>
            <li>Charlas breves → disparadores</li>
            <li>Registro de fechas importantes</li>
          </ul>
        </div>
        <div className="card dark-card" style={{ backgroundColor: colors.color5 }}>
          <h3>🤝 Conexión con Psicólogo</h3>
          <p>
            DANIMO no reemplaza a los profesionales.  
            Te conecta fácilmente con psicólogos si lo necesitás.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team fade-in">
        <h2>👩‍💻 Nuestro Equipo</h2>
        <div className="team-grid">
          {team.map((member, i) => (
            <div className="team-card" key={i}>
              <img src={member.img} alt={member.name} className="team-img" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.oscuro, color: "#fff", padding: "1rem", textAlign: "center", borderRadius: "12px 12px 0 0" }}>
        © 2025 DANIMO | Tu compañero emocional 💜
      </footer>
    </div>
  );
}

export default App;
