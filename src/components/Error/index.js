import { Link } from 'react-router-dom';

const ErrorContent = () => {
    return (
        <div className="rs-page-error">
            <div className="error-text">
                <h1 className="error-code">404</h1>
                <h3 className="error-message">Էջը չի գտնվել</h3>
                <Link className="readon cursor-pointer orange-btn primary-transparent mt-20" to="/">Վերադառնալ գլխավոր էջ</Link>
            </div>
        </div>
    );
}

export default ErrorContent;