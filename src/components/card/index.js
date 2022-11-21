import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CourseOverview from "../courseoverview";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 540, maxHeight: 550, margin: "20px" }}>
      <CardMedia
        component="img"
        height="190"
        image={course.img}
        alt="No photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.subHeading}
        </Typography>

        <CourseOverview chapters={course.chapters} />
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(course.chapters[0].url)} size="large">
          Start
        </Button>
      </CardActions>
    </Card>
  );
}
