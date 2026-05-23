import RegisterForm from '../components/auth/RegisterForm';
import { authService } from '../services/authService';

export default function RegisterArtisan() {
  const handleRegister = async (data) => {
    await authService.register({ ...data, role: 'seller' });
    // Redirect or show success
  };
  return <div className="container mt-5"><RegisterForm role="seller" onSubmit={handleRegister} /></div>;
}