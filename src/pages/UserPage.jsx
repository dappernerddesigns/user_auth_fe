import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../store/features/userSlice";
import { resetLoginForm } from "../store/features/loginSlice";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import loadingDots from "../assets/loading.json";
import { UpdateUser } from "../components/UpdateUser";

export const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, loading, error, email, user_id } = useSelector(
    (state) => state.user
  );

  const token = localStorage.getItem("portal_token");

  useEffect(() => {
    dispatch(resetLoginForm());
    if (!token || user_id === "") {
      navigate("/");
    } else {
      try {
        dispatch(fetchUser(user_id));
      } catch (err) {
        if (token) {
          localStorage.removeItem("portal_token");
        }
        navigate("/");
      }
    }
  }, [dispatch]);
  if (error) {
    return (
      <Box>
        <Typography variant="h3">
          We have encountered a problem fetching your data.
        </Typography>
        <Typography variant="body1">
          Try refreshing the page and logging in again. If the issue persists
          please contact us.
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      id="user_page"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {loading ? (
        <Lottie animationData={loadingDots} className="loading_dots" />
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ mb: 4, mt: 4 }}>
            {username}'s Portal
          </Typography>

          <UpdateUser username={username} email={email} user_id={user_id} />
        </Box>
      )}
    </Box>
  );
};
