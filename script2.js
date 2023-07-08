// set the following variables using the const declaration
const namebox10 = document.getElementById("namebox10");
const foodList10 = document.getElementById("foodList10");

// set the following variables using the const declaration
const nameBox11 = document.getElementById("namebox11");
const foodList11 = document.getElementById("foodList11");

// set the following variables using the const declaration
const nameBox12 = document.getElementById("namebox12");
const foodList12 = document.getElementById("foodList12");

// set the following variables using the const declaration
const nameBox13 = document.getElementById("namebox13");
const foodList13 = document.getElementById("foodList13");

// set the following variables using the const declaration
const nameBox14 = document.getElementById("namebox14");
const foodList14 = document.getElementById("foodList14");

// set the following variables using the const declaration
const nameBox15 = document.getElementById("namebox15");
const foodList15 = document.getElementById("foodList15");

// set the following variables using the const declaration
const nameBox16 = document.getElementById("namebox16");
const foodList16 = document.getElementById("foodList16");

// set the following variables using the const declaration
const nameBox17 = document.getElementById("namebox17");
const foodList17 = document.getElementById("foodList17");

// set the following variables using the const declaration
const nameBox18 = document.getElementById("namebox18");
const foodList18 = document.getElementById("foodList18");

// create a function for the text-boxes
function inputFood10() {
    if (nameBox10.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox10.value;
      foodList10.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox10.value = '';
    maintainTask10();
  }


// Create a function for the second food order section
function inputFood11() {
    if (nameBox11.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox11.value;
      foodList11.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox11.value = '';
    maintainTask11();
  }

  // Create a function for the second food order section
function inputFood12() {
    if (nameBox12.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox12.value;
      foodList12.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox12.value = '';
    maintainTask12();
  }

  // Create a function for the second food order section
function inputFood13() {
    if (nameBox13.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox13.value;
      foodList13.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox13.value = '';
    maintainTask13();
  }
  // Create a function for the second food order section
function inputFood14() {
    if (nameBox14.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox14.value;
      foodList14.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox14.value = '';
    maintainTask14();
  }
  // Create a function for the second food order section
function inputFood15() {
    if (nameBox15.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox15.value;
      foodList15.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox15.value = '';
    maintainTask15();
  }

  // Create a function for the second food order section
function inputFood16() {
    if (nameBox16.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox16.value;
      foodList16.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox16.value = '';
    maintainTask16();
  }

  // Create a function for the second food order section
function inputFood17() {
    if (nameBox17.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox17.value;
      foodList17.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox17.value = '';
    maintainTask17();
  }


  // Create a function for the second food order section
function inputFood18() {
    if (nameBox18.value === '') {
      alert("Please write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = nameBox18.value;
      foodList18.appendChild(li);
  
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
  
    nameBox18.value = '';
    maintainTask18();
  }

  // Add event listeners for the buttons in both food order sections
document.getElementById("button10").addEventListener("click", inputFood10);
document.getElementById("button11").addEventListener("click", inputFood11);
document.getElementById("button12").addEventListener("click", inputFood12);
document.getElementById("button13").addEventListener("click", inputFood13);
document.getElementById("button14").addEventListener("click", inputFood14);
document.getElementById("button15").addEventListener("click", inputFood15);
document.getElementById("button16").addEventListener("click", inputFood16);
document.getElementById("button17").addEventListener("click", inputFood17);
document.getElementById("button18").addEventListener("click", inputFood18);


// function will allow to delete or cross out a tast
foodList10 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask10()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask10()
    }
}, false);

// show the content to be saved in the browser
function maintainTask10(){
    localStorage.setItem("data10",foodList10 .innerHTML);
}

//show the content to be saved in the browser
function saveTask10(){
    foodList10 .innerHTML = localStorage.getItem("data10");
}

// call function
saveTask10();

// function will allow to delete or cross out a tast
foodList11 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask11()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask11()
    }
}, false);

// show the content to be saved in the browser
function maintainTask11(){
    localStorage.setItem("data11",foodList11 .innerHTML);
}

//show the content to be saved in the browser
function saveTask11(){
    foodList11 .innerHTML = localStorage.getItem("data11");
}

// call function
saveTask11();

// function will allow to delete or cross out a tast
foodList12 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask12()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask12()
    }
}, false);

// show the content to be saved in the browser
function maintainTask12(){
    localStorage.setItem("data12",foodList12 .innerHTML);
}

//show the content to be saved in the browser
function saveTask12(){
    foodList12 .innerHTML = localStorage.getItem("data12");
}

// call function
saveTask12();

// function will allow to delete or cross out a tast
foodList13 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask13()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask13()
    }
}, false);

// show the content to be saved in the browser
function maintainTask13(){
    localStorage.setItem("data13",foodList13 .innerHTML);
}

//show the content to be saved in the browser
function saveTask13(){
    foodList13 .innerHTML = localStorage.getItem("data13");
}

// call function
saveTask13();

// function will allow to delete or cross out a tast
foodList14 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask14()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask14()
    }
}, false);

// show the content to be saved in the browser
function maintainTask14(){
    localStorage.setItem("data14",foodList14 .innerHTML);
}

//show the content to be saved in the browser
function saveTask14(){
    foodList14 .innerHTML = localStorage.getItem("data14");
}

// call function
saveTask14();

// function will allow to delete or cross out a tast
foodList15 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask15()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask15()
    }
}, false);

// show the content to be saved in the browser
function maintainTask15(){
    localStorage.setItem("data15",foodList15 .innerHTML);
}

//show the content to be saved in the browser
function saveTask15(){
    foodList15 .innerHTML = localStorage.getItem("data15");
}

// call function
saveTask15();

// function will allow to delete or cross out a tast
foodList16 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask16()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask16()
    }
}, false);

// show the content to be saved in the browser
function maintainTask16(){
    localStorage.setItem("data16",foodList16 .innerHTML);
}

//show the content to be saved in the browser
function saveTask16(){
    foodList16 .innerHTML = localStorage.getItem("data16");
}

// call function
saveTask16();

// function will allow to delete or cross out a tast
foodList17 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask17()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask17()
    }
}, false);

// show the content to be saved in the browser
function maintainTask17(){
    localStorage.setItem("data17",foodList17 .innerHTML);
}

//show the content to be saved in the browser
function saveTask17(){
    foodList17 .innerHTML = localStorage.getItem("data17");
}

// call function
saveTask17();

// function will allow to delete or cross out a tast
foodList18 .addEventListener("click", function(e){
    // if LI is clicked, toggle the checked css to turn on and off
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("completebox");
        // save the data so information will be saved after refreshing
        maintainTask18()
    }
    // if span (x) is clicked, remove task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // save the data so information will be saved after refreshing
        maintainTask18()
    }
}, false);

// show the content to be saved in the browser
function maintainTask18(){
    localStorage.setItem("data18",foodList18 .innerHTML);
}

//show the content to be saved in the browser
function saveTask18(){
    foodList18 .innerHTML = localStorage.getItem("data18");
}

// call function
saveTask18();
