import { useDispatch, useSelector } from "react-redux";
import { BagAction } from "../store/BagSlice";

const Homeitems = ({ item }) => {
  const dispatch = useDispatch();
  const bagitems = useSelector((store) => store.bag);
  const elementFound = bagitems.indexOf(item.id) >= 0;

  const handleAddtoBag = () => {
    dispatch(BagAction.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(BagAction.deleteFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ?<button type="button" class="btn-add-bag btn btn-danger" onClick={handleRemove}>
        Remove 
      </button> :<button type="button" class="btn-add-bag btn btn-success" onClick={handleAddtoBag}>
        Add to Bag
      </button> }
      
      
    </div>
  );
};

export default Homeitems;
