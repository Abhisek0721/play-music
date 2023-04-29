import "bootstrap/dist/css/bootstrap.min.css";
import SidebarMenu from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";


function App() {

  return (
    <>
      <Header />
      <div style={{"display": "flex"}}>
        <SidebarMenu />
        <Home />
      </div>
    </>
  );
}

export default App;
