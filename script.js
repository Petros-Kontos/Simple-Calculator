function calc() {
    var a = parseInt(document.querySelector("#input-1").value) ;
    var b = parseInt(document.querySelector("#input-2").value) ;
    var op = document.querySelector("#operator").value ;
    var result;

    switch(op) {
        case "add":
            result = a + b;
        break;
        case "sub":
            result = a - b;
        break;
        case "mult":
            result = a * b;
        default:
            result = a / b;
      } 

      document.querySelector("#output").innerHTML = result;
}