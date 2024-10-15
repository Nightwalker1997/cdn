import React from "react";
import Test1 from "../slider/test1";

type InputProps = {
    placeholder?: string;
    onClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: "string";
};

const Input: React.FC<InputProps> = ({
    placeholder,
    onClick,
    onChange,
    className,
}) => {
    return (
        <div className="w-full h-96 bg-red-400">
            <Test1 />
            <input
                placeholder={placeholder}
                onChange={onChange}
                onClick={onClick}
                className={` ${className}`}
            />
        </div>
    );
};

export default Input;
