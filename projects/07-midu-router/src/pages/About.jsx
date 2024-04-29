import { Link } from "../Link";

export default function AboutPage(){
    return (
      <>
        <h1>About</h1>
        <div>
          <img src="https://media.licdn.com/dms/image/D4D03AQGD-Ukdl5UKDQ/profile-displayphoto-shrink_200_200/0/1688576569361?e=2147483647&v=beta&t=PXRYGlMXzOLK1coNQURn5-hQUFydnSiZ7Y2_QTnsN_8" alt="Foto de Carlos" />
          <p>Hola! Me llamo Carlos Tabares</p>
        </div>
        <Link to={'/'}>Ir a la home</Link>
      </>
    )
  }