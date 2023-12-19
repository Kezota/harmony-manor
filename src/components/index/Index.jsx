import Video from "../video/Video";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import Navbar from "../navbar/Navbar";
import Offer from "../offer/Offer";
import Facilites from "../facilities/Facilities";
import Book from "../book/Book";
import Review from "../review/Review";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Facilites />
      <Offer />
      <Video />
      <Review />
      <Book />
      <Footer />
    </div>
  );
};

export default Index;
