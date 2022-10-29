import React from "react";
import { useQuery } from "@tanstack/react-query";
import get, { createUrl } from "../util/http";
import { QuoteResponse } from "../util/types";
import { REACT_QUERY_REPO_NAME } from "../util/constants";

import "./PunContainer.css";

const getFirstPun = (): Promise<QuoteResponse> => get(createUrl("/1"));

export default function PunContainer() {
  const { isLoading, error, data } = useQuery(
    [REACT_QUERY_REPO_NAME],
    getFirstPun
  );
  if (isLoading) return <>Loading...</>;
  if (error) {
    return <>Could not communicate with the API</>;
  }

  return (
    <div className="punContainer">
      <div className="pun">{data?.quote}</div>
      <div className="zirpinsLogo">- Philipp</div>
    </div>
  );
}
