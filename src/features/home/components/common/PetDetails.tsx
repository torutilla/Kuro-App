import { useParams } from "react-router-dom";

function PetDetails() {
  const { id } = useParams();
  console.log(id);
  return <div>PetDetails</div>;
}

export default PetDetails;
