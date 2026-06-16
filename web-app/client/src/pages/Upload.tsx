import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/authStore';
import './Upload.css';

function Upload() {
  const { user } = useAuthStore();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file || !user) {
      toast.error('Please select a file');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('userId', user.id);

      // Mock response - replace with actual API call
      const mockResult = {
        disease: 'Early Blight',
        confidence: 89,
        severity: 'medium',
        treatment: 'Apply fungicide and remove affected leaves'
      };

      setResult(mockResult);
      toast.success('Analysis complete!');
    } catch (error) {
      toast.error('Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-page">
      <h2>Upload Plant Image</h2>
      <div className="upload-container">
        <div className="upload-area">
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            accept="image/*"
            className="file-input"
          />
          <label htmlFor="file-input" className="file-label">
            <div className="upload-icon">📸</div>
            <p>Click to upload or drag and drop</p>
            <p className="file-hint">PNG, JPG, GIF up to 10MB</p>
          </label>
        </div>

        {preview && (
          <div className="preview">
            <img src={preview} alt="Preview" />
            <button onClick={handleUpload} className="btn btn-primary" disabled={loading}>
              {loading ? 'Analyzing...' : 'Analyze Image'}
            </button>
          </div>
        )}
      </div>

      {result && (
        <div className="result">
          <h3>Detection Result</h3>
          <div className="result-card">
            <p><strong>Disease:</strong> {result.disease}</p>
            <p><strong>Confidence:</strong> {result.confidence}%</p>
            <p><strong>Severity:</strong> {result.severity}</p>
            <p><strong>Treatment:</strong> {result.treatment}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload;
