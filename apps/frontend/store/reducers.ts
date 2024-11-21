import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@ebuddy/shared";

interface UserState {
	user: User | null;
	token: string | null;
	loading: boolean;
	successMessage: string | null;
	errorMessage: string | null;
}

const initialState: UserState = {
	user: null,
	token: null,
	loading: false,
	successMessage: null,
	errorMessage: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
			state.successMessage = "User fetched successfully!";
			state.errorMessage = null;
			state.loading = false;
		},
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		startLoading: (state) => {
			state.loading = true;
			state.successMessage = null;
			state.errorMessage = null;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
			state.loading = false;
		},
		setSuccess: (state, action: PayloadAction<string>) => {
			state.successMessage = action.payload;
			state.loading = false;
		},
		clearUser: (state) => {
			state.user = null;
			state.token = null;
			state.successMessage = null;
			state.errorMessage = null;
			state.loading = false;
		},
	},
});

// Export actions
export const { setUser, setToken, startLoading, setError, setSuccess, clearUser } = userSlice.actions;

// Export reducer
export const userReducer = userSlice.reducer;
