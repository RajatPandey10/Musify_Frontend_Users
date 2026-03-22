import { useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";

const UserProfile = () => {
    const { getProfile, userProfile } = useAuth();

    useEffect(() => {
        getProfile();
    }, []);

    const subscription = userProfile?.subscriptionPlan;
    const isPremium = subscription === "premium";

    return (
        <div className="min-h-screen bg-black text-white px-6 py-10">

            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold">Profile</h1>
            </div>

            {userProfile ? (
                <div className="space-y-8">

                    {/* User Info */}
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold">
                            {userProfile.email?.charAt(0).toUpperCase()}
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">{userProfile.email}</h2>
                            <p className="text-gray-400">{userProfile.role}</p>
                        </div>
                    </div>

                    {/* Subscription Section */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3">Subscription</h3>

                        <div className="flex items-center gap-4">
                            
                            {/* Badge */}
                            <span
                                className={`px-4 py-1 rounded-full text-sm font-medium uppercase
                                ${isPremium 
                                    ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500" 
                                    : "bg-green-500/20 text-green-400 border border-green-500"
                                }`}
                            >
                                {subscription || "Loading..."}
                            </span>

                            {/* Button for basic users */}
                            {!isPremium && subscription && (
                                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition">
                                    Get More (Upgrade)
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Extra Section */}
                    <div className="mt-10 border-t border-gray-800 pt-6">
                        <h3 className="text-lg font-semibold mb-3">Account Info</h3>

                        <div className="space-y-2 text-gray-300">
                            <p><span className="text-gray-500">Email:</span> {userProfile.email}</p>
                            <p><span className="text-gray-500">Role:</span> {userProfile.role}</p>
                        </div>
                    </div>

                </div>
            ) : (
                <p className="text-gray-400">Loading profile...</p>
            )}
        </div>
    );
};

export default UserProfile;