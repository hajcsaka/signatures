const taxNumber = document.querySelector("#taxNumber");
const btn = document.querySelector("#btn");
const firmName = document.querySelector("#firm_name");
const merchantName = document.querySelector("#merchant_name");
const locationName = document.querySelector("#work_location");
const accountnumber = document.querySelector("#bank_acount_numer");
const email = document.querySelector("#email");
const emailServer = document.querySelector("#emailServer");
const endTime = document.querySelector("#endTime");

const date = new Date();

// Reset a Date's time to midnight
date.setHours(0, 0, 0, 0);

// Format a date to YYYY-MM-DD (or any other format)
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}

// 👇️ 2022-01-18 (yyyy-mm-dd)
const currentDate = formatDate(new Date());
//console.log("current date : " + currentDate);


btn.onclick = () => {
  const taxInput = taxNumber.value;
  const taxInputTrimmed = taxInput.trim();
  const firmNameInput = firmName.value;
  const merchantNameInput = merchantName.value; 
  const locationInput = locationName.value; 
  const emailInput = email.value;  
  const taxPatt =  /^(\d{7})(\d)\-([1-5])\-(0[2-9]|[13][0-9]|2[02-9]|4[0-4]|51)$/g;
  const taxResults = taxInputTrimmed.match(taxPatt);
  const accountInput = accountnumber.value;
  const accountInputTrimmed = accountInput.trim();
  const accuontPatt = /^(\d{8})-\d{8}\-\d{8}$/g;
  const accountResults = accountInputTrimmed.match(accuontPatt);
  const emailServerInput = emailServer.value;
  const serverPatt = /^[a-z]+\.[a-z]{2,3}$/g;
  const emailServerResults = emailServerInput.match(serverPatt); 
  const endTimeInput = endTime.value;

  //firmName validate section start); 
  if (firmNameInput === "") {
    alert(" kérlek töltsd ki a Cég neve mezőt");
  } 
  //firmName validate section end);

  //merchantName validate section start);
  if (merchantNameInput  === "") {
    alert(" kérlek töltsd ki a Vendéglátó egység neve mezőt");
  } 
  //merchantName validate section end);

  //location validate section start);
   if (locationInput  === "") {
    alert(" kérlek töltsd ki a Telephely neve mezőt");
  } 
  //location validate section end);

  //taxNUber validate section start);
  const valTax = taxResults != null;
  if (valTax != true) {
     document.getElementById("taxNumber").style.color =
      "red";
    alert("nem megfelelő adószám formátum");
   
  } else if (valTax == true) {
    document.getElementById("taxNumber").style.color =
      "black";
     }
  //taxNUber validate section end);

  //account validate section start);
  function errorMessage() {
		var error = document.getElementById("error")
		if (isNaN(document.getElementById("number").value))
		{
			
			// Changing content and color of content
			error.textContent = "Please enter a valid number"
			error.style.color = "red"
		} else {
			error.textContent = ""
		}
	}

  const valAccount = accountResults != null;
  if (valAccount != true) {
    let accountNumberField = (document.getElementById("bank_acount_numer").style.color =
      "red");
    alert("nem megfelelő számlaszám formátum");
  } else if (valTax == true) {
    let accountNumberField = (document.getElementById("bank_acount_numer").style.color =   
      "black");
    
  }
  //account validate section end);
  // e-mail validate section start);
  if (emailInput === "") {
    alert(" kérlek töltsd ki a Céges e-mail első részét is");
  } 
  //account validate section end);

   // e-mailSerever validate section start);
   const valEmailServer = emailServerResults != null;
  if (valEmailServer != true) {
     
    alert("nem megfelelő server-megjelölés/ helyes pl. gmail.com ");
  } else if (valTax == true) {
     document.getElementById("emailServer").style.color =   
      "black";    
  }
    // e-mailSerever validate section end);

    // Szerződés kezdeti ideje validáció start;
    if (endTimeInput  === "" || endTimeInput < currentDate) {
           
      alert(" A szolgáltatás kezdeti idejének napja nem lehet kisebb mint a mai nap :D ");
    } else {
      
    }
    console.log("endTime = " + endTimeInput);
    // Szerződés kezdeti ideje validáció end;

};
