let alertShow=false;
setInterval(()=>{
    document.title=
    alertShow?"Welcome to themandap !"
    :"Follow for more !";
    alertShow=!alertShow;
},1000);

// let docTitle=document.title;
// window.addEventListener("blur",()=>{
//     document.title="Come back.! We miss you :(";
// })
// window.addEventListener("focus",()=>{
//     document.title=docTitle;
// })