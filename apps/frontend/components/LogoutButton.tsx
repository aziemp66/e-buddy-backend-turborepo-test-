"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "@/store/reducers";
import { Button } from "@mui/material";

const LogoutButton = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(clearUser());
	};

	return (
		<Button variant="outlined" color="secondary" onClick={handleLogout}>
			Logout
		</Button>
	);
};

export default LogoutButton;
