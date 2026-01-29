///const container=document.querySelector('.contaier')
///const outer=document.querySelector('.outer')
///const button=document.querySelector('.button')


///container.addEventListener('click',()=>{console.log('div')},true)
///outer.addEventListener('click',()=>{console.log("outer Div")},true)
///button.addEventListener('click',()=>{console.log("button")},true)

//console.log()
//console.log(b)

//console.log(a)

///let a=237382
///var b=3764


///console.log(a)
///console.log(b)
///function print(){
///    console.log("inside fn")
///}

///print()

//function first(){
//   second()
//}
//function second(){
//    third()
//}
//function third(){
//    console.trace()
//}
//first() 

//console.log("first line")
//setTimeout(() => {console.log("after 2 sec")},2000);
//console.log("second line")

//setTimeout(() => {
//    alert("line after 2 sec")
//}, 2*1000);


//setInterval(() => {console.log("setinterval")}, 2000);
//const timeoutID=setTimeout(() => {clearInterval(timerID)},10000)
// clearTimeout(timeoutId)

//console.log("before timeout")
//setTimeout(() => {
//    console.log("settimeout")
//}, 0);
//console.log("after timeout")


const name=document.querySelector("#name")
const btn=document.querySelector(".btn")
const list=document.querySelector(".list")
btn.addEventListener('click',() => {
    const li=document.createElement('li')
    const dlt=document.createElement('button')
    li.innerText=name.value;
    console.log(name.value)
    dlt.innerText="delete"
    dlt.addEventListener('click',() => {
        list.removeChild(li)
    })
    list.appendChild(li)
    li.appendChild(dlt)
    name.value=" "
})
