import React from "react";
import Card1 from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Card({ key, name, image, char, ingredients }) {
  return (
    <Card1 className="border rounded-lg shadow-black" sx={{ maxWidth: 500, maxHeight:1500 }}>
      <CardHeader className="text-center bg-slate-400" title={name} />
      <CardMedia
        
        component="img"
        height="200"
        image={
          image
            ? image
            : "http://2.bp.blogspot.com/_LYnjZQ_c4yo/TQog-hpyLEI/AAAAAAAAAD8/Wp8Y0_YovOA/s1600/IMG_0194.JPG"
        }
        alt="Paella dish"
      />
      <CardContent className="bg-slate-400 ">
        <Typography variant="body2" color="text.secondary">
          <b>Characteristics : </b>
          <span className="font-lg">{char ? char : name}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Ingredients : </b>
          <span className="font-lg m-1">{ingredients}</span>
        </Typography>
      </CardContent>
    </Card1>
  );
}
