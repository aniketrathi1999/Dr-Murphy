import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NormalHeartDialog from "./NormalHeartDialog";

function NormalHeartCard() {
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
            Presence of Cardiac Issues
          </Typography>

          <Typography style={{ fontSize: "13px", color: "#A9A9A9" }}>
            Occasionally, a person may arrive in the emergency room with the
            symptoms of a heart attack, including the presence of cardiac
            enzymes in the blood that indicate damage to the heart muscle, as
            well as abnormalities on an electrocardiogram (EKG or ECG)
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
      <NormalHeartDialog openHeart={openHeart} onChange={handleHeart} />
    </div>
  );
}

export default NormalHeartCard;
