import { useState, useEffect } from 'react';
import Error from './Error';

const Form = ({ setPatients, patients,patient }) => {
  const [ name, setName ] = useState('');
  const [ owner, setOwner ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ high, setHigh ] = useState('');
  const [ symptoms, setSymptoms ] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.Email);
      setHigh(patient.High);
      setSymptoms(patient.Symptoms);
    }
  }, [patient]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if([name, owner, email, high, symptoms].includes('')){
      setError(true);
      return;
    };

    setError(false);

    const patient = {
      name,
      owner, 
      email, 
      high, 
      symptoms,
      id
    };

    setPatients([...patients, patient]);

    setName('');
    setOwner('');
    setEmail('');
    setHigh('');
    setSymptoms('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 "
      onSubmit= {handleSubmit}>
        { error && <Error> <p>All fields are required</p> </Error>}
        <div className="mb-5">
          <label htmlFor="petName" 
            className="block text-gray-700 uppercase font-bold">
            Pet name
          </label>
          <input 
            type="text"
            placeholder="Pet name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="petName"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />       
        </div>
        <div className="mb-5">
          <label htmlFor="owner" 
            className="block text-gray-700 uppercase font-bold">
            Owner name
          </label>
          <input 
            type="text"
            placeholder="Owner name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="owner"
            value={owner}
            onChange={(e)=>{setOwner(e.target.value)}}
          />       
        </div>
        <div className="mb-5">
          <label htmlFor="email" 
            className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input 
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            autoComplete="false"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />       
        </div>
        <div className="mb-5">
          <label htmlFor="highMedical" 
            className="block text-gray-700 uppercase font-bold">
            High medical
          </label>
          <input 
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="highMedical"
            value={high}
            onChange={(e)=>{setHigh(e.target.value)}}
          />       
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" 
            className="block text-gray-700 uppercase font-bold">
            symptoms
          </label>
          <textarea 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            name=""
            placeholder="Describe symptoms"
            id="symptoms"
            value={symptoms}
            onChange={(e)=>{setSymptoms(e.target.value)}} 
          />
        </div>

        <input type="submit" 
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        value={ patient.id ? "Edit patient" : "Add patient"} 
        />
      </form>
    </div>
  )
}

export default Form;