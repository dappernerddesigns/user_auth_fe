import { Box, Link as MuiLink } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../store/userSlice";
export const UserPage = () => {
  const dispatch = useDispatch();
  const { username, email, user_id, loading, error } = useSelector(
    (state) => state.user
  );

  const loggedInUser = useSelector((state) => state.loginForm.email);

  useEffect(() => {
    if (loggedInUser) {
      dispatch(fetchUser(loggedInUser));
    }
  }, [dispatch, loggedInUser]);

  return (
    <Box>
      <h1>User page</h1>
      {loading ? (
        <p>Loading user...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Welcome, {username}</p>
      )}
    </Box>
  );
};
