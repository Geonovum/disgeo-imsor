## Waardelijsten

Zie 
- de uitwerking in https://github.com/Geonovum/disgeo-imsor/tree/master/issues/19-waardelijsten
- https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/2021103-disgeo-expertgroep-waardelijsten.pdf
- https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/03-11-2021-expertgroepvergadering-waardelijsten-imsor.pdf


Het modelleren van waardelijsten lijkt op het eerste gezicht eenvoudig: je maakt een lijst van waarden en definieert in het informatiemodel dat deze lijst van toegestane waarden het domein is van een kenmerk. Maar er zijn vele keuzes te maken. In MIM zijn er bijvoorbeeld drie verschillende manieren om een waardelijst te modelleren. Er is vaak, mogelijk ook in de SOR, de wens om een hiërarchie in de waarden aan te brengen. Sommigen willen in een begrippenkader gedefinieerde begrippen als waarde hergebruiken, anderen juist niet. En dan zijn er nog vragen rondom beheer, zoals: zijn de waardelijsten onderdeel van hetzelfde beheerregime als het informatiemodel, of kunnen ze wijzigen zonder dat het informatiemodel wijzigt? Is de beheerder van het informatiemodel ook de beheerder van de waardelijst?

### Waardelijsten in geo-informatiemodellering

We zijn gestart met een inventarisatie van de modelleerwijze van waardelijsten in informatiemodellen in het geo-domein, zowel internationaal (in ISO en in INSPIRE context) als nationaal (in IMGeo, dat conform NEN3610 is gemodelleerd). 

#### ISO 19103: Geographic information - Conceptual schema language
Deze standaard is het fundament onder de modelleerwijze die wordt gevolgd in het geo-domein bij het maken van informatiemodellen. Denk hierbij onder andere aan de informatiemodellen van INSPIRE. In Nederland is NEN 3610 hier op gebaseerd, waar de Nederlandse sectormodellen in het geo-domein weer op zijn gebaseerd. Een voorbeeld hiervan is IMGeo, het informatiemodel voor de BGT.

We baseren ons op ISO 19103:2015 [[iso-19103-2015]]. In deze standaard heb je twee modelelementen die je zou kunnen gebruiken voor waardelijsten: `Enumeration` en `Codelist`. 

**Enumeration**

Binnen ISO 19103 is een Enumeration een:

> list of valid mnemonic identifiers. Attributes of an enumerated type shall take values only from this list.

Bovendien wordt gezegd: 

> As the values of enumerated types are concepts, each value shall have a definition for the value.<br/>
> NOTE Values of enumerated types that have overlapping meanings or with some internal structure can be further described in separate tables outside of the UML model.

De toegestane waarden van een enumeratie zijn dus in de ISO 19103 beschouwing concepten, i.e. begrippen. 
- Zie ISO definitie van [concept](https://isotc211.geolexica.org/concepts/64/), [value](https://isotc211.geolexica.org/concepts/489/) en [value domain](https://isotc211.geolexica.org/concepts/490/).

Enumeraties worden cf ISO 19103 gedefineerd in UML als een klasse, waarbij de attributen de toegestane waarden representeren. Daarbij geldt de naamgevingsconventie voor attribuutnamen; de gegeven naam zou 'mnemonic' i.e. goed te herinneren moeten zijn of een naam die breed geaccepteerd is. 

Het wordt aangeraden om geen betekenisloze namen te gebruiken voor de waardelijst waarden, ook niet als de waardes buiten het model nader beschreven worden. Om de concepten begrijpelijk te maken wordt het wel aangeraden om labels en definities in natuurlijke taal aan het concept toe te voegen, ofwel in het UML model, ofwel daarbuiten.

Enumeraties zijn bedoeld voor het specificeren van een set waarden die volledig is. Dit kan gaan om inhoudelijke volledigheid, bv de zeven kleuren van de regenboog; maar ook een enumeratie die stabiel en onveranderlijk is binnen een versie van het model kun je als enumeratie opnemen. 

> If extensions to an enumerated list are expected during the lifetime of the schema version, a code list shall be used.

Als de enumeratie niet stabiel is, moet hiervoor een codelist gebruikt worden. Iets als de MIM Referentielijst kent ISO 19103 niet.

**Code list**

Een codelijst is binnen ISO 19103 niet meer dan een open enumeratie. 

> Code lists shall be used if none or only a few of the allowed values are known, like a likely set, or an initial set.

Het wordt aangeraden om de codelijst alleen uit te breiden, en in de uitbreiding niet de al aanwezige waarden te vervangen door de naam of definitie te veranderen. Het uitbreiden kan gebeuren door dezelfde beheerorganisatie die het informatiemodel beheert, maar ook door een andere organisatie of de gebruiker. Dit verschilt per codelijst. Als de hele codelijst inhoud door een externe organisatie wordt beheerd, kan hiernaar worden verwezen via een tagged value `codeList` die refereert naar de externe codelijst. In zo'n geval zijn alleen de waarden van die externe lijst geldige waarden.

Verder wordt aangeraden om een referentie naar de codelijst in de data op te nemen, bij die gegevens die een item uit een codelijst als waarde hebben. Dit helpt gebruikers om de data te interpreteren.

####  INSPIRE

De meeste waardelijsten zijn in INSPIRE codelijsten (zoals bedoeld in ISO 19103), omdat ze uitgebreid mogen worden door de lidstaten. Alleen als een lijst duidelijk uitputtend is, wordt een enumeratie gebruikt. 

Een waardelijst kan in INSPIRE een eenvoudige set van waarden zijn, maar ook een collectie van waarden met een interne, bijvoorbeeld hiërarchische structuur. In beide gevallen wordt een codelijst gebruikt. 

**Model**

In het UML model van elk INSPIRE thema worden de codelijsten gedefinieerd. Ze hebben een naam, definitie en soms ook waardes; maar alle INSPIRE codelijsten worden extern beheerd. In het UML model wordt de URN van de codelijst vastgelegd zodat deze extern beheerde bron bekend is. Dit kan zowel een geversioneerde als een versieloze verwijzing zijn. Waardes worden eventueel (niet altijd) in het UML model bij de codelijst opgenomen, ter ondersteuning voor de lezer.  

**Codelijst register**

INSPIRE heeft een [codelijst register](https://inspire.ec.europa.eu/codelist) waarin alle codelijsten en hun waarden zijn opgenomen. Elke codelijst, en elke waarde heeft een eigen URI Identifier. De namen en definities van de waarden zijn meestal in meerdere talen beschikbaar. Waarden kunnen een hiërarchische relatie hebben met een andere waarde.

Dit register heeft een beheeromgeving. De codelijsten worden hierin beheerd, niet in de UML modellen. Wijzigingen kunnen worden voorgesteld door de lidstaten en worden beoordeeld op impact voordat ze eventueel worden doorgevoerd, na toestemming van vertegenwoordigers van elke lidstaat.

**Implementatie in GML**

Binnen INSPIRE wordt GML gebruikt voor de uitwisseling van gegevens. Uit de UML modellen zijn GML Application Schemas gegenereerd.

In de INSPIRE GML implementatie wordt een gegeven dat als waardetype een codelijst heeft, geïmplementeerd als een XML element van het type `gml:ReferenceType`. 

De GML standaard definieert dit type met als reden:
> In order to support the encoding of properties whose value is provided remotely by-reference

In GML is dit type zo gedefinieerd dat je de waarde moet opnemen als hyperlink, waarbij gebruik gemaakt wordt van de Xlink standaard van het W3C. De waarde van het `xlink:href` attribuut wordt gevuld met een HTTP URI, die verwijst naar het INSPIRE codelist register.

Een voorbeeld van INSPIRE GML data met een codelijst waarde: 

`au:nationalLevel` is in dit voorbeeld een gegeven van een instantie van  `AdministrativeUnit`, vergelijkbaar met het NEN3610 concept Registratief Gebied. Het gaat hier om de administratieve eenheid Nederland. 

<pre>
&lt;au:nationalLevel 
        xlink:href="http://inspire.ec.europa.eu/codelist/AdministrativeHierarchyLevel/1stOrder" 
        xlink:title="1stOrder">
&lt;/au:nationalLevel>
</pre>

Meer lezen: [WeTransform blog over INSPIRE Codelists](https://www.wetransform.to/news/2021/07/26/INSPIRE-codelists/).

####  IMGeo

Het IMGeo informatiemodel is ontwikkeld in 2010 - 2012 voordat MIM bestond en toen INSPIRE nog niet zo ver ontwikkeld was. De werkwijze wijkt daarom op details iets af. 

**Model**

In het UML model van IMGeo worden alle waardelijsten als codelist gedefinieerd. De waarden zijn IN het model gedefiniëerd, omdat het belangrijk was om de waardelijsten onder hetzelfde beheer regime te hebben als de rest van het informatiemodel. Als een waardelijst waarde wijzigt, betekent dit een wijziging van het informatiemodel en dus een nieuwe versie van de IMGeo standaard. Ook omdat er toen nog geen goede tooling voorhanden was om waardelijsten buiten het model te beheren, en ze niet erg omvangrijk waren, is ervoor gekozen ze onderdeel van het UML model te maken. 

**Implementatie in GML**

Uit het informatiemodel wordt een GML Application schema gegenereerd plus een bestand in RDF-XML serialisatie dat alle waardelijsten en -waardes bevat, uitgedrukt in de SKOS [[skos-reference]] vocabulaire. Deze SKOS waardelijsten zijn [gepubliceerd](https://register.geostandaarden.nl/waardelijst/imgeo/20140401/) in het [technisch register van Geonovum](https://register.geostandaarden.nl). 

Er is voor SKOS gekozen omdat de OGC GML werkgroep rond die tijd had bepaald dat externe waardelijsten niet meer als `gml:Dictionary`, maar bij voorkeur middels RDF, bijvoorbeeld met de SKOS vocabulaire moesten worden uitgedrukt. 

Uit GML 3.3 (2012) [[GML3.3]]: 
> Definition and Dictionary encoding is part of the GML schema as a stop-gap, pending the availability of a suitable general purpose dictionary model. Since the GML Dictionary schema was developed, standards on
this topic within the semantic web community have emerged and matured. In particular best-practice is to
generally use URIs for referring to items in vocabularies, and RDF (OWL, SKOS) for encoding their
descriptions. [...] The GML Schema for definitions and dictionaries was previously used for generic
definitions and code lists but is now deprecated for these purposes.

In de IMGeo GML implementatie wordt een gegeven dat als waardetype een codelijst heeft, geïmplementeerd als een XML element van het type `gml:CodeType`. 

Dit GML type is 
> a generalized type to be used for a term, keyword or name.

Het type specificeert dat je de term als string opneemt met een XML attribuut `codeSpace`, waarin de URI verwijst naar de context van de term (i.e. het begrippenkader of iets vergelijkbaars). 

In IMGeo ziet dat er zo uit in de data: 

<pre>
&lt;imgeo:plus-type 
        codeSpace="http://www.geostandaarden.nl/imgeo/def/2.1#TypeBakPlus">
        afval apart plaats
&lt;/imgeo:plus-type>
</pre>

Uit de tekst van GML 3.3. blijkt dat INSPIRE hierin de juiste keuze heeft gemaakt door `gml:ReferenceType` te gebruiken in plaats van `gml:CodeType`: 
> `gml:CodeType` is a generalized type to be used for assigning a term, keyword or
name.

> NOTE Elements with `type='gml:CodeType'` are used to assign a name to a
feature or other resource. `gml:ReferenceType` is used to hold a reference to
another resource. The use of `CodeType` to reference code list entries is
deprecated.

####  Voorlopige conclusie

De correcte werkwijze, volgens de geldende geo-standaarden is: 
- Gebruik een enumeratie of codelist voor het specificeren van waardelijsten. De eerste voor een onveranderlijke lijst (uitputtend of stabiel binnen versie van model), de tweede voor een veranderlijke 'open' lijst. De toegestane waarden van beide vormen van waardelijst zijn in de ISO 19103 beschouwing concepten, i.e. begrippen. 
- Gebruik SKOS voor het publiceren van waardelijsten.
- Neem vanuit de instantiedata een HTTP URI verwijzing naar een SKOS concept op als waarde van gegevens waarvan de waarde een concept is. Bij implementatie in GML gebruik je hiervoor het `gml:ReferenceType`.

### Waardelijst in IMSOR

#### Wat is een waardelijst?


**MIM** - Een datatype waarvan de mogelijke waarden zijn opgesomd in een lijst. De waarde van een attribuutsoort moet één van de waarden zijn uit de gespecificeerde waardenlijst.


**NEN3610:2022** - Waardelijsten zijn lijsten met waarden, of beter gezegd lijsten met woorden, die gebruikt mogen worden als waarde voor een eigenschap van een object. De waardelijst specificeert daarmee restrictief het waardebereik van een attribuut in een informatiemodel.

#### Visie op waardelijsten

IMSOR hanteert de volgende visie op waardelijsten:
<ul>
  <li>Een waardelijst beperkt het waardebereik voor een type tot een gespecificeerde set waarden.</li>
  <li>Mogelijke (waarde)types
  <ul>
    <li>Objecttypes (Landenlijst, Gemeentelijst etc)<br/>
    Gebruik wanneer mogelijk. Introduceert mogelijkheid voor directe koppeling voor gebruik in samenhang</li>
    <li>Concepten (Statussen, Gebruiksdoelen, Typeringen etc)<br/>
    Gebruik wanneer nodig. Versimpelt informatiemodellen, maar behoudt nog steeds mogelijkheid voor samenhangend gebruik.</li>
  </ul></li></ul>

#### Requirements

<ul>
  <li>Model voor waardelijsten (de gegevensstructuur van een waarde) moet bekend zijn.<br/>
  <em>Rationale</em>: We willen kunnen garanderen dat we een waarde voldoende kunnen beschrijven voor het gebruik in samenhang. 
  Bij waardelijst van objecten en concepten moet er voldoende informatie van objecten beschikbaar zijn voor het doel van de waardelijst.
  Daarnaast moet het aanknopingspunt voor samenhangend gebruik bieden.</li>
  <li>De inhoud van de waardelijst moet kunnen veranderen zonder dat het informatiemodel verandert.<br/>
  <em>Rationale</em>: Waardelijsten kunnen veranderen, zonder dat dit de structuur van het gegevensmodel verandert. Deze moeten onafhankelijk van elkaar kunnen ontwikkelen.</li>
</ul>


#### Hierarchisch gebruik waardelijsten

<strong>WENS</strong>: Waardelijsten moeten hierarchisch / taxonomisch gebruik ondersteunen.

<aside class='example'>
Voorbeeld:
    SOR status:
- Ontwerp
- Gepland = Plan (BGT)
       - Bouwvergunning verleend (BAG)
- Aanwezig = Bestaand (BGT)
        - Bouw gestart (BAG)
        - Pand buiten gebruik  (BAG)
        - Pand in gebruik  (BAG)
        - Pand in gebruik (niet ingemeten) (BAG)
        - Sloopvergunning verleend  (BAG)
        - Verbouwing pand (BAG)
- Afwezig = Historie (BGT)
        - Pand gesloopt (BAG)
- Afgevoerd
        - Niet gerealiseerd pand (BAG
        - Pand ten onrechte opgevoerd (BAG)

Vraag:

Geef me alle gebouwen met status *Aanwezig* uit de SOR.

Levert:
- Panden met BAG substatussen
- Gebouwen met BGT *Bestaand* statussen

</aside>


#### Waardelijsten in MIM

[[MIM]] specificeert de volgende drie modelleerconstructen waarmee je waardelijsten zou kunnen modelleren: 

*Enumeratie*

Een datatype waarvan de mogelijke waarden limitatief zijn opgesomd in een statische lijst.

*Referentielijst*

De representatie van een lijst met een opsomming van de mogelijke domeinwaarden van een attribuutsoort, die buiten het model in een externe waardenlijst worden beheerd. De domeinwaarden in de lijst kunznen in de loop van de tijd aangepast, uitgebreid, of verwijderd worden, zonder dat het informatiemodel aangepast wordt (in tegenstelling tot bij een enumeratie). De representatie bevat een aantal kenmerken, die overgenomen zijn van de specificatie van de externe waardelijst.

*Codelijst*

De representatie van een lijst met een opsomming van de mogelijke domeinwaarden van een attribuutsoort, die buiten het model in een externe waardenlijst worden beheerd. De domeinwaarden in de lijst kunnen in de loop van de tijd aangepast, uitgebreid, of verwijderd worden, zonder dat het informatiemodel aangepast wordt (in tegenstelling tot bij een enumeratie). De representatie bevat geen kenmerken, voor alle kenmerken wordt verwezen naar de specificatie van de externe waardelijst.

Daarnaast definieert MIM een voor waardelijsten relevant metagegeven: de **Indicatie classificerend**.

Deze indicatie betekent dat een attribuutsoort het objecttype waar het bijhoort classificeert in (sub)typen.

Een objecttype kan middels een attribuutsoort geclassificeerd worden in subtypen. Bijvoorbeeld: type gebouw. Een toren, kerk, bunker, zwembad zijn allemaal typen gebouwen. In een model op MIM niveau 2 kunnen dergelijke typen als objecttypen en specialisaties van het objecttype gebouw zijn gemodelleerd. Met name op niveau 3 kan het relevant zijn om deze informatie daadwerkelijk te structureren door expliciet een aspect op te nemen waarmee direct het type gebouw kan worden vastgelegd, los van de modellering van objecttypen.

#### SOR Waardelijsten

De MIM Referentielijst past het beste, want 
- De gegevensstructuur is beschreven in het informatiemodel
- Het is mogelijk om een samenvattende representatie van een objecttype te gebruiken
- Het beheer van de inhoud van de lijst staat los van het informatiemodel

Er worden twee soorten lijsten voorzien:
1. Waardelijst van objecten (instanties van Objecttype) uit een andere dataset.
        
        Bijvoorbeeld de lijst van alle Nederlandse Gemeentes (Openbaar Lichaam).

        Eis: Deze dataset moet ook voldoen aan SOR-stelsel eisen voor identificatie, historie, etc.
2. Waardelijst van concepten
        
        Bijvoorbeeld een lijst met statussen; een lijst met gebruiksdoelen, een categoriserende lijst van Gebouwtypes.

#### Waardelijsten van concepten op basis van SKOS

Waarom kiezen we voor SKOS?
<ul>
  <li>Wordt breed toegepast voor dit doeleinde, o.a. in INSPIRE, IMGeo, en andere geo-informatiemodellen.</li>
  <li>SKOS biedt een standaardmodel voor het modelleren van Concepten
    <ul>
      <li>Concept</li>
      <li>Code / Techniche notatie</li>
      <li>Definitie</li>
      <li>Term </li>
      <li>Etc.</li>
     </ul></li>
  <li>SKOS biedt een standaardmodel voor hierarchie / taxonomie van concepten
    <ul>
      <li>Concept</li>
      <li>Broader</li>
      <li>Narrower</li>
      <li>Etc.</li>
    </ul></li>
  <li>SKOS biedt een standaardmodel om samenhang van concepten uit verschillende contexten uit te drukken
    <ul>
      <li>Concept</li>
      <li>Exact match</li>
      <li>Broader match</li>
      <li>Narrower match</li>
      <li>Etc.</li>
    </ul></li>
</ul>

#### Beheeraspecten bij waardelijst van concepten

Beheer van waardelijsten staat los van beheer van begrippen in een begrippenkader.

Aanpak:
- Eén SKOS conceptschema voor waardes in waardelijsten, horende bij het informatiemodel. Voor elke waardelijst een collectie. Hoewel SKOS wordt gebruikt, net zoals in het DisGeo begrippenkader, worden de begrippen uit het kader niet hergebruikt in waardelijsten. Dit omdat het beheer van het begrippenkader los moet staan van het beheer van de waardelijsten.
- Historie op concept / waarde-niveau zoals beschreven in de nieuwe NEN 3610 versie [[NEN3610-2021-ontw]].
- Waarde-concepten kunnen met SKOS matching relaties gerelateerd worden aan het algemene SOR begrippenkader. 
