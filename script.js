function submitForm(){
  alert(" ")
  var username=document.getElementById("username").value
  var password=document.getElementById("password").value
  if(username == "neeraj1234" && password == "neeraj1234"){
    alert("Login successful")
  }else{
    alert("Wrong username or password")
  }
}
