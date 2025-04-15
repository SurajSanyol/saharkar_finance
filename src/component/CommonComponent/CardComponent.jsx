import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export default function CardComponent({ image, subtitle, title }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
          sx={{
            width: "100%", 
            objectFit: "contain",
            objectPosition: "center", 
            overflow: "hidden",
          //  filter: 'brightness(0) saturate(100%) invert(9%) sepia(99%) saturate(2593%) hue-rotate(212deg) brightness(89%) contrast(101%)',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"'Poppins', sans-serif",
            fontWeight: "500",
            fontStyle: "normal",
          }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "400",
          fontSize: "15px",
           }}>
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More ...
        </Button>
      </CardActions>
    </Card>
  );
}
