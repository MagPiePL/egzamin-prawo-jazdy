## Jak aplikacja działa

Po wklejeniu tokena aplikacja będzie chodzić przez godzine dopóki token nie wygaśnie lub nie znajdzie się termin na egzamin w wyznaczonych preferencjach. Jeżeli aplikacji uda się zrobić rezerwacje wyświatli się o tym informacja w konsoli, następnie trzeba wejść w swój profil na info car i zapłacić za rezerwacje w ciągu około 40 minut inaczej zostanie ona odwołana. Dostępne terminy są sprawdzane co 10 sekund.

## Instalacja

1. Pobierz cały folder z repozytorium.
2. Pobierz rekomendowany instalator node js z tego linku `https://nodejs.org/en`, a następnie przejdź instalacje.
3. Utwórz plik .env i wypełnij jak pokazano w pliku .env.example.
4. Uruchom plik build.bat, a następnie start.bat ( Przy każdym następnym odpaleniu aplikacji tylko start.bat ).
5. Ze strony `https://info-car.pl/` będąc zalogowanym, skopiuj bearer token i wklej w aplikacji (Proces uzyskania bearer tokena wyjaśniono poniżej).

## Otrzymywanie bearer tokena

1. Zaloguj się na `https://info-car.pl/`.
2. Kliknij prawym przyciskiem myszy witrynę, kliknij opcję „Sprawdź element”, wejdź w zakładkę network ( sieć ), a następnie naciśnij kombinacje `Ctrl F` na klawiaturze.
3. W pasku wyszukiwania wyszukaj `Bearer`, następnie naciśnij Enter, skopiuj zaznaczony na żółto element i wklej go w aplikacji.
4. Aby otrzymać nowy token po 1 godzinie ( gdy token wygaśnie ) odśwież stronę infocar ( upewnij się, że nadal jesteś zalogowany ), kliknij pasek wyszukiwania z wpisanym `Bearer` w środku i naciśnij Enter, a następnie skopiuj nowy token.

![Alt text](screenshots/image1.png)

Przykład wyglądu takiego tokena: `Bearer eyJraWQiOiJpYy0xIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJ1c2VyX25hbWVAZ21haWwuY29tIiwidWlkIjoiNzg0YXM5NDMtOHNkMi03MzRhLTk2ZTctMjM4NTYyMWM2OGRhIiwic2NwIjpbImVtYWlsIiwib3BlbmlkIiwicHJvZmlsZSIsInJlc291cmNlLnJlYWQiXSwiaGFzQWNjIjp0cnVlLCJhenAiOiJjbGllbnQiLCJpc3MiOiJodHRwczovL2luZm8tY2FyLnBsL29hdXRoMi8iLCJleHAiOjE2OTQxMTM5NTUsImlhdCI6MTY5NDExMDM1NSwianRpIjoiZmRhNjMzMjMtZjQ0NC00ZGRkLTgwZDItc2Q2NDg2Z29kOWQ3IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl19.iBiGw2MWwEjBS2DizkYD0WkcczwRdaLowXnaLUgRP02XYD7VxARneJbon2VnAoDelLtifgZXZkiF1zAWDignhMqE_5sXTblVwLbVokCJOJ9c0QWEvX98yKajRJPB5qU9XDxdic0m_Zdj6pG_j_ffFuISG3G21p22AGTUe4z_ODE`
