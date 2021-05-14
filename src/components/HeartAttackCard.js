import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HeartAttackDialog from "./HeartAttackDialog";

function HeartAttackCard() {
  let [openHeart, setOpenHeart] = React.useState(false);

  const handleHeart = () => {
    setOpenHeart(!openHeart);
  };
  return (
    <div>
      <Card
        style={{
          width: "256px",
          height: "351px",
          backgroundColor: "#000000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <CardContent>
          <Typography style={{ color: "#ffffff" }}>
            Possibility of Heart Attack
          </Typography>

          <Typography style={{ fontSize: "13px", color: "#A9A9A9" }}>
            A heart attack occurs when an artery supplying your heart with blood
            and oxygen becomes blocked. Fatty deposits build up over time,
            forming plaques in your heart's arteries. If a plaque ruptures, a
            blood clot can form and block your arteries, causing a heart attack.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleHeart}
            size="small"
            style={{ color: "#ffffff" }}
          >
            Check Symptoms
          </Button>
        </CardActions>
      </Card>
      <HeartAttackDialog openHeart={openHeart} onChange={handleHeart} />
    </div>
  );
}

export default HeartAttackCard;
