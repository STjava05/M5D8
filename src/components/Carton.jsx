
import { Button, Card, Col, Row } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
// import ModalCommenti from './modalCommenti';
import { BookDetail, fetchCommenti, openModal, setPostElementId, setSelected } from './reducers/api';
import {Link} from 'react-router-dom' 


export default function Carton() {
  const dispatch = useDispatch();
  const apiArray = useSelector(state => state.api.apiArray);
 
  const handleOpenModal = (index,asin) => {
   dispatch(openModal(index))
    dispatch(fetchCommenti(apiArray[index].asin))
    dispatch(setPostElementId(asin))
  }
  


  const handleClick = (index) => {
    dispatch(setSelected(index))
    
  }
  const handleDetailComent = (asin) => {
    dispatch(BookDetail(asin))
    
  }
  

  return (
    <div>
      <Row>
        {apiArray && apiArray.map((carte, index) => (
          <Col key={index} className={carte.selected ? "select" : ""}>
            <Card style={{ width: '18rem' }}className='carte'>
              <Card.Img variant="top" src={carte.img} onClick={()=>handleClick(index)} />
              <Card.Body>
                <Card.Title>{carte.title} </Card.Title>

                <Card.Text>{carte.category}</Card.Text>
                <Card.Text>{carte.price} $</Card.Text>
                <Button variant="secondary" onClick={()=> handleOpenModal(index,carte.asin)}>commenti</Button>
                
                <Button onClick={()=>handleDetailComent(carte.asin)} variant="info" className='ms-5'> <Link to={`/books/${carte.asin}`}>Detail</Link></Button>
              </Card.Body>
              
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
}
