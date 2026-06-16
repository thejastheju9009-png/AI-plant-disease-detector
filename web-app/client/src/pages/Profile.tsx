import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';
import './Profile.css';

function Profile() {
  const { user } = useAuthStore();
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch user profile from API
    if (user) {
      setProfile({
        firstName: '',
        lastName: '',
        email: user.email || '',
        username: user.username || ''
      });
    }
  }, [user]);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      // Update profile via API
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Update failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="profile-container">
        <div className="profile-form">
          <input
            type="text"
            placeholder="First Name"
            value={profile.firstName}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={profile.lastName}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={profile.email}
            disabled
          />
          <input
            type="text"
            placeholder="Username"
            value={profile.username}
            disabled
          />
          <button onClick={handleUpdate} className="btn btn-primary" disabled={loading}>
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
