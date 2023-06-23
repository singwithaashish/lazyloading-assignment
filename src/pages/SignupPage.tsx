import { useEffect, useState } from "react";
import LabeledInput from "../components/LabeledInput";

export default function SignupPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail(email?.trim());
    if (!email || !password) return;
    const encryptedPassword = btoa(password);
    localStorage.setItem("token", encryptedPassword);
    window.location.href = "/";
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <form className="flex flex-col p-5 rounded bg-white">
        <h1
          className="text-2xl font-bold mb-4 text-center text-primary"      
        >
          Sign Up
        </h1>
        
        <LabeledInput label="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" type="text"/>
        <LabeledInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
        <LabeledInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
        <LabeledInput label="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="Confirm Password" type="password"/>
        <div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-hover duration-150 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
          <p className="text-center text-gray-500 text-xs mt-3">
           Already have an account?{" "}
            <a
              href="/login"
              className="text-primary hover:text-hover duration-150"
            >
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
