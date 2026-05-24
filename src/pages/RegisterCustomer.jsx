import RegisterForm from '../components/auth/RegisterForm';
import { authService } from '../services/authService';
import { Link } from 'react-router-dom';
export default function RegisterCustomer() {
  const handleRegister = async (data) => {
    await authService.register({ ...data, role: 'customer' });
    // Redirect or show success
  };
   return (
  
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      
      <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h5 className="text-center mb-4">Create Account</h5>
        
        {/* Pass your props here */}
          <RegisterForm role="customer" onSubmit={handleRegister} />        
        <div className="text-center mt-3">
          <small className="text-muted">
            Already have an account? 
            <Link to="/login" style={{ color: '#c85a32', textDecoration: 'none', fontWeight: '600' }}> Sign in</Link>
          </small>
        </div>
      </div>
      
    </div>
  )
}