import bahn01_start from "@/assets/bahn01_start.jpg";
import bahn01_ziel from "@/assets/bahn01_ziel.jpg";
import bahn02_start from "@/assets/bahn02_start.jpg";
import bahn02_ziel from "@/assets/bahn02_ziel.jpg";
import bahn03_start from "@/assets/bahn03_start.jpg";
import bahn03_ziel from "@/assets/bahn03_ziel.jpg";
import bahn04_start from "@/assets/bahn04_start.jpg";
import bahn04_uebersicht_ziel from "@/assets/bahn04_uebersicht_ziel.jpg";
import bahn04_ziel from "@/assets/bahn04_ziel.jpg";
import bahn05_start from "@/assets/bahn05_start.jpg";
import bahn05_ziel from "@/assets/bahn05_ziel.jpg";
import bahn06_start from "@/assets/bahn06_start.jpg";
import bahn06_ziel from "@/assets/bahn06_ziel.jpg";
import bahn07_start from "@/assets/bahn07_start.jpg";
import bahn07_ziel from "@/assets/bahn07_ziel.jpg";
import bahn08_start from "@/assets/bahn08_start.jpg";
import bahn08_ziel from "@/assets/bahn08_ziel.jpg";
import bahn09_start from "@/assets/bahn09_start.jpg";
import bahn09_ziel from "@/assets/bahn09_ziel.jpg";

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
    game_mode: "Individuell",
    description: "Der Ball muss rechts um die Halle herumgespielt werden. Dort ist ein Hydrant, den es zu treffen gilt.",
    images: [
      { src: bahn01_start, caption: "Abschlag" },
      { src: bahn01_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 2,
    title: "Rampensau",
    game_mode: "Scramble",
    description: "Von der Rampe muss der Ball die Straße hoch gespielt werden. Hinter der rechten Halle ist ein Streusalzbehälter. Dieser muss getroffen werden. Bleibt er Ball drin liegen -1",
    images: [
      { src: bahn02_start, caption: "Abschlag" },
      { src: bahn02_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 3,
    title: "VAR: Das Tor zählt nicht!",
    game_mode: "Individuell",
    description: "Die Halle muss einmal bis zum Ende gespielt werden und der Ball MUSS durch die kleine Tür gespielt werden (die Rolltore zählen nicht). Hinter der Tür ist rechts das Ziel. Der Ball muss drinnen liegen bleiben.",
    images: [
      { src: bahn03_start, caption: "Abschlag" },
      { src: bahn03_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 4,
    title: "Hintertürchen",
    game_mode: "Scramble",
    description: "Der Ball muss durch die markierte Türe von hinten in den Raum links neben dem Start gespielt werden. Der Zielbereich ist hinter der 'Fußleiste'. Der Ball darf NICHT auf die Leiste hoch oder in den Zielbereich dahinter bessergelegt werden.",
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
    description: "Vom Start geht's die Straße entlang und hinter der Kurve ist ein Aussenkellertreppe zu einer Türe. Der Ball muss auf dem untersten Podest liegen.",
    images: [
      { src: bahn07_start, caption: "Abschlag" },
      { src: bahn07_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 8,
    title: "Conti Carl Allee",
    game_mode: "Individuell",
    description: "Vom Start geht bis zur vor den Tunnel. Rechts ist eine Platte. Der Ball muss in der auf der Fläche liegen bleiben.",
    images: [
      { src: bahn08_start, caption: "Abschlag" },
      { src: bahn08_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 9,
    title: "Tunnel of Love",
    game_mode: "Scramble",
    description: "In der Nähe des Einganstors ist der Start und der Ball muss durch den Tunnel gespielt werden. Dahinter links um die Ecke und auf der rechten Seite steht eine Bank. Die komplette Bank ist das Ziel.",
    images: [
      { src: bahn09_start, caption: "Abschlag" },
      { src: bahn09_ziel, caption: "Ziel" }
    ]
  },
  {
    id: 10,
    title: "Zicke Zacke Golf ist kacke",
    game_mode: "Scramble",
    description: "Vom Start geht's Richtung Halleneingang. Dort ist das Ziel. Es muss getroffen werden.",
    images: [
      { src: "/api/placeholder/800/600", caption: "Abschlag" },
      { src: "/api/placeholder/800/600", caption: "Ziel" }
    ]
  },
  {
    id: 11,
    title: "Karriereleiter",
    game_mode: "Scramble",
    description: "Vom Start geht es halblinks hinter die große 'Säule' auf deren Rückseite Türen sind. Die untere Türe gilt als getroffen, die obere linke Tür als -1",
    images: [
      { src: "/api/placeholder/800/600", caption: "Abschlag" },
      { src: "/api/placeholder/800/600", caption: "Ziel" }
    ]
  },
  {
    id: 12,
    title: "Stilles Örtchen",
    game_mode: "Scramble",
    description: "Am Ende der Halle geht es einmal quer von links nach rechts. In dem 'Häuschen' ist die Zielzone die getroffen werden muss. Der Ball muss auf der Fläche liegen bleiben.",
    images: [
      { src: "/api/placeholder/800/600", caption: "Abschlag" },
      { src: "/api/placeholder/800/600", caption: "Ziel" }
    ]
  },
  {
    id: 13,
    title: "Flipper",
    game_mode: "Individuell",
    description: "3 mal abschlagen. Das getroffene Ziel mit der niedrigsten Wertung wird als Score eingetragen.",
    images: [
      { src: "/api/placeholder/800/600", caption: "Abschlag" }
    ]
  }
];
