import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useMutation, gql } from "@apollo/client";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import "../styles/App.css";

const CREATE_USER_MUTATION = gql`
  mutation($username: String!, $fullName: String!) {
    create(username: $username, fullName: $fullName) {
      id
      username
      fullName
    }
  }
`;

function App() {
  const [formState, setFormState] = useState({
    username: "",
    fullName: "",
  });
  const [createUser] = useMutation(CREATE_USER_MUTATION, {
    variables: {
      username: formState.username,
      fullName: formState.fullName,
    },
  });
  return (
    <Container>
      <CreateUser
        formState={formState}
        setFormState={setFormState}
        createUser={createUser}
      />
      <UserList />
    </Container>
  );
}

export default App;
