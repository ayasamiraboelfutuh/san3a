import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import { Link } from 'react-router-dom';

export default function RegisterForm({ role, onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', shopName: '' });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
      <h3 className="mb-3">Register as {role === 'seller' ? 'Artisan' : 'Customer'}</h3>
      
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
      </div>
      
      {/* Artisan-specific field */}
      {role === 'seller' && (
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Shop Name" onChange={(e) => setFormData({...formData, shopName: e.target.value})} required />
        </div>
      )}

      <div className="mb-3">
        <input type="email" className="form-control" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
      </div>
      
      <div className="mb-3">
        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
      </div>
      
      <button type="submit" className="btn btn-dark w-100">Register</button>
    </form>
  );
}