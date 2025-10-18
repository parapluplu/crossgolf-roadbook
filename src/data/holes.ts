import bahn01_start from "@/assets/bahn01_start.webp";
import bahn01_ziel from "@/assets/bahn01_ziel.webp";
import bahn02_start from "@/assets/bahn02_start.webp";
import bahn02_ziel from "@/assets/bahn02_ziel.webp";
import bahn03_start from "@/assets/bahn03_start.webp";
import bahn03_ziel from "@/assets/bahn03_ziel.webp";
import bahn04_start from "@/assets/bahn04_start.webp";
import bahn04_uebersicht_ziel from "@/assets/bahn04_uebersicht_ziel.webp";
import bahn04_ziel from "@/assets/bahn04_ziel.webp";
import bahn05_start from "@/assets/bahn05_start.webp";
import bahn05_ziel from "@/assets/bahn05_ziel.webp";
import bahn06_start from "@/assets/bahn06_start.webp";
import bahn06_ziel from "@/assets/bahn06_ziel.webp";
import bahn07_start from "@/assets/bahn07_start.webp";
import bahn07_ziel from "@/assets/bahn07_ziel.webp";
import bahn08_start from "@/assets/bahn08_start.webp";
import bahn08_ziel from "@/assets/bahn08_ziel.webp";
import bahn09_start from "@/assets/bahn09_start.webp";
import bahn09_ziel from "@/assets/bahn09_ziel.webp";
import bahn10_start from '@/assets/bahn10_start.webp';
import bahn10_ziel from '@/assets/bahn10_ziel.webp';
import bahn11_start from '@/assets/bahn11_start.webp';
import bahn11_ziel from '@/assets/bahn11_ziel.webp';
import bahn12_start from '@/assets/bahn12_start.webp';
import bahn12_ziel from '@/assets/bahn12_ziel.webp';
import bahn13 from '@/assets/bahn13.webp';
import bahn13_michalsreifen from '@/assets/bahn13_michaalsreifen.webp';

export interface HoleImage {
  src: string;
  caption: string;
}

export interface Hole {
  id: number;
  title: string;
  game_mode: string;
  description: string;
  images: HoleImage[];
}

export const holes: Hole[] = [
  {
    id: 1,
    title: "Balls on Fire",
    game_mode: "Scramble",
    description: "Hinter der Halle ist das Ziel. Dort ist ein Hydrant, den es zu treffen gilt.",
    images: [
      { src: bahn01_start, caption: "Abschlag" },
      { src: bahn01_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 2,
    title: "Rampensau",
    game_mode: "Scramble",
    description: "Von der Rampe den Ball Richtung Straße abschlagen. Hinter der rechten Halle ist ein Streusalzbehälter. Treffer des Behälters zählt. Bleibt der Ball drin liegen -1",
    images: [
      { src: bahn02_start, caption: "Abschlag" },
      { src: bahn02_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 3,
    title: "VAR: Das Tor zählt nicht!",
    game_mode: "Scramble",
    description: "Bis zum Ende der Halle spielen und dort MUSS der Ball durch die kleine Tür gespielt werden (die Rolltore zählen nicht). Hinter der Tür ist rechts das Ziel. Der Ball muss drinnen liegen bleiben.",
    images: [
      { src: bahn03_start, caption: "Abschlag" },
      { src: bahn03_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 4,
    title: "Hintertürchen",
    game_mode: "Scramble",
    description: "Der Ball muss durch die markierte Türe von hinten in den Raum links neben dem Start gespielt werden. Der Zielbereich ist hinter der 'Fußleiste'. ACHTUNG: Der Ball darf NICHT auf die Leiste hoch oder in den Zielbereich dahinter bessergelegt werden.",
    images: [
      { src: bahn04_start, caption: "Abschlag" },
      { src: bahn04_uebersicht_ziel, caption: "Übersicht Ziel" },
      { src: bahn04_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 5,
    title: "Doppel Dog Leck mich am Arsch",
    game_mode: "Scramble",
    description: "Vom Start muss der Ball rechts ums Eck gespielt werden. Treffen des Ziels reicht. Liegt er im Ziel gibt's -1 (Die Halle mit den Möbeln ist AUS!)",
    images: [
      { src: bahn05_start, caption: "Abschlag" },
      { src: bahn05_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 6,
    title: "Hallensprung",
    game_mode: "Scramble",
    description: "Vom Start geht's in die Parallelhalle. Dort an der 'Ausgangstüre' ist der Zielbereich. Der Ball muss hinter der Schwelle liegen bleiben.",
    images: [
      { src: bahn06_start, caption: "Abschlag" },
      { src: bahn06_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 7,
    title: "Von hier an bergab!",
    game_mode: "Scramble",
    description: "Vom Start geht's die Straße entlang und hinter der Kurve ist ein Außenkellertreppe zu einer Türe. Der Ball muss auf dem untersten Podest liegen bleiben.",
    images: [
      { src: bahn07_start, caption: "Abschlag" },
      { src: bahn07_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 8,
    title: "Conti Carl Allee",
    game_mode: "Scramble",
    description: "Vom Start geht es bis zur vor den Tunnel. Rechts ist eine Platte. Der Ball muss auf der Fläche liegen bleiben.",
    images: [
      { src: bahn08_start, caption: "Abschlag" },
      { src: bahn08_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 9,
    title: "Tunnel of Love",
    game_mode: "Scramble",
    description: "In der Nähe des Einganstors ist der Start und der Ball muss durch den Tunnel gespielt werden. Dahinter links um die Ecke und auf der rechten Seite steht eine Bank. Da in der Nähe ist ein markierstes Loch im Boden. Da muss der Ball rein.",
    images: [
      { src: bahn09_start, caption: "Abschlag" },
      { src: bahn09_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 10,
    title: "Zicke Zacke Golf ist kacke",
    game_mode: "Scramble",
    description: "Vom Start geht's Richtung Halleneingang. Durch die offene Tür spielen ist das Ziel.",
    images: [
      { src: bahn10_start, caption: "Abschlag" },
      { src: bahn10_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 11,
    title: "Karriereleiter",
    game_mode: "Scramble",
    description: "Vom Start geht es halblinks hinter die große 'Säule' auf deren Rückseite Türen sind. Die untere Türe gilt als getroffen, die obere linke Tür als -1",
    images: [
      { src: bahn11_start, caption: "Abschlag" },
      { src: bahn11_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 12,
    title: "Stilles Örtchen",
    game_mode: "Scramble",
    description: "Am Ende der Halle geht es einmal quer von links nach rechts. In dem 'Häuschen' ist die Zielzone die getroffen werden muss. Der Ball muss auf der Fläche liegen bleiben.",
    images: [
      { src: bahn12_start, caption: "Abschlag" },
      { src: bahn12_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 13,
    title: "Contis Rache",
    game_mode: "Individuell",
    description: "Jeder hat 4 Versuche. Fürs durchspielen der Reifen gibt es Punkte. Der vorderste Reifen gibt einen Punkt. Der mittlere Reifen gibt 2 Punkte und der hinterste Reifen gibt 3 Punkte. Alle Punkte werden summiert. Bei dieser Bahn sind viele Punkte gut. Die meisten Punkte gewinnen.",
    images: [
      { src: bahn13, caption: "Abschlag und Ziele" },
      { src: bahn13_michalsreifen, caption: "Micha als Beispielreifen" }
    ]
  }
];
