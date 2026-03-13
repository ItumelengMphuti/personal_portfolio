import profilePic from "../assets/placeholder.jpg";

function Hero() {
  return (
    <section className="container my-5">
      <div className="row align-items-center">

        <div className="col-md-4 text-center">
          <img
            src={profilePic}
            alt="Itumeleng"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "200px" }}
          />
        </div>

        <div className="col-md-8">
          <h1>Hello</h1>
          <p className="lead">
            Hi my name is Itumeleng. I am a Computer Science and Mathematics
            student and a web developer passionate about building modern web
            applications with React and JavaScript.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;