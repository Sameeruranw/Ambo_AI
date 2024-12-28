import React from "react";
import { useNavigate } from 'react-router-dom';
const Choose = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
      navigate('/contact');
    };
  
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Why Choose Us?</h1>
      <p style={styles.paragraph}>
        Our unique selling point lies in our AI-powered virtual assistant, which
        not only responds to inquiries but also provides affordable prototyping
        solutions. This is what sets us apart and enables us to help you overcome
        challenges quickly and efficiently.
      </p>
      <div className="cta bg-blue-900 text-white py-8 text-center rounded-lg mt-8">
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Digital Employee Experience?</h2>
        <button
            onClick={handleContactClick}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg"
        >
          Contact Us for a Free Consultation
        </button>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    width: '80%',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    fontWeight: '600',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default Choose;
