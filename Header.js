// src/components/Header.js
import React from "react";

function Header() {
    return (
        <div className="header">
            <h1>Learning Materials</h1>
            <div className="profile">
                <span className="notification-icon">🔔</span>
                <span className="profile-initials">AS</span>
            </div>
        </div>
    );
}

export default Header;