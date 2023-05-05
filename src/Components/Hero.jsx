const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container row">
          <div className="hero__text">
            <h1>Responsive layouts don’t have to be a struggle</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <a href="#" className="btn">
              I want to learn
            </a>
          </div>
          <img
            src="images/hero-img.jpg"
            alt="UX design sketches"
            className="hero__img"
          />
        </div>
      </section>
    </>
  );
};
export default Hero;
