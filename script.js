function getVerificationCode(isin) {
    if (isin.length != 12) return false;
    var v = [];
    for (var i = isin.length - 2; i >= 0; i--) {
        var c = isin.charAt(i);
        if (isNaN(c)) { //not a digit
            var letterCode = isin.charCodeAt(i) - 55; //Char ordinal + 9
            v.push(letterCode % 10);
            if (letterCode > 9) {
                v.push(Math.floor(letterCode / 10));
            }
        } else {
            v.push(Number(c));
        }
    }
    var sum = 0;
    var l = v.length;
    for (var i = 0; i < l; i++) {
        if (i % 2 == 0) {
            var d = v[i] * 2;
            sum += Math.floor(d / 10);
            sum += d % 10;
        } else {
            sum += v[i];
        }
    }
    return (10 - (sum % 10)) % 10
}

function ISINmiddle(length,zerocheckbox,ocheckbox,nbcheckbox) {
  
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let str = '';

    if (nbcheckbox.checked) {
     chars = '0123456789';
    } 
  
    if (zerocheckbox.checked) {
     chars = chars.replace("0","");
    } 
  
    if (ocheckbox.checked) {
     chars = chars.replace("O","");
    } 
  

    
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
};

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  
  document.getElementById("copy").src = "https://cdn.glitch.global/e0988317-d05f-40f7-974a-ff3d501d477a/copied.png?v=1693994546374";
  document.getElementById("copy").title = "ISIN copied!";
  
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

