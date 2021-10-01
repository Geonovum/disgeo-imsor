# Waardelijsten in geo-informatiemodellering
Dit document geeft een overzicht van hoe waardelijsten worden gemodelleerd in informatiemodellen in het geo-domein, zowel internationaal (in INSPIRE context) als nationaal (in IMGeo, dat conform NEN3610 is gemodelleerd). 

## ISO 19103: Geographic information - Conceptual schema language
Deze standaard is het fundament onder de modelleerwijze die wordt gevolgd in het geo-domein bij het maken van informatiemodellen. Denk hierbij onder andere aan de informatiemodellen van INSPIRE. In Nederland is NEN 3610 hier op gebaseerd, waar de Nederlandse sectormodellen in het geo-domein weer op zijn gebaseerd. Een voorbeeld hiervan is IMGeo, het informatiemodel voor de BGT.

We baseren ons op ISO 19103:2015. In ISO 19103 heb je twee modelelementen die je zou kunnen gebruiken voor waardelijsten: `Enumeration` en `Codelist`. 

### Enumeration
Binnen ISO 19103 is een Enumeration een

> list of valid mnemonic identifiers. Attributes of an enumerated type shall take values only from this list.
en 

> As the values of enumerated types are concepts, each value shall have a definition for the value.
> NOTE Values of enumerated types that have overlapping meanings or with some internal structure can be further described in separate tables outside of the UML model.

De toegestane waarden van een enumeratie zijn dus in de ISO 19103 beschouwing concepten, i.e. begrippen. 
- Zie ISO definitie van [concept](https://isotc211.geolexica.org/concepts/64/), [value](https://isotc211.geolexica.org/concepts/489/) en [value domain](https://isotc211.geolexica.org/concepts/490/).

Enumeraties worden cf ISO 19103 gedefineerd in UML als een klasse, waarbij de attributen de toegestane waarden representeren. Daarbij geldt de naamgevingsconventie voor attribuutnamen; de gegeven naam zou 'mnemonic' i.e. goed te herinneren moeten zijn of een naam die breed geaccepteerd is. 

Het wordt aangeraden om geen betekenisloze namen te gebruiken voor de waardelijst waarden, ook niet als de waardes buiten het model nader beschreven worden. Om de concepten begrijpelijk te maken wordt het wel aangeraden om labels en definities in natuurlijke taal aan het concept toe te voegen, ofwel in het UML model, ofwel daarbuiten.

Enumeraties zijn bedoeld voor het specificeren van een set waarden die volledig is. Dit kan gaan om inhoudelijke volledigheid, bv de zeven kleuren van de regenboog; maar ook een enumeratie die stabiel en onveranderlijk is binnen een versie van het model kun je als enumeratie opnemen. 

> If extensions to an enumerated list are expected during the lifetime of the schema version, a code list shall be used.

Als de enumeratie niet stabiel is, moet hiervoor een codelist gebruikt worden. 

### Code list

Een codelijst is binnen ISO 19103 niet meer dan een open enumeratie. 

> Code lists shall be used if none or only a few of the allowed values are known, like a likely set, or an initial set.

Het wordt aangeraden om de codelijst alleen uit te breiden, en in de uitbreiding niet de al aanwezige waarden te vervangen door de naam of definitie te veranderen. Het uitbreiden kan gebeuren door dezelfde beheerorganisatie die het informatiemodel beheert, maar ook door een andere organisatie of de gebruiker. Dit verschilt per codelijst. Als de hele codelijst inhoud door een externe organisatie wordt beheerd, kan hiernaar worden verwezen via een tagged value `codeList` die refereert naar de externe codelijst. In zo'n geval zijn alleen de waarden van die externe lijst geldige waarden.

Verder wordt aangeraden om een referentie naar de codelijst in de data op te nemen, bij die gegevens die een item uit een codelijst als waarde hebben. Dit helpt gebruikers om de data te interpreteren.

## INSPIRE

De meeste waardelijsten zijn in INSPIRE codelijsten, omdat ze uitgebreid mogen worden door de lidstaten. Alleen als een lijst duidelijk uitputtend is, wordt een enumeratie gebruikt. 

Een waardelijst kan in INSPIRE een eenvoudige set van waarden zijn, maar ook een collectie van waarden met een interne, bijvoorbeeld hiërarchische structuur. In beide gevallen wordt een codelijst gebruikt. 

### Model
In het UML model van elk INSPIRE thema worden de codelijsten gedefinieerd. Ze hebben een naam, definitie en soms ook waardes; maar alle INSPIRE codelijsten worden extern beheerd. In het UML model wordt de URN van de codelijst vastgelegd zodat deze extern beheerde bron bekend is. Dit kan zowel een geversioneerde als een versieloze verwijzing zijn. Waardes worden eventueel (niet altijd) in het UML model bij de codelijst opgenomen, ter ondersteuning voor de lezer.  

Elke waarde heeft een begrijpelijke naam in lowercamelcase en een definitie in het Engels binnen het UML model. 

### Codelijst register
INSPIRE heeft een [codelijst register](https://inspire.ec.europa.eu/codelist) waarin alle codelijsten en hun waarden zijn opgenomen. Elke codelijst, en elke waarde heeft een eigen URI Identifier. De namen en defininities zijn meestal in meerdere talen beschikbaar. Waarden kunnen een hierarchische relatie hebben met een andere waarde.

### Implementatie in GML
Binnen INSPIRE wordt GML gebruikt voor de uitwisseling van gegevens. Uit de UML modellen zijn GML Application Schemas gegenereerd.

In de INSPIRE GML implementatie wordt een gegeven dat als waardetype een codelijst heeft, geïmplementeerd als een XML element van het type `gml:ReferenceType`. 

De GML standaard definieert dit type met als reden:
> In order to support the encoding of properties whose value is provided remotely by-reference

In GML is dit type zo gedefinieerd dat je de waarde moet opnemen als hyperlink, waarbij gebruik gemaakt wordt van de Xlink standaard van het W3C. De waarde van het `xlink:href` attribuut wordt gevuld met een HTTP URI, die verwijst naar het INSPIRE codelist register.

Een voorbeeld van INSPIRE GML data met een codelijst waarde: 

`au:nationalLevel` is in dit voorbeeld een gegeven van een instantie van  `AdministrativeUnit`, vergelijkbaar met het NEN3610 concept Registratief Gebied. Het gaat hier om de administratieve eenheid Nederland. 

`
<au:nationalLevel xlink:href="http://inspire.ec.europa.eu/codelist/AdministrativeHierarchyLevel/1stOrder" xlink:title="1stOrder"></au:nationalLevel>`

Meer lezen: [WeTransform blog over INSIPRE Codelists](https://www.wetransform.to/news/2021/07/26/INSPIRE-codelists/).

## IMGeo