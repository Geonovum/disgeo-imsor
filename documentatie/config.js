//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie 
//-- Log . . . :  20191022 - GRK - Handreiking Archiveren ruimtelijke plannen v2.0      
//-------------------------------------------------------------------------------------

//-- Postprocessors -------------------------------------------------------------------

//-- haalt gh-pages weg aan het eind van een URL
//-- Stopt zodra de eerste is gevonden (want komt maar 1x voor)
//-- JvG 2019-11-12
function custGHPG(respecConfig)  
{
  var tags = document.getElementsByTagName("a");
  var srch = "gh-pages";
  var slen = srch.length;
  var i;

  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log(tags[i].href + " is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - slen);
      console.log(tags[i].href + " is aangepast");
      break;
    }
  } 
}

//-------------------------------------------------------------------------------------
var respecConfig = 
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "GN-BASIS",             // Basis Document
  //specStatus: "GN-WV",              // Werk Versie
  //specStatus: "GN-CV",              // Consultatie Versie
  //specStatus: "GN-VV",              // Vaststellings Versie
  //specStatus: "GN-DEF",             // Definitieve Versie
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                   // Standaard
  //specType: "IM",                   // Informatie Model
  //specType: "PR",                   // Praktijkrichtlijn
  //specType: "HR",                   // HandReiking
  //specType: "WA",                   // Werkafspraak
  //specType: "BD",                   // Beheer Documentatie
  //-- format is verplicht! -----------------------------------------------------------
  format: "markdown",                 // altijd "markdown" - JvG W3C aangepast, op 1 plek markdown aangeven    
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2019-10-08",  	    // Format is "YYYY-MM-DD"
  //-- Repositorynaam op GitHub -------------------------------------------------------
  github: "https://github.com/geonovum/disgeo-imsor",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/geonovum/disgeo-imsor/issues",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://geonovum.github.io/disgeo-imsor/documentatie",
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: 
 [
    {
      name:       "Linda van den Brink",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Gabriella Wiersma",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Dick Krijtenburg",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  authors: 
  [
    {
      name:       "Linda van den Brink",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Pano Maria",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Gabriella Wiersma",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
  ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "gendoc",  	              // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  pubDomain: "disgeo", 	              // Doorontwikkeling basisregistraties in samenhang
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
  //-- license: voor de geldende gebruiksvoorwaarden
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eesrt naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    "EMSO":
    {
      title:      "DiS Geo : Eisen aan model samenhangende objectenregistratie",
      href:       "https://docs.geostandaarden.nl/disgeo/emso/",
      status:     "Versie ter vaststelling",
      date:       "2021-02-16",
      publisher:  "Geonovum",
    },
    "MODPR":
      {
        title:      "Modelleerprincipes samenhangende objectenregistratie",
        href:       "https://geonovum.github.io/disgeo-imsor/modelleerprincipes/",
        status:     "levend document",
        publisher:  "Geonovum",
    },
    "NEN-2660-2":
      {
        title:      "Regels voor informatiemodellering van de gebouwde omgeving - Deel 2: Praktische configuratie, extensie en implementatie van deel 1",
        href:       "https://www.nen.nl/nen-2660-2-2021-ontw-nl-279908",
        status:     "Definitieve versie",
        publisher:  "NEN",
        date:       "1 april 2021",
    },
    "MIM": {
      title: "MIM - Metamodel Informatie Modellering",
      href: "https://docs.geostandaarden.nl/mim/mim/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2020-10-23"
    },
    "ISO-19131":
      {
        title:      "Geographic information — Data product specifications",
        href:       "https://www.iso.org/standard/36760.html",
        status:     "Published",
        publisher:  "ISO",
        date:       "2007-04",
    },
    "ISO-19110":
      {
        title:      "Geographic information — Methodology for feature cataloguing",
        href:       "https://www.iso.org/standard/57303.html",
        status:     "Published",
        publisher:  "ISO",
        date:       "2016-12",
    },
    "NL-profiel-ISO-19115":
      {
        title:      "Nederlands metadata profiel op ISO 19115 voor geografie",
        href:       "https://docs.geostandaarden.nl/md/mdprofiel-iso19115/",
        status:     "Definitief",
        publisher:  "Geonovum",
        date:       "30 juni 2020",
        version:    "2.1.0",
    },
    "DiSGeo-Arch":
    {
      title:      "DiS Geo: Architectuurbeschrijving Voorzieningen Samenhangende Objectenregistratie",
      href:       "https://docs.geostandaarden.nl/disgeo/arch/",
      status:     "Consultatieversie",
      date:       "2020-10-05",
      publisher:  "Geonovum",
    },
    "ISO-25012":
    {
      title:      "Software engineering — Software product Quality Requirements and Evaluation (SQuaRE) — Data quality model",
      href:       "https://www.iso.org/standard/35736.html",
      status:     "Published",
      date:       "2008-12",
      publisher:  "ISO/IEC",
    },
    "GML3.3":
    {
      title:      "OGC® Geography Markup Language (GML) - Extended schemas and encoding rules ",
      href:       "https://portal.ogc.org/files/?artifact_id=46568",
      status:     "International standard",
      date:       "2012 –02-07",
      publisher:  "ISO/IEC",
    },
    "NEN3610-2021-ontw": {
      title: "Basismodel geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      href: "https://www.nen.nl/nen-3610-2021-ontw-nl-287554",
      status: "Ontwerp",
      publisher: "NEN",
      date: "2021-10-01"
    },
  },
  postProcess:[custGHPG],   //-- Optioneel voor een multi document repository

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2018-09-18",  	    // Format is "YYY-MM-DD"
  //previousMaturity: "CV",                   // kies 1 van deze 2 regels  	  
  //previousMaturity: "VV",  	                // kies 1 van deze 2 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  maxTocLevel: 4,                             // Aantal niveau's ToC, default is 0
  //-- LOGO: Hier kan je een ander logo opgeven indien nodig
  //logos: [{
  //  src: "https://tools.geostandaarden.nl/respec/style/logos/OmgevingswetLogo.svg",
  //  alt: "Standaarden Omgevingswet",
  //  id: "TopLogo",
  //  height: 67,
  //  width: 300,
  //  url: "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD"
  // }],
};
