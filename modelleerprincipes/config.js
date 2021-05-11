//-- ==================================================================================
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Jan van Gelder 
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie 
//-------------------------------------------------------------------------------------

//-- ==================================================================================
var respecConfig = 
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "GN-WV",                // Werk Versie
  //specStatus: "GN-CV",              // Consultatie Versie
  //specStatus: "GN-VV",              // Vaststellings Versie
  //specStatus: "GN-DEF",             // Definitieve Versie
  //-- specType is verplicht! (activeer 1 van de volgende) ----------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                     // Standaard
  specType: "IM",                   // Informatie Model
  //specType: "PR",                   // Praktijk Richtlijn
  //specType: "HR",                   // Handreiking
  //specType: "WA",                   // Werkafspraak
  //specType: "US",                   // Uitwisselings standaard
  //specType: "PS",                   // Presentatie standaard
  //-- format is verplicht! -----------------------------------------------------------
  //format: "markdown",                 // altijd "markdown"     
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2020-05-14",  	      // Format is "YYY-MM-DD"
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  // editors: 
  // [
  //   {
  //     name:       "Linda van den Brink",
  //     company:    "Geonovum",
  //     companyURL: "https://www.geonovum.nl"
  //   }, 
  // ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  // authors: 
  // [
  //  {
  //     name:       "Gerard Trouborst",
  //     company:    "Geonovum",
  //     companyURL: "https://www.geonovum.nl"
  //   }, 
  //  ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "modelleerprincipes", 	            // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  //pubDomain: "cvgg", 	              // Informatiemodel Geluid
  //pubDomain: "mim", 	            // Metamodel Informatie Modellering
  //pubDomain: "bor", 	            // Beheer Openbare Ruimte
  //pubDomain: "bro", 	            // Basisregistratie Ondergrond
  //pubDomain: "imgeo", 	          // IMGeo / BGT
  //pubDomain: "kl", 	              // Kabels en Leidingen
  //pubDomain: "liv", 	            // Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md", 	              // Metadata
  //pubDomain: "nen3610", 	        // Basismodel NEN3610
  //pubDomain: "oov", 	            // Openbare Orde en Veiligheid
  //pubDomain: "ro", 	              // Ruimtelijke Ordening
  //pubDomain: "serv", 	            // Services
  //pubDomain: "visu", 	            // Visualisatie
  //pubDomain: "wp", 	              // White Paper
  //pubDomain: "disgeo", 	          // Doorontwikkeling basisregistraties in samenhang
  //-- Repositorynaam op GitHub -------------------------------------------------------
  github: "https://github.com/Geonovum/disgeo-imsor",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/Geonovum/disgeo-imsor/issues/",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://geonovum.github.io/disgeo-imsor/modelleerprincipes",
  //-- license: voor de geldende gebruiksvoorwaarden
  licence: "cc-by-nd",              //-- bronvermelding, geen afgeleide werken (default)
  // licence: "cc0",                //-- Public Domain Dedication
  // licence: "cc-by",              //-- Attribution, met bronvermelding
  
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    "CITAAT":
      {
        title:      "Titel van het Citaat",
        href:       "http://url van de publicatie",
        status:     "versie van de publicatie",
        publisher:  "naam van de publiceerder",
        company:    "eventueel naam van bedrijf",
    },
    MIM: {
      title: "MIM - Metamodel Informatie Modellering",
      href: "https://docs.geostandaarden.nl/mim/mim/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2020-10-23"
    },
    "NEN3610-2011":
    {
      title:      "NEN-3610 Basismodel geo-informatie",
      href:       "https://www.nen.nl/NEN-Shop/Norm/NEN-36102011-nl.htm",
      status:     "Definitief",
      date:       "Maart 2011",
      publisher:  "NEN",
    },
    "NEN3610-2021-ontw":
    {
      title:      "NEN-3610 Basismodel geo-informatie",
      status:     "Ontwerp",
      date:       "2021",
      publisher:  "NEN",
    },
    "NEN2660-1996":
    {
      title:      "Ordeningsregels voor gegevens in de bouw - Termen, definities en algemene regels",
      href:       "https://www.nen.nl/nen-2660-1996-nl-17920",
      status:     "Definitief",
      date:       "1996",
      publisher:  "NEN",
    },
    "NEN2660-1-2021-ontw":
    {
      title:      "Regels voor informatiemodellering van de gebouwde omgeving - Deel 1: Conceptuele modellen",
      href:       "https://normontwerpen.nen.nl/Home/Details/754",
      status:     "Normontwerp",
      date:       "6 april 2021",
      publisher:  "NEN",
    },
    "NEN2660-2-2021-ontw":
    {
      title:      "Regels voor informatiemodellering van de gebouwde omgeving - Deel 2: Praktische configuratie, extensie en implementatie van deel 1",
      href:       "https://normontwerpen.nen.nl/Home/Details/755",
      status:     "Normontwerp",
      date:       "6 april 2021",
      publisher:  "NEN",
    },
    "DiSGeo-Arch":
    {
      title:      "DiS Geo: Architectuurbeschrijving Voorzieningen Samenhangende Objectenregistratie",
      href:       "https://docs.geostandaarden.nl/disgeo/arch/",
      status:     "Consultatieversie",
      date:       "2020-10-05",
      publisher:  "Geonovum",
    },
    "EMSO":
    {
      title:      "DiS Geo : Eisen aan model samenhangende objectenregistratie",
      href:       "https://docs.geostandaarden.nl/disgeo/emso/",
      status:     "Versie ter vaststelling",
      date:       "2021-02-16",
      publisher:  "Geonovum",
    },
  },

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2020-05-14",    	    // Format is "YYYY-MM-DD"
  //previousMaturity: "GN-DEF",                 // kies 1 van deze 3 regels
  //previousMaturity: "CV",                   // kies 1 van deze 3 regels  	  
  //previousMaturity: "VV",  	                // kies 1 van deze 3 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  //maxTocLevel: 3,                           // Aantal niveau's ToC, default is 0
};
