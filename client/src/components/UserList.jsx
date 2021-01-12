import React from "react";
import User from "./User";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  query {
    readAll {
      username
      fullName
    }
  }
`;

const UserList = () => {
  const { data } = useQuery(FEED_QUERY);
  return (
    <ol>
      {data && (
        <>
          {data.readAll.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </>
      )}
    </ol>
  );
};

export default UserList;
