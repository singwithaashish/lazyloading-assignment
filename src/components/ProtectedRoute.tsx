import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = {user: true} // TODO: useAuth hook
  const location = useLocation();

  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
}

export default ProtectedRoute;