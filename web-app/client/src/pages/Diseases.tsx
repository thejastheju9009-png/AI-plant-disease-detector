import { useEffect, useState } from 'react';
import './Diseases.css';

function Diseases() {
  const [diseases, setDiseases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch diseases from API
    // setDiseases(...)
    setLoading(false);
  }, []);

  return (
    <div className="diseases">
      <h2>Plant Diseases Database</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="diseases-grid">
          {diseases.map((disease: any) => (
            <div key={disease._id} className="disease-card">
              <h3>{disease.name}</h3>
              <p><strong>Severity:</strong> {disease.severity}</p>
              <p><strong>Description:</strong> {disease.description}</p>
              <div className="disease-details">
                <div>
                  <h4>Symptoms:</h4>
                  <ul>{disease.symptoms?.map((s: string) => <li key={s}>{s}</li>)}</ul>
                </div>
                <div>
                  <h4>Treatment:</h4>
                  <ul>{disease.treatment?.map((t: string) => <li key={t}>{t}</li>)}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Diseases;
