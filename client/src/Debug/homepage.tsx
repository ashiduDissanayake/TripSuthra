import { useEffect, useState } from "react";
import { Nbar } from "./nbar";

const HomePage = () => {
  const [user, setUser] = useState(null); // State to store the user object

  useEffect(() => {
    // Simulating fetching user data from local storage or an API
    const fetchUser = async () => {
      // Example: Fetch the user from local storage or an API
      const loggedUser = JSON.parse(localStorage.getItem("user")) || null;
      
      if (loggedUser) {
        setUser(loggedUser); // Update user state if logged in
      }
    };

    fetchUser(); // Fetch user data on page load
  }, []);

  return (
    <div>
      {/* Render Navbar and pass the user prop */}
      <Nbar user={user} />

      {/* Main content of the page */}
      <main className="p-6">
        <h1>Welcome to TripSuthra</h1>
        {user ? (
          <p>Hello, {user.firstName}! You are logged in as a {user.role}.</p>
        ) : (
          <p>Please log in to access personalized features.</p>
        )}
      </main>
    </div>
  );
};

export default HomePage;
