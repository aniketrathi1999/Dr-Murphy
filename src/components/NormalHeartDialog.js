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
  sex: "1",
  height: "0",
  weight: "0",
  diastolic_bp: "0",
  systolic_bp: "0",
  glucose: "1",
  cholestrol: "1",
  smoke: "0",
  alcohol: "0",
  active: "0",
};

const sex = [
  {
    value: "1",
    label: "Male",
  },
  {
    value: "2",
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

const cl = [
  {
    value: "1",
    label: "Normal",
  },
  {
    value: "2",
    label: "Above Normal",
  },
  {
    value: "3",
    label: "Much Above Normal",
  },
];

function NormalHeartDialog({ onChange, openHeart }) {
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
      j: info.sex,
      c: info.height,
      b: info.weight,
      e: info.systolic_bp,
      d: info.diastolic_bp,
      g: info.cholestrol,
      f: info.glucose,
      h: info.smoke,
      i: info.alcohol,
      k: info.active,
    };

    console.log(params);

    axios
      .post("http://localhost:5000/heart_normal", JSON.stringify(params))
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
        <DialogTitle>Check of Cardiac Issues</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide your examined objective and subjective features from your
            blood sample.
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
                  Weight{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.weight}
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      weight: e.target.value,
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
                  Systolic BP{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.systolic_bp}
                  onChange={(e) => {
                    setInfo({ ...info, systolic_bp: e.target.value });
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
                  Diastolic BP{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.diastolic_bp}
                  onChange={(e) => {
                    setInfo({ ...info, diastolic_bp: e.target.value });
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
                  Cholestrol Level{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.cholestrol}
                  onChange={(e) => {
                    setInfo({ ...info, cholestrol: e.target.value });
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
                  {cl.map((option) => (
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
                  style={{ width: "600px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Glucose Level{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.glucose}
                  onChange={(e) => {
                    setInfo({ ...info, glucose: e.target.value });
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
                  {cl.map((option) => (
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
                  style={{ width: "600px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Smoking Status{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.smoke}
                  onChange={(e) => {
                    setInfo({ ...info, smoke: e.target.value });
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
                  style={{ width: "600px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Alcohol Intake{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.alcohol}
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      alcohol: e.target.value,
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
                  style={{ width: "600px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Physical Activity{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.active}
                  onChange={(e) => {
                    setInfo({ ...info, active: e.target.value });
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
                  style={{ width: "600px", fontSize: "15px", height: "15px" }}
                >
                  {" "}
                  Gender{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.sex}
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      sex: e.target.value,
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
                marginLeft: "200px",
              }}
            >
              <Typography
                variant="subtitle1"
                style={{ width: "230px", fontSize: "15px", height: "15px" }}
              >
                Chances of Cardiac Diseases:
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

export default NormalHeartDialog;
