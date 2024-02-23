## Jak aplikacja działa

Po uruchomieniu aplikacji będzie ona szukała rezerwacji według twoich preferencji ustawionych w pliku .env do momentu jej znalezienia. Jeżeli aplikacji uda się zrobić rezerwacje wyświatli się o tym informacja w konsoli, następnie trzeba wejść w swój profil na info car i zapłacić za rezerwacje w ciągu około 40 minut inaczej zostanie ona odwołana. Dostępne terminy są sprawdzane co 10 sekund.

## Instalacja

1. Pobierz cały folder z repozytorium.
2. Pobierz rekomendowany instalator node js z tego linku `https://nodejs.org/en`, a następnie przejdź instalacje.
3. Pobierz najnowszą wersją python z tego linku `https://www.python.org/downloads/`, a następnie przejdź instalacje.
3. Utwórz plik .env i wypełnij jak pokazano w pliku .env.example. (WORDID można znaleźć w pliku words.json w folderze data według preferencji)
4. Uruchom plik build.bat, a następnie start.bat ( Przy każdym następnym odpaleniu aplikacji tylko start.bat ).

## Zmienne env

`EMAIL` - email, którym logujesz się do strony `https://info-car.pl/`
`PASSWORD` - hasło, którym logujesz się do strony `https://info-car.pl/`
`CATEGORY` - kategoria egzaminu który chcesz zarezerwować (Działanie aplikacji było sprawdzane jedynie na kategorii B)
`FIRST_NAME` - twoje pierwsze imie zapisane na stronie info-car
`LAST_NAME` - twoje nazawisko zapisane na stronie info-car
`PESEL` - twój numer PESEL
`PHONE_NUMBER` - twój numer telefonu przypisany do strony info-car
`PKK_NUMBER` - numer twojego profilu kandydata na kierowcę
`WORDID` - ID word w którym chcesz zdawać egzamin na kierowcę
`DATE_FROM` - data wyznaczająca początkowy zakres szukania rezerwacji
`DATE_TO` - data wyznaczająca końcowy zakres szukania rezerwacji
`PREFERRED_HOURS` - preferowane godziny egzaminu których aplikacja będzie szukać