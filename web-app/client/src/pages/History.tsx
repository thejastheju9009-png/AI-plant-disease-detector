import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/authStore';
import './History.css';

function History() {
  const { user } = useAuthStore();
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch predictions from API
    // setPredictions(...)
    setLoading(false);
  }, [user?.id]);

  return (
    <div className="history">
      <h2>Prediction History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : predictions.length === 0 ? (
        <p>No predictions yet</p>
      ) : (
        <div className="history-list">
          {predictions.map((prediction: any) => (
            <div key={prediction._id} className="history-item">
              <img src={prediction.imageUrl} alt="Plant" />
              <div className="history-info">
                <h3>{prediction.disease}</h3>
                <p>Confidence: {prediction.confidence}%</p>
                <p>Severity: {prediction.severity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
