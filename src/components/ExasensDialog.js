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
  imagery_part_min: "0",
  imagery_part_avg: "0",
  real_part_min: "0",
  sex: "0",
  real_part_avg: "0",
  smoking: "0",
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

const thal = [
  {
    value: "0",
    label: "Normal",
  },
  {
    value: "1",
    label: "Fixed Defect",
  },
  {
    value: "2",
    label: "Reversable Defect",
  },
];

const smoking = [
  {
    value: "1",
    label: "Non Smoker",
  },
  {
    value: "2",
    label: "Ex-Smoker",
  },
  {
    value: "3",
    label: "Active-Smoker",
  },
];

function ExasensDialog({ onChange, openHeart }) {
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
      j: info.imagery_part_min,
      c: info.imagery_part_avg,
      b: info.real_part_min,
      e: info.real_part_avg,
      d: info.sex,

      f: info.smoking,
    };

    console.log(params);

    axios
      .post("http://localhost:5000/lungs_exasens", JSON.stringify(params))
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
        <DialogTitle>Check for respiratory diseases</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide examined input parameters from your saliva test sample.
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
                  Real Part Min{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.real_part_min}
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      real_part_min: e.target.value,
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
                  Real Part Average{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.real_part_avg}
                  onChange={(e) => {
                    setInfo({ ...info, real_part_avg: e.target.value });
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
                  Imagery Part Avg{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.imagery_part_avg}
                  onChange={(e) => {
                    setInfo({ ...info, imagery_part_avg: e.target.value });
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
                  Imagery Part Min{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.imagery_part_min}
                  onChange={(e) => {
                    setInfo({ ...info, imagery_part_min: e.target.value });
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
                  Gender{" "}
                </Typography>
                <TextField
                  select
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
                  Smoking Status
                </Typography>
                <TextField
                  select
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
                  {smoking.map((option) => (
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
                Respiratory Disease Type:
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

export default ExasensDialog;
