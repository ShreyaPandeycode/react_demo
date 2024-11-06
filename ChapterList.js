// src/components/ChapterList.js
import React from "react";

function ChapterList({ onSelectChapter }) {
    const chapters = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"];

    return (
        <div className="chapter-list">
            <ul>
                {chapters.map((chapter, index) => (
                    <li key={index} onClick={() => onSelectChapter(chapter)}>
                        {chapter}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChapterList;