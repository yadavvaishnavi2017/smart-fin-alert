import { useState } from "react";

function SpendingForm({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount || !note) return;

    onAdd({
      amount: Number(amount),
      note,
      date: new Date().toLocaleDateString(),
    });

    setAmount("");
    setNote("");
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Add Spending</h3>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Where did you spend?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

export default SpendingForm;
