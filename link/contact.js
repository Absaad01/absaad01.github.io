/* let theBox = document.querySelector('input')

if (theBox.length <= 15){
    theBox.style.borderColor = 'red'
}else{
    theBox.style.borderColor = 'green'
};

let msgBox = document.querySelector('textarea')

if (msgBox.length == 24){
    msgBox.style.borderColor = 'red'
}else{
    msgBox.style.borderColor = 'green'
}; */
function inputted(){
    var x = document.querySelectorAll('input')
    x.forEach(function (done){
        x.style.borderColor = 'green'
    })
    x.style.borderColor = 'green'
}

function textInputted(){
    var x = document.querySelector('textarea')
    x.style.borderColor = 'green'
}

let btn = document.querySelector('#submit')
btn.addEventListener(click = () =>{
    if (theInfos.value>=1 && theMsg.value>= 1){
        alert('Message sent successfully')
    }else{
        alert('please input all data')
    }
})