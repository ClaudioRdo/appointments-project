import Form from "./components/Form";
import PatientList from "./components/PatientList";
import Header from "./components/header";

function App() {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <Form />
      <PatientList />
    </div>
  )
}

export default App;
