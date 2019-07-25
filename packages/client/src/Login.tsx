import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import "./App.css";

const Login: React.FC = () => {
  return (
    <div className="Login">
      <div>
        <Query
          query={gql`
            {
              users {
                id
              }
            }
          `}
        >
          {({ loading, error, data }: any) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return <p>{data.users.map((item: { id: any }) => item.id)}</p>;
          }}
        </Query>
      </div>
    </div>
  );
};

export default Login;
