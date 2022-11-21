
 const form = document.getElementById('form');
 form.addEventListener("submit", (event) =>{
   event.preventDefault();
  // console.log('hello world')
});

var state = {
    datas: [],  
    editedId: "",
  };

  function renderEditData() {
    if (state.editedId === "") {
      document.getElementById("edit-data").innerHTML = "";
      return;
    }
  
    var founddata;
    for (var data of state.datas) {
      if (data.id === state.editedId) {
        founddata = data;
        break; 
      }
    }
  
    var editFormHTML = `
      <h3>Adatok szerkesztése:</h3>
      <form id="update-data" class="p-5">
        <label class="w-100">
          Név:
          <input class="form-control" type="text" name="name" value="${
            founddata.name 
          }"> 
        </label>
        </label> 
        <label class="w-100">
        Adószám:
          <input class="form-control" type="text" name="merchantName" value="${
            founddata.merchantName
          }">
        </label>
        <label class="w-100">
        Telephely:
          <input class="form-control" type="text" name="workLocation" value="${
            founddata.workLocation
          }">
        </label>
        <label class="w-100">
        Adószám:
          <input class="form-control" type="text" name="taxNumber" value="${
            founddata.taxNumber
          }">
        </label>
        <label class="w-100">
        Vállalkozói számlaszám:
          <input class="form-control" type="text" name="banAccountNumber" value="${
            founddata.banAccountNumber
          }">
        </label>
        <label class="w-100">
        Céges e-mail:
          <input class="form-control" type="text" name="email" value="${
            founddata.email 
          }">
        </label>
        <label class="w-100">
        e-mail server:
          <input class="form-control" type="text" name="emailServer" value="${
            founddata.emailServer  
          }">
           
        
       
        <button class="btn btn-primary" type="submit">Küldés</button>
      </form>
    `;
  
    document.getElementById("edit-data").innerHTML = editFormHTML;
  
    document.getElementById("update-data").onsubmit = async function (event) {
      event.preventDefault();
     
    var name = event.target.elements.name.value;  
    var merchantName = event.target.elements.merchantName.value;  
    var workLocation = event.target.elements.workLocation.value;
    var taxNumber = event.target.elements.taxNumber.value;
    var banAccountNumber = event.target.elements.banAccountNumber.value;
    var email = event.target.elements.email.value;
    var emailServer = event.target.elements.emailServer.value;
    console.log(emailServer);
    //var checkbox = event.target.elements.checkbox.value; 
    //var endTime = event.target.elements.endTime.checked;
  
      const body = {
        name: name, 
        merchantName :   merchantName ,
        workLocation:   workLocation,
        taxNumber :  taxNumber,
        banAccountNumber: banAccountNumber,
        email: email,
        emailServer : emailServer,
        //checkbox:  checkbox,
        //endTime: endTime,
      }; 
  
      const res = await fetch(`/datas/${state.editedId}`, { 
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "content-type": "application/json",
        },
      });
  
      if (!res.ok) {
        alert("Szerver hiba");
        return;
      }
  
      state.editedId = ""; 
  
      // render
      fetchAndRenderEditDatas();
      renderEditData();
    };
  }
  
  async function fetchAndRenderEditDatas() {
    const response = await fetch('/datas');
    if (!response.ok) {
      alert("Szerver hiba");
      return;
    }
  
    state.datas = await response.json();
  
    var datasHTML = "";
  
    for (var data of state.datas) {
      datasHTML += `
          <div class="card m-2 p-2 ${data.isInStock ? "" : "bg-danger"}">
            <p>${data.name}</p>
            <p>${data.merchantName}</p>
            <p>${data.workLocation}</p>
            <p>${data.taxNumber}</p>
            <p>${data.banAccountNumber}</p>
            <p>${data.email + '@' + data.emailServer}</p>
             
          
             
            <button class="btn btn-warning float-right edit-data mb-2" data-dataid="${
              data.id
            }">
              Szerkesztés
            </button>
            <button class="btn btn-danger float-right delete-data" data-dataid="${
              data.id
            }">
              Törlés
            </button>
          </div>
        `;
    }
  
    document.getElementById("data-list-component").innerHTML = datasHTML;
  
    for (var editBtn of document.querySelectorAll(".edit-data")) {
      editBtn.onclick = function (event) {
        var id = event.target.dataset.dataid;
        state.editedId = id;
        renderEditData();
      };
    }
  
    for (var deleteBtn of document.querySelectorAll(".delete-data")) {
      // action
      deleteBtn.onclick = async function (event) {
        var id = event.target.dataset.dataid;
  
        const response = await fetch(`/datas/${id}`, {
          method: "delete",
        });
  
        if (!response.ok) {
          alert("Törlés sikertelen");
          return;
        }
  
        // render
        fetchAndRenderEditDatas();
      };
    }
  }
  
  window.onload = fetchAndRenderEditDatas;
  
  // action, state change, render
  // tömbhöz új elem hozzáadása: state.datas.push({name: '...', price: 2500, isInStock: false})
  
  // adatok felvitele
  

  document.getElementById("form").onsubmit = async function (event) {
    event.preventDefault();

   
    var name = event.target.elements.name.value;
    console.log(name);
    var merchantName = event.target.elements.merchantName.value;
    console.log(merchantName );
    var workLocation = event.target.elements.workLocation.value;
    console.log(workLocation);
    var taxNumber = event.target.elements.taxNumber.value;
    console.log(taxNumber);
    var banAccountNumber = event.target.elements.banAccountNumber.value;
    console.log(banAccountNumber);
    var email = event.target.elements.email.value;
    console.log(email);
    var emailServer = event.target.elements.emailServer.value;
    console.log(emailServer);
    var checkbox = event.target.elements.checkbox.value;
    console.log(checkbox);
    //var endTime = event.target.elements.endTime.checked;
  
    // state change
    const body = {
     
         name: name,
         merchantName : merchantName,
         workLocation: workLocation,
         taxNumber : taxNumber,
         banAccountNumber:banAccountNumber,
         email: email,
         emailServer : emailServer,
         //checkbox: checkbox,
         //endTime: endTime,
    };
  
    const res = await fetch("/datas", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    });
  
    if (!res.ok) {
      alert("Létrehozás sikertelen");
      return;
    }
  
    // render
    fetchAndRenderEditDatas();
  };
  
  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
   
  