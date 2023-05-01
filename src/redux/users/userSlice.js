import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./userOperations";

const usersInitialState = {
  users: [],
  isLoading: false,
  error: null,
  limit: 3,
  page: 1,
};

const handlePendingReducer = (state) => {
  state.isLoading = true;
  state.error = null;
}
const handleRejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
}

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,

  reducers: {
    followUser: (state, action) => {
      const userIndex = state.users.findIndex(user => user.id === action.payload.userId);
      if (userIndex !== -1) {
        state.users[userIndex].followers += 1;
        state.users[userIndex].following = true;
      }
    },
    unfollowUser: (state, action) => {
      const userIndex = state.users.findIndex(user => user.id === action.payload.userId);
      if (userIndex !== -1) {
        state.users[userIndex].followers -= 1;
        state.users[userIndex].following = false;
      }
    },
    setPageNumber: (state, action) => {
      state.page = action.payload;
    }
  },
      
  extraReducers: (builder) => builder
    // ---- GET ALL USERS ----
    .addCase(fetchUsers.pending, handlePendingReducer)
    .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = [...state.users, ...payload.map(user => ({ ...user, following: false }))];
      })
    .addCase(fetchUsers.rejected, handleRejectedReducer)
});

export const usersReducer = usersSlice.reducer;
export const { followUser, unfollowUser, setPageNumber } = usersSlice.actions;