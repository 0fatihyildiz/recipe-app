import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { Icon } from "@iconify/react";
import { Rating } from "@mui/material";

export default function RecipeReviewCard() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        cursor: "pointer",
      }}
    >
      <CardHeader
        sx={{ padding: "5px 0", paddingRight: "10px" }}
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], width: 30, height: 30, fontSize: "14px" }}
            aria-label="recipe"
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Icon icon="iconamoon:heart-light" height={20} />
          </IconButton>
        }
        title={<span className="font-semibold -ml-2">Shrimp Paella</span>}
      />
      <CardMedia
        component="img"
        sx={{ borderRadius: "12px" }}
        height="194"
        image="https://marketplace.canva.com/EAFHm4JWsu8/1/0/1600w/canva-pink-landscape-desktop-wallpaper-HGxdJA_xIx0.jpg"
        alt="Paella dish"
      />
      <CardContent sx={{ padding: "8px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
        <span className="font-semibold">Shrimp Paella</span>
        <Rating name="read-only" value={3} size="small" className="-ml-0.5" readOnly />
      </CardContent>
    </Card>
  );
}
