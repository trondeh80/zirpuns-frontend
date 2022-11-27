import React from "react";
import { useQuery } from "@tanstack/react-query";
import get, { createUrl } from "../util/http";
import { QuoteResponse } from "../util/types";
import { REACT_QUERY_REPO_NAME } from "../util/constants";

import "./PunContainer.css";

const getRandomPun = (): Promise<QuoteResponse> =>
  get(createUrl("/puns/random"));

export default function PunContainer() {
  const { isLoading, error, data } = useQuery(
    [REACT_QUERY_REPO_NAME],
    getRandomPun
  );
  if (isLoading) return <>Loading...</>;
  if (error) {
    return <>Could not communicate with the API</>;
  }

  if (!data) {
    return null;
  }
  console.log("data", data);
  const { quote, quotePun, author } = data;

  return (
    <div className="punContainer">
      <h1>ZirPuns</h1>
      <div className="pun">
        <p>{quote}</p>
        <p>{quotePun ?? ""}</p>
      </div>
      <p className="author">- {author ?? "Anonym"}</p>
    </div>
  );
}
