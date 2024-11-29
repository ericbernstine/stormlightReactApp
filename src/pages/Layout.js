import { Outlet, Link } from 'react-router-dom';
import '../App.css';


const Layout = () => {
    return (
        <div>
            <div className='navBar'>
                <p>
                    <Link to='/'>Home</Link>
                </p>
                <p>
                    <Link to='/books'>Books</Link>
                </p>
                <p>
                    <Link to='/author'>Author</Link>
                </p>
            </div>
            <Outlet />
        </div>
    )
};

export default Layout;