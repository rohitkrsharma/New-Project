import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'dummy',
        location: 'default'
      }
    }
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rohitkrsharma");
    const json = await data.json();

    this.setState({ userInfo: json, })

    console.log(json);
  }
  render() {
    const { name, location, avatar_url
    } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} />
        <h2 className="pt-4">Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact:8083223791</h2>
      </div>
    )
  }
}
export default UserClass;