import React from 'react';
import "../Styles/About.css";

function About() {
  return (
    <div>
     
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Urban Company operates a technology-driven, full-stack online services marketplace for quality driven services and solutions across various home and beauty categories. Our platform enables consumers to easily order services, including cleaning, pest control, plumbing, carpentry, appliance servicing and repair, painting, skincare, hair grooming, and massage therapy. These services are delivered by trained and independent service professionals at the consumers’ convenience. We are focused on enabling delivery of a quality driven, standardized and reliable service experience.
        </p>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="stat-item">
          <h3>48,000+</h3>
          <p>Active Service Professionals</p>
        </div>
        <div className="stat-item">
          <h3>13 Million+</h3>
          <p>Consumers</p>
        </div>
        <div className="stat-item">
          <h3>59</h3>
          <p>Cities</p>
        </div>
        <div className="stat-item">
          <h3>4</h3>
          <p>Countries</p>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="leadership">
        <h2>Our Leadership Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="member1.jpg" alt="Abhirai Singh Bhal" />
            <h3>Abhirai Singh Bhal</h3>
            <p>Managing Director & CEO</p>
          </div>
          <div className="team-member">
            <img src="member2.jpg" alt="Raghay Chandra" />
            <h3>Raghay Chandra</h3>
            <p>Executive Director & CTPO</p>
          </div>
          <div className="team-member">
            <img src="member3.jpg" alt="Varun Khaitan" />
            <h3>Varun Khaitan</h3>
            <p>Executive Director & COO</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;