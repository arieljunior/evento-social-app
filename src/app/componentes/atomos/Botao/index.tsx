import { Button, ButtonProps } from "@mui/material";
import React from "react"

interface IPropsBotao{
    children: React.ReactElement | string
}

export const Botao: React.FunctionComponent<ButtonProps> = ({
	children,
	...props
}) => {
	return (
		<Button variant='contained' {...props}>
			{children}
		</Button>
	);
};