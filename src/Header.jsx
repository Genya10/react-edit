import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);
  
  return (
    <div>
      <h3>{isLoggedIn ? "Hello,friend" : "Enter please in system"}</h3>
    </div>
  );
};
