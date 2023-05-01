import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://644fe94bb61a9f0c4d2ea84a.mockapi.io/api/test/';

    // ---- GET ALL USERS ----
export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
    
  async ({ limit = 3, page = 1 }, thunkAPI) => {
    try {
      const response = await axios.get(`/users?limit=${limit}&page=${page}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
    }
);