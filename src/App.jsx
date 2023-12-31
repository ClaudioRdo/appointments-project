import { useState, useEffect } from "react";
import Form from "./components/Form";
import PatientList from "./components/PatientList";
import Header from "./components/header";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLocalStorage = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLocalStorage);
    };
    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const patientsFiltered = patients.filter(patient => {
      patient.id !== id
    });
    setPatients(patientsFiltered);
  };

  return (
    <div className="container mx-auto pt-10 bg-blue-100">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App;
