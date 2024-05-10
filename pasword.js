function update(){
    var word=document.getElementById("pass").value
    var boxone=document.getElementById("b1")
    var boxtwo=document.getElementById("b2")
    var boxthree=document.getElementById("b3")
    var newtext=document.getElementById("text")
    boxone.style.display="block"
    boxtwo.style.display="block"
    boxthree.style.display="block"
   
const re="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

if(re.test(word)){
    newtext.textContent="The password is strong"
    newtext.style.display="block"
    boxthree.style.backgroundColor="lightgreen"
}
else if(word.length<4){
    newtext.style.display="block"
    newtext.textContent="The password is weak"
    boxone.style.backgroundColor="red"
}
else if(word.length<6){
    newtext.style.display="block"
    newtext.textContent="The password is medium"
    boxtwo.style.backgroundColor="yellow"
}
}
