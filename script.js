let data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const bars = document.querySelectorAll(".chart__bar");
const total = document.querySelectorAll(".chart__total");

bars.forEach((bar) => {
  bar.addEventListener("mouseover", function () {
    for (const obj of data) {
      if (bar.classList.contains(obj.day)) {
        for (const p of total) {
          p.textContent = `$ ${obj.amount}`;
        }
      }
    }
  });
});
