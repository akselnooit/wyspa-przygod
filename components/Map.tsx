import Link from "next/link";
import { Lightbox } from "@/components/Lightbox";
import { locations } from "@/lib/content";
import { assetPath } from "@/lib/paths";
export function Map(){return <div className="map-frame"><Lightbox src={assetPath("/maps/wyspa-przygod.png")} alt="Ilustrowana mapa Wyspy Przygód: las, wioska, góry i latarnia nad morzem"/><div className="map-markers">{locations.map(location=><Link key={location.slug} href={`/miejsca/${location.slug}`} className={`map-marker ${location.visited?"visited":"unknown"}`} style={{left:`${location.mapPosition.x}%`,top:`${location.mapPosition.y}%`}} aria-label={`${location.name}, ${location.visited?"miejsce odwiedzone":"miejsce jeszcze nieodkryte"}`}><span className="pin">{location.number}</span><span className="marker-label">{location.name}</span></Link>)}</div></div>}
