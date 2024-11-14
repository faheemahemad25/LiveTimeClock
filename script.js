const clock = document.getElementById('clock')

// let date =  new Date(); // if you writen date outsite the setInterval it will not keep update. 
// console.log(date);

setInterval(function(){
    let date =  new Date(); // why updaing bcz this Date() method or date variable is being get updated / runned everysecond. via setInterval()
    // console.log(date);
    // console.log(date.toLocaleTimeString());
    clock.innerHTML =  date.toLocaleTimeString();    
},1000)
