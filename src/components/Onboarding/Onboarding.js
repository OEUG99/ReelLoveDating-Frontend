
import './Onboarding.css';
import {useNavigate} from "react-router-dom";
function Onboarding() {
    const navigate = useNavigate()

    async function handleClick(site) {
        navigate(site)
    }

    return (
            <div id="outer-onboarding">
                <div id="inner-onboarding" className="text-center p-4 p-lg-5">
                    <h1 className="fw-bold text-primary mb-1">Reel Lovers™</h1>
                    <h2 className="fw-bold mb-4">The dating site for movie goers...</h2>
                    <button className="btn btn-primary fs-5 me-2 py-2 px-4" type="button"
                            onClick={() => handleClick("/login")}>Login
                    </button>
                    <button className="btn btn-primary fs-5 me-2 py-2 px-4" type="button"
                            onClick={() => handleClick("/register")}>Register
                    </button>
                </div>
            </div>
    )
}
export default Onboarding;