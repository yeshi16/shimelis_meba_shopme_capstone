
import Carousel from 'react-bootstrap/Carousel';
import '../Style.css'

function CarouselComponent() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/image7.jpeg"
          alt="first slide"
        />
        <Carousel.Caption  style={{ color: '#e2fffa', textShadow: '2px 2px 4px black' }}>
          <h5 >Fruits and Vegetables</h5>
          <p>
          There are many varieties of fruit and vegetables available and many ways to prepare, cook and serve them.
          </p>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/images2New.jpg"
          alt="second slide"
        />
        <Carousel.Caption  style={{ color: '#e2fffa', textShadow: '2px 2px 4px black' }}>
        <h5>Makeup</h5>
          <p>Shop the best makeup now at ShopMe and earn points with every purchase!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/images2.jpg"
          alt="third slide"
        />
        <Carousel.Caption style={{ color: '#e2fffa', textShadow: '2px 2px 4px black' }}>
          <h5>Attire</h5>
          <p>Discover the latest designer clothing shoes and accessories</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/images3.jpeg"
          alt="fourth slide"
        />
        <Carousel.Caption style={{ color: '#e2fffa', textShadow: '2px 2px 4px black' }}>
          <h5>Home Appliances</h5>
          <p>
          Find ShopMe's huge selection of name-brand kitchen, laundry and home appliances
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/images6.jpeg"
          alt="fifth slide"
        />
        <Carousel.Caption style={{ color: '#e2fffa', textShadow: '2px 2px 4px black' }}>
          <h5>Bakery</h5>
          <p>
          Your favorite treats made healthy. Vegan, Paleo, Gluten Free, Refined Sugar Free baked goods
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;