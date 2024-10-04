import React from 'react'
import Button from "./component/Button"
import img from "./assets/mygirl.jpg"

const App = () => {
  return (
    <div className="button-group">
      {/* <Button type="homepage">Homepage</Button>
      <Button type="discover-more">Discover more</Button> */}
      <Button type="get-in-touch" imgSrc={img}>
        <span>Get in touch</span>
      </Button>
    </div>
  );
};

export default App;
