import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Books from './pages/Books';
import Author from './pages/Author';

export default function App() {
    const basename = process.env.NODE_ENV === 'production' ? '/stormlightReactApp' : '/';

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="books" element={<Books />} />
                    <Route path="author" element={<Author />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}