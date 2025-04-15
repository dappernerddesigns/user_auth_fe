import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDetails } from "../api";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (email, thunkAPI) => {
    try {
      const user = await getUserDetails(email);
      return user;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data || err.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    user_id: "",
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload.user.username;
        state.email = action.payload.user.email;
        state.user_id = action.payload.user.user_id;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
