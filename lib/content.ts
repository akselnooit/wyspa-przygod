import locationsData from "@/content/locations.json";
import charactersData from "@/content/characters.json";
import itemsData from "@/content/items.json";
import type { Character, Item, Location } from "@/types/content";

export const locations: Location[] = locationsData;
export const characters: Character[] = charactersData;
export const items: Item[] = itemsData;
export const getLocation = (slug:string) => locations.find((entry) => entry.slug === slug);
export const getCharacter = (slug:string) => characters.find((entry) => entry.slug === slug);
export const getItem = (slug:string) => items.find((entry) => entry.slug === slug);
export const sortedLocations = () => [...locations].sort((a,b) => (b.date??"").localeCompare(a.date??""));
export const itemsFor = (slugs:string[]) => slugs.map(getItem).filter((entry): entry is Item => Boolean(entry));
export const charactersFor = (slugs:string[]) => slugs.map(getCharacter).filter((entry): entry is Character => Boolean(entry));
export const locationsFor = (slugs:string[]) => slugs.map(getLocation).filter((entry): entry is Location => Boolean(entry));
