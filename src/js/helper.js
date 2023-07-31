import RobertLewandowskiImage from '../assets/images/Robert-Lewandowski.jpg'
import WojciechSzczesnyImage from '../assets/images/Wojciech-Szczesny.jpg'
import PiotrZielinskiImage from '../assets/images/Piotr-Zieliński.jpg'
import ArkadiuszMilikImage from '../assets/images/Arkadiusz-Milik.jpg'
import BartlomiejDragowskiImage from '../assets/images/bartlomiej-dragowski.jpg'
import LukaszSkorupskiImage from '../assets/images/lukasz-skorupski.jpg'
import JanBednarekImage from '../assets/images/jan-bednarek.jpeg'
import BartoszBereszynskiImage from '../assets/images/bartosz-bereszynski.jpg'
import TomaszKedzioraImage from '../assets/images/tomasz-kedziora.jpg'
import JakubKiwiorImage from '../assets/images/jakub-kiwior.jpg'
import ArkadiuszRecaImage from '../assets/images/arkadiusz-reca.jpg'
import MateuszWieteskaImage from '../assets/images/mateusz-wieteska.jpg'
import PrzemyslawWisniewskiImage from '../assets/images/przemyslaw-wisniewski.jpg'
import KrystianBielikImage from '../assets/images/krystian-bielik.jpg'
import PrzemyslawFrankowskiImage from '../assets/images/przemyslaw-frankowski.jpg'
import JakubKaminskiImage from '../assets/images/jakub-kaminski.jpg'
import BenLedermanImage from '../assets/images/ben-lederman.jpg'
import KarolLinettyImage from '../assets/images/karol-linetty.jpg'
import MateuszLegowskiImage from '../assets/images/mateusz-legowski.jpg'
import MichalSkorasImage from '../assets/images/michal-skoras.jpg'
import BartoszSliszImage from '../assets/images/bartosz-slisz.jpg'
import DamianSzymanskiImage from '../assets/images/damian-szymanski.jpg'
import SebastianSzymanskiImage from '../assets/images/sebastian-szymanski.jpg'
import NicolaZalewskiImage from '../assets/images/nicola-zalewski.jpg'
import KarolSwiderskiImage from '../assets/images/karol-swiderski.jpg'


const dataToGame = [{
    id: 1,
    hint1: 'Jest piłkarzem FC Barcelony',
    hint2: 'Gra na pozycji napastnika',
    hint3: 'Jest kapitanem reprezentacji Polski',
    name: 'Robert Lewandowski',
    club: 'FC Barcelona',
    position: 'Napastnik',
    age: '34',
    img: RobertLewandowskiImage
  },
  {
    id: 2,
    hint1: 'Jest piłkarzem Napoli',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Swoją karierę rozpoczął w Empoli',
    name: 'Piotr Zieliński',
    club: 'Napoli',
    position: 'Pomocnik',
    age: '29',
    img: PiotrZielinskiImage
  },
  {
    id: 3,
    hint1: 'Jest piłkarzem Juventusu Turyn',
    hint2: 'Gra na pozycji bramkarza',
    hint3: 'Syn byłego, świetnego bramkarza Lagii Warszawa',
    name: 'Wojciech Szczęsny',
    club: 'Juventus Turyn',
    position: 'Bramkarz',
    age: '33',
    img: WojciechSzczesnyImage
  },
  {
    id: 4,
    hint1: 'Jest piłkarzem Juventusu Turyn',
    hint2: 'Gra na pozycji napastnika',
    hint3: 'Rozpoczął swoją karierę w Górniku Zabrze',
    name: 'Arkadiusz Milik',
    club: 'Juventus Turyn',
    position: 'Napastnik',
    age: '29',
    img: ArkadiuszMilikImage
  },
  {
    id: 5,
    hint1: 'Jest piłkarzem Spezii Calcio',
    hint2: 'Gra na pozycji bramkarza',
    hint3: 'W bardzo młodym wieku zadebiutował w Jagielonii Białystok',
    name: 'Bartłomiej Drągowski',
    club: 'Spezia Calcio',
    position: 'Bramkarz',
    age: '25',
    img: BartlomiejDragowskiImage
  },
  {
    id: 6,
    hint1: 'Jest piłkarzem Bolognii FC',
    hint2: 'Gra na pozycji bramkarza',
    hint3: 'W wywiadzie ujawnił dokładnie jak to było z premiami na Mistrzostawach Świata',
    name: 'Łukasz Skorupski',
    club: 'Bologna FC',
    position: 'Bramkarz',
    age: '32',
    img: LukaszSkorupskiImage
  },
  {
    id: 7,
    hint1: 'Jest piłkarzem Southampton F.C.',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'Strzelił gola w meczu z Japonią na Mistrzostwach Świata w 2018 roku',
    name: 'Jan Bednarek',
    club: 'Southampton F.C.',
    position: 'Obrońca',
    age: '27',
    img: JanBednarekImage
  },
  {
    id: 8,
    hint1: 'Jest piłkarzem Sampdorii',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'W reprezentacji gra najczęściej na lewej obronie mimo, że jest prawym obrońcą',
    name: 'Bartosz Bereszyński',
    club: 'UC Sampdoria',
    position: 'Obrońca',
    age: '31',
    img: BartoszBereszynskiImage
  },
  {
    id: 9,
    hint1: 'Jest piłkarzem PAOKu Saloniki',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'Gdy rozpoczęła się wojna w Ukrainie, grał w jednym z tamtejszych klubów',
    name: 'Tomasz Kędziora',
    club: 'PAOK Saloniki',
    position: 'Obrońca',
    age: '29',
    img: TomaszKedzioraImage
  },
  {
    id: 10,
    hint1: 'Jest piłkarzem Arsenalu Londyn',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'W swoim klubie gra z numerem 15',
    name: 'Jakub Kiwior',
    club: 'Arsenal Londyn',
    position: 'Obrońca',
    age: '23',
    img: JakubKiwiorImage
  },
  {
    id: 11,
    hint1: 'Jest piłkarzem Spezzi Calcio',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'Słynie z dobrej motoryki i jest lewonożny',
    name: 'Arkadiusz Reca',
    club: 'Spezia Calcio',
    position: 'Obrońca',
    age: '28',
    img: ArkadiuszRecaImage
  },
  {
    id: 12,
    hint1: 'Jest piłkarzem Clermont Foot 63',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'Środkowy obrońca, który przez długi czas występował w Legii Warszawa',
    name: 'Mateusz Wieteska',
    club: 'Clermont Foot 63',
    position: 'Obrońca',
    age: '25',
    img: MateuszWieteskaImage
  },
  {
    id: 13,
    hint1: 'Jest piłkarzem Spezzi Calcio',
    hint2: 'Gra na pozycji obrońcy',
    hint3: 'Jest synem Jacka Wiśniewskiego',
    name: 'Przemysław Wiśniewski',
    club: 'Spezia Calcio',
    position: 'Obrońca',
    age: '24',
    img: PrzemyslawWisniewskiImage
  },
  {
    id: 14,
    hint1: 'Jest piłkarzem  Birmingham City F.C. ',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'W jednym z meczów starcił 2 zęby po zderzeniu z przeciwnikiem',
    name: 'Krystian Bielik',
    club: 'Birmingham City F.C.',
    position: 'Pomocnik',
    age: '25',
    img: KrystianBielikImage
  },
  {
    id: 15,
    hint1: 'Jest piłkarzem  RC Lens',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Ma takie same nazwisko jak polski napastnik, na którego mówiono "Franek łowca barmek"',
    name: 'Przemysław Frankowski',
    club: 'RC Lens',
    position: 'Pomocnik',
    age: '28',
    img: PrzemyslawFrankowskiImage
  },
  {
    id: 16,
    hint1: 'Jest piłkarzem VfL Wolfsburg',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Jest wychowankiem Lecha Poznań',
    name: 'Jakub Kamiński',
    club: 'VfL Wolfsburg',
    position: 'Pomocnik',
    age: '21',
    img: JakubKaminskiImage
  },
  {
    id: 17,
    hint1: 'Jest piłkarzem Rakowa Częstochowa',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'W juniorach występował w reprezantacji Stanów Zjednoczonych',
    name: 'Ben Lederman',
    club: 'Raków Częstochowa',
    position: 'Pomocnik',
    age: '23',
    img: BenLedermanImage
  },
  {
    id: 18,
    hint1: 'Jest piłkarzem Torino FC',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Były piłkarza Lecha Poznań i Sampdorii',
    name: 'Karol Linetty',
    club: 'Torino FC',
    position: 'Pomocnik',
    age: '28',
    img: KarolLinettyImage
  },
  {
    id: 19,
    hint1: 'Jest piłkarzem Pogoni Szczecin',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Zagrał póki co 1 mecz w reprezentacji Polski wchodząc na boisko w 86 minucie meczu Polska - Holandia',
    name: 'Mateusz Łęgowski',
    club: 'Pogoń Szczecin',
    position: 'Pomocnik',
    age: '20',
    img: MateuszLegowskiImage
  },
  {
    id: 20,
    hint1: 'Jest piłkarzem Club Brugge',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Był jedną z głównych postaci Lecha, który zaszedł do ćwierćfinału Ligi Konferencji w 2022/2023',
    name: 'Michał Skóraś',
    club: ' Club Brugge',
    position: 'Pomocnik',
    age: '23',
    img: MichalSkorasImage
  },
  {
    id: 21,
    hint1: 'Jest piłkarzem Legii Warszawa',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Jest wychowankiem RKP Rybnik',
    name: 'Bartosz Slisz',
    club: 'Legia Warszawa',
    position: 'Pomocnik',
    age: '24',
    img: BartoszSliszImage
  },
  {
    id: 22,
    hint1: 'Jest piłkarzem AEK Ateny',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Zdobył bramkę na wagę remisu, w doliczonym czasie gry meczu Polska - Anglia',
    name: 'Damian Szymański',
    club: 'AEK Ateny',
    position: 'Pomocnik',
    age: '28',
    img: DamianSzymanskiImage
  },
  {
    id: 23,
    hint1: 'Jest piłkarzem Fenerbahçe SK ',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Występował w klubach takich jak Legia Warszawa, Dinamo Moskwa, Feyenoord',
    name: 'Sebastian Szymański',
    club: 'Fenerbahçe SK',
    position: 'Pomocnik',
    age: '24',
    img: SebastianSzymanskiImage
  },
  {
    id: 24,
    hint1: 'Jest piłkarzem AS Romy',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Urodził się i wychowywał we Włoszech',
    name: 'Nicola Zalewski',
    club: 'AS Roma',
    position: 'Pomocnik',
    age: '21',
    img: NicolaZalewskiImage
  },
  {
    id: 25,
    hint1: 'Jest piłkarzem Charlotte FC',
    hint2: 'Gra na pozycji pomocnika',
    hint3: 'Mimo małej liczby występów ratował reprezentację Polski już kilkakrotnie, między innymi w meczu z Albanią na wyjeździe, gdzie strzelił gola dającego zwycięstwo',
    name: 'Karol Świderski',
    club: 'Charlotte FC',
    position: 'Napastnik',
    age: '26',
    img: KarolSwiderskiImage
  }
];

export {
  dataToGame
}