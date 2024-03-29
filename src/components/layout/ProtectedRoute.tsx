import { Navigate, useLocation } from "react-router-dom";
import useFirebaseAuthentication from "../../utils/useFirebaseAuthentication";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useFirebaseAuthentication();
  const location = useLocation();

  if (loading) return <div>Loading...</div>;

  return user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
