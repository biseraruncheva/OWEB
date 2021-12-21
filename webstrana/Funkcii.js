//za dodavanje sliki
var brpic=6;
var novbrspic=localStorage.getItem("brpic");
var prva=localStorage.getItem("prva");
if(prva==null)
{
    var prva=localStorage.setItem("prva",1);
}

var brp;
var p;

if(novbrspic==null)
{
  novbrspic=6;
  localStorage.setItem("brpic",novbrspic);
}

$(document).ready(function() {
      if(localStorage.getItem("brpic")>6)
      {
        $("#sliki").append(localStorage.getItem("addedpic"));
      }
});

$(document).ready(function() {
  $("#addImage").click(function() {
  $("#fileinput").click();
  });
  
  $("#fileinput").change(function() {
  if (this.files && this.files[0]) {
    var reader = new FileReader();
    reader.onload = imageIsLoaded;
    reader.readAsDataURL(this.files[0]);
  }
  });
  
  function imageIsLoaded(e) {
 
  brpic++;
  brp=localStorage.getItem("brpic");
  brp++;
  localStorage.setItem("brpic",brp);
  var al="slika"+localStorage.getItem("brpic");
  var picID="pic"+localStorage.getItem("brpic");
  
  var picture="<img class='imggallery' src='"+e.target.result+"' alt='"+al+"' id='"+picID+"' onclick='PictureComment(this)' style='width:300px;height:300px;'>";
  if(localStorage.getItem("prva")==1)//dali e prva dodadena slika
  {
    p=picture;
    localStorage.setItem("prva", 0);
  }
  else
  {
      
      p=localStorage.getItem("addedpic");
      p+=picture;
  }
  $("#sliki").append(picture);
  localStorage.setItem("addedpic", p);
  
  }
  
  });
  
  

// Funkcija za like
    const likes=new Array(1000);
    const brojac=new Array(1000);
    var lajk;
    var komentari;// ne treba za tuka
    for(i=0; i<1000; i++)
    {
      
      brojac[i]=1;
      
    }
    function LikesCounter(element) {
      

      for(i=1; i<localStorage.getItem("brpic")+1; i++)
      {
        var pom="button"+i;
        if(element.id==pom)
        {
          
          var spanID="heart"+i;
          var labelID="likes"+i;
         
          var lajk=localStorage.getItem("brlikes"+i);
          if(lajk==null)
          {
              lajk=0;
              localStorage.setItem("brlikes"+i,lajk);
          }

          if(((brojac[ i - 1 ])%2)==0)
          { 
            brojac[i-1]++;
         
            var lajk1=localStorage.getItem("brlikes"+i);
            lajk1--;
            localStorage.setItem("brlikes"+i, lajk1);
            document.getElementById(labelID).innerHTML = localStorage.getItem("brlikes"+i);
            document.getElementById(spanID).style.color = 'black';
            
  
          }
          else
          { 
            brojac[i-1]++;
            
            var lajk1=localStorage.getItem("brlikes"+i);
            lajk1++;
            localStorage.setItem("brlikes"+i, lajk1);
            document.getElementById(labelID).innerHTML = localStorage.getItem("brlikes"+i);
            document.getElementById(spanID).style.color = 'red';
          }
            
        }
      }
      
    };


//funkcija za pri klik na slika da se pojavi pogolema slika dole i del za komentiranje
function PictureComment(element)
{

    for(i=1; i<localStorage.getItem("brpic")+1; i++)
    {
      pom="pic"+i
      if(element.id==pom)
      {
        var picsrc=document.getElementById(pom).src;
        var fieldID="fieldset1"+i;
        var spanID="heart"+i;
        var al="slika"+i;
        var buttonID="button"+i;
        var labelID="likes"+i;
        var textareaID="textarea"+i;
        var inputID="post"+i;
        lajk=localStorage.getItem("brlikes"+i);
        komentari=localStorage.getItem("brlikes"+i);
        if(komentari==null)
        {
            komentari="<p style='color:grey'>Нема коментари</p>";
            localStorage.setItem("komentar"+i, komentari);
        }
          if(lajk==null)
          {
              lajk=0;
              localStorage.setItem("brlikes"+i,lajk);
          }

        document.getElementById("leftcolumn").innerHTML = "<img  style='float:right; width:600px; height: 600px;' src='"+picsrc+"' alt='slika7'>"
    
        content1=" <fieldset id='"+fieldID+"' style='text-align: justify;width:87%; height: 460px; float:left; margin-left: 0; background-color: white; overflow-y: auto; '>"+localStorage.getItem("komentar"+i)+"</fieldset>"
        content2=" <button class='button'id='"+buttonID+"' onclick='LikesCounter(this)' ><span id='"+spanID+"' style='font-size:x-large; margin:0;padding:0;'>&#10084;</span></button>";
        content3="<label id='"+labelID+"' style='color:black; font-size: x-large;'>"+localStorage.getItem("brlikes"+i)+"</label>";
        content4= "<p style='text-align: justify; margin:0; padding: 0;'>"+content2+content3+"</p>";
        content5="<textarea id='"+textareaID+"'style='background: white;resize: none;'name = 'comment'rows = '4' cols = '65' placeholder='Внесете коментар'></textarea><input class='post' type = 'button' value='Post' id='"+inputID+"'onclick='Comments(this)'>"
        content6="<p style='text-align: justify; margin:0; display: inline-flex;padding-right: 5%;'>"+content5+"</p>";
        form="<form>"+content6+"</form>";
        fieldset="<fieldset style='text-align: justify;width:87%; height: 100px; float:left; margin-left: 0; background-color: white;'>"+content4+form+"</fieldset>";
    
        document.getElementById("rightcolumn").innerHTML =content1+fieldset;
      }
    }

};


//funkcija za komentiranje


const tekst=new Array(brpic);

var user=Math.floor(Math.random() * 10001);
function Comments(element)
{
  const datum= new Date();
    var godina=datum.getFullYear();
    var mesec=datum.getMonth()+1;
    var den=datum.getDate();
    var denes=den+"."+mesec+"."+godina;

  for(i=1; i<localStorage.getItem("brpic")+1; i++)
  {
    var pom="post"+i;
    if(element.id==pom)
    {
      var fieldID="fieldset1"+i;
      var textareaID="textarea"+i;
      var comment=document.getElementById(textareaID).value;
     
      var pom=localStorage.getItem("komentar"+i);
      tekst[i-1]="<p style='color:black; white-space: initial; font-size:large'>"+"<strong>User"+user+": </strong>"+comment+"<br><br><strong>"+denes+"</strong></p><hr>";
      if(pom=="<p style='color:grey'>Нема коментари</p>")//ako e prv komentar
      {
          localStorage.setItem("komentar"+i,tekst[i-1]);
          localStorage.setItem("proverka"+i,0);//veke imame eden komentar 
      }
      else
      {
          var kom1=localStorage.getItem("komentar"+i);
          kom1+=tekst[i-1];
          localStorage.setItem("komentar"+i, kom1);
      }

     
       document.getElementById(fieldID).innerHTML=localStorage.getItem("komentar"+i);
       document.getElementById(textareaID).value="";

    }
  }
  
  
}

    