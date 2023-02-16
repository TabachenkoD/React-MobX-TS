import { Routes, Route } from 'react-router-dom';
import Product from '../Product';
import LoginForm from '../LoginForm';

const AppRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/login' element={<LoginForm />} />
        </Routes>
    )
}

export default AppRoute;