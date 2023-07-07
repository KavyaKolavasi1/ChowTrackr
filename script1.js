// set the following variables using the const declaration
const nameBox1 = document.getElementById("namebox1");
const foodList1 = document.getElementById("foodList1");

// set the following variables using the const declaration
const nameBox2 = document.getElementById("namebox2");
const foodList2 = document.getElementById("foodList2");

// create a function for the text-boxes
function inputFood1() {
    if (nameBox1.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox1.value;
      foodList1.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox1.value = '';
    maintainTask1();
  }


// Create a function for the second food order section
function inputFood2() {
    if (nameBox2.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox2.value;
      foodList2.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox2.value = '';
    maintainTask2();
  }

  // Add event listeners for the buttons in both food order sections
document.getElementById("button1").addEventListener("click", inputFood1);
document.getElementById("button2").addEventListener("click", inputFood2);


// function will allow to delete or cross out a tast
foodList1 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask1()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask1()
    }
}, false);

// show the content to be saved in the browser
function maintainTask1(){
    localStorage.setItem("data1",foodList1 .innerHTML);
}

//show the content to be saved in the browser
function saveTask1(){
    foodList1 .innerHTML = localStorage.getItem("data1");
}

// call function
saveTask1();

// function will allow to delete or cross out a tast
foodList2 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask2()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask2()
    }
}, false);

// show the content to be saved in the browser
function maintainTask2(){
    localStorage.setItem("data",foodList2 .innerHTML);
}

//show the content to be saved in the browser
function saveTask2(){
    foodList2 .innerHTML = localStorage.getItem("data");
}

// call function
saveTask2();