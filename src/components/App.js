import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass down necessary props to the Home component */}
      <Home name={user.name} city={user.city} color={user.color} />
      
      {/* Pass down bio, github, and linkedin props to the About component */}
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />

      {/* Render the Links component */}
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}
export default App;
