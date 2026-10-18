import React from 'react';

const Link = ({ route }) => {
    return (
        <li>
            <a
                href={route.path}
                className="px-4 py-2 rounded-lg font-medium text-base-content/70 hover:text-primary hover:bg-base-200 transition-colors"
            >
                {route.name}
            </a>
        </li>
    );
};

export default Link;