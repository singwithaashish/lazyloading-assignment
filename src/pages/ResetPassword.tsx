import React from 'react'
import LabeledInput from '../components/LabeledInput'
import { updatePasswordWithFirebase } from '../utils/authentication';

export default function ResetPassword() {
    // const [oldPass, setOldPass] = React.useState("");
    const [newPass, setNewPass] = React.useState("");
    const [confirmPass, setConfirmPass] = React.useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if ( !newPass || !confirmPass) {
            alert("Please enter old password, new password and confirm password");
            return;
        }
        if (newPass !== confirmPass) {
            alert("Passwords do not match");
            return;
        }
        const user = await updatePasswordWithFirebase(newPass);
        // console.log(user);
        if (user) {
            alert("Password changed successfully");
            window.location.href = "/";
        }

    }
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <form className="flex flex-col p-5 rounded bg-white" onSubmit={handleSubmit}>
        <h1
          className="text-2xl font-bold mb-4 text-center text-primary"      
        >
          Change Password
        </h1>
        
        {/* <LabeledInput label="Old Password" value={oldPass} onChange={(e) => setOldPass(e.target.value)} placeholder="Old Password" type="password"/> */}
        <LabeledInput label="New Passoword" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="New Password" type="password"/>
        <LabeledInput label="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="Confirm Password" type="password"/>
        <div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-hover duration-150 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Change Password
          </button>
          <p className="text-center text-gray-500 text-xs mt-3">
           Clicked by accident?{" "}
            <a
              href="/"
              className="text-primary hover:text-hover duration-150"
            >
              Home
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}
