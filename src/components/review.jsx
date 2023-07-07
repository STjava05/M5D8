
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import RatingStar from "./ratingStar";
import { deleteCommenti, fetchCommenti, setCurrentComment, setPostComment, setPostRate, updateCommenti } from "./reducers/api";
import UserStar from "./userStar";




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
            <Button variant="danger" onClick={() => dispatch(deleteCommenti(review._id)).then(() => dispatch(fetchCommenti(review.elementId)))}>Delete</Button>
            <Button variant="success" onClick={() => handleEdit(review)}>Edit</Button>
            <UserStar rate={review.rate} />
          </div>
        ))}
      </div>
      {isOpen &&
        <Modal show={isOpen} onHide={() => setIsOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <textarea onChange={(e)=>dispatch(setPostComment(e.target.value))} >{postCommenti}</textarea>
          <RatingStar />
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
};

export default Review;

