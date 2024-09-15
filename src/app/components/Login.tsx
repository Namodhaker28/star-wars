import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('star@test.com');
  const [password, setPassword] = useState('password');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form className="login-form max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg mt-12" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
