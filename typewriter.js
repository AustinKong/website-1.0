function inst1(){
    var i = 0;
    var cycleIndex = 0;
    var speed = 90; /* The speed/duration of the effect in milliseconds */
    var forward = true;
    var str = "";
    var txt = ["Austin","Aquila"];

    typeWriter();

    function typeWriter() {
        if(!forward && i<0){
            forward = true;
            if(cycleIndex<txt.length-1){
                cycleIndex++;
            }
            else{
                cycleIndex = 0;
            }
            i=0;
            setTimeout(typeWriter, speed * 5);
        }
        else if(forward && i>=txt[cycleIndex].length){
            forward = false;
            i=txt[cycleIndex].length-1;
            setTimeout(typeWriter, speed * 5 );
        }
        else{
            if(forward){
                str += txt[cycleIndex][i]; 
                i++;
            }
            else{
                str = str.slice(0, -1);
                i--;    
            }
            document.getElementById("name").innerHTML = str;
            setTimeout(typeWriter, speed);
        }
    }
}

function inst2(){
    var i = 0;
    var cycleIndex = 0;
    var speed = 110; /* The speed/duration of the effect in milliseconds */
    var forward = true;
    var str = "";
    var txt = ["Pixel art!","Illustrations!","Programming!","Game dev!"];

    typeWriter();

    function typeWriter() {
        if(!forward && i<0){
            forward = true;
            if(cycleIndex<txt.length-1){
                cycleIndex++;
            }
            else{
                cycleIndex = 0;
            }
            i=0;
            setTimeout(typeWriter, speed * 5);
        }
        else if(forward && i>=txt[cycleIndex].length){
            forward = false;
            i=txt[cycleIndex].length-1;
            setTimeout(typeWriter, speed * 5 );
        }
        else{
            if(forward){
                str += txt[cycleIndex][i]; 
                i++;
            }
            else{
                str = str.slice(0, -1);
                i--;    
            }
            document.getElementById("do").innerHTML = str;
            setTimeout(typeWriter, speed);
        }
    }
}
