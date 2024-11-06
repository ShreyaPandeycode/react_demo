// src/components/LearningMaterial.js
import React from "react";

function LearningMaterial({ selectedChapter }) {
    return (
        <div className="learning-material">
            <h2>{selectedChapter}</h2>
            <div className="item">
                <span>Video 1</span>
                <span>10:00</span>
            </div>
            <div className="item">
                <span>Article 1</span>
                <span>10:00</span>
            </div>
            <div className="item">
                <span>Quiz 1</span>
                <span>10:00</span>
            </div>
            <div className="item">
                <span>Coding Exercise 1</span>
                <span>10:00</span>
            </div>
            <div className="item">
                <span>Combined Resource 1</span>
                <span>10:00</span>
            </div>
        </div>
    );
}

export default LearningMaterial;