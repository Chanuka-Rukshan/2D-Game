var rs = new Audio("run.mp3");
rs.loop = true;

var js = new Audio("jump.mp3")

var ds = new Audio("dead.mp3");










function key(event){
    if(event.which == 13){
        if(rw == 0){
            

            rw = setInterval(run,100);
            rs.play();
            fid = f();
            fw = setInterval(move,100);
            bw = setInterval(back,100);
            sw = setInterval(score,500);
        }

      
    }
    if(event.which == 32){
        if(jw == 0){
            clearInterval(rw);
            rs.pause();
            
            jw = setInterval(jump,100);
            js.play();
           
        }
       
    }
    

    
}





var fid = 0;
var fw = 0;
var u = 1000;
function f(){
    for(var y = 0; y < 100; y++){
        var i = document.createElement("img");
        i.src = "flame.gif";
        i.className = "f";
        i.id = "a"+y;
        i.style.marginLeft = u + "px";
        document.getElementById("d").appendChild(i);
        u = u + 500;

    }
}





function move(){
    for(var y = 0; y < 100; y++){
        var z = getComputedStyle(document.getElementById("a"+y));
        var w = parseInt(z.marginLeft) - 20;
        document.getElementById("a" + y).style.marginLeft = w + "px";

        //alert(w);

        //60 100;

        if(w >=58  & w <= 158){
            if(mt > 300){

            clearInterval(rw);
            rs.pause();

            clearInterval(jw);
            jw = -1;

            clearInterval(fw);

            clearInterval(sw);

            clearInterval(bw);

            dw = setInterval(dead,100);
            ds.play();
        
            }

           
        }
    }
}







var x = document.getElementById("boy");

var rw = 0;

var r = 1;

function run(){
    r = r + 1;
    if(r == 9){
        r = 1;
    }
    x.src = "Run (" + r + ").png";

}




var jw = 0;
var j = 1;
var mt = 390;

function jump(){

    if(j <= 6){
        mt = mt - 30;
    }
    if(j >= 7){
        mt = mt + 30;
    }

    x.style.marginTop = mt + "px";

    j = j + 1;
    if(j == 13){
        j = 1;

        clearInterval(jw);
        rw = setInterval(run,100);
        rs.play();

        jw = 0;

        if(fid == 0){
            fid = f();
        }
        if(fw == 0){
            fw = setInterval(move,100);
        }
        if(bw == 0){
            bw = setInterval(back,100);
        }
        if(sw == 0){
            sw = setInterval(score,500);
        }
    }
    x.src = "Jump (" + j + ").png";
}




var bw = 0;

var b = 0;

function back(){

    b = b - 20;

    document.getElementById("d").style.backgroundPositionX = b + "px";
}



var sw = 0;

var p = 0;

function score(){

    p = p + 10;

    document.getElementById("score").innerHTML = p;
}



var dw = 0;

var d = 0;

function dead(){

    d = d + 1;

    if(d == 11){
        d = 10;
        x.style.marginTop = "390px";

        document.getElementById("end").style.visibility = "visible";

        document.getElementById("endscore").innerHTML = p;
    }
    x.src = "Dead (" + d + ").png";
}



function re(){
    location.reload();
}



