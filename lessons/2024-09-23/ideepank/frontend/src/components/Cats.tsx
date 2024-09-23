import React, { useEffect, useState } from "react"
import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material"

type Cat = { id: string; name: string; createdAt: number } //; updatedAt = number | null; deleted:boolean; };

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([])

  return (
    <Box>
      <Typography></Typography>
      <List>
        {cats.map(cat => (
          <ListItem key={cat.id}>{cat.name}</ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Cats
