import axios from "axios";
import { useState } from "react";

const App = () => {
  const [classe, setClasse] = useState(0);

  const getClass = async () => {
    const url = process.env.REACT_APP_BACKEND_URL;

    try {
      const request = await axios({
        method: "get",
        url,
      });
      console.log(request.data);
      setClasse(request.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <button
        onClick={async () => {
          await getClass();
        }}
      >
        Piger une classe
      </button>
      <div>{classe}</div>
    </div>
  );
};

export default App;
