import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HeartAttackDialog from "./HeartAttackDialog";
import ExasensDialog from "./ExasensDialog";
import CovidDialog from "./CovidDialog";

function CovidCard() {
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
          marginLeft: "280px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <CardContent>
          <Typography style={{ color: "#ffffff" }}>
            Covid-19 Prediction
          </Typography>

          <Typography style={{ fontSize: "13px", color: "#A9A9A9" }}>
            The COVID-19 is an ongoing global pandemic caused by severe acute
            respiratory syndrome coronavirus 2 (SARS-CoV-2). Symptoms of
            COVID-19 are highly variable, from none to life-threateningly
            severe. Transmission mainly occurs when an infected person is in
            contact with another person. Tiny droplets containing the virus
            leave an infected person as they breathe, cough, or sneeze and enter
            another person via their mouth, nose, or eyes.
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
      <CovidDialog openHeart={openHeart} onChange={handleHeart} />
    </div>
  );
}

export default CovidCard;
