import { useState } from "react";
import Form from "./components/Form";
import PatientList from "./components/PatientList";
import Header from "./components/header";

function App() {
  const [ patients, setPatients ] = useState([]);

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          patients={patients}
          setPatients={setPatients}
        />
        <PatientList 
          patients={patients}
        />
      </div>
    </div>
  )
}

export default App;
