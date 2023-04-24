/* eslint-disable react/react-in-jsx-scope */
import { Link } from '../routes';
import { isValidURL } from '../utils';

const RadioLink = ({ to, rel, children, ...otherProps }) => {
    to = to || '/';
    if (to !== null && (isValidURL(to) === false)) {

        return (
            <Link to={to} {...otherProps}>
                {children}
            </Link>
        );
    }

    return (
        <a
            href={to}
            target="_blank"
            rel={rel || 'nofollow noopener noreferrer'}
            {...otherProps}
        >
            {children}
        </a>
    );
};

export { RadioLink };
