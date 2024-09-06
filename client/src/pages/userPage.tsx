import ProtectedRoute from "../layouts/protectedRoute";
import Layout from "../layouts/default";
import { useSelector } from "react-redux";
import LandingPage from "./landingpage1";

const UserPage = () => {
  const { user } = useSelector((state) => state.user); // Access user from Redux

  return (
    <ProtectedRoute>
      <Layout>
        <div>

        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default UserPage;
