import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My HomePage</h1>
      <p>
        Go to <Link to="products">the list of products</Link>   {/* products - sciezka relatywne czyli jest dodawana do OBECNEGO URL */}
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
