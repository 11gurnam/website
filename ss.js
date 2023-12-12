
//this is for menu action      
var navlinks=document.getElementById("navlinks");
function showMenu(){
    navlinks.style.right="0";
}
function hideMenu(){
    navlinks.style.right="-500px";
}
 


//LOGIN
document.addEventListener("DOMContentLoaded", function () {
const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".fa-regular.fa-eye, .fa-regular.fa-eye-slash");
const links = document.querySelectorAll(".link");
//let password = document.getElementById('password');

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwField = eyeIcon.parentElement.querySelectorAll(".password");
        
       
            if (pwField.type === "password") {
                pwField.type = "text";
                eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
                return;
            }
            else{
            pwField.type = "password";
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
            }
        });
    });


links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Preventing form submit
        forms.classList.toggle("show-signup");
    });
});
});




  

//comment 
function myFunction(){
    document.getElementById("nameofthevisitor").value=document.getElementById("p1");
}