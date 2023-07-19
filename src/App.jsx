import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Components/Button";

function App() {
  const [fetchDetails, setFetchDetails] = useState([]);

  function getdetails() {
    fetch("https://dummyjson.com/products/1")
      .then((response) => {
        return response.json();
      })
      .then((details) => {
        console.log(details);
        setFetchDetails(details);
      });
  }


  useEffect(() => {
    getdetails();
  }, []);

  function theNext() {
    setIndex((prev) => prev + 1)
  }

  function thePrev() {
    setIndex((prev) => prev - 1)
  }

  return (
    <>
      <div className="App">
        <div className="mainContainer">
          <div className="imagediv">
          {fetchDetails.map((details, index) => {
        return <img key={index}>{details.images}</img>;
      })}
          </div>

          <div>
          {fetchDetails.map((details, index) => {
        return <p key={index}>{details.price}</p>;
      })}
             {fetchDetails.map((details, index) => {
        return <p key={index}>{details.description}</p>;
      })}
          </div>
          
          <div>
            <Button
            onClick={thePrev}
            text={"previous"}
            />
            <Button
            onClick={theNext}
            text={"next"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
