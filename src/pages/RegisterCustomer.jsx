import RegisterForm from '../components/auth/RegisterForm';
import { authService } from '../services/authService';

export default function RegisterCustomer() {
  const handleRegister = async (data) => {
    await authService.register({ ...data, role: 'customer' });
    // Redirect or show success
  };
  return <div className="container mt-5"><RegisterForm role="customer" onSubmit={handleRegister} /></div>;
}