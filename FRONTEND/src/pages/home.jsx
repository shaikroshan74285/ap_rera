import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Welcome to Home Page</h2>

      <p style={{ marginTop: "10px" }}>
        This is a temporary dummy page. You can edit this file later and add your
        real UI here.
      </p>

      <div style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        background: "#f7f7f7"
      }}>
        <strong>Status:</strong> Home page loaded successfully 👍
      </div>
    </div>
  );
}
