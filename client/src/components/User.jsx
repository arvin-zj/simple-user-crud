import { Button, Grid } from "@material-ui/core";
import React from "react";

const User = ({ user }) => (
  <li>
    <div>
      <h2>{user.username}</h2>
      <p>{user.fullName}</p>
    </div>
    <Grid display="flex">
      <Button variant="contained" color="primary">Update</Button>
      <Button variant="contained" color="secondary">Delete</Button>
    </Grid>
  </li>
);

export default User;
