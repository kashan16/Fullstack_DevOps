import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";


const Profile = () => {
  const { theme, toggleTheme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Mohd Kashan Yunus",
    bio: "Full Stack Developer | Tech Enthusiast | Open Source Contributor",
    email: "kashannnn361@gmail.com",
    instagram: "https://www.instagram.com/kashann16/",
    image: "https://avatars.githubusercontent.com/u/106725612?s=96&v=4",
  });

  const handelPhotoClick = () => {
    window.open(profile.image, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden p-6 mt-10 ${theme ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
      <div className="flex items-center space-x-4">
        <img
          className="max-w-full max-h-full rounded-full border-4 border-gray-300 shadow-md hover:scale-105 transition-transform duration-300"
          src={profile.image || "https://via.placeholder.com/150"}
          onClick={handelPhotoClick}
          alt="Profile"
        />
        {!isEditing ? (
          <div>
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p>{profile.bio}</p>
            <p className="text-sm text-blue-600">
              <a href={`mailto:${profile.email}`} className="hover:underline">
                Mail
              </a>
            </p>
            <p className="text-sm text-blue-600">
              <a href={profile.instagram} className="hover:underline">
                Follow
              </a>
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <input type="text" name="name" value={profile.name} onChange={handleChange} className="w-full border p-2 text-black rounded-md focus:ring-2 focus:ring-blue-500" />
            <textarea name="bio" value={profile.bio} onChange={handleChange} className="w-full border p-2 text-black rounded-md focus:ring-2 focus:ring-blue-500" />
            <input type="url" name="instagram" value={profile.instagram} onChange={handleChange} className="w-full border p-2 text-black rounded-md focus:ring-2 focus:ring-blue-500" />
            <input type="url" name="email" value={profile.email} onChange={handleChange} className="w-full border p-2 text-black rounded-md focus:ring-2 focus:ring-blue-500" />
            <input type="url" name="image" value={profile.image} onChange={handleChange} className="w-full border p-2 text-black rounded-md focus:ring-2 focus:ring-blue-500" />
          </div>
        )}
      </div>
      <div className="mt-4 flex gap-2">
        <button
          className={`px-4 py-2 font-bold rounded-md ${isEditing ? "bg-green-500 hover:bg-green-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        {isEditing && (
          <button className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        )}
      </div>
      <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600" onClick={toggleTheme}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Profile;
