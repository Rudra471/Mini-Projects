const BASE_URL =
  "https://api.frankfurter.dev/v1/latest?base=USD&symbols=INR";

  let dropdowns = document.querySelectorAll(".dropDown select");
  const btn = document.querySelector("button");
  const result = document.querySelector(".msg");

  for (let select of dropdowns) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } else if (select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
      }
      select.append(newOption);
    }
}

btn.addEventListener("click",  async (eve) => {
    eve.preventDefault();
    let amt = document.querySelector("input").value;
    if (amt === "" || amt < "1") {
      alert("Please enter a valid amount");
      return;
    }
    let currFrom = document.querySelector(".from select").value;
    let currTo = document.querySelector(".to select").value;

    const FINAL_URL = `https://api.frankfurter.dev/v1/latest?base=${currFrom}&symbols=${currTo}`;
    let response = await fetch(FINAL_URL);
    let data = await response.json();
    let rate = data.rates[currTo];
    let total = (rate * amt);
    result.innerText = `${amt} ${currFrom} = ${total.toFixed(2)} ${currTo}`;
})