const Patient = ({patient}) => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
          <span className="font-normal normal-case">{patient.name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
          <span className="font-normal normal-case">{patient.owner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{patient.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">High medical: {''}
          <span className="font-normal normal-case">{patient.high}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
          <span className="font-normal normal-case">{patient.symptoms}</span>
        </p>
      </div>
  )
}

export default Patient