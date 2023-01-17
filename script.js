
function generateButton(){
    var  generatedPassword = "" ;
    var string =  "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var userSlideVal = document.getElementById("myRange").value ;
    document.getElementById("slide-length").innerHTML= userSlideVal; 
      for (var i = 0; i < userSlideVal; i++) {
              var randomNumber = Math.floor(Math.random() * string.length);
              generatedPassword += string.substring(randomNumber, randomNumber +1);
       }
   document.getElementById("result-screen").value= generatedPassword;
}

function copytext(){
    var copyText = document.getElementById("result-screen").value;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);

}

   