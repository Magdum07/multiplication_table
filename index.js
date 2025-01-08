function tableGenerator() {
    var subDiv = document.getElementById("sub");
    var inp = document.getElementById("inputBox");
    const inpVal = inp.value;
    subDiv.innerHTML = "";
  
    if (inpVal != "") {
      for (let i = 1; i <= 10; i++) {
        var tbl = document.createElement("table");
        var tr = document.createElement("tr");
  
        var td1 = document.createElement("td");
        td1.innerText = inpVal;
        td1.classList.add("tableData");
  
        var td2 = document.createElement("td");
        td2.innerText = "x";
        td2.classList.add("tableData");
  
        var td3 = document.createElement("td");
        td3.innerText = i;
        td3.classList.add("tableData");
  
        var td4 = document.createElement("td");
        td4.innerText = "=";
        td4.classList.add("tableData");
  
        var td5 = document.createElement("td");
        td5.innerText = inpVal * i;
        td5.classList.add("tableData");
  
        tr.append(td1, td2, td3, td4, td5);
        tbl.appendChild(tr);
        subDiv.appendChild(tbl);
      }
    }
  }
  