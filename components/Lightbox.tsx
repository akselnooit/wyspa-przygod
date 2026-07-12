"use client";
import { useEffect, useState } from "react";
export function Lightbox({src,alt,className}:{src:string;alt:string;className?:string}){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    if(!open) return;
    const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape") setOpen(false)};
    window.addEventListener("keydown",onKey);
    return ()=>window.removeEventListener("keydown",onKey);
  },[open]);
  return <>
    <img src={src} alt={alt} className={className} onClick={()=>setOpen(true)} style={{cursor:"zoom-in"}}/>
    {open&&<div className="lightbox no-print" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
      <button className="lightbox-close" aria-label="Zamknij" onClick={()=>setOpen(false)}>✕</button>
      <img src={src} alt={alt}/>
    </div>}
  </>;
}
