import { useState } from "react";
import UserList from "./components/UserList";
import { IUser } from "./types";

function App() {
  const [age, setAge] = useState<number>(0);
  const [user, setUser] = useState<IUser | null>(null);
  const [inputText, setInputText] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <h3 onClick={() => setAge(age + 1)}>Age : {age}</h3>
        <div>
          <h2>name : {user?.name}</h2>
          <h2>email : {user?.email}</h2>
          <h5>{inputText}</h5>
          <div>
            <input type="text" name="" id="" onChange={handleChange} />
          </div>
        </div>
      </div>
      <UserList setUser={setUser} />
    </div>
  );
}

export default App;
