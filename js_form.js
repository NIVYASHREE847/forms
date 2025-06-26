function validateForm() {
    let isValid=true;
    let name = document.getElementById("name").value.trim();
    const namePattern= /^[A-Za-z\s]+$/;
    if (name === "" || !isNaN(name)) {
        document.getElementById("nameError").innerHTML = "Please enter a valid name";
        isValid=false;

    }
    else if(!namePattern.test(name)){
        document.getElementById("nameError").innerHTML="name contains only letters";
        isValid=false;
    }
    else {
        document.getElementById("nameError").innerHTML = "";
    }

    let phone = document.getElementById("phone").value.trim();
    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter 10-digit number";
        isValid = false;

    } 
    else {
        document.getElementById("phoneError").innerHTML = "";
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

let dob = document.getElementById("dob").value;
let today = new Date().toISOString().split('T')[0];
if (dob === "") {

    document.getElementById("dobError").innerHTML = "Please select DOB";
    isValid=false;

}
else if(dob>today){
    document.getElementById("dobError").innerHTML="future can't be a dob";
    isValid=false;

}
 else {
    document.getElementById("dobError").innerHTML = "";

}

let address = document.getElementById("address").value.trim();
const addressPattern= /^[A-Za-z\s]+$/;
if (address === "") {
    document.getElementById("addressError").innerHTML = "Address is required";
    isValid=false;

} 
else if(!addressPattern.test(address)){
    document.getElementById("addressError").innerHTML="address can't contain special charecter"
}
else {
    document.getElementById("addressError").innerHTML = "";

}

let course = document.getElementById("course").value;
if (course === "") {
    document.getElementById("courseError").innerHTML = "Please select a course";
    isValid=false;

}
 else {
    document.getElementById("courseError").innerHTML = "";

}
if(isValid){
notification();
}

return isValid;
  
}

function notification(){
    alert("form submitted successfully");
}