import profilePic from "../assets/placeholder.jpg";

function Hero() {
    return (
        <div className="hero">
            <img src={profilePic} alt="Profile" />
            <p>Hi my name is Itumeleng...</p>
        </div>
    )
}
export default Hero;