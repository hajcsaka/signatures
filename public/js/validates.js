const taxNumber = document.querySelector("#taxNumber");
const btn = document.querySelector("#btn");
const firmName = document.querySelector("#firm_name");
const merchantName = document.querySelector("#merchant_name");
const locationName = document.querySelector("#work_location");
const accountnumber = document.querySelector("#bank_acount_numer");
const email = document.querySelector("#email");
const emailServer = document.querySelector("#emailServer");
const endTime = document.querySelector("#endTime");

btn.onclick = () => {
  const taxInput = taxNumber.value;
  const firmNameInput = firmName.value;
  const merchantNameInput = merchantName.value; 
  const locationInput = locationName.value; 
  const emailInput = email.value;  
  const taxPatt =  /^(\d{7})(\d)\-([1-5])\-(0[2-9]|[13][0-9]|2[02-9]|4[0-4]|51)$/g;
  const taxResults = taxInput.match(taxPatt);
  const accountInput = accountnumber.value;
  const accuontPatt = /^(\d{8})-\d{8}\-\d{8}$/g;
  const accountResults = accountInput.match(accuontPatt);
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
    const taxNumberField = (document.getElementById("taxNumber").style.color =
      "red");
    alert("nem megfelelő formátum");
  } else if (valTax == true) {
    let taxNumberField = (document.getElementById("taxNumber").style.color =
      "black");
     }
  //taxNUber validate section end);

  //account validate section start);
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
    if (endTimeInput  === "") {
      alert(" kérlek válaszd  ki a szolgálatatás kezdeti dátumát is");
    } else {
      
    }

    // Szerződés kezdeti ideje validáció end;

};
