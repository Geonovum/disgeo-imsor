# Verslag 6e expertgroepbijeenkomst 
11 februari 2021

## Agenda: 
- de beoordeling van de [casus-uitwerkingen]https://geonovum.github.io/disgeo-imsor/casus/imboom/) adhv criteria bespreken. 

Aanwezig: Dick, Linda, Paul, Lennart, Annemiek, Gabriella, Rik, Karin, Michel, Niels, Pano, Ruud

# Gedetailleerde aantekeningen van het gesprek
- Linda: introduceert de meeting. Vandaag gaan we het hebben over de beoordeling van de uitwerkingen in het kader van [issue 14][1], het modelleren van metagegevens en historie op attribuutniveau. We hebben geprobeerd de beoordelingen (in totaal 7) samen te voegen. Echter bleek dit soms lastig te zijn, aangezien een aantal antwoorden afweken van het voorgestelde format (ja/nee). Wanneer het lastig was om een antwoord als eenduidige ja/nee te interpreteren, hebben we gezegd dat het “neutraal” was. Per criteria zullen we nu de scores en opmerkingen met betrekking tot de uitwerkingen langsgaan.  

**Criterium 1: Dekt de uitwerking de functionele use cases af?**

- Linda: Er waren geen grote afwijkingen in de antwoorden, iedereen stemde op dezelfde manier. Om deze reden is dit criterium niet echt onderscheidend. 

**Criterium 2: Is de uitwerking “by convention” gemodelleerd die niet gestandaardiseerd is?**
Er ontstaat verwarring over de term “by convention”, men interpreteert dit op verschillende manieren.  

- Paul: Als je een MIM extensie maakt om nieuwe constructen op te nemen, dan is het antwoord op dit criterium dus een “ja”.
-Michel:[mbt scores van uitwerking B] Nog over MIM-RDF mappings, je kunt het direct doen (zoals via MIM mogelijk is), of je kunt een complexere mapping maken waarin je gaat nadenken over hoe je die klassen/entiteiten eigenlijk vertaalt (bijvoorbeeld, misschien moet je wel reificatie toepassen). 
- Lennart: [mbt scores van uitwerking C] De object kenmerken zijn duidelijk, de metadata kenmerken zijn duidelijk, maar de binding tussen object-metadata vind ik onduidelijker (deze laatste is dan wel “by convention”, het is ook niet iets wat je zomaar kunt overslaan aangezien je dan de link tussen object en metadata mist). 
- Paul: Maar Pano, waarom vindt je dit niet by convention [uitwerking C]?
- Pano: Want in het metamodel [van uitwerking A] leg je die relaties wel uit.
- Paul: [mbt opmerking bij uitwerking D, over de toepassing van het MIM stereotype Gegevensgroeptype] Gegevensgroeptype is simpelweg een setje gegevens dat bij elkaar hoort.
- Linda: Maar als je MIM leest dan staat er bij dat die gegevensgroep de attributen van een object bevatten - zonder te onderscheiden dat het om metadata gaat. 
- Paul: Elk attribuut heeft niet meer een waarde, maar een setje gegevens die elk een waarde hebben (je maakt van je attribuutwaarde een gegevensgroeptype).
- Lennart: Eigenlijk is dit een variatie van uitwerking A, alleen gebruik je daar andere stereotypes voor.
- Paul: Nee, in uitwerking A is de binding “by convention”.

Uitwerking A/D  gebruiken dus bijna een soort objectificatie. Uitwerking D is alleen geen objectificatie omdat je er niet naar kan refereren, het is eigenlijk een soort classificatie.

- Niels: bij uitwerking D is de relatie tussen objectgegevens-metadata eigenlijk impliciet, bij A is het juist expliciet (Paul kijkt daar weer anders naar, vanuit de UML view).
- Michel: Uitwerking A volgt objectificatie/classificatie scheiding net zoals bij de NTA8035 nu wordt gedaan. En eigenlijk hebben we objectificatie in de NTA alleen toegepast omdat we niet tevreden waren over reificatie. Maar met RDF* veranderd dit, en dan zou ik geneigd zijn om uitwerking A of D toe te passen.

- Niels: als je de MIM principes geïnternaliseerd hebt, dan is de semantiek in uitwerking C en D goed te begrijpen. Echter wanneer je met een “algemenere” bril er naar kijkt, dan mis je bij die uitwerkingen juist de expliciete relaties.
- Michel: Als je de mogelijkheid om “meta-statements” te maken toevoegt aan MIM, kun je al deze model varianten als bindings van MIM zien - je kunt ze dan allemaal uitwerken. 

**Criterium 3: Is de uitwerking standaard te serialiseren, out of te box?**
Dit is ook een lastig criterium, de meningen verschillen. Daarnaast ontstaat er weer discussie over de betekenis van de term “out of the box”(hebben we het over een standaard encoding zonder MIM regels, of gaat het om MIM - inclusief uitbreidingen?)

- Michel: Ik heb hier “nee” als antwoord gegeven [voor alle uitwerkingen], omdat MIM nu niet een meta-statement construct heeft. Daardoor kan ik niet direct zeggen wanneer ik iets met RDF* vertaal, in het kort: er zijn hier nog encodings voor nodig. 
- Linda: Dit was inderdaad een lastige vraag, omdat MIM geen encoding rules specificeert.
- Lennart: Marco heeft dit wel gedaan, in de bijlage [van MIM, en in Imvertor zijn er wel allerlei regels voor. Uiteraard zou je dit nog verder kunnen formaliseren. Je kunt de uitwerkingen in principe allemaal serialiseren zonder problemen, maar als je het gaat inladen naar databases met standaard tools, dan krijg je te maken met interpretatie verschillen (en mogelijk data-verlies). 
- Pano: Wel is dit een implementatie issue, en als je zorgt dat er MIM uitbreidingen zijn hoort dit niet tot problemen te leiden (MIM+uitbreidingen in applicatie schema vertalen dan). 
- Paul: Maar bij UML-to-GML vertalingen begrijpen veel implementaties/standaard tooling het ook gewoon niet. Het is niet dat het niet kan, maar het kost werk/overtuiging om het goed voor elkaar te krijgen. Uit deze discussie kun je ook een belangrijk principe afleiden: hoe minder je veranderd, hoe beter.

- Lennart: Nog een belangrijk aandachtspunt is dat metadata niet lekker zit in meeste standaarden. Want als UML goede metadata support had, was het makkelijker. Als ik hier [van de model varianten] een schema van uitwerk, kan ik het verschil tussen data/metadata attributen nog zien? 
- Pano/Michel: Door MIM te gebruiken zou je dit verschil altijd kunnen zien, zonder MIM niet - maar dan is de enige applicatieschema encoding die metadata onderscheiding ondersteund RDF Schema. JSON/XML schema ondersteunen niet van nature data/metadata tags (het wordt “by convention” gedaan). 

- Paul: Wat moeilijk is, is om de binding te realiseren in je serialisatie
- Michel: Je wil zo weinig mogelijk toevoegen (net zoals Paul eerder zei), door dingen met taalelementen en taalconstructies op te lossen - en je wil zo min mogelijk modelleren. Dus dan is het alternatief dat je zo'n modelleerconstruct in MIM vastlegt, dan heb je het in ieder geval netjes conceptueel gemodelleerd - dan moet je alleen oppassen dat je die relaties niet in je taalbindingen verliest. Het is eigenlijk jammer dat er zo weinig talen zijn die goede metadata modellering/onderscheiding ondersteunen. 

- Linda: Het probleem, wat betreft de serialisatie [van uitwerking D] is dat je informatie verliest (en dus ook het onderscheid tussen metadata en objecttypes) wanneer je een roundtrip vertaling doet. 
- Lennart: Maar herinner dat als je een semantisch rijke taal gebruikt, je altijd informatie verliest in de serialisatie. 
- Michel: Simpele datatypes zijn wel gestandaardiseerd in de serialisaties, maar complexe datatypes niet - dus je weet niet wanneer iets een metadata element is, object, etc. 

**Criterium 4: Verandert de uitwerking iets aan het objectendeel van het conceptuele informatiemodel?**
De definitie van de vraag is niet helemaal duidelijk, uit de opmerkingen [voor uitwerking B] komt naar voren dat de vraag anders geïnterpreteerd wordt afhankelijk van de aspecten die men in acht neemt.

- Michel: Bij uitwerking D heb je dus 2 modellen nodig, wat niet ideaal is want dan moet je dubbel bijhouden (hetzelfde gebeurt met RDF* nu, er is geen harde logica tussen RDF/RDF*, dus je moet het zelf vertalen).

**Criterium 5: Is er redundantie in de gegevens?**

- Michel: Ik heb het ook als redundantie geïnterpreteerd wanneer we meerdere modellen bijhouden (wat het geval is bij uitwerking D)
- Niels: Ik heb redundantie ook gezien als redundantie in de bindings van het model (wat het geval is bij uitwerking C en D); en in de serialisatie. 

**Criterium 6: Is er een hoge mate van complexiteit in de oplossing?**

- Michel: Ik zie uitwerking A als minder complex omdat je in RDF* ook gebruik maakt van die metadata gegevens, dus die complexiteit “sla je eruit”. 
- Paul: Bij uitwerking C moet je wel zorgen dat je bij het creëren van de bindings de attributen koppelt aan de juiste metadata-gegevens. 
- Pano: Ja, je moet wel goed kijken naar de bindings - in RDF heb je URLs, in UML heb je zoiets niet (in uitwerking A is zo'n 'binding' relatie daarom ook netjes uitgewerkt). 

**Criterium 7: Zijn de gegevens ook te gebruiken zónder metadata voor de grote groep gebruikers die dat voldoende vinden?**
- Linda: Net zoals criterium 1, is dit criterium niet echt onderscheidend. 

**Criterium 8: Is de uitwerking vooral geschikt voor registratie, of geschikt voor uitleveren?**

- Michel: Ik leg nu de link met wat we eerder zeiden - raak je data kwijt bij opslag? 
- Pano: Volgens mij is dit niet het geval voor de modellen, je kunt altijd optimalisaties toepassen voor opslag/uitwisseling. 
- Paul: Ik interpreteerde het als: is het geschikt voor aanleveren (van bronhouder naar centrale voorziening) en uitleveren (van voorziening naar de afnemers).

- Linda: Voor de totaalscores hebben we geen gewichten toegekend aan de criteria, dit willen we nu samen doen. Ieder persoon kan 3 criteria kiezen die hij/zij belangrijk acht, dit wordt direct ingevuld in een spreadsheet en de gewogen scores worden automatisch berekend.

**De voorkeur gaat uit naar: uitwerking C** 

## Acties

## Criteria

De volgende criteria/aandachtspunten (voor toekomstige beoordelingen) zijn tijdens de sessie benoemd:

1. Hoe minder veranderd, hoe beter
2. Is de data die je met elkaar uitwisselt, eenduidig te interpreteren?
3. Kan data-verlies eenvoudig vermeden worden? (te testen middels roundtripping, bijvoorbeeld) 

[1]: https://github.com/Geonovum/disgeo-imsor/issues/14

