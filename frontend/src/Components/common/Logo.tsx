import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
    handleLinkClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ handleLinkClick }) => {
    return (
        <Link to="/" onClick={handleLinkClick}>
            <h1 className="text-3xl text-blue-400 font-bold font-courgette">lavanderia</h1>
        </Link>
    );
};

export default Logo;
