const dataToGame = [
  {
    id: 1,
    hint1: 'Jest piłkarzem FC Barcelony',
    hint2: 'Gra na pozycji napastnika',
    hint3: 'Jest kapitanem reprezentacji Polski',
    name: 'Robert Lewandowski',
    club: 'FC Barcelona',
    position: 'Napastnik',
    age: '34'
  },
  {
    id: 2,
    hint1: 'Jest piłkarzem Napoli',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Swoją karierę rozpoczął w Empoli',
    name: 'Piotr Zieliński',
    club: 'Napoli',
    position: 'Pomocnik',
    age: '29'
  },
  {
    id: 3,
    hint1: 'Jest piłkarzem Juventusu Turyn',
    hint2: 'Gra na pozycji bramkarza',
    hint3: 'Syn byłego, świetnego bramkarza Lagii Warszawa',
    name: 'Wojciech Szczęsny',
    club: 'Juventus Turyn',
    position: 'Bramkarz',
    age: '33'
  },
  {
    id: 4,
    hint1: 'Jest piłkarzem Juventusu Turyn',
    hint2: 'Gra na pozycji napastnika',
    hint3: 'Rozpoczął swoją karierę w Górniku Zabrze',
    name: 'Arkadiusz Milik',
    club: 'Juventus Turyn',
    position: 'Napastnik',
    age: '29'
  },
  {
    id: 5,
    hint1: 'Jest piłkarzem Juventusu Turyn',
    hint2: 'Gra na pozycji napastnika',
    hint3: 'Rozpoczął swoją karierę w Górniku Zabrze',
    name: 'Arkadiusz Milik',
    club: 'Juventus Turyn',
    position: 'Napastnik',
    age: '29'
  },
  {
    id: 6,
    hint1: 'Jest piłkarzem Spezii Calcio',
    hint2: 'Gra na pozycji bramkarza',
    hint3: 'W bardzo młodym wieku zadebiutował w Jagielonii Białystok',
    name: 'Bartłomiej Drągowski',
    club: 'Spezia Calcio',
    position: 'Bramkarz',
    age: '25'
  },
  {
    id: 7,
    hint1: 'Jest piłkarzem Bolognii FC',
    hint2: 'Gra na pozycji bramkarza',
    hint3: 'W wywiadzie ujawnił dokładnie jak to było z premiami na Mistrzostawach Świata',
    name: 'Łukasz Skorupski',
    club: 'Bologna FC',
    position: 'Bramkarz',
    age: '32'
  },
  {
    id: 8,
    hint1: 'Jest piłkarzem Southampton F.C.',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'Strzelił gola w meczu z Japonią na Mistrzostwach Świata w 2018 roku',
    name: 'Jan Bednarek',
    club: 'Southampton F.C.',
    position: 'Obrońca',
    age: '27'
  },
  {
    id: 9,
    hint1: 'Jest piłkarzem Sampdorii',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'W reprezentacji gra najczęściej na lewej obronie mimo, że jest prawym obrońcą',
    name: 'Bartosz Bereszyński',
    club: 'UC Sampdoria',
    position: 'Obrońca',
    age: '31'
  },
  {
    id: 10,
    hint1: 'Jest piłkarzem PAOKu Saloniki',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'Gdy rozpoczęła się wojna w Ukrainie, grał w jednym z tamtejszych klubów',
    name: 'Tomasz Kędziora',
    club: 'PAOK Saloniki',
    position: 'Obrońca',
    age: '29'
  },
  {
    id: 11,
    hint1: 'Jest piłkarzem Arsenalu Londyn',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'W swoim klubie gra z numerem 15',
    name: 'Jakub Kiwior',
    club: 'Arsenal Londyn',
    position: 'Obrońca',
    age: '23'
  },
  {
    id: 12,
    hint1: 'Jest piłkarzem Spezzi Calcio',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'Słynie z dobrej motoryki i jest lewonożny',
    name: 'Arkadiusz Reca',
    club: 'Spezia Calcio',
    position: 'Obrońca',
    age: '28'
  },
  {
    id: 13,
    hint1: 'Jest piłkarzem Clermont Foot 63',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'Środkowy obrońca, który przez długi czas występował w Legii Warszawa',
    name: 'Mateusz Wieteska',
    club: 'Clermont Foot 63',
    position: 'Obrońca',
    age: '25'
  },
  {
    id: 14,
    hint1: 'Jest piłkarzem Spezzi Calcio',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'Jest synem Jacka Wiśniewskiego',
    name: 'Przemysław Wiśniewski',
    club: 'Spezia Calcio',
    position: 'Obrońca',
    age: '24'
  },
  {
    id: 15,
    hint1: 'Jest piłkarzem  Birmingham City F.C. ',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'W jednym z meczów starcił 2 zęby po zderzeniu z przeciwnikiem',
    name: 'Krystian Bielik',
    club: 'Birmingham City F.C.',
    position: 'Pomocnik',
    age: '25'
  },
  {
    id: 16,
    hint1: 'Jest piłkarzem  RC Lens',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Ma takie same nazwisko jak polski napastnik, na którego mówiono "Franek łowca barmek"',
    name: 'Przemysław Frankowski',
    club: 'RC Lens',
    position: 'Pomocnik',
    age: '28'
  },
  {
    id: 17,
    hint1: 'Jest piłkarzem VfL Wolfsburg',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Jest wychowankiem Lecha Poznań',
    name: 'Jakub Kamiński',
    club: 'VfL Wolfsburg',
    position: 'Pomocnik',
    age: '21'
  },
  {
    id: 18,
    hint1: 'Jest piłkarzem Rakowa Częstochowa',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'W juniorach występował w reprezantacji Stanów Zjednoczonych',
    name: 'Ben Lederman',
    club: 'Raków Częstochowa',
    position: 'Pomocnik',
    age: '23'
  },
  {
    id: 19,
    hint1: 'Jest piłkarzem Torino FC',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Były piłkarza Lecha Poznań i Sampdorii',
    name: 'Karol Linetty',
    club: 'Torino FC',
    position: 'Pomocnik',
    age: '28'
  },
  {
    id: 20,
    hint1: 'Jest piłkarzem Pogoni Szczecin',
    hint2: 'Gra na pozycji pomocnika',
    hint3:
      'Zagrał póki co 1 mecz w reprezentacji Polski wchodząc na boisko w 86 minucie meczu Polska - Holandia',
    name: 'Mateusz Łęgowski',
    club: 'Pogoń Szczecin',
    position: 'Pomocnik',
    age: '20'
  }
]

export { dataToGame }
