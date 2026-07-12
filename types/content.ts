export type Character = { slug:string; name:string; description:string; appearance:string; abilities:string[]; items:string[]; adventures:string[]; image:string };
export type Location = { slug:string; name:string; description:string; mapPosition:{x:number;y:number}; visited:boolean; events:string[]; adventures:string[]; image:string };
export type Adventure = { slug:string; title:string; date:string; location:string; description:string; discoveries:string[]; items:string[]; characters:string[]; image?:string };
export type Item = { slug:string; name:string; description?:string; image?:string };
