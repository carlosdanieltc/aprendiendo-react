import { Link } from "../Link";

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir al home',
    description: 'Hola! Me llamo Carlos Tabares y estoy creando un clon de React Router'
  },
  en: {
    title: 'About us',
    button: 'Go to home page',
    description: 'Hello! My name is Carlos Tabares and I am creating a clone of React Router'
  },
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}){
    const i18n = useI18n(routeParams.lang ?? 'es')

    return (
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img src="https://media.licdn.com/dms/image/D4D03AQGD-Ukdl5UKDQ/profile-displayphoto-shrink_200_200/0/1688576569361?e=2147483647&v=beta&t=PXRYGlMXzOLK1coNQURn5-hQUFydnSiZ7Y2_QTnsN_8" alt="Foto de Carlos" />
          <p>{i18n.description}</p>
        </div>
        <Link to={'/'}>{i18n.button}</Link>
      </>
    )
  }