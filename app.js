import { useState } from "react";
import "./styles.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess(false);

    if (username.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }

    if (!email.includes("@")) {
      setError("Email must be valid.");
      return;
    }

    setSuccess(true);
    setUsername("");
    setEmail("");
  }

  return (
    <div className="container">
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">Signup successful 🎉</p>}
    </div>
  );
}

export default App;
