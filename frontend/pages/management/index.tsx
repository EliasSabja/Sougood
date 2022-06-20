import { useRouter } from "next/router";
import { useUserContext } from "../../contexts/userContext";
import UseAuth from "../../lib/auth";

const Management: React.FC = () => {
  const {role} = useUserContext();
  const router = useRouter();

  return (
    <h1>Management</h1>
  );
};

export default UseAuth(Management, ['admin']);
