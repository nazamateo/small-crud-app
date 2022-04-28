import { useState } from "react";
import List from "./Components/List";

//create read update delete

function App() {
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [userId, setUserId] = useState(0);

  const resetter = () => {
    setName("");
    setSurname("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, { name, surname, userId }]);
    setUserId(userId + 1);
    resetter();
  };
  const handleClearAll = (e) => {
    e.preventDefault();
    setUserData([]);
    setUserId(0);
  };
  const deleteUserData = (id) => {
    const newUserData = userData.filter((data) => {
      return userData.indexOf(data) !== id;
    });
    setUserData(newUserData);
  };

  const updateUserData = (newUserData) => {
    setUserData(newUserData);
  };

  return (
    <>
      <form className="myForm" onSubmit={handleSubmit}>
        <input
          className="myInput"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          className="myInput"
          placeholder="surname"
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        ></input>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      <button onClick={handleClearAll}>Clear Data</button>
      <List
        userData={userData}
        updateUserData={updateUserData}
        deleteUserData={deleteUserData}
      />
    </>
  );
}

export default App;
