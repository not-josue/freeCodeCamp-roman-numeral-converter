import convertToRoman from "./convert";
import data from "./data";

function renderTable() {
  // table body
  const arabic = document.getElementById("arabicData");
  // header for each row
  const arabicHeader = `<th>Arabic Numerals</th>`;
  const romanHeader = `<th>Roman Numerals</th>`;

  // map each arabic number
  const arabicData = data
    .map((element) => {
      //console.log(element.arabic);
      return `<td class="is-vcentered">${element.arabic}</td>`;
    })
    .join("");

  // map each roman number
  const romanData = data
    .map((element) => {
      return `<td class="is-vcentered">${element.roman}</td>`;
    })
    .join("");

  arabic.innerHTML = `<tr>${arabicHeader}${arabicData}</tr> 
  <tr>${romanHeader}${romanData}</tr>`;
}

function renderOutput() {
  const input = document.querySelector("input");
  const btn = document.querySelector("button");
  const output = document.querySelector("#output");

  input.onkeydown = (e) => {
    if (e.key === 13 || e.key === "Enter") {
      btn.click();
    }
  };

  btn.onclick = () => {
    const inputValue = input.value;
    // no input value
    if (inputValue.length === 0) return output.innerHTML = "No input value";
    // invalid input value
    if(isNaN(inputValue) || inputValue <= 0) {
      input.value = "";
      return output.innerHTML = `${inputValue} = invalid input`;
    }
    // result
    const result = convertToRoman(inputValue);
    output.innerHTML = `Arabic: ${inputValue} = Roman: ${result}`;
    // reset input value
    input.value = "";
  };
}

export { renderOutput, renderTable };
