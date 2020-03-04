var clothes_img = ['Img/Dress_1.png','Img/Dress_2.png','Img/Dress_3.png','Img/Dress_4.png','Img/Dress_5.png','Img/Dress_6.png'];
var clothes_index=0;

let draggedItem=null;

function drag(){
    draggedItem = this;
    console.log(draggedItem.src);
}
function dragenter(){
    document.getElementById('chara-clo').src=clothes_img[clothes_index];
}
  
function changeOnFooter(){
    document.getElementById('onoff').style.display = "block";
}
function changeOffFooter(){
    document.getElementById('onoff').style.display = "none";
}


function upclothesBotton(){
    if(clothes_index>=5){
        clothes_index=0;
    }else{
        clothes_index++;
    }
    document.getElementById('chara-clothes').src = clothes_img[clothes_index];
}
function downclothesBotton(){
    if(clothes_index<=0){
        clothes_index=5;
    }else{
        clothes_index--;
    }
    document.getElementById('chara-clothes').src = clothes_img[clothes_index];
}

function changeChcolor (color){
    if(color=="white"){
        document.getElementById('chara-img').src = "Img/white_rabbit.png";
        console.log("OK");
    }else if(color=="black"){
        document.getElementById('chara-img').src = "Img/Black_rabbit.png";
        console.log("OK");
    }else if(color=="pink"){
        document.getElementById('chara-img').src = "Img/pink_rabbit.png";
        console.log("OK");
    }else if(color=="yellow"){
        document.getElementById('chara-img').src = "Img/yellow_rabbit.png";
        console.log("OK");
    }else if(color=="blue"){
        document.getElementById('chara-img').src = "Img/Blue_rabbit.png";
        console.log("OK");
    }else if(color=="purple"){
        document.getElementById('chara-img').src = "Img/Pur_rabbit.png";
        console.log("OK");
    }
    
}