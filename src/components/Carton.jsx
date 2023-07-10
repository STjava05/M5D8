import { Button, Card, Col, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import {BookDetail,fetchCommenti,openModal,setPostElementId,setSelected,} from "./reducers/api";
import { Link } from "react-router-dom";
import {BsFillChatLeftTextFill,BsFillHandIndexThumbFill,} from "react-icons/bs";


//il componente Carton, che gestisce la visualizzazione di un elenco di carte con dati provenienti da apiArray

export default function Carton() {
  const dispatch = useDispatch();
  const apiArray = useSelector((state) => state.api.apiArray);
//La funzione handleOpenModal viene chiamata quando si fa clic sul pulsante "commenti" 
//di una carta. Essa invia azioni per aprire un modale, ottenere i commenti associati all'elemento selezionato e impostare l'ID dell'elemento.
  const handleOpenModal = (index, asin) => {
    dispatch(openModal(index));
    dispatch(fetchCommenti(apiArray[index].asin));
    dispatch(setPostElementId(asin));
  };

  //La funzione handleClick viene chiamata quando si fa clic su una carta. Essa invia un'azione per selezionare la carta corrispondente.
  const handleClick = (index) => {
    dispatch(setSelected(index));
  };

  //La funzione handleDetailComent viene chiamata quando si fa clic sul pulsante "Detail" di una carta. Essa invia un'azione per ottenere i dettagli del libro corrispondente all'asin della carta.
  const handleDetailComent = (asin) => {
    dispatch(BookDetail(asin));
  };

  return (
    <div>
      <Row>
        {apiArray &&
          apiArray.map((carte, index) => (
            <Col
              key={index}
              className={`d-flex justify-content-center align-items-center ${
                carte.selected ? "select" : ""
              }`}
            >
              <Card style={{ width: "18rem" }} className="carte">
                <Card.Img
                  variant="top"
                  src={carte.img}
                  onClick={() => handleClick(index)}
                />
                <Card.Body>
                  <Card.Title>{carte.title} </Card.Title>

                  <Card.Text>{carte.category}</Card.Text>
                  <Card.Text>{carte.price} $</Card.Text>
                  <Button
                    variant="secondary"
                    onClick={() => handleOpenModal(index, carte.asin)}
                  >
                    <BsFillChatLeftTextFill size={20} />
                  </Button>

                  <Button
                    onClick={() => handleDetailComent(carte.asin)}
                    variant="info"
                    className="ms-5"
                  >
                    {" "}
                    <Link to={`/books/${carte.asin}`}>
                      <BsFillHandIndexThumbFill size={20} />
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
