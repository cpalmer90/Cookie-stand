// "use strict";

// const container = document.getElementById("container");
// const hoursOpen = [
//   "6am",
//   "7am",
//   "8am",
//   "9am",
//   "10am",
//   "11am",
//   "12pm",
//   "1pm",
//   "2pm",
//   "3pm",
//   "4pm",
//   "5pm",
//   "6pm",
//   "7pm",
// ];

// function randomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function Store(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
//   this.storeName = "seattle";
//   this.minCustPerHour = 23;
//   this.maxCustPerHour = 65;
//   this.avgCookiesPerCust = 6.3;
//   this.customerEachHour = [];
//   this.cookiesEachHour = [];
//   this.totalDailyCookies = 0;
//   this.render();
// }

// Store.prototype.generateCustEachHour = function () {
//   for (let i = 0; i < hoursOpen.length; i++) {
//     this.customerEachHour.push(
//       randomNum(this.minCustPerHour, this.maxCustPerHour)
//     );
//   }
// };

// Store.prototype.generateCookiesPerHour = function () {
//   for (let i = 0; i < hoursOpen.length; i++) {
//     let oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookiesPerCust);
//     this.cookiesEachHour.push(oneHour);
//     this.totalDailyCookies += oneHour;
//   }
// };

// Store.prototype.render = function () {
//   this.generateCustEachHour();
//   this.generateCookiesPerHour();

//   const container = document.getElementById("store");

//   const article = document.createElement("article");
//   containerElement.appendChild(article);

//   const h3 = document.createElement("h3");
//   h3.textContent = this.storeName;
//   article.appendChild(h3);

//   const ul = document.createElement("ul");
//   article.appendChild(ul);
//   for (let i = 0; i < hoursOpen; i++) {
//     const li = document.createElement("li");
//     li.textContent = this.hoursOpen[i];
//     ul.appendChild(li);

//     const table = document.createElement("table");
//     article.appendChild(table);

//     const headerRow = document.createElement("tr");
//     this.textContent = this.storeName;
//     table.appendChild(headerRow);

//     const hoursHeaderCell = document.createElement("th");
//     hoursHeaderCell.textContent = "Hours";
//     headerRow.appendChild(hoursHeaderCell);

//     const cookiesSoldHeaderCell = document.createElement("th");
//     cookiesSoldHeaderCell.textContent = "Cookies Sold";
//     headerRow.appendChild(cookiesSoldHeaderCell);

//     const hourData = document.createElement("td");
//     hourData.textContent = this.hoursOpen;
//     dataRow.appendChild(hourData);

//     const cookiesData = document.createElement("td");
//     cookiesData.textContent = this.cookiesEachHour;
//     dataRow.appendChild(cookiesData);

//     const p = document.createElement("p");
//     p.textContent = `${this.storeName} sold a total of ${this.totalDailyCookies}`;
//   }
// };

// const seattle = new Store("seattle");
// console.log(seattle);

"use strict";
console.log("Script In Construction");

const container = document.getElementById("container");
const storeTable = document.getElementById("store-table");

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
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();
  this.render();
}

CookieStore.prototype.calcCustomersEachHour = function () {
  console.log("working");
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(
      randomNum(this.minCustPerHour, this.maxCustPerHour)
    );
  }
};

CookieStore.prototype.calcCookiesEachHour = function () {
  this.calcCustomersEachHour();
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
console.log(seattle);
