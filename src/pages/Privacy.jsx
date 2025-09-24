import "../Styles/Privacy.css"; 

export default function Privacy() {
    return (
    <main className="container privacyContainer">
    <h1>Privacy Policy</h1>
    <hr></hr>
    <p>
        We value your privacy.
        <br></br>This app uses the TMDB API to fetch movie data.
        <br></br>We don’t sell your personal information.<br></br>Any basic preferences (e.g., My List)
        may be stored locally in your browser’s storage to improve your experience.
    </p>

    <h2>What We Collect</h2>
    <ul>
        <li><strong>Data source:</strong> Movie data is provided by TMDB.</li>
        <li><strong>Local storage:</strong> We may store your saved list or session token on your device.</li>
        <li><strong>Cookies:</strong> We don’t actively set tracking cookies in this demo.</li>
    </ul>

    <h2>Your Choices</h2>
    <p>
        You can clear local storage anytime from your browser settings to remove saved data.
    </p>

    <h2>Contact</h2>
    <p>
        For privacy concerns, email:{" "}
    <a href="mailto:aayataashraaf@gmail.com" className="mailLink">aayataashraaf@gmail.com</a>
    </p>
<hr></hr>
   <p className="attribution">
  This website uses the <a href="https://www.themoviedb.org/"className="link" >TMDB</a> API certified by TMDB.
</p>

    </main>
);
}
