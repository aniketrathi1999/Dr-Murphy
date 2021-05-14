import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import HeartFailureDialog from "./HeartFailureDialog";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function HeartFailureCard() {
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
            Possibility of Heart Failure
          </Typography>

          <Typography style={{ fontSize: "13px", color: "#A9A9A9" }}>
            Heart failure, sometimes known as congestive heart failure, occurs
            when your heart muscle doesn't pump blood as well as it should.
            Certain conditions, such as narrowed arteries in your heart
            (coronary artery disease) or high blood pressure, gradually leave
            your heart too weak or stiff to fill and pump efficiently
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
      <HeartFailureDialog openHeart={openHeart} onChange={handleHeart} />
    </div>
  );
}

export default HeartFailureCard;
