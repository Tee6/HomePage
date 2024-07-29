import { create } from "zustand";
import Gravify from '../assets/Gravify.png';
import Leslie from '../assets/Leslie.jpg';
import MiniPowerbank from '../assets/Minipowerbank.png';
import Klimakammer from '../assets/Klimakammer.jpg';
import ReactLogo from '../assets/React.png';
import expressJSLogo from '../assets/expressjs.png';
import csharpLogo from '../assets/csharp.png';
import arduinoLogo from '../assets/Arduino_Logo.png'
import cLogo from '../assets/CLogo.png'
import FlopodoroLogo from '../assets/flopodoro.png'

import {
  faFigma,
  faGitAlt,
  faJs,
  faPython,
  faRaspberryPi,
  faReact,
  faVuejs,
  IconDefinition,
  faHtml5
} from "@fortawesome/free-brands-svg-icons";

export type CVentry = {
    id: number;
    title: string;
    date: string;
    description: string;
    picture: string;
    link: string;
    learnMore?: string;
  }
  export type Projectentry = {
    id: number;
    title: string;
    date: string;
    description: string;
    picture: string;
    link: string;
    learnMore?: string;
  }
  export type Skillentry = {
    id: number;
    title: string;
    description: string;
    icon: IconDefinition | string;
    level: number;
  }
  
type CVStore = {
    CVentries: CVentry[];
    ProjectEntries: Projectentry[];
    SkillEntries: Skillentry[];
}
  
const useCVStore = create<CVStore>(() => ({
    CVentries: [
       {
        id: 1,
         title: "Student Software Developer bei WolfVision",
         date: "Juli 2023",
         description: "Sommerpraktikum im Software Development, Entwicklung einer HDMI-Switch-Matrix inklusive Website mit Vue3 und Backend mit ExpressJS. Außerdem programmierung des RaspberryPis zur Steuerung der HDMI Switches.",
         picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Wolfvision-logo.png/1200px-Wolfvision-logo.png",
         link: "https://wolfvision.com"
       },
       {
        id: 2,
         title: "Facility Management Intern bei Omicron electronics",
         date: "Juli 2022",
         description: "Sommerpraktikum. Aufgaben bestanden aus: Verkabelung von Verteilern, Kabelverlegung, Verdrahten von Verlängerungskabeln, Lagerarbeiten, etc.",
         picture: "https://www.schoolgames.eu/media/omicron_logo.jpg",
         link:"https://www.omicronenergy.com"
       },
       {
        id: 3,
         title: "Manufacturing Intern bei Graf Elektronik GmbH",
          date: "August 2021",
          description: "Sommerpraktikum. Aufgaben bestanden aus: Löten, Testung und zussammenbau von Baugruppen, etc. ",
          picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbL9w4iLpx_zTozKoDS1nQ9sDCHmDiNl94Z25DfbWvQ&s",
          link:"https://www.grafelektronik.com/"
        },
        {
          id: 4,
          title: "Schüler der HTL Rankweil",
           date: "2019-2024",
           description: "Zweig Elektronik und Technische Informatik. Abschluss mit Matura 2024 Note: 2.6",
           picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/HTL_Rankweil_logo.png/250px-HTL_Rankweil_logo.png",
           link:"https://www.htl-rankweil.at/"
         },
      ],
    ProjectEntries: [
      {
        id: 0,
        title: "Flopodoro",
        date: "Juni 2024 - Juli 2024",
        description: `Privates Projekt.
         Entwicklung eines Pomodoro Timers mit zusätzlicher Stoppuhrfunktion für die Arbeit und Schule. 
         Flopodoro wurde als Desktop App mit Electron und Vue realisiert. Die App kann einfach über mein Github heruntergeladen werden.`,
        picture: FlopodoroLogo,
        link: "https://github.com/Tee6/Flopodoro"
      },
      {
        id: 1,
        title: "Klimakammer",
        date: "Juli 2023 - Juni 2024",
        description: `Diplomarbeit der 5ten Klasse. 
        Entwicklung einer Klimakammer zur Simulation von Umweltbedingungen durch Steuerung der Parameter: Sonne, Regen, Wind, ...
        Meine Zuständigkeit war die Programmierung einer Website zur Steuerung der Klimakammer und die Kommunikation mit dem RaspberryPi.`,
        picture: Klimakammer,
        link: "https://github.com/Tee6/Diplomarbeit_Klimakammer"
      },
      {
        id: 2,
        title: "Diese Website",
        date: "März 2024 - Juni 2024",
        description: `Privates Projekt. Entwicklung einer Website zur Präsentation meiner Projekte und meiner Person.
        Die Website wurde mit React und Typescript entwickelt und diente zur Übung des Umgangs mit React und Store Management mittels "Zustand".
        Das Design der Website wurde im vorhinein in Figma entworfen und soll den Stil des Glassmorphismus nachstellen.`,
        picture: ReactLogo,
        link: "https://github.com/Tee6/HomePage",
        learnMore: "https://www.interaction-design.org/literature/topics/glassmorphism"
      },
      {
        id: 3,
        title: "Leslie Speaker",
        date: "März 2023 - Juni 2023",
        description: `Projektarbeit der 4ten Klasse. Entwicklung eines Klasse AB Verstärkers welcher einen 8" Lautsprecher betreibt. Zusätzlich
        wird mittels eines BLDC Motos eine Klangführung bewegt, welche einen "Phaser" Effekt erzielt. Der Motortreiber wurde ebenfalls entwickelt
        und mit einem Arduino gesteuert. Zur Steuerung der Klangführung und des Verstärkers gibt zu den am selbstentwickelten Gehäuse befestigten Potentiometern und Knöpfen
        außerdem noch ein Fußschalter, mit dem die Geschwindigkeit der Klangführung geändert oder ausgeschaltet werden kann.`,
        picture: Leslie,
        link: "https://github.com/Tee6/LeslieSpeaker"
      },
      {
        id: 4,
        title: "Mini Powerbank",
        date: "Oktober 2022 - November 2022",
        description: `Projektarbeit der 4ten Klasse. Ziel des Projektes war es, eine Schaltung für eine Lade und Entlade-station für einzelne Li-Ion Zellen zu designen und umzusetzen.
        Dazu wurden verschiedene ICs zur Regelung des Ladestroms verwendet. Zum einen um tiefenentladung und überladung als auch um Kurzschluss und Überspannungen zu verhindern.
        Die Powerbank wird hauptsächlich für experimentelle Aufbauten verwendet. Dazu wurden Ausgangspins für jeweils 5V und 3.3V implementiert.`,
        picture: MiniPowerbank,
        link: "https://github.com/Tee6/MiniPowerbank"
      },
      {
        id: 5,
        title: "Gravify",
        date: "Februar 2022 - Juni 2022",
        description: `Projektarbeit der 3ten Klasse. Nachbau von Spotify bzw. eines MP3 Players mittels C# und WPF.
        Zu den Features gehören: Hinzufügen von Liedern, Erstellen und bearbeiten von Playlists,
        Abspielen von Liedern und Steuerung mittels 3 Tasten (Vorheriger Titel - Stop - Nächster Titel)`,
        picture: Gravify,
        link: "https://github.com/Tee6/Gravify"
      },
    ],
    SkillEntries: [
      {
        id: 1,
        title: "React",
        description: `Mit dieser Website sammelte ich Erfahrung mit React und Zustand.`,
        icon: faReact,
        level: 4
      },
      {
        id: 2,
        title: "Vue",
        description: `Durch mein Praktikum bei WolfVision und anschließender Diplomarbeit sammelte ich wichtige Erfahrung mit Vue3 und Pinia.`,
        icon: faVuejs,
        level: 4
      },
      {
        id: 3,
        title: "Python",
        description: `Durch RaspberryPI programmierung und das Wahlpflichtfach "KI" habe ich einige Projekte mit Python entwickelt.`,
        icon: faPython,
        level: 4
      },
      {
        id: 4,
        title: "C#",
        description: `Durch die Entwicklung von Gravify sammelte ich Erfahrung mit C# und WPF.`,
        icon: csharpLogo,
        level: 4
      },
      {
        id: 5,
        title: "HTML/CSS/JS",
        description: `Durch die Entwicklung mehrerer Websites und dem CodeBaseCamp sammelte ich Erfahrung mit HTML, CSS und JS.`,
        icon: faHtml5,
        level: 4
      },
      {
        id: 6,
        title: "ExpressJS",
        description: `Durch mein Praktikum bei WolfVision sammelte ich Erfahrung mit ExpressJS.`,
        icon: expressJSLogo,
        level: 4
      },
      {
        id: 7,
        title: "Git",
        description: `Durch die Entwicklung dieser Website und die Arbeit an meinen Projekten sammelte ich Erfahrung mit Git.`,
        icon: faGitAlt,
        level: 4
      },
      {
        id: 8,
        title: "Figma",
        description: `Zur Entwicklung dieser Website habe ich das Design im vorhinein in Figma entworfen.`,
        icon: faFigma,
        level: 4
      },
      {
        id: 9,
        title: "Javascript/Typescript",
        description: `Zur Entwicklung dieser Website, der Steuerwebsite meiner Diplomarbeit und des HDMI Switches habe ich Typescript verwendet.`,
        icon: faJs,
        level: 4
      },
      {
        id: 10,
        title: "Arduino",
        description: `Durch die Entwicklung des Leslie Speakers sammelte ich Erfahrung mit Arduino.`,
        icon: arduinoLogo,
        level: 4
      },
      {
        id: 11,
        title: "RaspberryPi",
        description: `Eingesetzt in Projekten wie der Klimakammer, dem HDMI Switch bei WolfVision und Smart Mirror`,
        icon: faRaspberryPi,
        level: 4
      },
      {
        id: 12,
        title: "C",
        description: `Erfahrung durch Projekte wie den Leslie Speaker und den Digitaltechnik Unterricht in der HTL `,
        icon: cLogo,
        level: 4
      }
    ]
  }));
  export default useCVStore;