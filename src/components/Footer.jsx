import React from 'react';

export function Footer({ brand = "Sameh Zoaa" }) {
  return (
    <footer className="section footer">
      <div>
        <strong>{brand}</strong>
        <p>© 2024 {brand}. GP & Software Consultant, built with clinical precision.</p>
      </div>
      <div className="links">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        <a href="#">Medical Registry</a>
        <a href="#">Consultation</a>
      </div>
    </footer>
  );
}
