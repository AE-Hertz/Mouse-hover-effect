import Button from "./component/Button"
import img from "./assets/mygirl.jpg"

const App = () => {
  return (
    <div className="button-group">
      <Button type="homepage">
        <span>Homepage</span>
      </Button>
      <Button type="discover-more">
        <span>Discover more</span>
      </Button>
      <Button type="get-in-touch" imgSrc={img}>
        <span>Get in touch</span>
      </Button>
    </div>
  );
};

export default App;
