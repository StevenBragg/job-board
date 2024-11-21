import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Board</h1>
      </header>
      <main>
        <section className="job-listings">
          <h2>Available Positions</h2>
          <div className="jobs-grid">
            {/* Example job listings */}
            <div className="job-card">
              <h3>Senior React Developer</h3>
              <p>Company: Tech Corp</p>
              <p>Location: Remote</p>
              <button className="apply-btn">Apply Now</button>
            </div>
            <div className="job-card">
              <h3>Python Backend Engineer</h3>
              <p>Company: StartUp Inc</p>
              <p>Location: New York</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;