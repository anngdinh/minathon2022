
import React, { useState, useEffect, useRef } from "react"

const RenderFruit = () => {

    const canvas = useRef(null)
    const catImage = new Image();
    
    const image = new Image();
    // image.src = "..\images\tree-not-remove.jpg"
    image.src = "https://img-new.cgtrader.com/items/2052037/7399282e12/tree-cartoon-3d-model-obj-mtl-3ds-fbx.jpg"
    useEffect(() => {
        catImage.src = "https://th.bing.com/th/id/R.5596867853d81f1ccec3c38e6e1c6242?rik=IqHrDA4nesaR9A&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9i4%2fLrB%2f9i4LrBneT.jpg&ehk=WL32i5FXwrq6ybwtlURj63h5DK1Kt2QX4ysKHnnWCEs%3d&risl=&pid=ImgRaw&r=0"
        const ctx = canvas.current.getContext("2d")
        ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight)
        console.log(catImage.naturalWidth)
        for(let i=0;i<10;i++){
            let x = Math.floor(Math.random() * 400) + 100;
            let y = Math.floor(Math.random() * 150) + 40;
            // x+=Math.floor(Math.random() * 10) - 5;
            ctx.drawImage(catImage, x, y, catImage.naturalWidth/10, catImage.naturalHeight/10)
        }
        writeText({ text: 'Clue Mediator!', x: image.naturalWidth-130, y: 10 },{color: 'yellow', textAlign: 'center' });
        ctx.drawImage(catImage, image.naturalWidth-60, 2, 50, 50)
    }, [])

      // write a text
  const writeText = (info, style = {}) => {
    const ctx = canvas.current.getContext("2d")
    const { text, x, y } = info;
    const { fontSize = 20, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;
 
    ctx.beginPath();
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
  }
  return (
      <div>
        <canvas className="mt-3"
          ref={canvas}
          width={image.naturalWidth}
          height={image.naturalHeight}
        />
      </div>
  )
}

export default RenderFruit