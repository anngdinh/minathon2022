
import { TrendingUpRounded } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react"

const RenderFruit = (props) => {
    // const [reload, setReload] = useState(true)
    const canvas = useRef(null)
    const catImage = new Image();
    const image = new Image();
    image.src = "https://i.ibb.co/wdVGRYG/tree.png"
    catImage.src ="https://i.ibb.co/1bzKLn7/Apple.png" 
    const number = props.number
    useEffect(() => {
        const ctx = canvas.current.getContext("2d")
        ctx.drawImage(image, 0, 0, image.naturalWidth*1.5, image.naturalHeight*1.5)
        console.log(catImage.naturalWidth)
        for(let i=0;i<number;i++){
            let x = Math.floor(Math.random() * 500) + 100;
            let y = Math.floor(Math.random() * 200) + 50;
            // x+=Math.floor(Math.random() * 10) - 5;
             ctx.drawImage(catImage, x, y, catImage.naturalWidth/10, catImage.naturalHeight/10)
        }
        writeText({ text: number, x: image.naturalWidth*1.5-100, y: 10 },{fontSize: 30, color: 'green', textAlign: 'center' });
        ctx.drawImage(catImage, image.naturalWidth*1.5-60, -3, catImage.naturalWidth/10, catImage.naturalHeight/10)
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
//   setReload(!reload)
  return (
      <div>
        <canvas className="mt-3"
          ref={canvas}
          width={image.naturalWidth*1.5}
          height={image.naturalHeight*1.5}
        />
      </div>
  )
}

export default RenderFruit;