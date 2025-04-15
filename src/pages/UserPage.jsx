import { Box, Link as MuiLink, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../store/userSlice";
import { useNavigate } from "react-router";
import { resetLoginForm } from "../store/loginSlice";
import Lottie from "lottie-react";
import loadingDots from "../assets/loading.json";
export const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, loading, error } = useSelector((state) => state.user);
  const loggedInUser = useSelector((state) => state.loginForm.email);
  const token = localStorage.getItem("portal_token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      dispatch(fetchUser(loggedInUser));
      dispatch(resetLoginForm());
    }
  }, [dispatch, loggedInUser]);
  return (
    <Box>
      {loading ? (
        <Lottie animationData={loadingDots} />
      ) : (
        <Box>
          <Typography variant="h2">{username}'s Portal</Typography>
          <Typography variant="body1">Welcome {username}</Typography>
        </Box>
      )}
    </Box>
  );
};
