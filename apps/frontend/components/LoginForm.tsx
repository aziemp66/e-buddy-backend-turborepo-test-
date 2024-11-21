"use client"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setToken, setUser, setSuccess, setError, startLoading } from "../store/reducers";
import { Button, TextField, Box, Typography, CircularProgress } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { fetchUser } from '@/apis/userApi'
import { auth } from "@/config/firebase";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { loading, successMessage, errorMessage } = useSelector((state: RootState) => state.user);

	const handleLogin = async () => {
		try {
			dispatch(startLoading())
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const token = await userCredential.user.getIdToken();

			// Save token and user info in Redux
			dispatch(setToken(token));
			const user = await fetchUser()
			dispatch(setUser(user))
			dispatch(setSuccess("User data fetched successfully!"));
		} catch (err) {
			setError("Invalid email or password.");
			console.error("Login error:", err);
		}
	};

	return (
		<Box>
			<TextField
				label="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				fullWidth
				margin="normal"
			/>
			<TextField
				label="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				fullWidth
				margin="normal"
			/>
			<Button variant="contained" onClick={handleLogin} fullWidth>
				{loading ? <CircularProgress size={24} color="inherit" /> : "Login & Fetch User Data"}
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

export default LoginForm;
