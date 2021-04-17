const regex = {

  Name: /^([A-Za-z\s']+)$/i,
  PhoneNumber: /^(\+91 |91|0|\+91|91 |\+91\-|91\-){1}[6-9]{1}[0-9]{9}$/,
  Age: /^[0-9][0-9]{0,2}$/,
  Email: /^([\w\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8}){0,1}(\.[a-z]{2,8}){0,1}$/,
  City: /^([0-9]{0,1}|[0-9]{0,1} )([A-Za-z']{1,16}){1}(\s[A-za-z']{1,16}){0,2}$/,
  // City: /^[a-zA-Z]{3,}$/ ,
  Password: /^(?=.*[@#$%^&=])[\w@_-]{8,15}$/
  // ConfirmPassword: /^[\w@_-]{8,14}$/

}

// var submission = document.getElementById("btn");
function submission(){
  let w1 = document.getElementById("PhoneNumber");
  let var1 = w1.value.trim();
  
  if (!var1.match(regex.PhoneNumber) || w1.length == 0) {
    alert("Error in uploading the form. Please check the credentials.");
    return false;
    
  }else{
    
  }
  let w2 = document.getElementById("Age");
let var2 = w2.value.trim();
  if (!var2.match(regex.Age) || w2.length == 0) {
    alert("Error in uploading the form. Please check the credentials.");
    return false;
    
  }else{
    
  }
  let w3 = document.getElementById("Email");
  let var3 = w3.value.trim();
    if (!var3.match(regex.Email) || w3.length == 0) {
      alert("Error in uploading the form. Please check the credentials.");
      return false;
     
    }else{
      
    }
    let w4 = document.getElementById("Password");
    let var4 = w4.value.trim();
    if (!var4.match(regex.Password) || w4.length == 0) {
      alert("Error in uploading the form. Please check the credentials.");
      return false;
      
    }else{
      
    }
    let w12 = document.getElementById("Password");
    let var12 = w12.value.trim();
    let w5 = document.getElementById("ConfirmPassword");
    let var5 = w5.value.trim();
    if (var5 !== var12 || w5.length == 0) {
      alert("Error in uploading the form. Please check the credentials.");
      return false;
      
    }else{
     
    }
    let w6 = document.getElementById("Name");
    let var6 = w6.value.trim();
    if (!var6.match(regex.Name) || w6.length == 0) {
      alert("Error in uploading the form. Please check the credentials.");
      return false;
      
    }else{
      
    }
    let w7 = document.getElementById("City");
    let var7 = w7.value.trim();
      if (!var7.match(regex.Name) || w7.length == 0) {
        alert("Error in uploading the form. Please check the credentials.");
        return false;
        
      }else{
        
      }
}
function phone(){
  let w1 = document.getElementById("PhoneNumber");
let var1 = w1.value.trim();
  if (!var1.match(regex.PhoneNumber) || w1.length == 0) {
    // alert("Invalid number, Pls write in format - +91 DDDDDDDDDD");
    func("Invalid number, Pls write in format - +91 6/7/8/9DDDDDDDDD", "validate-phone");
    w1.classList.add("invalid");
    // return false;
    
  }else{
    func("", "validate-phone");
    w1.classList.remove("invalid");
  }
}
function age(){
  let w2 = document.getElementById("Age");
let var2 = w2.value.trim();
  if (!var2.match(regex.Age) || w2.length == 0) {
    // alert("Invalid age, Pls specify between 001-150 in 3 digits");
    func("Invalid age, please correct it", "validate-age");
    w2.classList.add("invalid");
    // return false;
    
  }else{
    func("", "validate-age");
    w2.classList.remove("invalid");
  }
}


  function email(){
    let w3 = document.getElementById("Email");
  let var3 = w3.value.trim();
    if (!var3.match(regex.Email) || w3.length == 0) {
      // alert("Invalid email, Pls write in format - test@test.com");
      func("Invalid email, Pls write in format - test@test.com", "validate-email");
      w3.classList.add("invalid");
      // return false;
     
    }else{
      func("", "validate-email");
      w3.classList.remove("invalid");
    }
  }
  
  
  function password(){
    let w4 = document.getElementById("Password");
    let var4 = w4.value.trim();
    if (!var4.match(regex.Password) || w4.length == 0) {
      // alert("Invalid password, Pls use letters- a-z,@,_,-");
      func("Invalid password, Pls use letters- a-z,@,_,-,$ and type 8-15 letters", "validate-password");
      w4.classList.add("invalid");
      // return false;
      
    }else{
      func("", "validate-password");
      w4.classList.remove("invalid");
    }
  
  }
  
  function confirm(){
    let w12 = document.getElementById("Password");
    let var12 = w12.value.trim();
    let w5 = document.getElementById("ConfirmPassword");
    let var5 = w5.value.trim();
    if (var5 !== var12 || w5.length == 0) {
      // alert("Different password written");
      func("Different password written", "validate-confirmpassword");
      w5.classList.add("invalid");
      // return false;
      
    }else{
      func("", "validate-confirmpassword");
      w5.classList.remove("invalid");
    }
  }
  

  function nome(){
    let w6 = document.getElementById("Name");
    let var6 = w6.value.trim();
    if (!var6.match(regex.Name) || w6.length == 0) {
      // alert("Invalid name, Pls specify in format rohan gavaskar etc");
      func("Invalid name, Pls specify in format rohan gavaskar etc", "validate-naam");
      w6.classList.add("invalid");
      // return false;
      
    }else{
      func("", "validate-naam");
      w6.classList.remove("invalid");
    }
  
  }
  
  function city(){
    let w7 = document.getElementById("City");
  let var7 = w7.value.trim();
    if (!var7.match(regex.City) || w7.length == 0) {
      // alert("Invalid city, Pls write first letter capital");
      func("Invalid city, you may use a single digit at the start(if required) ", "validate-city");
      w7.classList.add("invalid");
      // return false;
      
    }else{
      func("", "validate-city");
      w7.classList.remove("invalid");
    }
  }
  
  function func(display, id) {
    document.getElementById(id).innerHTML = display;
  }
  



