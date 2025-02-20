import { useState } from "react";

const Profile = () => {
    const [isFollowing , setIsFollowing] = useState(false);
    const handleFollow = () => {
        window.open("https://www.instagram.com/kashann16/","_blank");
        setIsFollowing(!isFollowing);
    }
    const handleMessage = () => {
        window.open("mailto:kashannnn361@gmail.com","_blank");
    }
    const handelPhotoClick = () => {
        window.open("https://avatars.githubusercontent.com/u/106725612?s=96&v=4","_blank");
    }
    return (
        <div className="flex flex-col items-center justify-center bg-grey shadow-lg rounded-lg p-6 max-w-sm mx-auto mt-10 border border-gray-200 text-white">
                <h1 className="text-4xl font-bold">Profile Page</h1>
                <p className="text-lg mt-2">Welcome to the Profile Page!</p>
                <br />
                {/* Profile Image */}
                <img 
                onClick={handelPhotoClick}
                src="https://avatars.githubusercontent.com/u/106725612?s=96&v=4"
                alt="profile" 
                className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:border-gray-400 hover:ring-4 hover:ring-gray-300"/>
                {/* Name */}
                <h2 className="mt-4 text-xl font-semibold text-black">Mohd Kashan Yunus</h2>
                {/* Bio */}
                <p className="text-gray-600 text-center mt-2">
                    Full Stack Developer | Tech Enthusiast | Open Source Contributer
                </p>
                {/*Buttons*/}
                <div className="flex gap-3 mt-4">
                    <button onClick={handleFollow} className={`text-center h-12 w-24 mt-3 px-4 py-2 rounded text-white hover:bg-gray-500 ${isFollowing ? "bg-red-500" : "bg-blue-500"}`}>
                        {isFollowing ? "Unfollow" : "Follow"}
                    </button>
                    <button onClick={handleMessage} className="text-center h-12 w-24 mt-3 px-4 py-2 rounded text-white hover:bg-gray-500">
                        Message
                    </button>
                </div>
        </div>
    )
  };

  export default Profile;