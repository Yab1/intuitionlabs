import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "@/layouts";
import { HomePage } from "@/pages";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/intuitionlabs/*" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
