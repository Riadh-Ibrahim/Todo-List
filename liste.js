const liste=document.querySelector(".liste");

Object.values(liste.children).forEach(child=>{
    child.addEventListener("click",()=>{
    const couleuralea="#"+Math.floor(Math.random()*16777215).toString(16) ;
    child.style.color=couleuralea;   
});
});
