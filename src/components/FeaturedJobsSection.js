import React from 'react';
import './FeaturedJobsSection.css';

function FeaturedJobsSection() {
  const featuredJobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Innovations', location: 'Bengaluru' },
    { id: 2, title: 'Marketing Manager', company: 'Global Solutions', location: 'Mumbai' },
    { id: 3, title: 'Data Analyst', company: 'Analytics Pro', location: 'Delhi' },
  ];

  return (
    <section className="featured-jobs-section">
      <div className="container">
        <h2>Featured Jobs</h2>
        <div className="job-list">
          {featuredJobs.map(job => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <button>Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobsSection;