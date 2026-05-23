import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function SellerRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  //  If no user is logged in, send them to the Login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  //  If the user is logged in BUT they are not a 'seller', send them to Home
  if (user.role !== 'seller') {
    return <Navigate to="/" />;
  }

  //  If everything is okay, show the dashboard
  return children;
}