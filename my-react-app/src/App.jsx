import { useState } from "react";
import "./App.css";

function App() {
  // EASY
  const [count, setCount] = useState(0);
  const [people] = useState([
    { name: "John Doe", number: "123-456-7890", dob: "January 1, 2000" },
    { name: "Jane Smith", number: "987-654-3210", dob: "February 14, 1990" },
    { name: "Sam Johnson", number: "456-789-1234", dob: "March 3, 1985" },
  ]);

  // MEDIUM
  const BasicInfo = ({ person }) => (
    <div
      style={{
        marginBottom: "20px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <p>Name: {person.name}</p>
      <p>Number: {person.number}</p>
      <p>Date of Birth: {person.dob}</p>
    </div>
  );

  return (
    <>
      {/* VERY EASY */}
      <hr />
      <h2>Very Easy</h2>
      <div>
        <p>Name: John Doe</p>
        <p>Number: 123-456-7890</p>
        <p>Date of Birth: January 1, 2000</p>
      </div>

      {/* EASY */}
      <hr />
      <h2>Easy</h2>
      <div>
        <p>Name: {people[0].name}</p>
        <p>Number: {people[0].number}</p>
        <p>Date of Birth: {people[0].dob}</p>
      </div>

      {/* MEDIUM */}
      <hr />
      <h2>Medium</h2>
      <BasicInfo person={people[0]} />

      {/* HARD */}
      <hr />
      <h2>Hard</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    </>
  );
}

export default App;
