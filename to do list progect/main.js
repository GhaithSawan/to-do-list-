
let tasksarr = [
    {

        title: "ghaith",
        calinder: "d3243",
        isdone: false
    },
    {

        title: "tre",
        calinder: "423",
        isdone: false
    }

]
function locale(){
    let x = JSON.parse( localStorage.getItem("arr"))
    if(x == null){
        tasksarr = []
    }
    else{
        tasksarr = x
    }
}

locale()
read()

function read() {
    document.getElementById("tasks").innerHTML = ""
    let indexx = 0
    for (task of tasksarr) {

        let content =
            `
            <div class="task ${task.isdone ? `done` : ``}" style="width: 100%; ">
            <div class="static" style="width: 70%; ">
                <h1>${task.title}</h1>
                <span class="material-symbols-outlined">
                    calendar_month
                    </span>
                <span>${task.calinder}</span>
            </div>
            <div class="apgrad"
                style="width: 20%; display: flex; align-items: center;justify-content: space-between;">
                <button  class="circle" style="background-color: rgb(148, 1, 1); " onclick="deletefun(${indexx})">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
                ${task.isdone ?
                `
                <button class="circle " style="background-color: rgb(255, 73, 73);" onclick="isdonefun(${indexx})">
                    <span class="material-symbols-outlined">
                        cancel
                    </span>
                </button>
                `
                :
                `
                <button class="circle " style="background-color: rgb(0, 125, 56);" onclick="isdonefun(${indexx})">
                    <span class="material-symbols-outlined">
                         done
                    </span>
                </button>
                
                `}
            
                <button class="circle" style="background-color: rgb(213, 51, 192);" onclick="updatefun(${indexx})" >
                    <span class="material-symbols-outlined">
                        edit
                        </span>
                </button>


            </div>
        </div>


        `
        document.getElementById("tasks").innerHTML += content
        indexx++
    }

}

// ______________________________


// creat

document.getElementById("btnadd").addEventListener("click", () => {
    let prompetvalue = prompt("ادخل العنوان  لو سمحت يا زبالة")
    let dateclass = new Date()
    let date = dateclass.getDate() + "/" + (dateclass.getMonth() + 1) + "/" + dateclass.getFullYear() + " | " + dateclass.getHours() + ":" + dateclass.getMinutes()
    
    let newObj = {

        title: prompetvalue,
        calinder: date,
        isdone: false
    }
    tasksarr.push(newObj)
    localStoragee()
    read()
})
// ______________


// delete
function deletefun(index) {
    let task = tasksarr[index]
    let shur = confirm("هل انت متاكد من حذف : " + task.title)
    if (shur) {
        let y = tasksarr.splice(index, 1)
        localStoragee()
        read()
    }

}


// update

function updatefun(index) {
    let task = tasksarr[index]
    let shur = confirm("هل انت متاكد من تعديل : " + task.title, task.title)
    if (shur) {
        let prompetvalue = prompt("ادخل العنوان  لو سمحت يا زبالة")
        let dateclass = new Date()
        let date = dateclass.getDate() + "/" + (dateclass.getMonth() + 1) + "/" + dateclass.getFullYear() + " | " + dateclass.getHours() + ":" + dateclass.getMinutes()
        task.title = prompetvalue
        task.calinder = date
        localStoragee()
        read()
        

    }
}


// isdone
function isdonefun(index) {
    let task = tasksarr[index]
    if (task.isdone == false) {
        task.isdone = true
        localStoragee()
    }
    else {
        task.isdone = false
        localStoragee()
    }
    read()

}


// ____________localstrorg___________
function localStoragee(){
    localStorage.setItem("arr",JSON.stringify(tasksarr) )
}

