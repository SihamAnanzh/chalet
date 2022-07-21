import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

function CardImg({ item }) {
  let id = 1;
  return (
    <Link href="/product/1">
      <Card
        animate={{ y: 100 }}
        sx={{ maxWidth: 345, width: item.activitis && "500px" }}
        className="card"
      >
        <CardActionArea>
          {item.activitis ? (
            <img
              src={item.img}
              className="cardImg"
              component="img"
              height="300px"
              width="100%"
              style={{ objectFit: "cover", height: "310px" }}
              image={item.img}
              alt={item.img}
            />
          ) : (
            <CardMedia
              className="cardImg"
              component="img"
              height="140"
              image={item.img}
              alt={item.img}
            />
          )}

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            {!item.activitis && (
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
            READ MORE
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}

export default CardImg;
