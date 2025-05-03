import { useState, useEffect, FC, Dispatch, SetStateAction } from "react";
import axios from "axios";
import "./UserList.css";
import { IUser } from "../types";

interface UserListProps {
  setUser: Dispatch<SetStateAction<IUser | null>>;
  age?: number;
}

// const UserList = ({setUser}:UserListProps) => {
const UserList: FC<UserListProps> = ({ setUser }) => {
  const [listOfUsers, setListOfUsers] = useState<IUser[]>([]);

  useEffect(() => {
    // async function getData() {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUsers(res.data))
      .catch((error) => console.log(error.message))
      .finally(function () {
        console.log("Finally done");
      });

    // }
    //  getData();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="user-list-container">
      <h1>User List</h1>

      <div className="users-grid">
        {listOfUsers
          .map((user) => {
            return user;
          })
          .map(
            ({ id, name, username, email, address: { city, ...others } }) => (
              <div
                key={id}
                className="user-card"
                onClick={() =>
                  setUser({
                    id,
                    name,
                    email,
                    username,
                    address: { city, ...others },
                  })
                }
              >
                <h2>{name} </h2>
                <p>
                  <strong>Username:</strong> {username}
                </p>
                <p>
                  <strong>Email:</strong> {email.toLowerCase()}
                </p>
                <p>
                  <strong>City:</strong> {city}
                </p>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default UserList;
