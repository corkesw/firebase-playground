import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "@firebase/app";
import "./App.css";
import { useEffect, useState } from "react";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBtqgv2T2j-H7JOdeSdqoPf0Qn48yfGhss",
  authDomain: "doggo-71b8a.firebaseapp.com",
  databaseURL:
    "https://doggo-71b8a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "doggo-71b8a",
  storageBucket: "doggo-71b8a.appspot.com",
  messagingSenderId: "481919035597",
  appId: "1:481919035597:web:c2c132022df06ba639a184",
  measurementId: "G-5E447XMNRX",
});

const db = getDatabase();


function App() {

  const [dogs, setDogs] = useState([])
  useEffect(() => {

    const dogRef = ref(db, "dogs/");

    onValue(dogRef, (snapshot) => {
      const data = snapshot.val();
      const dogNames = Object.keys(data);
      setDogs(dogNames)
    });
    
  }, []);

  return (
    <div>
      <ul>
        {dogs.map((dog) => {
          return <li key={dog}>{dog}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
