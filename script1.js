// set the following variables using the const declaration
const nameBox1 = document.getElementById("namebox1");
const foodList1 = document.getElementById("foodList1");

// set the following variables using the const declaration
const nameBox2 = document.getElementById("namebox2");
const foodList2 = document.getElementById("foodList2");

// set the following variables using the const declaration
const nameBox3 = document.getElementById("namebox3");
const foodList3 = document.getElementById("foodList3");

// set the following variables using the const declaration
const nameBox4 = document.getElementById("namebox4");
const foodList4 = document.getElementById("foodList4");

// set the following variables using the const declaration
const nameBox5 = document.getElementById("namebox5");
const foodList5 = document.getElementById("foodList5");

// set the following variables using the const declaration
const nameBox6 = document.getElementById("namebox6");
const foodList6 = document.getElementById("foodList6");

// set the following variables using the const declaration
const nameBox7 = document.getElementById("namebox7");
const foodList7 = document.getElementById("foodList7");

// set the following variables using the const declaration
const nameBox8 = document.getElementById("namebox8");
const foodList8 = document.getElementById("foodList8");

// set the following variables using the const declaration
const nameBox9 = document.getElementById("namebox9");
const foodList9 = document.getElementById("foodList9");

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

  // Create a function for the second food order section
function inputFood3() {
    if (nameBox3.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox3.value;
      foodList3.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox3.value = '';
    maintainTask3();
  }

  // Create a function for the second food order section
function inputFood4() {
    if (nameBox4.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox4.value;
      foodList4.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox4.value = '';
    maintainTask4();
  }
  // Create a function for the second food order section
function inputFood5() {
    if (nameBox5.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox5.value;
      foodList5.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox5.value = '';
    maintainTask5();
  }
  // Create a function for the second food order section
function inputFood6() {
    if (nameBox6.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox6.value;
      foodList6.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox6.value = '';
    maintainTask6();
  }

  // Create a function for the second food order section
function inputFood7() {
    if (nameBox7.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox7.value;
      foodList7.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox7.value = '';
    maintainTask7();
  }

  // Create a function for the second food order section
function inputFood8() {
    if (nameBox8.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox8.value;
      foodList8.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox8.value = '';
    maintainTask8();
  }


  // Create a function for the second food order section
function inputFood9() {
    if (nameBox9.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox9.value;
      foodList9.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox9.value = '';
    maintainTask9();
  }

  // Add event listeners for the buttons in both food order sections
document.getElementById("button1").addEventListener("click", inputFood1);
document.getElementById("button2").addEventListener("click", inputFood2);
document.getElementById("button3").addEventListener("click", inputFood3);
document.getElementById("button4").addEventListener("click", inputFood4);
document.getElementById("button5").addEventListener("click", inputFood5);
document.getElementById("button6").addEventListener("click", inputFood6);
document.getElementById("button7").addEventListener("click", inputFood7);
document.getElementById("button8").addEventListener("click", inputFood8);
document.getElementById("button9").addEventListener("click", inputFood9);


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

// function will allow to delete or cross out a tast
foodList3 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask3()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask3()
    }
}, false);

// show the content to be saved in the browser
function maintainTask3(){
    localStorage.setItem("data1",foodList3 .innerHTML);
}

//show the content to be saved in the browser
function saveTask3(){
    foodList3 .innerHTML = localStorage.getItem("data1");
}

// call function
saveTask3();

// function will allow to delete or cross out a tast
foodList4 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask4()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask4()
    }
}, false);

// show the content to be saved in the browser
function maintainTask4(){
    localStorage.setItem("data1",foodList4 .innerHTML);
}

//show the content to be saved in the browser
function saveTask4(){
    foodList4 .innerHTML = localStorage.getItem("data1");
}

// call function
saveTask4();

// function will allow to delete or cross out a tast
foodList5 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask5()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask5()
    }
}, false);

// show the content to be saved in the browser
function maintainTask5(){
    localStorage.setItem("data1",foodList5 .innerHTML);
}

//show the content to be saved in the browser
function saveTask5(){
    foodList5 .innerHTML = localStorage.getItem("data1");
}

// call function
saveTask5();

// function will allow to delete or cross out a tast
foodList6 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask6()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask6()
    }
}, false);

// show the content to be saved in the browser
function maintainTask6(){
    localStorage.setItem("data1",foodList6 .innerHTML);
}

//show the content to be saved in the browser
function saveTask6(){
    foodList6 .innerHTML = localStorage.getItem("data1");
}

// call function
saveTask6();

// function will allow to delete or cross out a tast
foodList7 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask7()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask7()
    }
}, false);

// show the content to be saved in the browser
function maintainTask7(){
    localStorage.setItem("data1",foodList7 .innerHTML);
}

//show the content to be saved in the browser
function saveTask7(){
    foodList7 .innerHTML = localStorage.getItem("data1");
}

// call function
saveTask();

// function will allow to delete or cross out a tast
foodList8 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask8()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask8()
    }
}, false);

// show the content to be saved in the browser
function maintainTask8(){
    localStorage.setItem("data1",foodList8 .innerHTML);
}

//show the content to be saved in the browser
function saveTask8(){
    foodList8 .innerHTML = localStorage.getItem("data1");
}

// call function
saveTask8();

// function will allow to delete or cross out a tast
foodList9 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask9()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask9()
    }
}, false);

// show the content to be saved in the browser
function maintainTask9(){
    localStorage.setItem("data1",foodList9 .innerHTML);
}

//show the content to be saved in the browser
function saveTask9(){
    foodList9 .innerHTML = localStorage.getItem("data1");
}

// call function
saveTask9();