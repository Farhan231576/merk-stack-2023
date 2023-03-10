import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "Hello",
    date: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: form,
    });
    console.log(res);
  };
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInput}
          placeholder="Enter transaction amount"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInput}
          placeholder="Enter transaction detail"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
