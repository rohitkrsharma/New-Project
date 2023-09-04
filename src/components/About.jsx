import User from "./User";
import UserClass from "./UserClass";



const About = () => {
  return (
    <div className="px-4 py-4">
      <h1 className="py-4 font-bold">
        About
      </h1>
      {/* <User name={"Rohit Sharma (function)"} /> */}
      <UserClass name={"Rohit Sharma(class)"} contact={"8083223791 (class)"} />
    </div>
  )
}
export default About;