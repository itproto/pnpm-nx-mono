import React from 'react';

interface FancyButtonProps {
    label: string;
}

export const FancyButton: React.FC<FancyButtonProps> = ({ label }) => {
    console.log('I am affected')
    return (
        <button className="fancy-button">
            {label}!!!
        </button>
    );
};
