import { useEffect, useState } from "react";
import axios from "axios";
import { InView } from "react-intersection-observer";
import { Grid, Row, Col } from "react-flexbox-grid";
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [increment, setIncrement] = useState(12);

  const count = photos.length;
  
  useEffect(() => {
    getPhotos(0);
    setIncrement(4);
    // eslint-disable-next-line
  }, []);

  const getPhotos = (startCount) => {
    setIsLoading(true);
    const endCount = startCount + increment;
    axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${startCount}&_end=${endCount}`)
      .then(response => {
        console.log(response.data);
        setPhotos([...photos, ...response.data]);
        setIsLoading(false);
      });
  };

  const handleLoaderVisible = (visible) => {
    console.log('Inview:', visible)
    if (visible) {
      console.log("getting more photos")
      getPhotos(count)
    } else {
      console.log("not getting photos")
    }
  }

  return (
    <div className="container">
      <h1>Scroll down to load more photos...</h1>
      <Grid fluid>
        <Row center="md">
          {count !== 0 && photos.map((photo, i) => (
            <Col key={i} xs={6} md={4} lg={3}>
              <img
                src={photo.url}
                alt={photo.title}
                className="img-fluid"
              />
            </Col>
          ))}
        </Row>
        {isLoading && <Row style={{ minHeight: "30vh" }} />}
      </Grid>
      {(count !== 0 && !isLoading) &&
        <InView
          as="div"
          onChange={handleLoaderVisible}
        >
          <h2>Loading more...</h2>
        </InView>}
    </div>
  );
}

export default App;
