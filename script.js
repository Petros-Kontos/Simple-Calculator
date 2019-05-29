function calc() {
    let a = parseInt(document.querySelector("#input-1").value) ;
    let b = parseInt(document.querySelector("#input-2").value) ;
    let op = document.querySelector("#operator").value ;
    let result;

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