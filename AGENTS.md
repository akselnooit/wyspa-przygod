# Zasady projektu

- Projekt jest w pełni statyczny: bez backendu, API, logowania i bazy danych.
- Dane kampanii pozostają w `content/`, a obrazy lokalne w `public/`.
- Nie dodajemy mechanik RPG, statystyk, walki ani generatora AI w aplikacji.
- Język interfejsu i treści to polski; całość ma być bezpieczna dla dzieci.
- Nie rozszerzamy zakresu bez wyraźnej potrzeby wynikającej ze specyfikacji.
- Każda zmiana musi przejść `npm.cmd run lint` i `npm.cmd run build`.
