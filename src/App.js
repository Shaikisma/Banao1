import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/common/Banner";
import Navbar from "./components/common/Navbar";
import Topbar from "./components/common/Topbar";
import Feed from "./components/common/Feed";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Topbar />
      <Feed />
      <div style={{ width: "100%" }}></div>
    </>
  );
}

export default App;
