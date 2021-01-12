import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const CreateUser = ({ formState, setFormState, createUser }) => {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createUser();
          setFormState({ username: '', fullName: '' })
        }}
      >
        <TextField
          placeholder="Username"
          value={formState.username}
          onChange={(event) => {
            setFormState({
              ...formState,
              username: event.target.value,
            });
          }}
          type="text"
        />
        <TextField
          placeholder="Full Name"
          value={formState.fullName}
          onChange={(event) => {
            setFormState({
              ...formState,
              fullName: event.target.value,
            });
          }}
          type="text"
        />
        <Button
            variant="contained"
            color="primary"
            type="submit"
        >
            Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateUser;
