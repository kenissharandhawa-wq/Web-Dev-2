const profile = document.getElementById("profile");
profile.style.backgroundColor=("lavender");
profile.style.padding = ("15px");
profile.style.textAlign = ("center");
profile.style.fontSize = ("30px")

//TASK-2
const x = document.getElementsByClassName("important");
console.log(x)

for(let i=0; i<x.length;i++){
    x[i].style.color = ("red");
     x[i].style.fontSize = ("30px");
}
