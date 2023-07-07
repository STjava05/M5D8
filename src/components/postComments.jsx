
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {  fetchPostCommenti,setPostComment } from "./reducers/api";
import RatingStar from "./ratingStar";
import { BsSendFill} from "react-icons/bs";



const PostComments = ({ rate }) => {
    const postCommenti = useSelector(state => state.api.postComment);
    const postRate = useSelector(state => state.api.postRate);
    const postElementId = useSelector(state => state.api.postElementId);
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il comportamento predefinito del submit del form

    const review = {
     comment:postCommenti ,
      rate: postRate,
      elementId: postElementId// Aggiungi l'elementId corretto
    };

    // Dispatch dell'azione per l'invio del commento
    dispatch(fetchPostCommenti(review));

    // Reset del valore del commento
    dispatch(setPostComment(''));
    
    console.log(review);
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
          
          onChange={(e) => dispatch(setPostComment(e.target.value))} // Aggiorna il valore del commento
        /><br/>
        <RatingStar />
        <button className="send" type="submit">< BsSendFill size={30}/></button>
      </form>
    </div>
  );
};

export default PostComments;

