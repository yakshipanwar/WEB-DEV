import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';
import FetchingItems from "../components/fetchingItems";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    const fetchStatus = useSelector((store) => store.fetchStatus);
  

  return (
    <>
      <Header></Header>
      <FetchingItems></FetchingItems>
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet></Outlet>}
      <Footer></Footer>
    </>
  );
}

export default App;
