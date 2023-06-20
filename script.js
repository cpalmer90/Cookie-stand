"use strict";

const container = document.getElementById("container");

function Store(
  storeName,
  minCustPerHour,
  maxCustPerHour,
  avgCookiesPerCust,
  customerEachHour,
  cookiesEachHour,
  totalDailyCookies,
  hoursOpen
) {
  this.storeName = "seattle";
  this.minCustPerHour = 23;
  this.maxCustPerHour = 65;
  this.avgCookiesPerCust = 6.3;
  this.customerEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.hoursOpen = [
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
  this.render();
}

Store.prototype.generateCustEachHour = function () {
  for (let i = 0; i < this.hoursOpen.length; i++) {
    this.customerEachHour.push(
      randomNum(this.minCustPerHour, this.maxCustPerHour)
    );
  }
};

Store.prototype.generateCookiesPerHour = function () {
  for (let i = 0; i < this.hoursOpen.length; i++) {
    let oneHour = Math.ceil(
      this.cookiesEachHour.push(
        this.customerEachHour[i] * this.avgCookiesPerCust
      )
    );
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

const seattle = new Store("seattle");
console.log(seattle);

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Store.prototype.render = function () {
  const container = document.getElementById("store");

  const article = document.createElement("article");
  containerElement.appendChild(article);

  const h3 = document.createElement("h3");
  h3.textContent = this.storeName;
  article.appendChild(h3);

  const ul = document.createElement("ul");
  article.appendChild(ul);
  for (let i = 0; i < hoursOpen; i++) {
    const li = document.createElement("li");
    li.textContent = this.hoursOpen[i];
    ul.appendChild(li);

    const table = document.createElement("table");
    article.appendChild(table);

    const headerRow = document.createElement("tr");
    this.textContent = this.storeName;
    table.appendChild(headerRow);

    const hoursHeaderCell = document.createElement("th");
    hoursHeaderCell.textContent = "Hours";
    headerRow.appendChild(hoursHeaderCell);

    const cookiesSoldHeaderCell = document.createElement("th");
    cookiesSoldHeaderCell.textContent = "Cookies Sold";
    headerRow.appendChild(cookiesSoldHeaderCell);

    const hourData = document.createElement("td");
    hourData.textContent = this.hoursOpen;
    dataRow.appendChild(hourData);

    const cookiesData = document.createElement("td");
    cookiesData.textContent = this.cookiesEachHour;
    dataRow.appendChild(cookiesData);

    const p = document.createElement("p");
    p.textContent = `${this.storeName} sold a total of ${this.totalDailyCookies}`;
  }
};
