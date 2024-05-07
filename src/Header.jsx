import { useAuth } from "./hooks/useAuth";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <div>
      <h3>{isLoggedIn ? "Hello,friend" : "Enter please in system"}</h3>
    </div>
  );
};
