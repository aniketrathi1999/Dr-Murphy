import React from "react";
import { useState, useEffect } from "react";
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
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";

const initialState = {
  start_position: "0",
  end_position: "0",
  chou_fasman: "0",
  emini: "0",
  k_t: "0",
  parker: "0",
  isoelectric_point: "0",
  aromaticity: "0",
  hydrophobivity: "0",
  stability: "0",
};

function CovidDialog({ onChange, openHeart }) {
  const [open, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState(initialState);
  let [probability, setProbability] = React.useState(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleHeart = () => {
    onChange(!openHeart);
  };

  useEffect(() => {
    console.log(probability);
  }, [probability]);

  const predict = () => {
    const params = {
      a: info.start_position,
      j: info.end_position,
      c: info.chou_fasman,
      b: info.emini,
      d: info.k_t,
      f: info.parker,
      g: info.isoelectric_point,
      h: info.aromaticity,
      i: info.hydrophobivity,
      k: info.stability,
    };

    console.log(params);

    axios
      .post("http://localhost:5000/covid_peptides", JSON.stringify(params))
      .then((response) => {
        if (response.data === "1") {
          setProbability("Yes");
        } else if (response.data === "0") {
          setProbability("No");
        } else {
          setProbability("Undefined");
        }
        console.log(response.data);
      });
  };

  return (
    <div>
      <Dialog
        open={openHeart}
        onClose={handleHeart}
        aria-labelledby="form-dialog-title"
        maxWidth="lg"
        scroll="paper"
      >
        <DialogTitle>Check for Covid-19 using Epitope Prediction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide examined peptide and protein features from antigen protein
            test.
          </DialogContentText>

          <Grid
            style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
          >
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#97A1A9",
                  width: "250px",
                  height: "45px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ width: "200px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Start Position{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.start_position}
                  onChange={(e) => {
                    setInfo({ ...info, start_position: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                />
              </Grid>

              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#97A1A9",
                  width: "250px",
                  height: "45px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ width: "200px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Emini{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.emini}
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      emini: e.target.value,
                    });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                ></TextField>
              </Grid>

              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#97A1A9",
                  width: "250px",
                  height: "45px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ width: "200px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Parker{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.parker}
                  onChange={(e) => {
                    setInfo({ ...info, parker: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                ></TextField>
              </Grid>

              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#97A1A9",
                  width: "250px",
                  height: "45px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ width: "200px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Chou Fasman{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.chou_fasman}
                  onChange={(e) => {
                    setInfo({ ...info, chou_fasman: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                ></TextField>
              </Grid>

              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#97A1A9",
                  width: "250px",
                  height: "45px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ width: "200px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  End Position{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.end_position}
                  onChange={(e) => {
                    setInfo({ ...info, end_position: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                ></TextField>
              </Grid>
            </Grid>

            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "100px",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#97A1A9",
                  width: "250px",
                  height: "45px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ width: "600px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Kolaskar Tongaonkar{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.k_t}
                  onChange={(e) => {
                    setInfo({ ...info, k_t: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                ></TextField>
              </Grid>

              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#97A1A9",
                  width: "250px",
                  height: "45px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ width: "600px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Isoelectric Point
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.isoelectric_point}
                  onChange={(e) => {
                    setInfo({ ...info, isoelectric_point: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                ></TextField>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#97A1A9",
                  width: "250px",
                  height: "45px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ width: "600px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Aromaticity
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.aromaticity}
                  onChange={(e) => {
                    setInfo({ ...info, aromaticity: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                ></TextField>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#97A1A9",
                  width: "250px",
                  height: "45px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ width: "600px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Hydrophobivity
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.hydrophobivity}
                  onChange={(e) => {
                    setInfo({ ...info, hydrophobivity: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                ></TextField>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#97A1A9",
                  width: "250px",
                  height: "45px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ width: "600px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Stability
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.stability}
                  onChange={(e) => {
                    setInfo({ ...info, stability: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                ></TextField>
              </Grid>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "200px",
              }}
            >
              <Typography
                variant="subtitle1"
                style={{ width: "230px", fontSize: "15px", height: "15px" }}
              >
                Chances of Covid-19:
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ width: "200px", fontSize: "15px", height: "15px" }}
              >
                {probability}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions style={{ backgroundColor: "#000000" }}>
          <Button
            onClick={handleHeart}
            style={{ marginRight: "auto", color: "#ffffff" }}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setInfo(initialState);
            }}
            color="#14AFF1"
            style={{ borderColor: "#14AFF1", color: "#ffffff" }}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            onClick={predict}
            style={{ backgroundColor: "#ffffff" }}
          >
            Predict
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CovidDialog;
