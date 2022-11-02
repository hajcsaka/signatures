const nums = document.querySelector('#nums');
const btn = document.querySelector('#btn');
// const taxValue = document.querySelector('#btn');

  btn.onclick = ()=>  {
      const inputvalue = nums.value;
      const patt = /^(\d{7})(\d)\-([1-5])\-(0[2-9]|[13][0-9]|2[02-9]|4[0-4]|51)$/;
      const results = inputvalue.match(patt);
       
      //console.log(results);
      const valNum = results != null;
      if (valNum != true){
        alert("Az adószám formátuma nem megfelelő");
      }

  }
console.log('test');
