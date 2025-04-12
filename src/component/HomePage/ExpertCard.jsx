import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ExpertCard({ image, name, profile }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image}
          sx={{
            width: "100%", // Takes full width of card
            objectFit: "cover",
            objectPosition: "center", // Ensures image covers the space
            overflow: "hidden",
          }}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "400",
              fontStyle: "normal",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "400",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            {profile}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
