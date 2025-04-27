import React from 'react';
import kuromiSvg from '../assets/kuromi-svg.png';

import '../styles/Projects.css';

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
          <a
            href="https://endearing-blancmange-7d9723.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
      <div className="project-item">
        <div className="project-preview">
            <img
              src={kuromiSvg}
              alt="SVG project preview"
              width="300px"
            />
        </div>

        <div className="project-description">
          <h2>Kuromi x Baku SVG</h2>
          <p>
            I created a SVG animation of the Sanrio character Kuromi using HTML and CSS.
            As it looked a bit plain at first with just Kuromi by herself, I added her
            companion Baku and skill images to fill the background.
          </p>
        </div>
      </div>
          </a>
    </div>
  );
}
