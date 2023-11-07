import React from "react";

export const Button = ({
	children,
	...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
	return <button {...props}>{children}</button>;
};
