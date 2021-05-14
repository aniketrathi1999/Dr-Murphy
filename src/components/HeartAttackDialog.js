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
  sex: "0",
  chest_pain_type: "0",
  resting_bp: "0",
  fasting_blood_sugar: "0",
  serum_cholestoral: "0",
  max_heart_rate: "0",
  resting_ecg: "0",
  exercise_induced_engima: "0",
  oldpeak: "0",
  slope: "0",
  number_major_vessels_covered: "0",
  thal: "0",
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

const cp = [
  {
    value: "0",
    label: "Typical Engina",
  },
  {
    value: "1",
    label: "Atypical Engina",
  },
  {
    value: "2",
    label: "Non enginal pain",
  },
  {
    value: "3",
    label: "Asymptotic",
  },
];

const mvc = [
  {
    value: "0",
    label: "0",
  },
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
];

const m = [
  {
    value: "0",
    label: "Normal",
  },
  {
    value: "1",
    label: "ST-T wave abnormality",
  },
  {
    value: "2",
    label: "Left ventricular hyper-trophy",
  },
];

const vessels = [
  {
    value: "0",
    label: "0",
  },
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
];

function HeartAttackDialog({ onChange, openHeart }) {
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
      c: info.chest_pain_type,
      b: info.resting_bp,
      e: info.serum_cholestoral,
      d: info.fasting_blood_sugar,
      g: info.resting_ecg,
      f: info.max_heart_rate,
      h: info.exercise_induced_engima,
      i: info.oldpeak,
      k: info.slope,
      l: info.number_major_vessels_covered,
      m: info.thal,
    };

    console.log(params);

    axios
      .post("http://localhost:5000/heart_detailed", JSON.stringify(params))
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
        <DialogTitle>Check for heart attack</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide your examined results from your blood sample and ECG plot.
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
                  Resting BP{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.resting_bp}
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      resting_bp: e.target.value,
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
                  Serum Cholestrol{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.serum_cholestoral}
                  onChange={(e) => {
                    setInfo({ ...info, serum_cholestoral: e.target.value });
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
                  Max Heart Rate{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.max_heart_rate}
                  onChange={(e) => {
                    setInfo({ ...info, max_heart_rate: e.target.value });
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
                  Old Peak{" "}
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.oldpeak}
                  onChange={(e) => {
                    setInfo({ ...info, oldpeak: e.target.value });
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
                  Chest Pain Type{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.chest_pain_type}
                  onChange={(e) => {
                    setInfo({ ...info, chest_pain_type: e.target.value });
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
                  {cp.map((option) => (
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
                  Fasting Sugar {">"} 120{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.fasting_blood_sugar}
                  onChange={(e) => {
                    setInfo({ ...info, fasting_blood_sugar: e.target.value });
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
                  Resting ECG{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.resting_ecg}
                  onChange={(e) => {
                    setInfo({ ...info, resting_ecg: e.target.value });
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
                  {m.map((option) => (
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
                  Exercise Induced Engima{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.exercise_induced_engima}
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      exercise_induced_engima: e.target.value,
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
                  Slope of the peak produced{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.slope}
                  onChange={(e) => {
                    setInfo({ ...info, slope: e.target.value });
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
                  {mvc.map((option) => (
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
                  Major Vessels Colored{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.number_major_vessels_covered}
                  onChange={(e) => {
                    setInfo({
                      ...info,
                      number_major_vessels_covered: e.target.value,
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
                  {vessels.map((option) => (
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
                  Thalassemia{" "}
                </Typography>
                <TextField
                  select
                  required
                  variant="outlined"
                  borderColor="#356680"
                  value={info.thal}
                  onChange={(e) => {
                    setInfo({ ...info, thal: e.target.value });
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
                  {thal.map((option) => (
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
                Chances of Heart Attack:
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

export default HeartAttackDialog;
