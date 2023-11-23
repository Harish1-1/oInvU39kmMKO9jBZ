import {Link} from "react-router-dom";

const landingpage=()=>{
    return(
        <div>
            <h1>Name:Harish</h1>
            <h1>Btech:March-2024</h1>
            <h1>technologies</h1>
            <p>Full stack Web Development using Reactjs And Nodejs</p>
            <p>coding Languages:Python,Java</p>
            <p>Machine Learning</p>
            <p>Deep Learning</p>
            <h1>Click on The Below Link to Calculate BMi</h1>
            <Link to="/bmi">BMI Calculator</Link>
        </div>
    )
}

export default landingpage