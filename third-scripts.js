document.addEventListener('DOMContentLoaded', function() {
const nameInput = document.querySelector('input[id="nameField"]');
  const emailInput = document.querySelector('input[id="emailAddress"]');
  const submitBtn = document.getElementById('nextBtnEmail');

  function checkInputs() {
    if (nameInput.value.trim() && emailInput.value.trim()) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  nameInput.addEventListener('input', checkInputs);
  emailInput.addEventListener('input', checkInputs);

document.getElementById('nextBtnEmail').addEventListener('click', function() {
  const name = document.querySelector('input[id="nameField"]').value;
  const email = document.querySelector('input[id="emailAddress"]').value;
  const randomId = generateRandomId();
  //
  submitToAirtable(name,email);
  console.log("Candidate name:  " + name);
  console.log("Candidate email:  " + email);
  console.log("Candidate ID:  " + randomId);
  window.location.href = 'page4.html'
});

 async function submitToAirtable(name, email) {
  const randomId = generateRandomId();
  const airtableToken = 'patP5myoOJXlKCzuK.607ac622fb775cb2ff3fb91183d3441316a84856ab491cde3c908d907ad9ebfe'; // Replace with your Airtable PAT
  const baseId = 'appCljLncSDsRj2HE'; // Replace with your Airtable Base ID
  const tableName = 'TT Details'; // Replace with your Table name

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  const data = {
    records: [
      {
        fields: {
          "Candidate Name": name,
          "Candidate Email": email,
          "Candidate ID": randomId,
          "Booking Mail Sent": "No",
          "Result Published": false,
          "Result Mail Sent": "No"
        }
      }
    ]
  };


    const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${airtableToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    console.log('Record added to Airtable!');
  } else {
    console.error('Failed to add record:', await response.text());
  }
  }

function generateRandomId(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

});