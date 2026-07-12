"use client";
export function PrintButton({label="Drukuj"}:{label?:string}){return <button className="print-button no-print" onClick={()=>window.print()}><span aria-hidden="true">⎙</span> {label}</button>}
