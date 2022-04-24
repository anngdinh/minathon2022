
import React, { useState, useEffect, useRef } from "react"

const RenderFruit = () => {

    const canvas = useRef(null)
    const catImage = new Image();
    
    const image = new Image();
    // image.src = "..\images\tree-not-remove.jpg"
    image.src = "https://img-new.cgtrader.com/items/2052037/7399282e12/tree-cartoon-3d-model-obj-mtl-3ds-fbx.jpg"
    useEffect(() => {
        catImage.src = "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/279167198_1104456960402585_5534591758677890258_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=1J3CeeRsJFgAX-jBCrg&_nc_ht=scontent.fsgn1-1.fna&oh=00_AT-G-hnJMlzKFNdFydkCA01ljPA-wCG42zpcNRg2gx2UsA&oe=626A30D9"
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