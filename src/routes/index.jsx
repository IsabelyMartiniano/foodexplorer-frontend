import { useAuth } from '../hooks/auth';
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { BrowserRouter } from "react-router-dom";

export function Routes() {
  const { user, isUserAuthenticated } = useAuth();
  
  const isAdmin = user ? user.is_admin : false;

  const userAuthenticated = isUserAuthenticated();

  return (
    <BrowserRouter>
      {(user && userAuthenticated) ? <AppRoutes isAdmin={isAdmin} /> : <AuthRoutes />}
    </BrowserRouter>
  );
}