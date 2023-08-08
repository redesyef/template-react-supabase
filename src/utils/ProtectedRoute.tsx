import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


export const ProtectedRoute = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const { user } = useAuth();

  const location = useLocation();

  if (!user) {
    return <Navigate to="/" replace state={{ path: location.pathname }} />;
  }
  
  return children ? children : <Outlet />;
};
