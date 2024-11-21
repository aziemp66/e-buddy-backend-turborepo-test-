"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, setSuccess, setError } from "@/store/reducers";
import { RootState } from "@/store/store";
import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth } from "@/config/firebase";
import { updatePassword } from "@/apis/userApi";
import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";

const UpdatePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);

  const handleUpdatePassword = async () => {
    try {
      dispatch(startLoading());

      // Get the current user
      const user = auth.currentUser;
      if (!user || !user.email) {
        throw new Error("No authenticated user found.");
      }

      // Reauthenticate with current password
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);

      // Call the backend API to update the password
      await updatePassword(newPassword);

      dispatch(setSuccess("Password updated successfully!"));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error updating password:", error.message);
        dispatch(setError("Failed to update password. Check your credentials."));
      } else {
        console.error("An unexpected error occurred.");
        dispatch(setError("An unexpected error occurred."));
      }
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Update Password
      </Typography>
      <TextField
        label="Current Password"
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="New Password"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        onClick={handleUpdatePassword}
        disabled={loading}
        fullWidth
        sx={{ marginTop: 2 }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Update Password"}
      </Button>
    </Box>
  );
};

export default UpdatePasswordForm;
