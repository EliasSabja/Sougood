import { useEffect } from "react";
import { useUserContext } from "../../contexts/userContext";

const Management: React.FC = () => {
  const {token} = useUserContext();

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <h1>Management</h1>
  );
};

export default Management;
