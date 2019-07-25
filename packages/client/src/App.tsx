import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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

export default App;
