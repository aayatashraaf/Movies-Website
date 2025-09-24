import FeaturedMovies from "../components/FeaturedMovies";
import Landing from "../components/Landing";
import MoreReasons from "../components/MoreReasons";
import Subscribe from "../components/Subscribe";

function HomePage() {
	return (
		<>
			<Landing />
			<FeaturedMovies />
			<Subscribe />
			<MoreReasons />
		</>
	);
}
export default HomePage;
