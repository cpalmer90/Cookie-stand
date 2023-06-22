"use strict";
console.log("Script In Construction");

const container = document.getElementById("container");

const storeTable = document.getElementById("store-table");

const addOrderForm = document.getElementById("addOrderForm");

const orderForm = [];

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CookieStore(
  storeName,
  minCustPerHour,
  maxCustPerHour,
  avgCookiesPerHour
) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  // this.calcCustomersEachHour();
  // this.calcCookiesEachHour();
  // this.render();
  this.pushForm = function () {
    orderForm.push(this);
    console.log(orderForm);
  };
  this.pushForm();
}

CookieStore.prototype.calcCustomersEachHour = function () {
  // console.log("working");
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(
      randomNum(this.minCustPerHour, this.maxCustPerHour)
    );
  }
};

CookieStore.prototype.calcCookiesEachHour = function () {
  // this.calcCustomersEachHour();
  for (let i = 0; i < hours.length; i++) {
    let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

CookieStore.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();

  // create a table row
  const tr = document.createElement("tr");

  // create a table data cell
  const th = document.createElement("th");
  th.textContent = this.storeName;

  // append the table data to the table row
  tr.appendChild(th);

  // loop through cookiesEachHour - create a td for each index and append to tr
  for (let i = 0; i < hours.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
  }

  // create a th to display the totals and append to the tr
  const storeTotal = document.createElement("th");
  storeTotal.textContent = this.totalDailyCookies;
  tr.appendChild(storeTotal);

  // append the tr to the table - storeTable
  storeTable.appendChild(tr);
};

// test constructor works
const seattle = new CookieStore("seattle", 23, 65, 6.3);
const dubia = new CookieStore("dubia", 23, 65, 6.3);
const tokyo = new CookieStore("tokyo", 23, 65, 6.3);
const lima = new CookieStore("lima", 23, 65, 6.3);
const paris = new CookieStore("paris", 23, 65, 6.3);

// document.getElementById("Click").addEventListener("click", function () {
//   console.log("hello");
// });

addOrderForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  const locationInput = event.target.locationInput.value;
  const minCustomers = event.target.minCustomers.value;
  const maxCustomers = event.target.maxCustomers.value;
  const averageCookie = event.target.averageCookie.value;

  const newOrder = new CookieStore(
    locationInput,
    minCustomers,
    maxCustomers,
    averageCookie
  );

  newOrder.render();
  addOrderForm.reset();
});

function renderOrderForm() {
  for (let i = 0; i < orderForm.length; i++) {
    orderForm[i].render();
  }
}
renderOrderForm();
