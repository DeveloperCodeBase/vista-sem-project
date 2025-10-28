"use client";
import { useState, useEffect } from "react";

export default function Carousel({ images }: { images: string[] }){
  const [idx, setIdx] = useState(0);
  useEffect(()=>{
    const t = setInterval(()=> setIdx(i => (i+1)%images.length), 5000);
    return ()=> clearInterval(t);
  }, [images.length]);
  return (
    <div className="carousel">
      <div className="carousel-track" style={{ transform:`translateX(-${idx*100}%)`, width:`${images.length*100}%`}}>
        {images.map((src,i)=>(
          <img key={i} src={src} alt="" />
        ))}
      </div>
      <div className="nav left">
        <button onClick={()=> setIdx((idx-1+images.length)%images.length)}>‹</button>
      </div>
      <div className="nav right">
        <button onClick={()=> setIdx((idx+1)%images.length)}>›</button>
      </div>
    </div>
  );
}
