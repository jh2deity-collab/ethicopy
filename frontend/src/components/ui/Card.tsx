import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'glass' | 'warning' | 'success';
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    variant = 'default'
}) => {
    const baseStyles = 'p-6 rounded-2xl transition-all duration-300';

    const variants = {
        default: 'bg-white border border-slate-200 shadow-sm',
        glass: 'glass-card',
        warning: 'bg-white border-2 border-warning-orange/30 shadow-[0_10px_40px_-10px_rgba(255,159,10,0.2)]',
        success: 'bg-white border-2 border-mint-green/30 shadow-[0_10px_40px_-10px_rgba(0,217,126,0.2)]',
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};
