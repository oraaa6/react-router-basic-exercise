import { useParams, Link } from "react-router-dom";
function ProductDetailPage() {
  const params = useParams(); // zwraca obiekt par klucz/wartość dynamicznych parametrów z bieżącego adresu URL, które zostały dopasowane przez path
  // params.productId - productId to identyfikator który podaliśmy w dynamicznej ścieżce (path) tu: w plik App
  return (
    <>
      <h1>Product details</h1>
      <p>{params.productId}</p>
      <p><Link to="..">Back</Link></p>  {/* to=".." + relative="route" (defaultowo) wróci do głównej ścieżki (tj do rodzica) tzn jak jest /products/p1 to wróci do /  a jak jest  route="path" to wróci do "segmentu" wyżej tzn /products*/}
    </>
  );
}

export default ProductDetailPage;
