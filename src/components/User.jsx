import { useState } from "react";

const User = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  const [count2] = useState(2);

  const UpdateCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="usercard">
      <h1 >count = {count}</h1>
      <h1>count = {count2}</h1>
      <h2>Name: {name}</h2>
      <h2>Contant: 8083223791</h2>
      <h2>Loaction:Bihar</h2>
      <button onClick={UpdateCount}>Increase Count</button>
    </div>
  )
}
export default User;