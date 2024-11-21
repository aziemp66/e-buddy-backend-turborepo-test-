"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setUser, setSuccess, setError, startLoading } from "@/store/reducers";
import { Button, TextField, Box, Typography, CircularProgress } from "@mui/material";
import { updateUser } from "@/apis/userApi";

const UpdateUserForm = () => {
	const [name, setName] = useState("");
	const dispatch = useDispatch();
	const { loading, successMessage, errorMessage } = useSelector((state: RootState) => state.user);

	const handleUpdate = async () => {
		try {
			dispatch(startLoading());
			const updatedUser = await updateUser({ name });
			dispatch(setUser(updatedUser));
			dispatch(setSuccess("User updated successfully!"));
		} catch (err) {
			dispatch(setError("Failed to update user."));
			console.error("Update error:", err);
		}
	};

	return (
		<Box>
			<TextField
				label="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				fullWidth
				margin="normal"
			/>
			<Button variant="contained" onClick={handleUpdate} fullWidth>
				{loading ? <CircularProgress size={24} color="inherit" /> : "Update User"}
			</Button>
			{successMessage && (
				<Typography variant="body1" color="green" sx={{ marginTop: 2 }}>
					{successMessage}
				</Typography>
			)}
			{errorMessage && (
				<Typography variant="body1" color="red" sx={{ marginTop: 2 }}>
					{errorMessage}
				</Typography>
			)}
		</Box>
	);
};

export default UpdateUserForm;
