import { useAuth } from '../hooks/auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { BrowserRouter } from 'react-router-dom';

export function Routes() {

    const { user } = useAuth();

    return(
        <BrowserRouter>
            { user ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    );
}