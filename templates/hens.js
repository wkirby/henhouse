import { templateString } from "./lib/utils";
import React from "react";

export default ({ name, type, description, ...props }) => {
  return (
    <div
      style={{
        padding: 64,
        color: 'SlateGray',
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <h1 style={{ marginBottom: 0, color: "DarkSlateGray" }}>{name}</h1>
      <h2>{type}</h2>
      <p>{templateString(description, { name })}</p>
    </div>
  );
};
