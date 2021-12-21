//za dodavanje blog
var brel=6;
var novbrel=localStorage.getItem("brel");
var prva=localStorage.getItem("prva");
if(prva==null)
{
localStorage.setItem("prva",1);
}

var brblog;
var p;
if(novbrel==null)
{
    novbrel=6;
    localStorage.setItem("brel", novbrel);
}

$(document).ready(function() {
    if(localStorage.getItem("brel")>6)
    {var n;
     var m;
     var brdodadeni=localStorage.getItem("brel");
     var numred=parseInt(((brdodadeni)-6)/3);
     
        for(n=1;n<1000; n++)
        {
            if(localStorage.getItem("red"+n)==null)
            {
                break;
            }
           $("#here").append(localStorage.getItem("red"+n));
           
                  if( localStorage.getItem("column1"+n)!=null)
                 {
                    $("#here"+n).append(localStorage.getItem("column1"+n));
                       if(localStorage.getItem("column2"+n)!=null)
                       {
                        $("#here"+n).append(localStorage.getItem("column2"+n));
                        if(localStorage.getItem("column3"+n)!=null)
                        {
                            $("#here"+n).append(localStorage.getItem("column3"+n));
                        }
                        else
                        {
                            break;
                        }
                       }
                       else
                       {
                           break;
                       }
                       
                 }
                 else
                 {
                     break;
                 }
        }

       
    
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
    
    var brojac=localStorage.getItem("brojac");
    if(brojac==null)
    {
        localStorage.setItem("brojac",1)//koja slika e po red vo redot
    }
  
    var red=localStorage.getItem("red");
    if(red==null)
    {
       localStorage.setItem("red",1);//prv red
    }

    var i=localStorage.getItem("i");
    if(i==null)
    {
        localStorage.setItem("i",7)
    }
    var j=localStorage.getItem("j");
    if(j==null)
    {
        localStorage.setItem("j",8)
    }
    var k=localStorage.getItem("k");
    if(k==null)
    {
        localStorage.setItem("k",9)
    }
   

    function imageIsLoaded(e) {
    var id="here"+localStorage.getItem("red");
    const datum= new Date();
    var godina=datum.getFullYear();
    var mesec=datum.getMonth()+1;
    var den=datum.getDate();
    var denes="DATE POSTED: "+den+"."+mesec+"."+godina;
    if(localStorage.getItem("brojac")==1)
    {
       var row="<div class='row' id='"+id+"'></div>";
       $("#here").append(row);
       localStorage.setItem("red"+localStorage.getItem("red"), row);
       var comment=document.getElementById("tekst").value;
       var article="<div class='column style='margin-top: -7%;'><article style='margin:5%; border-radius: 5% 5% 5%;background-color: white;'>"
       var slika="<img style='width:100%; display:block;margin:0; padding:0; border-radius: 5% 5% 0% 0%;' id='slika"+localStorage.getItem("i")+"' onclick='appear(this)' src='"+e.target.result+"' alt='slika"+localStorage.getItem("i")+"'>"
       var naslov="<div> <h1 style='color:black; text-align: justify;margin:3%'>"+document.getElementById("naslov").value+"</h1>"+"<h3 style='color:black; text-align: justify;margin:3%'>Име: "+document.getElementById("ime").value+"</h3></div>"
       var content="<div id='text"+localStorage.getItem("i")+"' style='display: none;'><hr><p style='text-align: justify;color:black; line-height: 1.5; margin:3%;font-size: large;'>"+comment+"</p><div><p id='p"+localStorage.getItem("i")+"' style='color:black'>"+denes+"</p></div></div></article></div>";
       
         p=article+slika+naslov+content;
        

       $("#here"+localStorage.getItem("red")).append(p);
       localStorage.setItem("column1"+localStorage.getItem("red"), p);
     
       brblog=localStorage.getItem("brel");
       brblog++;
       localStorage.setItem("brel",brblog);
      
       brojac=localStorage.getItem("brojac");
       brojac++;
       localStorage.setItem("brojac",brojac);

       document.getElementById("tekst").value="";
       document.getElementById("naslov").value="";
       document.getElementById("ime").value="";
       

    }
    else if(localStorage.getItem("brojac")==2)
    {
        var comment=document.getElementById("tekst").value;
       var article="<div class='column style='margin-top: -7%;'><article style='margin:5%; border-radius: 5% 5% 5%;background-color: white;'>"
       var slika="<img style='width: 100%; display:block;margin:0; padding:0; border-radius: 5% 5% 0% 0%;' id='slika"+localStorage.getItem("j")+"' onclick='appear(this)' src='"+e.target.result+"' alt='slika"+localStorage.getItem("j")+"'>"
       var naslov="<div> <h1 style='color:black; text-align: justify;margin:3%'>"+document.getElementById("naslov").value+"</h1>"+"<h3 style='color:black; text-align: justify;margin:3%'>Име: "+document.getElementById("ime").value+"</h3></div>"
       var content="<div id='text"+localStorage.getItem("j")+"' style='display: none;'><hr><p style='text-align: justify;color:black; line-height: 1.5; margin:3%;font-size: large;'>"+comment+"</p><div><p id='p"+localStorage.getItem("j")+"' style='color:black'>"+denes+"</p></div></div></article></div>";
       
       p=article+slika+naslov+content;
       $("#here"+localStorage.getItem("red")).append(p);
       
       localStorage.setItem("column2"+localStorage.getItem("red"), p);
    
        brblog=localStorage.getItem("brel");
        brblog++;
        localStorage.setItem("brel",brblog);
    
        brojac=localStorage.getItem("brojac");
        brojac++;
        localStorage.setItem("brojac",brojac);

        document.getElementById("tekst").value="";
       document.getElementById("naslov").value="";
       document.getElementById("ime").value="";

    }
    else if(localStorage.getItem("brojac")==3)
    {
        var comment=document.getElementById("tekst").value;
        var article="<div class='column style='margin-top: -7%;'><article style='margin:5%; border-radius: 5% 5% 5%;background-color: white;'>"
        var slika="<img style='width: 100%; display:block;margin:0; padding:0; border-radius: 5% 5% 0% 0%;' id='slika"+localStorage.getItem("k")+"' onclick='appear(this)' src='"+e.target.result+"' alt='slika"+localStorage.getItem("k")+"'>"
        var naslov="<div> <h1 style='color:black; text-align: justify;margin:3%'>"+document.getElementById("naslov").value+"</h1>"+"<h3 style='color:black; text-align: justify;margin:3%'>Име: "+document.getElementById("ime").value+"</h3></div>"
        var content="<div id='text"+localStorage.getItem("k")+"' style='display: none;'><hr><p style='text-align: justify;color:black; line-height: 1.5; margin:3%;font-size: large;'>"+comment+"</p><div><p id='p"+localStorage.getItem("k")+"' style='color:black'>"+denes+"</p></div></div></article></div>";
        p=article+slika+naslov+content;
        $("#here"+localStorage.getItem("red")).append(p);
       
        localStorage.setItem("column3"+localStorage.getItem("red"), p);
       
         brblog=localStorage.getItem("brel");
         brblog++;
         localStorage.setItem("brel",brblog);
         
         brojac=localStorage.getItem("brojac");
         brojac=1;
         localStorage.setItem("brojac",brojac);
         i=localStorage.getItem("i");
         var i1=i+3;
         localStorage.setItem("i",i1);
         j=localStorage.getItem("j");
         var j1=j+3;
         localStorage.setItem("j",j1);
         k=localStorage.getItem("k");
         k1=k+3;
         localStorage.setItem("k",k1);

        red=localStorage.getItem("red");
        red++;
        localStorage.setItem("red",red);
       

        document.getElementById("tekst").value="";
       document.getElementById("naslov").value="";
       document.getElementById("ime").value="";
    }
    
    }
    
    });


function appear(element)
{
    for(i=1;i<localStorage.getItem("brel")+1;++i)
    if(element.id=="slika"+i)
    {
       if(document.getElementById("text"+i).style.display=="none")
       {
        document.getElementById("text"+i).style.display="block";
        
        
       }
       else
       {
        document.getElementById("text"+i).style.display="none"
       }
    }


}

function datum()
{
    const datum= new Date;
    datum.setFullYear(2021,10,14);
    var godina=datum.getFullYear();
    var mesec=datum.getMonth()+1;
    var den=datum.getDate();
    for(i=1; i<7; ++i)
    {
            
            document.getElementById("p"+i).innerHTML="DATE POSTED: "+den+"."+mesec+"."+godina;
        
    }
}

window.addEventListener("load", datum, false);