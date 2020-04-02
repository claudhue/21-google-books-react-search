import React from "react";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <container fluid>
      <row>
        <col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </col>
      </row>
    </container>
  );
}

export default NoMatch;
