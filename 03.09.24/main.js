const gosc = document.getElementById("gosc")

const poprawny = document.getElementById("poprawny")
const display=document.getElementById("dis")
const form=document.getElementById("zd1")
form.addEventListener('change',function(evt)
{

    evt.preventDefault()
    console.log(gosc)
     let cena=100*parseInt(gosc.value)
    if (poprawny.checked){cena=cena*1.30
         
    }
    
    display.innerHTML="cena całkowita to "+cena + "zł"
})

const km=document.getElementById("km")
const gdansk=document.getElementById("gdansk")
const dis2=document.getElementById("dis2")
const form2=document.getElementById("zd2")
form2.addEventListener('change', function(){
if (gdansk.checked){dis2.innerHTML="dowozimy za darmo"}
else{
    droga=Math.ceil(parseFloat(km.value))*2
    dis2.innerHTML=`cena dowozu to ${droga} zł`
}
})
const a = document.getElementById("a")
const b=document.getElementById("b")
const dod=document.getElementById("dod")
const odej=document.getElementById("odej")
const mno=document.getElementById("mno")
const dziel=document.getElementById("dziel")
const reszta=document.getElementById("reszta")
const calkowite=document.getElementById("calkowite")
const dis3=document.getElementById("dis3")
dod.addEventListener('click',function(){
    add=parseInt(a.value)+parseInt(b.value)
    dis3.innerHTML=`wynik to ${add}`
})
odej.addEventListener('click',function(){
    sub=a.value-b.value
    dis3.innerHTML=`wynik to ${sub}`
})
mno.addEventListener('click',function(){
multi=parseFloat(a.value)*parseFloat(b.value)
dis3.innerHTML=`wynik to ${sub}`
})
dziel.addEventListener('click',function(){
    if(b.value==0){
        dis3.innerHTML=`nie dziel przez 0`
    }else{
    multi=parseFloat(a.value)/parseFloat(b.value)
    console.log(multi)
    console.log(a)
    console.log(b)
    
    dis3.innerHTML=`wynik to ${multi}`
    }})