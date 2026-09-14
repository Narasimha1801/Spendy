// const header_date = document.getElementById("heading-date");
// const submit_btn = document.getElementById("submit-btn");
// const table_body = document.getElementById("expense-table-body");
// const amount_spent = document.getElementById("amount_spent");

// const btn_all = document.getElementById("btn-all");
// const btn_food = document.getElementById("btn-food");
// const btn_transport = document.getElementById("btn-transport");
// const btn_entertainment = document.getElementById("btn-entertainment");
// const btn_bills = document.getElementById("btn-bills");
// const btn_shopping = document.getElementById("btn-shopping");
// const btn_others = document.getElementById("btn-all");

// const submit_array = [];
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const date = new Date();
// header_date.textContent =
//   date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

// function InputObj(description, category, amount, date_input) {
//   return {
//     description: description,
//     category: category,
//     amount: amount,
//     date_input: date_input,
//   };
// }
// let obj1;
// submit_btn.addEventListener("click", function onSubmit() {
//   const description = String(
//     document.getElementById("description-input").value,
//   );

//   const category = String(document.getElementById("category").value);

//   const amount = Number(document.getElementById("amount-input").value);

//   const date_input = document.getElementById("date-input").value;

//   obj1 = InputObj(description, category, amount, date_input);

//   submit_array.push(obj1);

//   // Create row
//   const tr = document.createElement("tr");
//   tr.classList.add("table-data");

//   // ---------------- DESCRIPTION ----------------
//   const td_description = document.createElement("td");
//   td_description.classList.add("data");

//   const description_div = document.createElement("div");

//   const description_p = document.createElement("p");
//   description_p.textContent = obj1.description;

//   description_div.appendChild(description_p);
//   td_description.appendChild(description_div);

//   // ---------------- CATEGORY ----------------
//   const td_category = document.createElement("td");
//   td_category.classList.add("data");

//   const category_div = document.createElement("div");
//   category_div.classList.add("table-category");

//   const category_icon = document.createElement("i");

//   const category_p = document.createElement("p");
//   category_p.textContent = obj1.category;

//   // Select icon according to category
//   if (obj1.category === "Food") {
//     category_icon.setAttribute("data-lucide", "utensils");
//     category_icon.classList.add("food-icon");
//   } else if (obj1.category === "Transport") {
//     category_icon.setAttribute("data-lucide", "bus-front");
//     category_icon.classList.add("transport-icon");
//   } else if (obj1.category === "Shopping") {
//     category_icon.setAttribute("data-lucide", "shopping-bag");
//     category_icon.classList.add("shopping-icon");
//   } else if (obj1.category === "Bills") {
//     category_icon.setAttribute("data-lucide", "receipt");
//     category_icon.classList.add("bills-icon");
//   } else if (obj1.category === "Entertainment") {
//     category_icon.setAttribute("data-lucide", "ticket");
//     category_icon.classList.add("entertainment-icon");
//   } else {
//     category_icon.setAttribute("data-lucide", "ellipsis");
//     category_icon.classList.add("others-icon");
//   }

//   category_div.appendChild(category_icon);
//   category_div.appendChild(category_p);

//   td_category.appendChild(category_div);

//   // ---------------- AMOUNT ----------------
//   const td_amount = document.createElement("td");
//   td_amount.classList.add("data");

//   const amount_div = document.createElement("div");

//   const amount_p = document.createElement("p");
//   amount_p.textContent = obj1.amount;

//   amount_div.appendChild(amount_p);
//   td_amount.appendChild(amount_div);

//   // ---------------- DATE ----------------
//   const td_date = document.createElement("td");
//   td_date.classList.add("data");

//   const date_div = document.createElement("div");

//   const date_p = document.createElement("p");
//   date_p.textContent = obj1.date_input;

//   date_div.appendChild(date_p);
//   td_date.appendChild(date_div);

//   // ---------------- APPEND EVERYTHING ----------------

//   tr.appendChild(td_description);
//   tr.appendChild(td_category);
//   tr.appendChild(td_amount);
//   tr.appendChild(td_date);

//   table_body.appendChild(tr);

//   // Render Lucide icon
//   lucide.createIcons();

//   // ---------------- UPDATEING SPENT AMOUNT ----------------

//   let Amount_spent = 0;
//   for (let i = 0; i < submit_array.length; i++) {
//     Amount_spent += submit_array[i].amount;
//   }
//   amount_spent.textContent = " ₹ " + Amount_spent + " /- ";

//   const food_items = submit_array.filter(
//     (expense) => expense.category === "Food",
//   );
//   const transport_items = submit_array.filter(
//     (expense) => expense.category === "Transport",
//   );
//   const bills_items = submit_array.filter(
//     (expense) => expense.category === "Bills",
//   );
//   const shopping_items = submit_array.filter(
//     (expense) => expense.category === "Shopping",
//   );
//   const entertainment_items = submit_array.filter(
//     (expense) => expense.category === "Entertainment",
//   );
//   const others_items = submit_array.filter(
//     (expense) => expense.category === "Others",
//   );

//   btn_food.addEventListener("click", function () {
//     table_body.innerHTML = "";

//     food_items.forEach((expense) => {
//       const tr = document.createElement("tr");
//       tr.classList.add("table-data");
//       const td_description = document.createElement("td");
//       td_description.classList.add("data");

//       const description_div = document.createElement("div");

//       const description_p = document.createElement("p");
//       description_p.textContent = expense.description;

//       description_div.appendChild(description_p);
//       td_description.appendChild(description_div);

//       const td_category = document.createElement("td");
//       td_category.classList.add("data");

//       const category_div = document.createElement("div");
//       category_div.classList.add("table-category");

//       const category_icon = document.createElement("i");

//       const category_p = document.createElement("p");
//       category_p.textContent = expense.category;

//       category_icon.setAttribute("data-lucide", "utensils");
//       category_icon.classList.add("food-icon");

//       const td_amount = document.createElement("td");
//       td_amount.classList.add("data");

//       const amount_div = document.createElement("div");

//       const amount_p = document.createElement("p");
//       amount_p.textContent = expense.amount;

//       amount_div.appendChild(amount_p);
//       td_amount.appendChild(amount_div);
//       const td_date = document.createElement("td");
//       td_date.classList.add("data");

//       const date_div = document.createElement("div");

//       const date_p = document.createElement("p");
//       date_p.textContent = expense.date_input;
//       tr.appendChild(td_description);
//       tr.appendChild(td_category);
//       tr.appendChild(td_amount);
//       tr.appendChild(td_date);

//       table_body.appendChild(tr);

//       // Render Lucide icon
//       lucide.createIcons();
//     });
//   });
// });
// ==========================================
// ELEMENTS
// ==========================================

const header_date = document.getElementById("heading-date");

const submit_btn = document.getElementById("submit-btn");

const table_body = document.getElementById("expense-table-body");

const amount_spent = document.getElementById("amount_spent");

const category_total = document.getElementById("category_total");

const balance = document.getElementById("balance");

const initial_balance_input = document.getElementById("initial-balance-input");

// ==========================================
// FILTER BUTTONS
// ==========================================

const btn_all = document.getElementById("btn-all");

const btn_food = document.getElementById("btn-food");

const btn_transport = document.getElementById("btn-transport");

const btn_shopping = document.getElementById("btn-shopping");

const btn_bills = document.getElementById("btn-bills");

const btn_entertainment = document.getElementById("btn-entertainment");

const btn_others = document.getElementById("btn-others");

// ==========================================
// EXPENSE ARRAY
// ==========================================

const submit_array = [];

// ==========================================
// CURRENT DATE
// ==========================================

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

// ==========================================
// EXPENSE OBJECT
// ==========================================

function InputObj(description, category, amount, date_input) {
  return {
    description: description,
    category: category,
    amount: amount,
    date_input: date_input,
  };
}

// ==========================================
// ACTIVE BUTTON
// ==========================================

function setActiveButton(activeButton) {
  const buttons = document.querySelectorAll(".category-btn button");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  activeButton.classList.add("active");
}

// ==========================================
// RENDER TABLE
// ==========================================

function renderTable(expenses) {
  // Clear existing rows
  table_body.innerHTML = "";

  expenses.forEach((expense) => {
    // ======================================
    // ROW
    // ======================================

    const tr = document.createElement("tr");

    tr.classList.add("table-data");

    // ======================================
    // DESCRIPTION
    // ======================================

    const td_description = document.createElement("td");

    td_description.classList.add("data");

    const description_div = document.createElement("div");

    const description_p = document.createElement("p");

    description_p.textContent = expense.description;

    description_div.appendChild(description_p);

    td_description.appendChild(description_div);

    // ======================================
    // CATEGORY
    // ======================================

    const td_category = document.createElement("td");

    td_category.classList.add("data");

    const category_div = document.createElement("div");

    category_div.classList.add("table-category");

    const category_icon = document.createElement("i");

    const category_p = document.createElement("p");

    category_p.textContent = expense.category;

    // ======================================
    // CATEGORY ICON
    // ======================================

    if (expense.category === "Food") {
      category_icon.setAttribute("data-lucide", "utensils");

      category_icon.classList.add("food-icon");
    } else if (expense.category === "Transport") {
      category_icon.setAttribute("data-lucide", "bus-front");

      category_icon.classList.add("transport-icon");
    } else if (expense.category === "Shopping") {
      category_icon.setAttribute("data-lucide", "shopping-bag");

      category_icon.classList.add("shopping-icon");
    } else if (expense.category === "Bills") {
      category_icon.setAttribute("data-lucide", "receipt");

      category_icon.classList.add("bills-icon");
    } else if (expense.category === "Entertainment") {
      category_icon.setAttribute("data-lucide", "ticket");

      category_icon.classList.add("entertainment-icon");
    } else {
      category_icon.setAttribute("data-lucide", "ellipsis");

      category_icon.classList.add("others-icon");
    }

    category_div.appendChild(category_icon);

    category_div.appendChild(category_p);

    td_category.appendChild(category_div);

    // ======================================
    // AMOUNT
    // ======================================

    const td_amount = document.createElement("td");

    td_amount.classList.add("data");

    const amount_div = document.createElement("div");

    const amount_p = document.createElement("p");

    amount_p.textContent = expense.amount;

    amount_div.appendChild(amount_p);

    td_amount.appendChild(amount_div);

    // ======================================
    // DATE
    // ======================================

    const td_date = document.createElement("td");

    td_date.classList.add("data");

    const date_div = document.createElement("div");

    const date_p = document.createElement("p");

    date_p.textContent = expense.date_input;

    date_div.appendChild(date_p);

    td_date.appendChild(date_div);

    // ======================================
    // ADD CELLS TO ROW
    // ======================================

    tr.appendChild(td_description);

    tr.appendChild(td_category);

    tr.appendChild(td_amount);

    tr.appendChild(td_date);

    // ======================================
    // ADD ROW TO TABLE
    // ======================================

    table_body.appendChild(tr);
  });

  // Create Lucide icons
  lucide.createIcons();
}

// ==========================================
// UPDATE SUMMARY
// ==========================================

function updateSummary(expenses) {
  // ======================================
  // TOTAL EXPENSES
  // ======================================

  let totalExpenses = 0;

  for (let i = 0; i < submit_array.length; i++) {
    totalExpenses += submit_array[i].amount;
  }

  // ======================================
  // CATEGORY TOTAL
  // ======================================

  let categoryTotal = 0;

  for (let i = 0; i < expenses.length; i++) {
    categoryTotal += expenses[i].amount;
  }

  // ======================================
  // INITIAL BALANCE
  // ======================================

  const initialBalance = Number(initial_balance_input.value);

  // ======================================
  // REMAINING BALANCE
  // ======================================

  const remainingBalance = initialBalance - totalExpenses;

  // ======================================
  // UPDATE TOTAL EXPENSES
  // ======================================

  amount_spent.textContent = "₹ " + totalExpenses + " /-";

  // ======================================
  // UPDATE CATEGORY TOTAL
  // ======================================

  category_total.textContent = "₹ " + categoryTotal + " /-";

  // ======================================
  // UPDATE BALANCE
  // ======================================

  balance.textContent = "₹ " + remainingBalance + " /-";
}

// ==========================================
// ADD EXPENSE
// ==========================================

submit_btn.addEventListener("click", function () {
  // ====================================
  // GET DESCRIPTION
  // ====================================

  const description = String(
    document.getElementById("description-input").value,
  );

  // ====================================
  // GET CATEGORY
  // ====================================

  const category = String(document.getElementById("category").value);

  // ====================================
  // GET AMOUNT
  // ====================================

  const amount = Number(document.getElementById("amount-input").value);

  // ====================================
  // GET DATE
  // ====================================

  const date_input = document.getElementById("date-input").value;

  // ====================================
  // CREATE OBJECT
  // ====================================

  const expense = InputObj(description, category, amount, date_input);

  // ====================================
  // STORE EXPENSE
  // ====================================

  submit_array.push(expense);

  // ====================================
  // SHOW ALL EXPENSES
  // ====================================

  renderTable(submit_array);

  // ====================================
  // UPDATE SUMMARY
  // ====================================

  updateSummary(submit_array);
});

// ==========================================
// INITIAL BALANCE KEYUP
// ==========================================

initial_balance_input.addEventListener("keyup", function () {
  updateSummary(submit_array);
});

// ==========================================
// ALL FILTER
// ==========================================

btn_all.addEventListener("click", function () {
  renderTable(submit_array);

  updateSummary(submit_array);

  setActiveButton(btn_all);
});

// ==========================================
// FOOD FILTER
// ==========================================

btn_food.addEventListener("click", function () {
  const food_items = submit_array.filter(
    (expense) => expense.category === "Food",
  );

  renderTable(food_items);

  updateSummary(food_items);

  setActiveButton(btn_food);
});

// ==========================================
// TRANSPORT FILTER
// ==========================================

btn_transport.addEventListener("click", function () {
  const transport_items = submit_array.filter(
    (expense) => expense.category === "Transport",
  );

  renderTable(transport_items);

  updateSummary(transport_items);

  setActiveButton(btn_transport);
});

// ==========================================
// SHOPPING FILTER
// ==========================================

btn_shopping.addEventListener("click", function () {
  const shopping_items = submit_array.filter(
    (expense) => expense.category === "Shopping",
  );

  renderTable(shopping_items);

  updateSummary(shopping_items);

  setActiveButton(btn_shopping);
});

// ==========================================
// BILLS FILTER
// ==========================================

btn_bills.addEventListener("click", function () {
  const bills_items = submit_array.filter(
    (expense) => expense.category === "Bills",
  );

  renderTable(bills_items);

  updateSummary(bills_items);

  setActiveButton(btn_bills);
});

// ==========================================
// ENTERTAINMENT FILTER
// ==========================================

btn_entertainment.addEventListener("click", function () {
  const entertainment_items = submit_array.filter(
    (expense) => expense.category === "Entertainment",
  );

  renderTable(entertainment_items);

  updateSummary(entertainment_items);

  setActiveButton(btn_entertainment);
});

// ==========================================
// OTHERS FILTER
// ==========================================

btn_others.addEventListener("click", function () {
  const others_items = submit_array.filter(
    (expense) => expense.category === "Others",
  );

  renderTable(others_items);

  updateSummary(others_items);

  setActiveButton(btn_others);
});

// ==========================================
// INITIAL SUMMARY
// ==========================================

updateSummary(submit_array);
setActiveButton(btn_all);
