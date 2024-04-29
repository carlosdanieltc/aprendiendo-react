import { navigate } from "../Link";

export default function HomePage(){
    return (
      <>
        <h1>Home Page</h1>
        <p>Esto es el ejercicio 07 de React!</p>
        <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
      </>
    )
  }