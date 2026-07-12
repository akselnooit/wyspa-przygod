import Link from "next/link";
const links = [["/mapa","Mapa"],["/miejsca","Miejsca"],["/bohaterowie","Bohaterowie"],["/przygody","Kronika"]];
export function Header(){return <header className="site-header no-print"><div className="shell nav-wrap"><Link className="brand" href="/"><span aria-hidden="true">✦</span> Wyspa Przygód</Link><nav aria-label="Główna nawigacja">{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav></div></header>}
