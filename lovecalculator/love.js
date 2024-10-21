let res = Math.floor((Math.random()*100) + 1);
//document.write(aa);
function love(){

   let boy = document.getElementById('boy_name').value;
    //document.write(boy);
    let girl = document.getElementById('girl_name').value;
    //document.write(girl);
    if(boy==="")
    {
        alert('pleae enter your Name');
    }
    else if(boy==="vikas"){
        
         if(girl==="chanda"){
            document.getElementById('result').innerHTML=boy+"  Love's  "+girl+" = "+" 100 %";
        }
    }
    else if(girl===""){
        alert('Enter partner name');
    }
    else{
        document.getElementById('result').innerHTML=boy+"  Love's  "+girl+" = "+res+" % ";

    }


}