 
 import { useSelector} from "react-redux";
 import UserStar from "./userStar";
    



const Review = () => {
   
    const review = useSelector(state => state.api.reviewArray);
    
    
  
    return (
      <div className="retour">
        <h3>Commenti</h3>
        {Array.isArray(review) && review.map((review) => ( // Aggiungi la condizione Array.isArray(review)
          <div key={review._id}>
            <p>{review.comment}</p>
            <p>{review.rate}</p>
            <p>{review.author}</p>
            <UserStar rate={review.rate} />
          </div>
        ))}
      </div>
    );
  };
  
  export default Review;
  
