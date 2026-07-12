export type Character = { slug:string; name:string; description:string; appearance:string; abilities:string[]; items:string[]; locations:string[]; image:string };
export type Location = { slug:string; name:string; number:number; description:string; mapPosition:{x:number;y:number}; visited:boolean; date?:string; events:string[]; items:string[]; characters:string[]; image:string };
export type Item = { slug:string; name:string; description?:string; image?:string };
