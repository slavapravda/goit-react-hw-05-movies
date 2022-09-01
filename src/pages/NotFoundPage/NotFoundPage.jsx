import { Link } from 'react-router-dom'
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page not found 404</h1>
            <Link to="/">To home page</Link>
        </div>
    );
}

export default NotFoundPage;