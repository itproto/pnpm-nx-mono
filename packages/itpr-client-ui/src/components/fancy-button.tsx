import React from 'react';

interface FancyButtonProps {
    label: string;
}

export const FancyButton: React.FC<FancyButtonProps> = ({ label }) => {
    return (
        <button className="fancy-button">
            {label}!!!
        </button>
    );
};
