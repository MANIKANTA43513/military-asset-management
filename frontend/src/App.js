import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    purchases: 120,
    transferIn: 60,
    transferOut: 30,
    net: 150,
    assigned: 40,
    expended: 10
  });

  useEffect(() => {
    axios
      .get("https://military-asset-management-20cu.onrender.com/dashboard")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const cardStyle = {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "0.3s",
    cursor: "pointer"
  };

  const containerStyle = {
    padding: "30px",
    fontFamily: "Arial",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh"
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Military Asset Management System
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px"
        }}
      >
        <div
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Purchases: {data.purchases}
        </div>

        <div
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Transfers In: {data.transferIn}
        </div>

        <div
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Transfers Out: {data.transferOut}
        </div>

        <div
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Net Movement: {data.net}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <div
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Assigned: {data.assigned}
        </div>

        <div
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Expended: {data.expended}
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "30px", color: "gray" }}>
        *Sample data for demonstration purposes
      </p>
    </div>
  );
}

export default App;
