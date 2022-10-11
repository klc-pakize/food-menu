import "./App.css";
import Card from "./copmanents/cards/Card";
import Navbar from "./copmanents/navbar/Navbar";
import Header from "./copmanents/header/Header";
import { data } from "./helper/data";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <div className="main">
        {data.map((picture, index) => (
          <Card
            title={picture.title}
            desc={picture.desc}
            image={picture.image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
