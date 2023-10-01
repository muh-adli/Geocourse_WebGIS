const form = document.getElementById("form");
const submitter = document.querySelector("button[value=save]");
const formData = new FormData(form, submitter);

const output = document.getElementById("output");

// for (const [key, value] of formData) {
//   output.textContent += `${key}: ${value}\n`;
// }


async function Gempa() {
    const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
    console.log(response)
    const gempa = await response.json();
    console.log(gempa);
  };

const fetchapi = "asdadsadasdad"
// // const fetchapi = gempa;
// // const gempa = document.getElementById("gempa");