// Write code related to Done page here

let doneArr = JSON.parse(localStorage.getItem("done-list"));
if (doneArr == null) {
  doneArr = [];
}
let body = document.querySelector("tbody");

doneArr.forEach((element) => {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  td1.innerText = element.name;
  td2.innerText = element.desc;
  td3.innerText = element.start;
  td4.innerText = element.end;
  td5.innerText = element.Priority;
  tr.append(td1, td2, td3,td4,td5);
  body.append(tr);
});
