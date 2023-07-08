
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import RatingStar from "./ratingStar";
import { deleteCommenti, fetchCommenti, setCurrentComment, setPostComment, setPostRate, updateCommenti } from "./reducers/api";
import UserStar from "./userStar";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill} from "react-icons/bs";





const Review = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  const dispatch = useDispatch();
  const review = useSelector(state => state.api.reviewArray);
  const currentComment = useSelector(state => state.api.currentComment);

  const rate = useSelector(state => state.api.postRate);
  const postCommenti = useSelector(state => state.api.postComment);
  const postElementId = useSelector(state => state.api.postElementId);


  const handleEdit = (review) => {
    dispatch(setCurrentComment(review));
    setIsOpen(true);
    dispatch(setPostComment(review.comment));
  };

  const handleSubmit = () => {
    const newReview = {
      ...currentComment,
      comment: postCommenti,
      rate: rate,
    }
    dispatch(updateCommenti(newReview)).then(() => dispatch(fetchCommenti(postElementId)));
    dispatch(setPostComment(""));
    dispatch(setPostRate(0));
    setIsOpen(false);
  };

  return (
    <>
      <div className="retour">
        <h3>Commenti</h3>
        {review && review.map((review) => ( // Aggiungi la condizione Array.isArray(review)
          <div key={review._id}>
            <p>{review.comment}</p>
            <p>{review.rate}</p>
            <p>{review.author}</p>
            <Button variant="danger" onClick={() => dispatch(deleteCommenti(review._id)).then(() => dispatch(fetchCommenti(review.elementId)))}><BsFillTrashFill size={20}/></Button>
            <Button className="m-2" variant="success" onClick={() => handleEdit(review)}><AiFillEdit size={20} /></Button>
            <UserStar rate={review.rate} />
          </div>
        ))}
      </div>
      {isOpen &&
        <Modal show={isOpen} onHide={() => setIsOpen(false)}>
          <Modal.Header>
            <Modal.Title>Modifica</Modal.Title>
          </Modal.Header>
          <textarea onChange={(e)=>dispatch(setPostComment(e.target.value))} >{postCommenti}</textarea>
          <RatingStar />
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit} >
              change
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
};

export default Review;

