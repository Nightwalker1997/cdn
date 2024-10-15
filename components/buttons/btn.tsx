"use client";

import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
    return <button onClick={onClick}>{children} + some value</button>;
};

export default Button;
