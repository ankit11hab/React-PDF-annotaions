window.addEventListener('load',()=>
{
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')

    canvas.height = window.innerHeight-30
    canvas.width = window.innerWidth-30
    // ctx.strokeStyle = "red"
    // ctx.strokeRect(50,50,200,300)

    ctx.strokeStyle = "red"
    ctx.beginPath()
    ctx.moveTo(100,100)
    ctx.lineTo(500,100)
    ctx.lineTo(500,300)
    ctx.closePath()
    ctx.stroke()
})