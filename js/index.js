const generate = document.querySelector(".Generate")
const copy = document.querySelector(".Copy")
const body = document.querySelector("body")
const title = document.querySelector(".title")

generate.addEventListener("mousedown", function () {
    const color = `linear-gradient(45deg,${randomColor()},${randomColor()})`
    body.style.background = color
    title.innerHTML = color
    generate.style.border = '2px solid red'
})
generate.addEventListener("mouseup",function(){
    generate.style.border = '2px solid #fff'
})


copy.addEventListener("mousedown", function () {
    navigator.clipboard.writeText("background:"+title.textContent)
    copy.style.border = '2px solid red'
})
copy.addEventListener("mouseup",function(){
    copy.style.border = '2px solid #fff'
})

function randomColor(){
    let result = []
    for(let i=0;i<3;i++){
        // 随机生成0-255
        result.push(Math.floor(Math.random()*(255+1)))
    }
    // 转为十六进制返回
    return '#'+result.reduce((a,b)=>a.toString(16)+b.toString(16))
}
