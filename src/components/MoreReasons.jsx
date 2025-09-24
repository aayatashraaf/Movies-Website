import "../Styles/MoreReasons.css";
import tvImg from "../assets/television-hdtv-svgrepo-com.svg";
import downloadImg from "../assets/arrow-svgrepo-com.svg";
import everywhereImg from "../assets/Satellite-svgrepo-com.svg";
import kidsImg from "../assets/smiley-svgrepo-com.svg";

function MoreReasons() {
  return (
    <section className="moreReasons">
      <div className="container reasonsContainer">
        <h2 className="SectionTitle mb-5">More Reasons to Join</h2>
        <div className="cards">
          <div className="card">
            <img src={tvImg} alt="Enjoy on your TV" loading="lazy" />
            <h4>Enjoy on your TV</h4>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>

          <div className="card">
            <img src={downloadImg} alt="Download your shows" loading="lazy" />
            <h4>Download your shows</h4>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
          </div>

          <div className="card">
            <img src={everywhereImg} alt="Watch everywhere" loading="lazy" />
            <h4>Watch everywhere</h4>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>

          <div className="card">
            <img src={kidsImg} alt="Create profiles for kids" loading="lazy" />
            <h4>Create profiles for kids</h4>
            <p>
              Kids can enjoy adventures with their favorite characters in a
              special space just for them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreReasons;
