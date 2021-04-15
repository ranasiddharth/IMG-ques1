const regex = {

  Name: /[A-Za-z\s]+/i,
  PhoneNumber: /^\+?91\s[6789][0-9]{9}$/,
  Age: /^[0-9][0-9]{1,2}$/,
  Email: /^([\w\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/,
  City: /[A-Z]([a-z]+)/,
  Password: /^[\w@_-]{8,15}$/,
  // ConfirmPassword: /^[\w@_-]{8,14}$/

}
// var submission = document.getElementById("btn");
function checkit() {
  var x;
  let w1 = document.getElementById("PhoneNumber");
  let var1 = w1.value.trim();
  if (!var1.match(regex.PhoneNumber) || var1.length == 0) {
    func("Invalid number, Pls write in format - +91 DDDDDDDDDD", "validate-phone");
    x = false;
  }

  let w2 = document.getElementById("Age");
  let var2 = w2.value.trim();
  if (!var2.match(regex.Age) || var2.length == 0) {
    func("Invalid age, Pls specify between 001-150 in 3 digits", "validate-age");
    x = false;
  }

  let w3 = document.getElementById("Email");
  let var3 = w3.value.trim();
  if (!var3.match(regex.Email) || var3.length == 0) {
    func("Invalid email, Pls write in format - test@test.com", "validate-email");
    x = false;
  }

  let w4 = document.getElementById("Password");
  let var4 = w4.value.trim();
  if (!var4.match(regex.Password) || var4.length == 0) {
    func("Invalid password, Pls use letters- a-z,@,_,-", "validate-password");
    x = false;
  }

  let w5 = document.getElementById("ConfirmPassword");
  let var5 = w5.value.trim();
  if (var5 !== var4 || var5.length == 0) {
    func("Different password", "validate-confirmpassword");
    x = false;
  }

  let w6 = document.getElementById("Name");
  let var6 = w6.value.trim();
  if (!var6.match(regex.Name) || var6.length == 0) {
    func("Invalid name, Pls specify in format rohan gavaskar etc", "validate-naam");
    x = false;
  }

  let w7 = document.getElementById("City");
  let var7 = w7.value.trim();
  if (!var7.match(regex.Name) || var1.length == 0) {
    func("Invalid city, Pls write first letter capital", "validate-city");
    x = false;
  }

  function func(display, id) {
    document.getElementById(id).innerHTML = display;
  }
  // if(x===true){
  //   var q = document.getElementById("frm");
  //   alert("Your form has been submitted successfully, congratulations.");
  // }
}



