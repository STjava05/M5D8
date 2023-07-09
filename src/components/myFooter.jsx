import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle,AiFillInstagram,AiFillLinkedin } from "react-icons/ai";




 const MyFooter = () => {
return(

<>

<Row className="myfooter">
    <Col md={6}>
        <h5>Seguici sui social</h5>
        <ul className="list-inline social-icons">
            <li className="list-inline-item">
            <AiFillTwitterCircle size={30} />
            </li>
            <li className="list-inline-item">
            <BsFacebook size={30} />
            </li>
            <li className="list-inline-item">
            <AiFillInstagram size={30} />
            </li>
            <li className="list-inline-item">
               <AiFillLinkedin size={30} />
            </li>
        </ul>
    </Col>
    <Col md={6}>
    <div className=" text-md-end">
       
        <p>&copy; 2023 EpicAlbum</p>
    </div>
    </Col>
</Row>
</>
)
}
export default MyFooter;