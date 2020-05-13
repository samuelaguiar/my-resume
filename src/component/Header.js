import React from "react";

const Header = ({ data: { name, role, contact } }) => (
  <header>
    <h1>{name}</h1>
    <h3>{role}</h3>
    <div className="contact">
      {Object.entries(contact).map(([key, val]) =>
        key === "email" ? (
          <span key={key}>
            <a href={`mailto:${val}`}>{val}</a>
          </span>
        ) : (
          <span key={key}>
            <a href={val}>{key}</a>
          </span>
        )
      )}
    </div>
  </header>
);
export default Header;
