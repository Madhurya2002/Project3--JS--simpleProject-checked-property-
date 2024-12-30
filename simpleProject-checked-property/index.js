 const checkBox = document.getElementById("chk1");
 const radio1 = document.getElementById("radio1");
 const radio2 = document.getElementById("radio2");
 const radio3 = document.getElementById("radio3");

 let checkBoxResult = document.getElementById("checkBoxResult");
 let radioResult = document.getElementById("radioResult");

 const mySubmit = document.getElementById("mySubmit");


 mySubmit.onclick = function () {

     if (checkBox.checked) {  // used to check if the checkBox is checked
         checkBoxResult.textContent = `Check Box is Selected`;

         if(radio1.checked){
             radioResult.textContent = `Radio 1 is Selected`;
         }

         else if(radio2.checked){
             radioResult.textContent = `Radio 2 is Selected`;
         }

         else if(radio3.checked){
             radioResult.textContent = `Radio 3 is Selected`;
         }

         else{
             radioResult.textContent = `Please select a radio`;
         }

     }

     else {
         checkBoxResult.textContent = `Check Box is not Selected`;
     }

 }



/*let age = 10;

age >= 18 ? console.log(`adult`) : console.log(`minor`);*/



