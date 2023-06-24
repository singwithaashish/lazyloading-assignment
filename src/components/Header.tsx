import { signoutWithFirebase } from "../utils/authentication";

export default function Header() {
  const handleLogout = async () => {
    await signoutWithFirebase();
  };
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        <img
          src="https://img.icons8.com/color/48/000000/airplane-take-off.png"
          alt="logo"
          className="h-12 w-12 mr-2"
        />
        <span className="font-semibold text-xl tracking-tight">
          Passengers Flight Details
        </span>
      </div>
      <div className="flex items-center gap-x-3">
        <button 
          onClick={() => window.location.href = "/reset-password"}
          className="px-4 py-2 bg-primary text-white font-semibold rounded-lg duration-200 shadow-md hover:bg-hover"
        >
          Change Password
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg duration-200 shadow-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
