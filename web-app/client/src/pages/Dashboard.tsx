import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/authStore';
import './Dashboard.css';

function Dashboard() {
  const { user } = useAuthStore();
  const [stats, setStats] = useState({
    totalPredictions: 0,
    averageConfidence: 0,
    diseaseDetected: 0,
    healthyPlants: 0
  });

  useEffect(() => {
    // Fetch stats from API
    // setStats(...)
  }, [user?.id]);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{stats.totalPredictions}</div>
          <div className="stat-label">Total Predictions</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.averageConfidence.toFixed(1)}%</div>
          <div className="stat-label">Average Confidence</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.diseaseDetected}</div>
          <div className="stat-label">Diseases Detected</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.healthyPlants}</div>
          <div className="stat-label">Healthy Plants</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
