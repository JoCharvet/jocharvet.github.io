const appearsprof = document.querySelectorAll('.appears.prof');
const appearsexp = document.querySelectorAll('.appears.exp');
const appearsforma = document.querySelectorAll('.appears.forma');
const vp=document.querySelectorAll('.vp');


function appears(e){
    var myclass=e.target.classList[1];
    console.log(myclass)
    var tochange=document.querySelectorAll('.appears'+'.'+myclass);
    if(e.target.innerHTML=='Voir plus'){
        tochange.forEach(element => {
            element.style.display='block';
            e.target.innerHTML='Voir moins';
        });
    }
    else{
        tochange.forEach(element => {
            element.style.display='none';
            e.target.innerHTML='Voir plus';
        });
    }
}
vp.forEach(element => {
    element.addEventListener('click',appears);
});

