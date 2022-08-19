function fn1(){
    var r1=document.getElementById('r1');
    var r2=document.getElementById('r2');
    if(r1.checked==true){
        document.getElementById('question').style.visibility = 'visible';
        document.getElementById('hiring').style.visibility = 'hidden';
    }
    else if(r2.checked==true){
        document.getElementById('hiring').style.visibility = 'visible';
        document.getElementById('question').style.visibility = 'hidden';
    }
}