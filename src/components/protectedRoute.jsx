import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../auth/userAuth";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const navigate = useNavigate()

  console.log("Check user in Private: ", user);
  if (!user) {
    return navigate("/");
  }
  return children;
};

export default ProtectedRoute;