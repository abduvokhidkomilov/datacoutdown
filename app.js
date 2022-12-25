const year=document.querySelector(".year")
let dayValue=document.querySelector(".daysValue")
let hoursValue=document.querySelector(".hoursValue")
let minutsValue=document.querySelector(".minutsValue")
let secondsValue=document.querySelector(".secondsValue")
let bgYear=document.querySelector(".bgYear")
let loading=document.querySelector(".loading")
const ul=document.querySelector("ul")

const currentYear=new Date().getFullYear();
const newYearTime=new Date(`January 01 ${currentYear+1} 00:00:00`)

  bgYear.innerText=currentYear+1

  function update(){
    setInterval(()=>{
    const currentime=new Date()
    const diff=newYearTime-currentime
    let d=Math.floor(diff/1000/60/60/24)
    let h=Math.floor(diff/1000/60/60)%24
    let m=Math.floor(diff/1000/60)%60
    let s=Math.floor(diff/1000)%60
    dayValue.innerText = d
    hoursValue.innerText= h < 10 ? "0" + h : h
    minutsValue.innerText= m < 10 ? "0" + m : m
    secondsValue.innerText= s < 10 ? "0" + s : s
    dayValue.getElementsByClassName.color="red"
},1000)
}
update()
 