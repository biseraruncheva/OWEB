brel=6;
function appear(element)
{
    for(i=1;i<brel+1;++i)
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
    for(i=1; i<brel+1; ++i)
    {
            
            document.getElementById("p"+i).innerHTML="DATE POSTED: "+den+"."+mesec+"."+godina;
        
    }
}

window.addEventListener("load", datum, false);