import React, { useEffect, useState } from "react"
import { Box, Button, Stack, TextField } from "@mui/material"

const SubmitCat = () => {
  // Snackbar

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField></TextField>
          <Button></Button>
        </Stack>
      </form>
    </Box>
  )
}

export default SubmitCat
