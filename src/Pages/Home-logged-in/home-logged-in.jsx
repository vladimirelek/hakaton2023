import Temperature from "../../Components/Temperatura/temp";

const HomeLoggedIn = ({ props, email }) => {
  const user = props;

  return (
    <div>
      {user ? <h1>{email}</h1> : " "}
      <Temperature />
    </div>
  );
};
export default HomeLoggedIn;
