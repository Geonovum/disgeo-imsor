# Definities

<dfn>Conceptueel informatiemodel<dfn>

Volgens MIM betreft het conceptueel informatiemodel “de modellering van de werkelijkheid binnen het beschouwde domein”. Het gaat hier om een geabstraheerde representatie van de werkelijkheid. De natuurlijke werkelijkheid ligt ten grondslag aan deze abstractie – dit is de werkelijkheid waarin natuurwetten gelden en waar mensen gebeurtenissen in ervaren. Echter in het kader van dit project, omvat deze abstractie (het universe of discourse) zowel objecten die direct of indirect een geografisch component hebben als <a></a>informatieobjecten</a> die de samenhang tussen registraties bevorderen. Uiteindelijk gaat het dus om de administratieve werkelijkheid, aangezien in een basisregistratie dit een afspiegeling is van de natuurlijke werkelijkheid (bp4mc2). Onder deze administratieve werkelijkheid vallen verschillende soorten informatieobjecten (zowel geo als niet-geo), die nodig zijn voor een samenhangende registratie, vanuit een administratief standpunt.

Het conceptueel model maakt onderscheid in object(types), hun betekenis, eigenschappen en relaties tot elkaar.

<dfn>Logisch informatiemodel</dfn>

Het logisch informatiemodel beschrijft “hoe de, in het conceptuele model onderscheiden, concepten gebruikt worden bij de interactie tussen systemen en hun gebruikers en tussen systemen onderling” [MIM]. Het gaat hier om hoe informatie over de natuurlijke en administratieve werkelijkheid in digitale registraties kan worden opgenomen, op zo’n manier dat uitwisseling van data mogelijk wordt.

<dfn data-lt="objecten">Object</dfn>

Een object, ook wel fenomeen genoemd, is een ding, een onderwerp van gesprek, in een werkelijkheid (Universe of discourse). Een object bestaat onafhankelijk van informatie. Een object kan beschreven/grepresenteerd worden door verschillende informatieobjecten.

<aside class="note">
  <b>Relatie MIM</b>
  <p>
    Volgens MIM is een object "Een ding, een tastbaar iets, in de werkelijkheid, zoals daarnaar gekeken wordt vanuit een bepaald domein.". MIM stelt ook "Met in de werkelijkheid wordt bedoeld dat het om de daadwerkelijke onderwerpen van gesprek gaat, de verzameling van de concrete tastbare dingen waarover we het hebben.", en "'Tastbaar' moet hierbij ruim geïnterpreteerd worden. Het gaat niet alleen om fysiek herkenbare objecten zoals auto's, gebouwen en mensen, ook om zogenaamde virtuele objecten waarover binnen het domein door betrokkenen gecommuniceerd wordt zoals kadastrale percelen, (maatschappelijke) activiteiten en processen."<br><br>
    Met deze uitleg past de definitie van object nog steeds binnen de definitie van object in MIM.<br>
    Het MIM maakt echter geen scherp onderscheid tussen objecten en informatieobjecten. De reden waarom hier dit onderscheid wel wordt gemaakt is omdat dit onderscheid noodzakelijk is voor het realiseren van samenhangende informatie over verschillende registraties heen.
  </p>
</aside>

<dfn data-lt="informatieobject|informatieobjecten|geo-informatieobject|geo-informatieobjecten">(Geo)Informatieobject</dfn>

Een informatieobject is een set gegevens over een <a>object</a>. Een informatieobject is meestal een (gegevens)instantie van een <a>objecttype</a>.

Deze definitie volgt de definitie in [[NEN3610-2021-ontw]], gebaseerd op [[NEN2660-1-2021-ontw]] die luidt:

> Een informatieobject is een op zichzelf staand geheel van gegevens met een eigen identiteit. In de context van een objecttype is het één voorkomen (instantie) van een objecttype en representeert een specifiek object/ding in de werkelijkheid. Een object/ding in de werkelijkheid wordt dus gerepresenteerd door een informatieobject conform het informatiemodel.

Een geo-informatieobject is een specifiekere vorm van informatieobjecten, namelijk een informatieobject waarvan één of meerdere gegevens een geometrie van het <a>object</a> in kwestie uitdrukt.

<dfn data-lt="Objecttypes|objecttypen">Objecttype</dfn>

De typering van een groep <a>objecten</a> die binnen een domein relevant zijn en als gelijksoortig worden beschouwd. Daarnaast beschrijft een objecttype hoe een <a>informatieobject</a> over een <a>object</a> samengesteld kan worden binnen een domein.

<dfn data-lt="gegevens">Gegeven</dfn>

Een <a>gegeven</a> is de waarde die is opgenomen voor een eigenschap van een <a>object</a>.

<aside class="note">
  <b>Relatie MIM:</b>
  <p>
    Hoewel het MIM geen expliciet construct voor gegeven kent, geeft het wel een definitie: "De betekenisvolle formulering van een waargenomen feit, waaraan een waarde kan worden toegekend". Daarnaast wordt gesteld: "Gegevens zijn de objectief waarneembare neerslag of registratie van feiten op een bepaald medium, zodanig dat deze gegevens uitgewisseld en voor langere tijd bewaard kunnen worden. Dat kan op papier, in digitale vorm, et cetera. Met deze gegevens wordt een model (een selectief deel dus) van de werkelijkheid vastgelegd in de tijd."<br><br>
    Hoewel de formulering scherpte mist, wordt de definitie in essentie gelijk geacht aan de definitie die hier wordt gehanteerd.
  </p>
</aside>

<dfn data-lt="directe eigenschappen">Directe eigenschap</dfn>

Directe eigenschappen zijn relevant in de kader van <a>informatieobjecten</a>. Wanneer de individuele <a>gegevens</a> in een <a>informatieobject</a> direct over hetzelfde onderwerp (het <a>object</a>) gaan, dan spreken we van directe eigenschappen. Het is niet altijd zo dat er alleen gebruik gemaakt wordt van directe eigenschappen in een <a>informatieobject</a>. Denk aan metadata, of samenvoeging van gegevens over verwante <a>objecten</a> zonder eigen identificatie in een <a>informatieobject</a>.

<dfn data-lt="registratiemetadata">Metadata</dfn>

Metadata zijn gegevens over andere gegevens. We onderscheiden verschillende soorten metadata; zoals gegevens over:
* registraties
* informatiemodellen
* informatiemodelelementen
* datasets
* <a>informatieobjecten</a>
* (<a>object</a>)<a>gegevens</a>

<aside class="issue">
  <a href="https://github.com/Geonovum/disgeo-imsor/discussions/50">Discussie</a> over deze definitie loopt.
</aside>

<dfn>Samenhang</dfn>

Samenhang valt uiteen in twee vormen. Relaties tussen verschillende <a>objecten</a> en het combineren van verschillende <a>informatieobjecten</a> over hetzelfde <a>object</a> vanuit verschillende registraties.
