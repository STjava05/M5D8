
import React from "react";
import { BsSendFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import RatingStar from "./ratingStar";
import { fetchPostCommenti, setPostComment, setPostRate, fetchCommenti } from "./reducers/api";


const PostComments = ({ rate }) => {
  const postCommenti = useSelector(state => state.api.postComment);
  const postRate = useSelector(state => state.api.postRate);
  const postElementId = useSelector(state => state.api.postElementId);

  const dispatch = useDispatch();
 


  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il comportamento predefinito del submit del form
    const review = {
      comment: postCommenti,
      rate: postRate,
      elementId: postElementId// Aggiungi l'elementId corretto
    };
    dispatch(fetchPostCommenti(review)).then(() => {
      dispatch(fetchCommenti(postElementId));
      dispatch(setPostComment(""));
      dispatch(setPostRate(1));
    });

  };


  return (
    <div className="comment">
      <h6>Aggiungi un commento</h6>
      <form onSubmit={handleSubmit}> {/* Aggiungi l'handler onSubmit */}
        <textarea
          rows="4"
          cols="38"
          placeholder="commento"
          className="textaera"
          value={postCommenti} // Aggiungi il valore del commento
          onChange={(e) => dispatch(setPostComment(e.target.value))} // Aggiorna il valore del commento
        /><br />
        <RatingStar />
        <button className="send" type="submit">< BsSendFill size={30} /></button>
      </form>
    </div>
  );
};

export default PostComments;

