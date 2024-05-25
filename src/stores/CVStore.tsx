import { create } from "zustand";

export type CVentry = {
    title: string;
    date: string;
    description: string;
    picture: string;
    link: string;
    learnMore?: string;
  }
  export type Projectentry = {
    title: string;
    date: string;
    description: string;
    picture: string;
    link: string;
    learnMore?: string;
  }
  
type CVStore = {
    CVentries: CVentry[];
    ProjectEntries: Projectentry[];
}
  
const useCVStore = create<CVStore>(() => ({
    CVentries: [
       {
         title: "Student Software Developer bei WolfVision",
         date: "Juli 2023",
         description: "Sommerpraktikum im Software Development, Entwicklung einer HDMI-Switch-Matrix inklusive Website mit Vue3 und Backend mit ExpressJS. Außerdem programmierung des RaspberryPis zur Steuerung der HDMI Switches.",
         picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Wolfvision-logo.png/1200px-Wolfvision-logo.png",
         link: "https://wolfvision.com"
       },
       {
         title: "Facility Management Intern bei Omicron electronics",
         date: "Juli 2022",
         description: "Sommerpraktikum. Aufgaben bestanden aus: Verkabelung von Verteilern, Kabelverlegung, Verdrahten von Verlängerungskabeln, Lagerarbeiten, etc.",
         picture: "https://www.schoolgames.eu/media/omicron_logo.jpg",
         link:"https://www.omicronenergy.com"
       },
       {
         title: "Manufacturing Intern bei Graf Elektronik GmbH",
          date: "August 2021",
          description: "Sommerpraktikum. Aufgaben bestanden aus: Löten, Testung und zussammenbau von Baugruppen, etc. ",
          picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbL9w4iLpx_zTozKoDS1nQ9sDCHmDiNl94Z25DfbWvQ&s",
          link:"https://www.grafelektronik.com/"
        },
        {
          title: "Schüler der HTL Rankweil",
           date: "2019-2024",
           description: "Zweig Elektronik und Technische Informatik. Abschluss mit Matura 2024 Note: 2.6",
           picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/HTL_Rankweil_logo.png/250px-HTL_Rankweil_logo.png",
           link:"https://www.htl-rankweil.at/"
         },
      ],
    ProjectEntries: [
      {
        title: "Klimakammer",
        date: "Juli 2023 - Juni 2024",
        description: `Diplomarbeit der 5ten Klasse. 
        Entwicklung einer Klimakammer zur Simulation von Umweltbedingungen durch Steuerung der Parameter: Sonne, Regen, Wind, ...
        Meine Zuständigkeit war die Programmierung einer Website zur Steuerung der Klimakammer und die Kommunikation mit dem RaspberryPi.`,
        picture: "src/assets/Klimakammer.jpg",
        link: "https://github.com/Tee6/Diplomarbeit_Klimakammer"
      },
      {
        title: "Diese Website",
        date: "März 2024 - Juni 2024",
        description: `Privates Projekt. Entwicklung einer Website zur Präsentation meiner Projekte und meiner Person.
        Die Website wurde mit React und Typescript entwickelt und diente zur Übung des Umgangs mit React und Store Management mittels "Zustand".
        Das Design der Website wurde im vorhinein in Figma entworfen und soll den Stil des Glassmorphismus nachstellen.`,
        picture: "src/assets/React.png",
        link: "https://github.com/Tee6/HomePage",
        learnMore: "https://www.interaction-design.org/literature/topics/glassmorphism"
      },
      {
        title: "Leslie Speaker",
        date: "März 2023 - Juni 2023",
        description: `Projektarbeit der 4ten Klasse. Entwicklung eines Klasse AB Verstärkers welcher einen 8" Lautsprecher betreibt. Zusätzlich
        wird mittels eines BLDC Motos eine Klangführung bewegt, welche einen "Phaser" Effekt erzielt. Der Motortreiber wurde ebenfalls entwickelt
        und mit einem Arduino gesteuert. Zur Steuerung der Klangführung und des Verstärkers gibt zu den am selbstentwickelten Gehäuse befestigten Potentiometern und Knöpfen
        außerdem noch ein Fußschalter, mit dem die Geschwindigkeit der Klangführung geändert oder ausgeschaltet werden kann.`,
        picture: "src/assets/leslie.jpg",
        link: "https://github.com/Tee6/LeslieSpeaker"
      },
      {
        title: "Mini Powerbank",
        date: "Oktober 2022 - November 2022",
        description: `Projektarbeit der 4ten Klasse. Ziel des Projektes war es, eine Schaltung für eine Lade und Entlade-station für einzelne Li-Ion Zellen zu designen und umzusetzen.
        Dazu wurden verschiedene ICs zur Regelung des Ladestroms verwendet. Zum einen um tiefenentladung und überladung als auch um Kurzschluss und Überspannungen zu verhindern.
        Die Powerbank wird hauptsächlich für experimentelle Aufbauten verwendet. Dazu wurden Ausgangspins für jeweils 5V und 3.3V implementiert.`,
        picture: "src/assets/Minipowerbank.png",
        link: "https://github.com/Tee6/MiniPowerbank"
      },
      {
        title: "Gravify",
        date: "Februar 2022 - Juni 2022",
        description: `Projektarbeit der 3ten Klasse. Nachbau von Spotify bzw. eines MP3 Players mittels C# und WPF.
        Zu den Features gehören: Hinzufügen von Liedern, Erstellen und bearbeiten von Playlists,
        Abspielen von Liedern und Steuerung mittels 3 Tasten (Vorheriger Titel - Stop - Nächster Titel)`,
        picture: "src/assets/Gravify.png",
        link: "https://github.com/Tee6/Gravify"
      },
    ]
  }));
  export default useCVStore;