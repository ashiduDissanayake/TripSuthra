import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/redux/features/userSlice";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  // Get User Data
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found");
      }
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.data));
      } else {
        localStorage.clear();
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
