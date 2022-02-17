var posx =0;
var posy =0;
function up(){
   if(posy==0){
      posy=425;
       document.getElementById('box').style.top =posy + 'px';
       document.getElementById('box').style.left =posx+'px';
       posy--;
       
   }
  
       
   
   else{
       document.getElementById('box').style.top=posy+'px';
       document.getElementById('box').style.left =posx+'px';
       posy--;
       
   };
       
}
function down(){
    if(posy==425){
        posy=0;
        document.getElementById('box').style.top =posy+'px';
        document.getElementById('box').style.left =posx+'px';
        posy++;
        
    }
    
       
    
    else{
        document.getElementById('box').style.top=posy+'px';
        document.getElementById('box').style.left =posx+'px';
        posy++;
        
    }; 
    
 }
 function right(){
    if(posx==875){
        posx=0;
        document.getElementById('box').style.top =posy+'px';
        document.getElementById('box').style.left =posx+'px';
        posx++;
        
    }
    
       
    
    else{
        document.getElementById('box').style.top=posy+'px';
        document.getElementById('box').style.left =posx+'px';
        posx++;
        
    }; 
 }
 function left(){
    if(posx==0){
        posx=875;
         document.getElementById('box').style.top =posy + 'px';
         document.getElementById('box').style.left =posx+'px';
         posx--;
         
     }
    
         
     
     else{
         document.getElementById('box').style.top=posy+'px';
         document.getElementById('box').style.left =posx+'px';
         posx--;
         
     };
 }





 var x,y,z,w,a,b,c,d,e,f,g,h;
 var m,n,o,p;
 function up1(){
     x=setInterval(up, 10);
     y=clearInterval(a);
     z=clearInterval(e);
     w=clearInterval(m);
     
 }
 function down1(){
     a=setInterval(down, 10);
     b=clearInterval(x);
     c=clearInterval(e);
     d=clearInterval(m);
    }
    function right1(){
     e=setInterval(right, 10);
     f=clearInterval(a);
     g=clearInterval(x);
     h=clearInterval(m);


    }
    function left1(){
        m=setInterval(left, 10);
        n=clearInterval(x);
        o=clearInterval(a);
        p=clearInterval(e);
    }
var i,j,k,l;
function stop(){
    i=clearInterval(m);
    j=clearInterval(x);
    k=clearInterval(a);
    l=clearInterval(e);
}
var points=0;
var p1,p2;


function pray(){
    p1=Math.floor(Math.random()*875);
    p2=Math.floor(Math.random()*425);
    document.getElementById('box2').style.left=p1+'px';
    document.getElementById('box2').style.top =p2+'px';
}
var p1x=p1-25;
var p2x=p2-25;
var p1y=p1+25;
var p2y=p2+25;
//setInterval(pray,1);
//var set=setTimeout(pray,1);

/*while (posx > p1x && posy> p2x && posx < p1y && posy< p2y) {
    setTimeout(pray,1);
    points+=1;
    console.log("function has been called");
   
}
function interval() {
    if (posx > p1x && posy> p2x && posx< p1y && posy< p2y){
        setTimeout(pray,1);
        points+=1;

    }
    else{
        setTimeout(interval,1);
        console.log("function has not been called");
    }
    
}
interval();
//setInterval(interval,1);*/

//document.getElementById('text').innerHTML=`Your points are:-${points}`; 
function sett(){
document.getElementById('txt').innerHTML=`posx: ${posx} posy: ${posy} p1:${p1} p2:${p2}`;}
var set3=setInterval(sett,10);
