import React from "react"
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material"

type SnackbarProps = {
  teateRibaAvatud: boolean
  teade: string
  teateTyyp: "success" | "error"
  onClose: (
    event: Event | React.SyntheticEvent<Element, Event>,
    reason?: SnackbarCloseReason,
  ) => void
}

const NotificationSnackbar = ({
  teateRibaAvatud,
  teade,
  teateTyyp,
  onClose,
}: SnackbarProps) => {
  return (
    <Snackbar
      open={teateRibaAvatud}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity={teateTyyp}
        onClose={onClose}
        sx={{ width: "100%" }}
      >
        {teade}
      </Alert>
    </Snackbar>
  )
}

export default NotificationSnackbar
