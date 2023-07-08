import Carousel from "react-bootstrap/Carousel";

function jombotron() {
  return (
    <Carousel className="m-3">
      <Carousel.Item
        style={{
          height: "400px",
          backgroundImage:
            "url('https://images3.alphacoders.com/130/1305890.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt=""
        />
        <Carousel.Caption>
          <p>Qu'attendre de votre biographe ? - Françoise Robin - Biographe</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          height: "400px",
          backgroundImage:
            "url('https://wallpaperaccess.com/full/3489604.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <img className="d-block w-100" alt="" />

        <Carousel.Caption>
          <p>Qu'attendre de votre biographe ? - Françoise Robin - Biographe.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          height: "400px",
          backgroundImage:
            "url('https://png.pngtree.com/back_origin_pic/03/88/19/883f1b0ddd7c6f341e3357fd964b2bfa.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt=""
        />

        <Carousel.Caption>
          <p>Qu'attendre de votre biographe ? - Françoise Robin - Biographe</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default jombotron;
