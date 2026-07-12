import locationsData from "@/content/locations.json";
import charactersData from "@/content/characters.json";
import adventuresData from "@/content/adventures.json";
import itemsData from "@/content/items.json";
import type { Adventure, Character, Item, Location } from "@/types/content";

export const locations: Location[] = locationsData;
export const characters: Character[] = charactersData;
export const adventures: Adventure[] = adventuresData;
export const items: Item[] = itemsData;
export const getLocation = (slug:string) => locations.find((entry) => entry.slug === slug);
export const getCharacter = (slug:string) => characters.find((entry) => entry.slug === slug);
export const getAdventure = (slug:string) => adventures.find((entry) => entry.slug === slug);
export const getItem = (slug:string) => items.find((entry) => entry.slug === slug);
export const sortedAdventures = () => [...adventures].sort((a,b) => b.date.localeCompare(a.date));
export const adventuresFor = (slugs:string[]) => slugs.map(getAdventure).filter((entry): entry is Adventure => Boolean(entry));
export const itemsFor = (slugs:string[]) => slugs.map(getItem).filter((entry): entry is Item => Boolean(entry));
export const charactersFor = (slugs:string[]) => slugs.map(getCharacter).filter((entry): entry is Character => Boolean(entry));
