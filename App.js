import "./styles.css";
import Header from "./components/Header";
import Search from "./components/Search";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}
