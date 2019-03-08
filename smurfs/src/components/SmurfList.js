import React from "react";
import Smurf from "./Smurf";

export const SmurfList = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <Smurf  key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

