import '../components/style.css'

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    className?: string;
    href?: string;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    className = '',
    href,
    children,
    type = 'button'
}) => {
    const baseClasses = "btn";
    const variantClasses = variant === 'primary'
        ? "btn-primary"
        : "btn-secondary";

    const allClasses = `${baseClasses} ${variantClasses} ${className}`;

    if (href) {
        return (
            <a href={href} className={allClasses}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={allClasses}>
            {children}
        </button>
    );
};

export default Button;