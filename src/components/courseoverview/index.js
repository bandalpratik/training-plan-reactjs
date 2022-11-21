import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

export default function CourseOverview({ chapters }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {chapters.map((dt) => {
            return (
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate(dt.url)}>
                  <ListItemText primary={dt.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}
