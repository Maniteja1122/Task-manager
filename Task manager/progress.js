// Write code for the Progress page here 


let deletedArr= JSON.parse(localStorage.getItem("priority"))
if(deletedArr==null){
    deletedArr=[]
}

let doneArr = JSON.parse(localStorage.getItem("done-list"))
if(doneArr == null){
    doneArr=[]
}
let body = document.querySelector("tbody")
Display(deletedArr)
function Display(data){

    body.innerHTML=""
    data.forEach((element,index)=>{
        let tr =document.createElement("tr")
    
         let td1 =document.createElement("td")
         let td2 =document.createElement("td")
         let td3 =document.createElement("td")
         let td4 =document.createElement("td")
         let td5 =document.createElement("td")
         let td6 =document.createElement("td")
         td6.setAttribute("id","done")
         td1.innerText=element.name
         td2.innerText=element.desc
         td3.innerText=element.start
         td4.innerText=element.end
         td5.innerText=element.Priority
         td6.innerText="Done"
         td6.setAttribute("class","done")
         
         td6.addEventListener("click",()=>{
            
            let itemToAdd = deletedArr[index];
            deletedArr = deletedArr.filter((_, i) => i !== index);
            doneArr.push(itemToAdd)
    
           
            localStorage.setItem("priority",JSON.stringify(deletedArr))
            localStorage.setItem("done-list",JSON.stringify(doneArr))
            Display(deletedArr)
            alert("Adding your  task to done")
         })
    
         tr.append(td1,td2,td3,td4,td5,td6)
        body.append(tr)
    
    })
}