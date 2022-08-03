import { getInvoices } from "./data";
import { Link } from "react-router-dom";
import Invoice from "./Invoice";

const Invoices = () => {
  let invoices = getInvoices();
  
  return (
    <div>
      {invoices.map(({ name, amount, due, number }) => {
        return (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${number}`}
            key={number}
          >
            {name}
          </Link>
        );
      })}
      <Invoice/>
    </div>
  );
};

export default Invoices;
