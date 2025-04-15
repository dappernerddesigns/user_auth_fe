import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import { deleteAccount } from "../api";
import { useNavigate } from "react-router";
import { clearUser } from "../store/features/userSlice";
import { resetLoginForm } from "../store/features/loginSlice";
import { useDispatch } from "react-redux";
export const UpdateUser = ({ username, email, user_id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    await deleteAccount(user_id);
    dispatch(clearUser());
    dispatch(resetLoginForm());
    navigate("/");
  };
  return (
    <Box id="user_details">
      <Typography>Username: {username}</Typography>
      <Typography>Email: {email}</Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ alignSelf: "flex-end" }}
        onClick={handleClickOpen}
      >
        Delete Account <DeleteForeverIcon />
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"Permenantly Delete Data"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            By continuing you will permenantly remove your account and
            subsequent data from our databases. Do you want to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleDelete} variant="contained" color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
