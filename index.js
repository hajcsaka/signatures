function checkTaxNumber(taxNumber) {
    var pattern = /^(\d{7})(\d)\-([1-5])\-(0[2-9]|[13][0-9]|2[02-9]|4[0-4]|51)$/;
    var matches = taxNumber.match(pattern);
    if (matches) {
        
        var mul = [9, 7, 3, 1, 9, 7, 3];
       
        var base = matches[1].split("");
       
        var check = parseInt(matches[2]);
     
        var sum = 0;
        for (var i = 0; i < 7; i++) { sum += parseInt(base[i]) * mul[i]; }
    
        var last = sum % 10;
      
        if (last > 0) { last = 10 - last; }
      
        return last === check;
    }
    return false;
}

 

 