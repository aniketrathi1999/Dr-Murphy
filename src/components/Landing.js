import React from "react";
import {
  Grid,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Typography,
  Snackbar,
} from "@material-ui/core";
import companyLogo from "../assets/doc1.png";

function Landing() {
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography style={{ fontSize: "60px", fontWeight: "bold" }}>
            Who is Dr. Murphy?
          </Typography>

          <Typography
            style={{
              fontSize: "3vh",
              fontWeight: "bolder",
              marginTop: "2vh",
              width: "700px",
            }}
          >
            AI-Enabled digital healthcare mobile application for diagnosing the
            patient with a disease using their symptoms as input. This
            application aims to provide timely and conveyable healthcare
            diagnoses as well as solutions. The diseases that are our
            application's focal point are cardiovascular diseases and
            respiratory diseases. Early prognosis and management of
            cardiovascular diseases is the need of the day as these diseases are
            the most common cause of death globally. Other malignant diseases
            include respiratory diseases. And our application will provide a
            broad experience to users and make them more aware of their health
            and body.
          </Typography>
        </div>
        <img src={companyLogo} style={{ marginLeft: "auto" }} />
      </div>
    </div>
  );
}

export default Landing;
