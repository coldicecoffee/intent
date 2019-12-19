const express = require("express");
const cors = require("cors");
const app = express();

const items = [
  {
    id: "A",
    description: "Apple",
    unit_price: 2.0,
    volume_discounts: [{ number: 4, price: 7.0 }]
  },
  {
    id: "B",
    description: "Banana",
    unit_price: 12.0,
    volume_discounts: []
  },
  {
    id: "C",
    description: "Cranberry",
    unit_price: 1.25,
    volume_discounts: [{ number: 6, price: 6.0 }]
  },
  {
    id: "D",
    description: "Durian",
    unit_price: 0.15,
    volume_discounts: []
  }
];

let cart = {
  list: [], // [A, B, C]
  counter: {}, // {A: 1, B: 1, C: 1}
  total_by_item: {}, // {A: 2.0, C: 1.25}
  total: 0
};

function addItem(id) {
  "use strict";

  for (const item of items) {
    if (id === item.id) {
      const uPrice = item.unit_price;

      cart.list.push(id);

      if (id in cart.counter) {
        cart.counter[id] += 1;
      } else {
        cart.counter[id] = 1;
      }
      // console.log("Counter: " + JSON.stringify(cart.counter));

      if (id === "A" || id === "C") {
        const vDNum = item.volume_discounts[0].number;
        const vDPrice = item.volume_discounts[0].price;
        const vCount = Math.floor(cart.counter[id] / vDNum);
        const uCount = cart.counter[id] % vDNum;
        const prev = id in cart.total_by_item ? cart.total_by_item[id] : 0;
        // console.log("volumn_discount number: " + vDNum);
        // console.log("volumn_discount price: " + vDPrice);
        // console.log("volumn_discount count: " + vCount);
        // console.log("unit count: " + uCount);
        cart.total_by_item[id] = vCount * vDPrice + uPrice * uCount;
        cart.total += cart.total_by_item[id] - prev;
      } else {
        cart.total += uPrice * 1;
      }

      // console.log("Total: " + cart.total.toFixed(2));
      // console.log("Quanity: " + cart.list.length);
      return;
    }
  }
}

function findItem(id) {
  "use strict";

  for (const item of items) {
    if (id === item.id) {
      return true;
    }
  }

  return false;
}

app.use(cors());

app.get("/initCart", function(req, res) {
  cart.list = [];
  cart.counter = {};
  cart.total_by_item = {};
  cart.total = 0;
  res.json({ message: "Starting a new shopping-cart" });
});

app.post("/addItems/:id", function(req, res) {
  const id = req.params.id;
  if (findItem(id)) {
    addItem(id);
    res.json({
      message: "Item '" + id + "' has been added to the shopping-cart."
    });
  } else {
    res.status(404).json({ message: "Item '" + id + "' not found." });
  }
});

app.get("/retrieveTotal", function(req, res) {
  res.json({
    message: "The total is: " + cart.total,
    total: cart.total.toFixed(2)
  });
});

// For the number of items in the cart
app.get("/getQuantity", function(req, res) {
  res.json({
    message: "Fetching the number of items in the cart.",
    quantity: cart.list.length
  });
});

// For extra credit
app.get("/getItems", function(req, res) {
  res.json({
    message: "Fetching all items.",
    items: items,
    addedItems: cart.counter
  });
});

// For extra credit
app.get("/getAddedItems", function(req, res) {
  let addedItems = [];
  Object.keys(cart.counter).forEach(id => {
    let item = {};
    switch (id) {
      case "A":
        item = items[0];
        break;
      case "B":
        item = items[1];
        break;
      case "C":
        item = items[2];
        break;
      case "D":
        item = items[3];
        break;
      default:
        break;
    }
    item.quantity = cart.counter[id];
    addedItems.push(item);
  });
  res.json({
    message: "Fetching all items in the cart.",
    addedItems: addedItems
  });
});

const server = app.listen(8888, function() {
  const host = server.address().address;
  const port = server.address().port;
  // console.log("Server listening at http://%s:%s", host, port);
});

module.exports = app;
