import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";
import HeartFailureDialog from "./HeartFailureDialog";
import Landing from "./Landing";
import HeartFailureCard from "./HeartFailureCard";
import HeartAttackDialog from "./HeartAttackDialog";
import HeartAttackCard from "./HeartAttackCard";
import NormalHeartDialog from "./NormalHeartDialog";
import NormalHeartCard from "./NormalHeartCard";
import ExasensCard from "./ExasensCard";
import CovidCard from "./CovidCard";

function Body() {
  return (
    <div>
      <Header />
      <Landing />
      <div
        style={{
          display: "flex",
          marginTop: "150px",
          alignSelf: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            alignSelf: "center",

            fontSize: "4vh",
            fontWeight: "bold",
          }}
        >
          Cardiac Diseases
        </Typography>
      </div>
      <div
        style={{
          marginTop: "5vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "2vw",
          marginRight: "2vw",
        }}
      >
        <NormalHeartCard />
        <HeartAttackCard />
        <HeartFailureCard />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "150px",
          alignSelf: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            alignSelf: "center",

            fontSize: "4vh",
            fontWeight: "bold",
          }}
        >
          Respiratory Diseases
        </Typography>
      </div>
      <div
        style={{
          marginTop: "5vh",
          display: "flex",
          flexDirection: "row",

          marginLeft: "2vw",
          marginRight: "2vw",
        }}
      >
        <ExasensCard />
        <CovidCard />
      </div>
    </div>
  );
}

export default Body;
