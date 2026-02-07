import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'success' | 'warning';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all rounded-xl active:scale-95 disabled:opacity-50 tracking-tight';

    const variants = {
        primary: 'bg-trust-blue text-white hover:shadow-[0_0_25px_rgba(0,98,255,0.4)] shadow-lg',
        outline: 'border-2 border-slate-200 text-slate-600 hover:border-trust-blue hover:text-trust-blue hover:bg-trust-blue/5 bg-white/50 backdrop-blur-md',
        ghost: 'text-slate-gray/60 hover:text-trust-blue hover:bg-trust-blue/5',
        success: 'bg-mint-green text-white hover:shadow-[0_0_25px_rgba(0,217,126,0.4)] shadow-lg',
        warning: 'bg-warning-orange text-white hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] shadow-lg',
    };

    const sizes = {
        sm: 'px-6 py-2.5 text-sm uppercase tracking-wider h-10',
        md: 'px-8 py-3.5 text-base h-12',
        lg: 'px-10 py-4.5 text-xl h-16',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
