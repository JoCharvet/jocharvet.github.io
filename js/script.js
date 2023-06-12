const appearsprof = document.querySelectorAll('.appears.prof');
const appearsexp = document.querySelectorAll('.appears.exp');
const appearsforma = document.querySelectorAll('.appears.forma');
const vp=document.querySelectorAll('.vp');
const hidden = document.getElementById('hidden');
var root=document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var col1 = rootStyles.getPropertyValue('--col1');
var col2 = rootStyles.getPropertyValue('--col2');   
var col3 = rootStyles.getPropertyValue('--col3');
var col4 = rootStyles.getPropertyValue('--col4');
var col5 = rootStyles.getPropertyValue('--col5');

function appears(e){
    var myclass=e.target.classList[1];
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
    scrollOn();
}
vp.forEach(element => {
    element.addEventListener('click',appears);
});

function btnTopAppears(){
    if(window.scrollY>200){
        document.getElementById('hidden').style.display='block';
    }
    else{
        document.getElementById('hidden').style.display='none';
    }
}
window.addEventListener('scroll',btnTopAppears);



window.addEventListener('scroll',scrollOn);
var root = document.documentElement;
function scrollOn(){

    var profilR = document.getElementById('profil').getBoundingClientRect();
    var formationR = document.getElementById('formation').getBoundingClientRect();
    var experiencesR = document.getElementById('experience').getBoundingClientRect();
    var competencesR = document.getElementById('competence').getBoundingClientRect();
    // var scrollPos = window.scrollY - window.innerHeight/1.25;
    var scrollPos = window.scrollY +formationR.top;

   

    console.log(scrollPos);


    if (scrollPos >= profilR.top && scrollPos <= profilR.bottom) {
        hidden.style.borderColor=col3;
    }
    else if (scrollPos >= formationR.top && scrollPos <=formationR.bottom) {
        hidden.style.borderColor=col4;
    }
    else if (scrollPos >= experiencesR.top && scrollPos <=experiencesR.bottom) {
        hidden.style.borderColor=col5;
    }
    else if (scrollPos >= competencesR.top && scrollPos <=competencesR.bottom) {
        hidden.style.borderColor=col1;
    }
    else{
        hidden.style.borderColor=col2;
    }
}

