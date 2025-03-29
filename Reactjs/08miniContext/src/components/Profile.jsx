import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">please login</div>
    );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      Welcome {user.username}
    </div>
  );
}

export default Profile;
