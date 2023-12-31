import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "DEV",
          amount: 6000,
          createdAt: new Date("2022-07-04 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdrow",
          category: "Casa",
          amount: 500,
          createdAt: new Date("2022-07-02 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create(
        "transaction",
        Object.assign(data, { createdAt: new Date() })
      );
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
