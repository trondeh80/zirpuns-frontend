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

  return (
    <div className="punContainer">
      <h1>ZirPuns</h1>
      <div className="pun">
        <p>What do NASA programmers do on the weekends?</p>
        <p>They hit the space bar.</p>
      </div> 
      <p className="author">-Andre</p>
    </div>
  );
}
