import React, { useEffect, useState } from "react";
import get, { createUrl } from "./util/http";
import { QuoteResponse } from "./util/types";
import "./App.css";

function App() {
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    get(createUrl("/random"))
      .then(({ quote }: QuoteResponse) => setQuote(quote))
      .catch(() => setQuote("INSERT DAD JOKE"));
  }, []);

  if (!quote) {
    return null;
  }

  return (
    <div className="App">
      <div className="quoteContainer">
        <div className="quote">{quote}</div>
        <div className="zirpinsLogo">- Philipp</div>
      </div>
    </div>
  );
}

export default App;
