import { useId } from "react";
import Patient from "./Patient";

const PatientList = ({ patients, setPatient }) => {

  const id = useId();
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">
              Patients and appointments
            </span>
          </p>

          {patients.map(patient => (
            <Patient
              key={id}
              patient={patient}
              setPatient={setPatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">
              Add patients 
            </span>
          </p>
        </>
      )}
    </div>
  )
}

export default PatientList;