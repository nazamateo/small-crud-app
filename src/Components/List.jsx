import React, { useState, useSyncExternalStore } from "react";
import list from "../Components/List.css";
export default function List({ userData, updateUserData, deleteUserData }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateName, setUpdateName] = useState();
  const [updateSurname, setUpdateSurname] = useState();
  const [showUserId, setShowUserId] = useState();
  const [index, setIndex] = useState();
  const handleDelete = (e, i) => {
    e.preventDefault();
    deleteUserData(i);
  };
  const showUpdate = (i) => {
    setIsUpdating(true);
    setUpdateName(userData[i].name);
    setUpdateSurname(userData[i].surname);
    setShowUserId(userData[i].userId);
    setIndex(i);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setIsUpdating(false);
    const newUserData = userData;
    newUserData[index].name = updateName;
    newUserData[index].surname = updateSurname;
    console.log(newUserData);
    updateUserData(newUserData);
  };
  return (
    <>
      <div className="data-container">
        {userData && (
          <>
            {isUpdating === true && (
              <>
                <p>User Id : {showUserId}</p>
                <form onSubmit={handleUpdate}>
                  <input
                    placeholder="name"
                    value={updateName}
                    onChange={(e) => {
                      setUpdateName(e.target.value);
                    }}
                  ></input>
                  <input
                    placeholder="surname"
                    value={updateSurname}
                    onChange={(e) => {
                      setUpdateSurname(e.target.value);
                    }}
                  ></input>
                  <button type="submit">Update</button>
                </form>
              </>
            )}

            {isUpdating === false && (
              <table>
                <tr>
                  <th>UserId</th>
                  <th>Name</th>
                  <th>Surname</th>
                </tr>
                {userData.map((data, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>{data.userId}</td>
                        <td>{data.name}</td>
                        <td>{data.surname}</td>
                        <td>
                          <button
                            onClick={(e) => {
                              handleDelete(e, i);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              showUpdate(i);
                            }}
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </table>
            )}
          </>
        )}
      </div>
    </>
  );
}
