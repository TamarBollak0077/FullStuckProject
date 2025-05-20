import React from "react";

const vibrantGreen = "#43D673";     // ירוק חי
const softTurquoise = "#4DB6AC";    // טורקיז רך
const darkGray = "#23272A";         // אפור כהה
const offWhite = "#FAFAFA";         // לבן נקי

const HomePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: offWhite,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px", // כדי שלא יוסתר ע"י ה-Navbar
        paddingInline: "16px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: vibrantGreen, marginBottom: 16, fontWeight: "bold", fontSize: "2.2rem" }}>
        ברוך הבא למרכז השיקום
      </h1>
      <p style={{ color: darkGray, fontSize: "1.1rem", marginBottom: 32, maxWidth: "500px" }}>
        כאן תוכל למצוא מידע, תמיכה וכלים להתקדמות במסע האישי שלך. אנו כאן בשבילך.
      </p>
      <button
        style={{
          background: `linear-gradient(90deg, ${softTurquoise}, ${vibrantGreen})`,
          color: "#fff",
          border: "none",
          borderRadius: "30px",
          padding: "12px 36px",
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(67,214,115,0.25)",
          transition: "opacity 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        התחל עכשיו
      </button>
    </div>
  );
};

export default HomePage;
