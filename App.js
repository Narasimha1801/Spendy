const header_date = document.getElementById("heading-date");
const submit_btn = document.getElementById("submit-btn");
const table_body = document.getElementById("expense-table-body");
const submit_array = [];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
header_date.textContent =
  date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

function InputObj(description, category, amount, date_input) {
  return {
    description: description,
    category: category,
    amount: amount,
    date_input: date_input,
  };
}
let obj1;
submit_btn.addEventListener("click", function onSubmit() {
  const description = String(
    document.getElementById("description-input").value,
  );

  const category = String(document.getElementById("category").value);

  const amount = Number(document.getElementById("amount-input").value);

  const date_input = document.getElementById("date-input").value;

  obj1 = InputObj(description, category, amount, date_input);

  submit_array.push(obj1);

  // Create row
  const tr = document.createElement("tr");
  tr.classList.add("table-data");

  // ---------------- DESCRIPTION ----------------
  const td_description = document.createElement("td");
  td_description.classList.add("data");

  const description_div = document.createElement("div");

  const description_p = document.createElement("p");
  description_p.textContent = obj1.description;

  description_div.appendChild(description_p);
  td_description.appendChild(description_div);

  // ---------------- CATEGORY ----------------
  const td_category = document.createElement("td");
  td_category.classList.add("data");

  const category_div = document.createElement("div");
  category_div.classList.add("table-category");

  const category_icon = document.createElement("i");

  const category_p = document.createElement("p");
  category_p.textContent = obj1.category;

  // Select icon according to category
  if (obj1.category === "Food") {
    category_icon.setAttribute("data-lucide", "utensils");
    category_icon.classList.add("food-icon");
  } else if (obj1.category === "Transport") {
    category_icon.setAttribute("data-lucide", "bus-front");
    category_icon.classList.add("transport-icon");
  } else if (obj1.category === "Shopping") {
    category_icon.setAttribute("data-lucide", "shopping-bag");
    category_icon.classList.add("shopping-icon");
  } else if (obj1.category === "Bills") {
    category_icon.setAttribute("data-lucide", "receipt");
    category_icon.classList.add("bills-icon");
  } else if (obj1.category === "Entertainment") {
    category_icon.setAttribute("data-lucide", "ticket");
    category_icon.classList.add("entertainment-icon");
  } else {
    category_icon.setAttribute("data-lucide", "ellipsis");
    category_icon.classList.add("others-icon");
  }

  category_div.appendChild(category_icon);
  category_div.appendChild(category_p);

  td_category.appendChild(category_div);

  // ---------------- AMOUNT ----------------
  const td_amount = document.createElement("td");
  td_amount.classList.add("data");

  const amount_div = document.createElement("div");

  const amount_p = document.createElement("p");
  amount_p.textContent = obj1.amount;

  amount_div.appendChild(amount_p);
  td_amount.appendChild(amount_div);

  // ---------------- DATE ----------------
  const td_date = document.createElement("td");
  td_date.classList.add("data");

  const date_div = document.createElement("div");

  const date_p = document.createElement("p");
  date_p.textContent = obj1.date_input;

  date_div.appendChild(date_p);
  td_date.appendChild(date_div);

  // ---------------- APPEND EVERYTHING ----------------

  tr.appendChild(td_description);
  tr.appendChild(td_category);
  tr.appendChild(td_amount);
  tr.appendChild(td_date);

  table_body.appendChild(tr);

  // Render Lucide icon
  lucide.createIcons();

  console.log(submit_array);
});
