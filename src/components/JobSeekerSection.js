import React from 'react';
import './JobSeekerSection.css';

function JobSeekerSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Find the Right Job for You</h1>
          <p>Connect with top companies and explore exciting career opportunities.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search for jobs or companies" />
            <button style={{marginLeft: '5px'}}>Search</button>
          </div>
        </div>
        <div className="hero-image">
          <span>Job Search Illustration</span>
        </div>
      </div>
    </section>
  );
}

export default JobSeekerSection;