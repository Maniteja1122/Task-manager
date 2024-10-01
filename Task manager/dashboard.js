// Write code related to dashboard page here

let arr = JSON.parse(localStorage.getItem("task-list"));
if (arr == null) {
  arr = [];
}
let body = document.querySelector("tbody");
let filterSel = document.getElementById("filter");
let span = document.getElementById("task-count");

span.innerText = arr.length;

let deletedArr= JSON.parse(localStorage.getItem("priority"))
if(deletedArr==null){
    deletedArr=[]
}

Display(arr);
filterSel.addEventListener("change", () => {
  if (filterSel.value === "") {
    Display(arr);
  } else {
    let filtered = arr.filter((element) => {
      if (element.Priority === filterSel.value) {
        return true;
      } else {
        return false;
      }
    });
    Display(filtered);
  }
});

function Display(data) {
  body.innerHTML = "";
  data.forEach((element, index) => {
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText = element.name;
    let desc = document.createElement("td");
    desc.innerText = element.desc;
    let start = document.createElement("td");
    start.innerText = element.start;
    let end = document.createElement("td");
    end.innerText = element.end;
    let priority = document.createElement("td");
    priority.innerText = element.Priority;
    let add = document.createElement("td");
    add.setAttribute("class","add")
    add.innerText = "Add";
    add.addEventListener("click", () => {
      // Remove the item from arr and store it in deletedArr
      let itemToAdd = arr[index];
      arr = arr.filter((_, i) => i !== index);
      deletedArr.push(itemToAdd);
      
      // Update local storage
      localStorage.setItem("task-list", JSON.stringify(arr));
      localStorage.setItem("priority", JSON.stringify(deletedArr));
      
      // Update display and task count
      span.innerText = arr.length;
      Display(arr);
      alert("you are adding the task into the progress ")
    });
      

    

    tr.append(name, desc, start, end, priority, add);
    body.append(tr);
  });
}
