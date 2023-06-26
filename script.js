const heart=document.getElementById("heart");
document.addEventListener("dblclick",(e)=>
{
    let x=e.pageX;
    let y=e.pageY;
    console.log(x+" "+y);
    console.log("hi");
    heart.style.left=`${x}px`;
    heart.style.top=`${y}px`;
    heart.classList.add("appear");
    setTimeout(()=>
    {
        heart.classList.remove("appear");
    },3000);

})