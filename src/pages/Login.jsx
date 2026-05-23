import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/authService';
import { Link } from 'react-router-dom';

export default function Login() {
  const { mockLogin } = useAuth(); // 2. Destructure mockLogin from the hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const { login } = useAuth(); // Import the login function from your AuthContext
  const navigate = useNavigate();

  const handleTestLogin = (role) => {
    mockLogin(role); // Sets the user state
    
    // 3. Redirect based on role
    if (role === 'seller') {
      navigate('/artisan-dashboard');
    } else {
      navigate('/'); // Send customers to home
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear errors before trying

    try {
      // Send data to the backend via service
      const userData = await authService.login(email, password);
      
      // Update global Auth state
      login(userData);
      
      // Send user home
      navigate('/');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Welcome Back</h2>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">Sign In</button>
        </form>
        <div className="text-center mt-3">
  <small className="text-muted">
    Don't have an account?
     <Link to="/register" style={{ color: '#c85a32', textDecoration: 'none', fontWeight: '600' }}>Sign up</Link>
  </small>
</div>
<div className="mt-4 p-3 border rounded">
  <p className="text-muted small">Testing Tools (No Backend):</p>
  <button onClick={() => handleTestLogin('customer')} className="btn btn-outline-primary btn-sm me-2">
    Login as Customer
  </button>
  <button onClick={() => handleTestLogin('seller')} className="btn btn-outline-success btn-sm">
    Login as Seller
  </button>
</div>
      </div>
      testing

    </div>
  );
}