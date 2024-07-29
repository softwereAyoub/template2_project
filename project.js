var header=document.getElementById('header');
var butt=document.getElementById('butt');
var count=document.querySelector('.cont');
butt.addEventListener('click',function(){
   
    scroll(0,0);
    
})
onscroll=function(){
   
    if(scrollY<=1004 && scrollY>0){
        header.style.position='fixed';
    }
    else{
        header.style.position='static';

    }
    if(scrollY>1000){
butt.style.display='block';

    }
    else{
        butt.style.display='none';
    }
}