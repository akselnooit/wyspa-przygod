# Wyspa Przygód

Prywatna, statyczna kronika rodzinnych przygód dla dzieci w wieku około 4–6 lat. Łączy mapę świata, atlas miejsc, karty bohaterów i chronologiczną kronikę z wydrukami A3/A4.

## Uruchomienie

Wymagany jest Node.js 20 lub nowszy.

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
```

Po buildzie gotowa strona znajduje się w `out/`.

## Edycja treści

Dane są w prostych plikach JSON:

- `content/locations.json` — miejsca i pozycje znaczników (x/y w procentach),
- `content/characters.json` — bohaterowie, ich rzeczy i przygody,
- `content/adventures.json` — wpisy kroniki z datą `YYYY-MM-DD`,
- `content/items.json` — słownik przedmiotów.

Powiązania korzystają ze stabilnych `slug`. Aby dodać przygodę, dopisz rekord do `adventures.json`, użyj istniejących slug miejsca, bohaterów i przedmiotów, a slug przygody dopisz w odpowiednich rekordach miejsca i bohaterów. Nowa strona szczegółów powstaje automatycznie podczas buildu.

Obrazy dodawaj do odpowiedniego folderu w `public/` i zapisuj ich ścieżki od `/`, np. `/adventures/piknik.webp`. Nie używaj zewnętrznych URL-i.

Kanoniczny prompt stylu graficznego do generowania nowych ilustracji jest w [`docs/art-style-prompt.md`](docs/art-style-prompt.md).

## Druk

Przyciski na mapie, kartach i kronice otwierają systemowy dialog wydruku. Mapa używa układu A3 poziomo, karta bohatera A4, a ważne bloki unikają podziału między stronami.

## GitHub Pages

Workflow `.github/workflows/deploy.yml` uruchamia lint, statyczny build i publikuje `out/`. W ustawieniach repozytorium wybierz **Pages → Source: GitHub Actions**. `basePath` i `assetPrefix` są wyznaczane automatycznie z `GITHUB_REPOSITORY`; lokalnie pozostają puste.

## Główna struktura

`app/` zawiera strony, `components/` współdzielony interfejs, `lib/` logikę danych i ścieżek, `content/` treści, a `public/` wszystkie lokalne ilustracje.
