import { useState } from "react";
import LabeledInput from "../components/ui/LabeledInput";
import { loginWithFirebase } from "../utils/authentication";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setEmail(email?.trim());
    if (!email || !password){
      alert("Please enter email and password");
      return;
    }
    const user = await loginWithFirebase(email, password);
    setLoading(false);
    if (user) {
      window.location.href = "/";
    }
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <form className="flex flex-col p-5 rounded bg-white" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4 text-center text-primary">
          Login
        </h1>

        <LabeledInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <LabeledInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-hover duration-150 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {loading? "Logging in..." : "Sign In"}
          </button>
          <p className="text-center text-gray-500 text-xs mt-3">
            New here?{" "}
            <a
              href="/signup"
              className="text-primary hover:text-hover duration-150"
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
