import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Myfooter from "./components/MyFooter";
import MyMain from "./components/MyMain";
import MyNav from "./components/MyNav";
import logo from "./img/Book.svg";
import horror from "./books/horror.json";
import fantasy from "./books/fantasy.json";
import history from "./books/history.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";

let generi = [...horror, ...history, ...fantasy, ...romance, ...scifi];

function App() {
  return (
    <>
      <MyNav brend={logo} />

      <MyMain gender={generi} />

      <Myfooter />
    </>
  );
}

export default App;
