// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  status: string;
  data: string;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem("accessToken"), // Check if token exists initially
  status: "Hello", // Initial global status
  data: "Nothing", // Initial global status
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const token = action.payload;
      localStorage.setItem("accessToken", token); // Set token in localStorage
      state.isAuthenticated = true; // Update global state to true
    },
    logout: (state) => {
      localStorage.removeItem("accessToken"); // Remove token from localStorage
      state.isAuthenticated = false; // Update global state to false
    },
    checkAuth: (state) => {
      // Update state based on token presence
      state.isAuthenticated = !!localStorage.getItem("accessToken");
    },
    setStatus: (state, action: PayloadAction<string>) => {
      // Set global status
      state.status = action.payload;
    },
    setData: (state, action: PayloadAction<string>) => {
      // Set global status
      state.data = action.payload;
    },
  },
});

export const { login, logout, checkAuth, setStatus, setData } = authSlice.actions;

export default authSlice.reducer;
