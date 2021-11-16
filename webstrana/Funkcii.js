// Funkcija za like
    var likes1 = 0;
    var likes2 = 0;
    var likes3 = 0;
    var likes4 = 0;
    var likes5 = 0;
    var likes6 = 0;
    var brojac1 = 1;
    var brojac2 = 1;
    var brojac3 = 1;
    var brojac4 = 1;
    var brojac5 = 1;
    var brojac6 = 1;
    
    function LikesCounter(element) {
      if(element.id=="button1")
      { 
        if(brojac1%2==0)
        { 
          brojac1++;
          likes1=likes1- 1;
          document.getElementById("likes1").innerHTML = likes1;
          document.getElementById("heart1").style.color = 'black';
          

        }
        else
        { 
          brojac1++;
          likes1=likes1+ 1;
          document.getElementById("likes1").innerHTML = likes1;
          document.getElementById("heart1").style.color = 'red';
        }
       
      }
      
      if(element.id=="button2")
      {
        if(brojac2%2==0)
        { 
          brojac2++;
          likes2=likes2- 1;
          document.getElementById("likes2").innerHTML = likes2;
          document.getElementById("heart2").style.color = 'black';
          

        }
        else
        { 
          brojac2++;
          likes2=likes2+ 1;
          document.getElementById("likes2").innerHTML = likes2;
          document.getElementById("heart2").style.color = 'red';
        }
      }
      
      if(element.id=="button3")
      {
        if(brojac3%2==0)
        { 
          brojac3++;
          likes3=likes3- 1;
          document.getElementById("likes3").innerHTML = likes3;
          document.getElementById("heart3").style.color = 'black';
          

        }
        else
        { 
          brojac3++;
          likes3=likes3+ 1;
          document.getElementById("likes3").innerHTML = likes3;
          document.getElementById("heart3").style.color = 'red';
        }
      }
      
      if(element.id=="button4")
      {
        if(brojac4%2==0)
        { 
          brojac4++;
          likes4=likes4- 1;
          document.getElementById("likes4").innerHTML = likes4;
          document.getElementById("heart4").style.color = 'black';
          

        }
        else
        { 
          brojac4++;
          likes4=likes4+ 1;
          document.getElementById("likes4").innerHTML = likes4;
          document.getElementById("heart4").style.color = 'red';
        }
      }
      
      if(element.id=="button5")
      {
        if(brojac5%2==0)
        { 
          brojac5++;
          likes5=likes5- 1;
          document.getElementById("likes5").innerHTML = likes5;
          document.getElementById("heart5").style.color = 'black';
          

        }
        else
        { 
          brojac5++;
          likes5=likes5+ 1;
          document.getElementById("likes5").innerHTML = likes5;
          document.getElementById("heart5").style.color = 'red';
        }
        }
      
      
      if(element.id=="button6")
      {
        if(brojac6%2==0)
        { 
          brojac6++;
          likes6=likes6- 1;
          document.getElementById("likes6").innerHTML = likes6;
          document.getElementById("heart6").style.color = 'black';
          

        }
        else
        { 
          brojac6++;
          likes6=likes6+ 1;
          document.getElementById("likes6").innerHTML = likes6;
          document.getElementById("heart6").style.color = 'red';
        }
      }
      
    };
//

//funkcija za pri klik na slika da se pojavi pogolema slika dole i del za komentiranje
function PictureComment(element)
{
  
    if(element.id == "pic1")
    {
    document.getElementById("leftcolumn").innerHTML = "<img  style='float:right; max-width: 100%; max-height: 100%;' src='FastFoodlargepicture.png' alt='slika1'>"
    
    content1=" <fieldset id='fieldset11' style='text-align:justify;width:87%; height: 460px; float:left; margin-left: 0; background-color: white; overflow-y: auto; '></fieldset>"
    content2=" <button class='button' id='button1' onclick='LikesCounter(this)' ><span id='heart1'style='font-size:x-large; margin:0;padding:0;'>&#10084;</span></button>";
    content3="<label id='likes1' style='color:black; font-size: x-large;'></label>";
    content4= "<p style='text-align: justify; margin:0; padding: 0;'>"+content2+content3+"</p>";
    content5="<textarea id='textarea1'style='background: white;resize: none;'name = 'comment'rows = '4' cols = '65' placeholder='Внесете коментар'></textarea><input class='post' type = 'button' value='Post' id='post1'onclick='Comments(this)'>"
    content6="<p style='text-align: justify; margin:0; display: inline-flex;padding-right: 5%;'>"+content5+"</p>";
    form="<form>"+content6+"</form>";
    fieldset="<fieldset style='text-align: justify;width:87%; height: 100px; float:left; margin-left: 0; background-color: white;'>"+content4+form+"</fieldset>";

    document.getElementById("rightcolumn").innerHTML =content1+fieldset;
    }
    else if(element.id == "pic2")
    {
      document.getElementById("leftcolumn").innerHTML = "<img  style='float:right; max-width: 100%; max-height: 100%;' src='papers.co-ne69-lake-louise-mountain-lake-fantastic-nature-1-wallpaper600.jpg' alt='slika2'>"
    
    content1=" <fieldset id='fieldset12' style='text-align: justify;width:87%; height: 460px; float:left; margin-left: 0; background-color: white; overflow-y: auto; '></fieldset>"
    content2=" <button class='button' id='button2' onclick='LikesCounter(this)' ><span id='heart2'style='font-size:x-large; margin:0;padding:0;'>&#10084;</span></button>";
    content3="<label id='likes2' style='color:black; font-size: x-large;'></label>";
    content4= "<p style='text-align: justify; margin:0; padding: 0;'>"+content2+content3+"</p>";
    content5="<textarea id='textarea2'style='background: white;resize: none;'name = 'comment'rows = '4' cols = '65' placeholder='Внесете коментар'></textarea><input class='post' type = 'button' value='Post' id='post2'onclick='Comments(this)'>"
    content6="<p style='text-align: justify; margin:0; display: inline-flex;padding-right: 5%;'>"+content5+"</p>";
    form="<form>"+content6+"</form>";
    fieldset="<fieldset style='text-align: justify;width:87%; height: 100px; float:left; margin-left: 0; background-color: white;'>"+content4+form+"</fieldset>";

    document.getElementById("rightcolumn").innerHTML =content1+fieldset;
    }

    else if(element.id == "pic3")
    {
      document.getElementById("leftcolumn").innerHTML = "<img  style='float:right; max-width: 100%; max-height: 100%;' src='slika1_600.jpg' alt='slika3'>"
    
    content1=" <fieldset id='fieldset13' style='text-align: justify;width:87%; height: 460px; float:left; margin-left: 0; background-color: white; overflow-y: auto; '></fieldset>"
    content2=" <button class='button' id='button3' onclick='LikesCounter(this)' ><span id='heart3'style='font-size:x-large; margin:0;padding:0;'>&#10084;</span></button>";
    content3="<label id='likes3' style='color:black; font-size: x-large;'></label>";
    content4= "<p style='text-align: justify; margin:0; padding: 0;'>"+content2+content3+"</p>";
    content5="<textarea id='textarea3'style='background: white;resize: none;'name = 'comment'rows = '4' cols = '65' placeholder='Внесете коментар'></textarea><input class='post' type = 'button' value='Post' id='post3'onclick='Comments(this)'>"
    content6="<p style='text-align: justify; margin:0; display: inline-flex;padding-right: 5%;'>"+content5+"</p>";
    form="<form>"+content6+"</form>";
    fieldset="<fieldset style='text-align: justify;width:87%; height: 100px; float:left; margin-left: 0; background-color: white;'>"+content4+form+"</fieldset>";

    document.getElementById("rightcolumn").innerHTML =content1+fieldset;
    }
    else if(element.id == "pic4")
    {
      document.getElementById("leftcolumn").innerHTML = "<img  style='float:right; max-width: 100%; max-height: 100%;' src='slika2_600.jpg' alt='slika4'>"
    
    content1=" <fieldset id='fieldset14' style='text-align: justify;width:87%; height: 460px; float:left; margin-left: 0; background-color: white; overflow-y: auto; '></fieldset>"
    content2=" <button class='button'id='button4' onclick='LikesCounter(this)' ><span id='heart4'style='font-size:x-large; margin:0;padding:0;'>&#10084;</span></button>";
    content3="<label id='likes4' style='color:black; font-size: x-large;'></label>";
    content4= "<p style='text-align: justify; margin:0; padding: 0;'>"+content2+content3+"</p>";
    content5="<textarea id='textarea4'style='background: white;resize: none;'name = 'comment'rows = '4' cols = '65' placeholder='Внесете коментар'></textarea><input class='post' type = 'button' value='Post' id='post4'onclick='Comments(this)'>"
    content6="<p style='text-align: justify; margin:0; display: inline-flex;padding-right: 5%;'>"+content5+"</p>";
    form="<form>"+content6+"</form>";
    fieldset="<fieldset style='text-align: justify;width:87%; height: 100px; float:left; margin-left: 0; background-color: white;'>"+content4+form+"</fieldset>";

    document.getElementById("rightcolumn").innerHTML =content1+fieldset;
    }
    else if(element.id == "pic5")
    {
      document.getElementById("leftcolumn").innerHTML = "<img  style='float:right; max-width: 100%; max-height: 100%;' src='slika3_600.jpg' alt='slika5'>"
    
      content1=" <fieldset id='fieldset15' style='text-align: justify;width:87%; height: 460px; float:left; margin-left: 0; background-color: white; overflow-y: auto; '></fieldset>"
      content2=" <button class='button'id='button5' onclick='LikesCounter(this)' ><span id='heart5'style='font-size:x-large; margin:0;padding:0;'>&#10084;</span></button>";
      content3="<label id='likes5' style='color:black; font-size: x-large;'></label>";
      content4= "<p style='text-align: justify; margin:0; padding: 0;'>"+content2+content3+"</p>";
      content5="<textarea id='textarea5'style='background: white;resize: none;'name = 'comment'rows = '4' cols = '65' placeholder='Внесете коментар'></textarea><input class='post' type = 'button' value='Post' id='post5'onclick='Comments(this)'>"
      content6="<p style='text-align: justify; margin:0; display: inline-flex;padding-right: 5%;'>"+content5+"</p>";
      form="<form>"+content6+"</form>";
      fieldset="<fieldset style='text-align: justify;width:87%; height: 100px; float:left; margin-left: 0; background-color: white;'>"+content4+form+"</fieldset>";
  
      document.getElementById("rightcolumn").innerHTML =content1+fieldset;
    }
    else if(element.id == "pic6")
    {
      document.getElementById("leftcolumn").innerHTML = "<img  style='float:right; max-width: 100%; max-height: 100%;' src='slika4_600.jpg' alt='slika6'>"
    
      content1=" <fieldset id='fieldset16' style='text-align: justify;width:87%; height: 460px; float:left; margin-left: 0; background-color: white; overflow-y: auto; '></fieldset>"
      content2=" <button class='button'id='button6' onclick='LikesCounter(this)' ><span id='heart6'style='font-size:x-large; margin:0;padding:0;'>&#10084;</span></button>";
      content3="<label id='likes6' style='color:black; font-size: x-large;'></label>";
      content4= "<p style='text-align: justify; margin:0; padding: 0;'>"+content2+content3+"</p>";
      content5="<textarea id='textarea6'style='background: white;resize: none;'name = 'comment'rows = '4' cols = '65' placeholder='Внесете коментар'></textarea><input class='post' type = 'button' value='Post' id='post6'onclick='Comments(this)'>"
      content6="<p style='text-align: justify; margin:0; display: inline-flex;padding-right: 5%;'>"+content5+"</p>";
      form="<form>"+content6+"</form>";
      fieldset="<fieldset style='text-align: justify;width:87%; height: 100px; float:left; margin-left: 0; background-color: white;'>"+content4+form+"</fieldset>";
  
      document.getElementById("rightcolumn").innerHTML =content1+fieldset;
    }

};
//

//funkcija za komentiranje

var tekst1;
var tekst2;
var tekst3;
var tekst4;
var tekst5;
var tekst6;
function Comments(element)
{
  if(element.id=="post1")
  {
     
       tekst1=tekst1+"<p style='color:black'>"+textarea1.value+"</p>"+"<hr>";
       document.getElementById("fieldset11").innerHTML=tekst1;

     
  }
  if(element.id=="post2")
  {
     
       tekst2=tekst2+"<p style='color:black'>"+textarea2.value+"</p>"+"<hr>";
       document.getElementById("fieldset12").innerHTML=tekst2;

     
  }
  if(element.id=="post3")
  {
     
       tekst3=tekst3+"<p style='color:black'>"+textarea3.value+"</p>"+"<hr>";
       document.getElementById("fieldset13").innerHTML=tekst3;

     
  }
  if(element.id=="post4")
  {
     
       tekst4=tekst4+"<p style='color:black'>"+textarea4.value+"</p>"+"<hr>";
       document.getElementById("fieldset14").innerHTML=tekst4;

     
  }
  if(element.id=="post5")
  {
     
       tekst5=tekst5+"<p style='color:black'>"+textarea5.value+"</p>"+"<hr>";
       document.getElementById("fieldset15").innerHTML=tekst5;

     
  }
  if(element.id=="post6")
  {
     
       tekst6=tekst6+"<p style='color:black'>"+textarea6.value+"</p>"+"<hr>";
       document.getElementById("fieldset16").innerHTML=tekst6;

     
  }
  
}


    