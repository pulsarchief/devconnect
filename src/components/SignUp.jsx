import { useState } from "react";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Signed up with:", email, password);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Signup</h1>
            <form
                onSubmit={handleSubmit}
                className="space-y-4 mt-6">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded w-full">
                    Signup
                </button>
            </form>
        </div>
    );
}

export default SignUp;
