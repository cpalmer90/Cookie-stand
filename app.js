"use strict";

const container = document.getElementById("container");

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

const seattle = {
  storeName: "seattle",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  customerEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHours: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesEachHour.push(
        randomNum(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(
        this.customerEachHour[i] * this.avgCookiesPerCust
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },

  render: function () {
    this.calcCustomersEachHours();
    this.calcCookiesEachHour();

    const article = document.createElement("article");
    container.appendChild(article);

    const h3 = document.createElement("h3");
    h3.textContent = this.storeName;
    article.appendChild(h3);

    const ul = document.createElement("ul");
    article.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${hours[i]}:
       ${this.cookiesEachHour[i]} cookies`;
      ul.appendChild(li);
    }
    const li = document.createElement("li");
    li.textContent = `Total Cookies`;
  },
};
seattle.render();

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
