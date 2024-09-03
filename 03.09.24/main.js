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
    // console.log(multi)
    // console.log(a)
    // console.log(b)
    
    dis3.innerHTML=`wynik to ${multi}`
    }})
 reszta.addEventListener('click',function(){
    mod=parseFloat(a.value)%parseFloat(b.value)
    dis3.innerHTML=`wynik to ${mod}`
    })
calkowite.addEventListener('click',function(){
    if(b.value==0){
        dis3.innerHTML=`nie dziel przez 0`
    }else{
    full=parseInt(a.value)/parseInt(b.value)
    console.log(full)
    good=parseInt(full)
    dis3.innerHTML=`wynik to ${good}`
    }})

    // zd4
    const dis4=document.getElementById("dis4")
    const txt1=document.getElementById("txt1")
    const txt2=document.getElementById("txt2")
    const txt3=document.getElementById("txt3")
    const txt4=document.getElementById("txt4")
    const txt5=document.getElementById("txt5")
    const check1=document.getElementById("check1")
    const check2=document.getElementById("check2")
    const check3=document.getElementById("check3")
    const check4=document.getElementById("check4")
    const check5=document.getElementById("check5")
    const form4=document.getElementById("zd4")
    
    form4.addEventListener('change', function(e){
        e.preventDefault()
        sum=0
        if(check1.checked){
            sum=parseInt(txt1.value)+sum
            console.log(sum)
        }
        if(check2.checked){
            sum=parseInt(txt2.value)+sum
        }if(check3.checked){
            sum=parseInt(txt3.value)+sum
            console.log(sum)
        }
        if(check4.checked){
            sum=parseInt(txt4.value)+sum
            console.log(sum)
        }
        if(check5.checked){
            sum=parseInt(txt5.value)+sum
            console.log(sum)
            
        }
        if(isNaN(sum)){
            dis4.innerHTML="błąd odznacz puste"
        }else{
        dis4.innerHTML=parseInt(sum)
    }})