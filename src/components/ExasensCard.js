import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HeartAttackDialog from "./HeartAttackDialog";
import ExasensDialog from "./ExasensDialog";

function ExasensCard() {
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
            Possibility of Lung Infection{" "}
          </Typography>

          <Typography style={{ fontSize: "13px", color: "#A9A9A9" }}>
            A group of diseases that affect the lungs and other parts of the
            respiratory system is called respiratory diseases. The most common
            chronic diseases are Chronic obstructive pulmonary disease (COPD),
            asthma and infections. Such problems are persistent and
            long-lasting. They can relapse and the patient can go into
            remission, only to suffer symptoms again at a later time.
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
      <ExasensDialog openHeart={openHeart} onChange={handleHeart} />
    </div>
  );
}

export default ExasensCard;
