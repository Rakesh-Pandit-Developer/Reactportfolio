import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section" data-aos="fade-up">
      <div className="home-content">
        <h1>Hello, I'm John Doe</h1>
        <p>I am a passionate web developer specializing in modern and responsive websites.</p>
        <Link to="/projects" className="btn-primary">View My Work</Link>
      </div>
    </section>
  );
};

export default Home;