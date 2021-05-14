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
  age: "0",
  anaemia: "0",
  creatinine_phosphokinase: "0",
  diabetes: "0",
  ejection_fraction: "0",
  high_blood_pressure: "0",
  platelets: "0",
  serum_creatinine: "0",
  serum_sodium: "0",
  sex: "0",
  smoking: "0",
  follow_up_period: "0",
};

const sex = [
  {
    value: "1",
    label: "Male",
  },
  {
    value: "0",
    label: "Female",
  },
];

const truth = [
  {
    value: "0",
    label: "No",
  },
  {
    value: "1",
    label: "Yes",
  },
];

function HeartFailureDialog({ onChange, openHeart }) {
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
      a: info.age,
      b: info.anaemia,
      c: info.creatinine_phosphokinase,
      d: info.diabetes,
      e: info.ejection_fraction,
      f: info.high_blood_pressure,
      g: info.platelets,
      h: info.serum_creatinine,
      i: info.serum_sodium,
      j: info.sex,
      k: info.smoking,
      l: info.follow_up_period,
    };

    console.log(params);

    axios
      .post("http://localhost:5000/heartfailurepredict", JSON.stringify(params))
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

    // axios
    //   .get(
    //     `http://localhost:5000/heartfailurepredict?a=${params.a}&b=${params.b}&c=${params.c}&e=${params.e}&f=${params.f}&g=${params.g}&h=${params.h}&i=${params.i}&j=${params.j}&k=${params.k}&l=${params.l}`
    //   )
    //   .then((response) => {
    //     setProbability(response.data);
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   });
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
        <DialogTitle>Check for heart failure</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide your examined features from heart test samples.
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
                  Age{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.age}
                  onChange={(e) => {
                    setInfo({ ...info, age: e.target.value });
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
                  CPK Level{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.creatinine_phosphokinase}
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      creatinine_phosphokinase: e.target.value,
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
                  Ejection Fraction{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.ejection_fraction}
                  onChange={(e) => {
                    setInfo({ ...info, ejection_fraction: e.target.value });
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
                  Serum Creatinine{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.serum_creatinine}
                  onChange={(e) => {
                    setInfo({ ...info, serum_creatinine: e.target.value });
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
                  Serum Sodium{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.serum_sodium}
                  onChange={(e) => {
                    setInfo({ ...info, serum_sodium: e.target.value });
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
                  Follow Up Period{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.follow_up_period}
                  onChange={(e) => {
                    setInfo({ ...info, follow_up_period: e.target.value });
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
                  Platelet Count{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.platelets}
                  onChange={(e) => {
                    setInfo({ ...info, platelets: e.target.value });
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
                  style={{ width: "130px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Anaemia{" "}
                </Typography>
                <TextField
                  select
                  label="Anaemia"
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.anaemia}
                  onChange={(e) => {
                    setInfo({ ...info, anaemia: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                >
                  {truth.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                  style={{ width: "130px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Smoking Status{" "}
                </Typography>
                <TextField
                  select
                  label="Smoking"
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.smoking}
                  onChange={(e) => {
                    setInfo({ ...info, smoking: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                >
                  {truth.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                  style={{ width: "130px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  High BP{" "}
                </Typography>
                <TextField
                  select
                  label="High BP"
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.high_blood_pressure}
                  onChange={(e) => {
                    setInfo({ ...info, high_blood_pressure: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                >
                  {truth.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                  style={{ width: "130px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Diabetes{" "}
                </Typography>
                <TextField
                  select
                  label="Diabetes"
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.diabetes}
                  onChange={(e) => {
                    setInfo({ ...info, diabetes: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                >
                  {truth.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                  style={{ width: "130px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Gender{" "}
                </Typography>
                <TextField
                  select
                  label="Gender"
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.sex}
                  onChange={(e) => {
                    setInfo({ ...info, sex: e.target.value });
                  }}
                  InputProps={{
                    style: {
                      width: "150px",
                      height: "30px",
                      borderColor: "#356680",
                      color: "black",
                    },
                  }}
                >
                  {sex.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "100px",
              }}
            >
              <Typography
                variant="subtitle1"
                style={{ width: "230px", fontSize: "15px", height: "15px" }}
              >
                Chances of Heart Failure:
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

export default HeartFailureDialog;
