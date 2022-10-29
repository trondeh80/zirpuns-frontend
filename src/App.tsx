import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import PunContainer from "./components/PunContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <PunContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
