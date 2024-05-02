import { Link } from "../Link";

export default function Page404(){
    return (
        <>
            <div>
                <h1>This is NOT fine</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsEWPo7GBdEGdKPnscz304eoI7-Dyd6m3eK36Qksadg&s" alt="" />
            </div>
            <Link to={'/'}>Volver a la Home</Link>
        </>
    )
}