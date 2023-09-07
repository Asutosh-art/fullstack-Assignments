const firstPassword = document.getElementById("password")
const confirmPassword = document.getElementById("c-password")
const submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener("click",() =>{
    if(firstPassword.value === confirmPassword.value){
        alert("Successfully login");
    }
    else{
        alert('Please enter the same password');
    }
})
