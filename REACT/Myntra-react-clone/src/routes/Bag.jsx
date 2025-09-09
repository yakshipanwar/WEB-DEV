import { useSelector } from "react-redux";
import BagSummary from "../components/BagSummary";
import Bagitems from "../components/Bagitems";

const Bag = () => {
  const bagItems =  useSelector(state => state.bag);
  const items =  useSelector(state => state.items);
  const finalItem = items.filter(item =>{
    const itemIndex = bagItems.indexOf(item.id);
  return itemIndex >= 0;
  })

  return(
    <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItem.map((item) =><Bagitems item = {item}></Bagitems>)}
        </div>
        <BagSummary></BagSummary> 
      </div>
    </main>
    </>
  )
}

export default Bag;