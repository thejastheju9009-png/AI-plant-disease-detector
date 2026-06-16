import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import './Home.css';

function Home() {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="home">
      <section className="hero">
        <h1>AI-Powered Plant Disease Detection</h1>
        <p>Identify and manage plant diseases with advanced AI technology</p>
        {isAuthenticated ? (
          <Link to="/upload" className="btn btn-primary">Start Detecting</Link>
        ) : (
          <Link to="/login" className="btn btn-primary">Get Started</Link>
        )}
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="icon">📸</div>
          <h3>Image Upload</h3>
          <p>Upload plant images for instant disease detection</p>
        </div>
        <div className="feature-card">
          <div className="icon">🔍</div>
          <h3>Accurate Detection</h3>
          <p>AI-powered detection with high accuracy rates</p>
        </div>
        <div className="feature-card">
          <div className="icon">📚</div>
          <h3>Disease Database</h3>
          <p>Comprehensive database of plant diseases and treatments</p>
        </div>
        <div className="feature-card">
          <div className="icon">📊</div>
          <h3>History Tracking</h3>
          <p>Track your detection history and results</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
