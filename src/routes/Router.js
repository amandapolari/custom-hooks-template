import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserNamesPage from '../pages/UserNamesPage';
import CommentsPage from '../pages/CommentsPage';
import { Header } from '../components/Header/Header';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* Poderia ser 'index' ou path='/' */}
                <Route index element={<UserNamesPage />} />
                <Route path="/comments" element={<CommentsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
