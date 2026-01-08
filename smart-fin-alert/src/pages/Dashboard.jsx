import { useState } from "react";
import Navbar from "../components/Navbar";
import BudgetInput from "../components/BudgetInput";
import SpendingInput from "../components/SpendingInput";
import SubscriptionInput from "../components/SubscriptionInput";
import AlertList from "../components/AlertList";
import SpendingList from "../components/SpendingList";

function Dashboard() {
  const [budget, setBudget] = useState(0);

  // spending = { amount, note, date }
  const [spendings, setSpendings] = useState([]);

  const [subscriptions, setSubscriptions] = useState([]);

  function addSpending(spending) {
    setSpendings([...spendings, spending]);
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="grid">
          {/* LEFT SIDE INPUTS */}
          <div>
            <BudgetInput budget={budget} setBudget={setBudget} />

            <SpendingInput onAdd={addSpending} />

            {/* 👇 PUT IT HERE */}
            <SpendingList spendings={spendings} />

            <SubscriptionInput
              subscriptions={subscriptions}
              setSubscriptions={setSubscriptions}
            />
          </div>

          {/* RIGHT SIDE ALERTS */}
          <AlertList
            budget={budget}
            spendings={spendings}
            subscriptions={subscriptions}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
