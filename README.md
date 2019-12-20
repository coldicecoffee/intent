# \<intent\>

This simple application is for \<intent\> Shopping Cart API with a client-side and a server-side.

## Features

* Start a new shopping-cart
* Add items by ID to a shopping-cart
* Retrieve the total for a shopping-cart
* **shopping-cart is persistent between page-reloads until the user clicks a “Clear Cart” button**

## Client-side

#### Requirements

* React
* Redux
* Material UI


#### How to Start

```javascript
/* First, Navigate to client */
cd client

/* Second, Install the needed packages */
npm install

/* Then start React */
npm start
```

Runs on **http://localhost:3000**

## Server-side

#### Requirements

* Node
* Express
* mocha (for testing)
* chai (for testing)


#### How to Start

```javascript
/* First, Navigate to server */
cd server

/* Second, Install the needed packages */
npm install

/* Then start Node */
npm start
```

Runs on **http://localhost:8888**

#### Entry points

* **/initCart** - To start a new shopping-cart
* **/addItems/\<id\>** - To add items by ID to a shopping-cart
* **/retrieveTotal** - To retrieve the total for a shopping-cart
* **/getQuantity\*** - To retrieve the total number of items in a shopping-cart
* **/getItems\*** - To retrieve all the items in the database
* **/getAddedItems\*** - To retrieve all the items in a shopping-cart

> \* are for the extra-credit.

#### About Tests

```javascript
/* First, Navigate to server */
cd server

/* To run the tests */
npm test
```

---
Inspired By [React-Shopping-Cart](https://github.com/AyaBellazreg/React-Shopping-Cart/tree/master/Shopping-Cart)