import logo from '../images/logo.svg'
const Home = () => {
  return (
    <>
      <div className="container">
        <header>
          <div>
            <img src={logo} alt="logo"></img>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <ul>
              <ol>00 HOME</ol>
              <ol>01 DESTINATION</ol>
              <ol>02 CREW</ol>
              <ol>03 TECHNOLOGY</ol>
            </ul>
          </div>
        </header>
        <section>
          <div>
            <h4>So, you want to travel to</h4>
            <h2>Space</h2>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div> Explore</div>
        </section>
      </div>
    </>
  )
}
export default Home
