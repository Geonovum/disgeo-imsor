## Uitwerkingen

Er zijn verschillende uitwerkingen gemaakt die hieronder uiteengezet worden.

* **Uitwerking A**: Deze uitwerking breidt het metamodel MIM uit om individuele gegevens te kunnen modelleren. Het probeert hiermee een oplossing te bieden voor modelleren van metadata en historie op gegevensniveau die zowel goed werkt voor object georienteerde als graafgebaseerde paradigma's (zoals linked data).
* **Uitwerking B**: Deze uitwerking heeft geen gebruik gemaakt van het metamodel MIM, maar is vanuit een specifiek linked data profiel opgesteld.
* **Uitwerking C**: Deze uitwerking breidt het metamodel MIM uit met een manier om metadata te kunnen koppelen aan bestaande attributen als een "add-on".
* **Uitwerking D**: Deze uitwerking maakt gebruik van twee informatiemodellen. Een voor het objectmodel zonder metadata. En een voor het informatiemodel met metadata op gegevensniveau. Hierbij breidt deze uitwerking het metamodel van MIM uit met een manier om metadata te koppelen aan een attribuut in combinatie met het gebruik van een gegevensgroeptype.

### Vergelijkingswijze van de uitwerkingen

In dit document worden specifieke delen van de casusuitwerkingen uitgelicht en worden de verschillende uitwerkingen met elkaar vergeleken.

<aside class="note">
  De oorspronkelijke uitwerkingen zijn niet gemaakt met dezelfde metamodellen en gebruikten niet dezelfde namen voor objecttypes en attribuutsoorten, waardoor een vergelijking lastig was. Om deze uitwerkingen toch met elkaar te kunnen vergelijken is waar mogelijk een vertaling naar het MIM gemaakt voor de modelvisualisatie. Voor de op linked data gebaseerde uitwerking B is daarvoor gebruik gemaakt van het <a href="https://docs.geostandaarden.nl/mim/mim/#metamodel-in-linked-data-ld">MIM LD Metamodel</a>.<br>
  Daarnaast zijn de naamgeving van eigenschappen en objecttypes ook gelijkgetrokken, om de modelleerwijzes van de verschillende utiwerkingen zo eerlijk mogelijk te vergelijken.
</aside>

### Metamodel

#### Metamodel - uitwerking A
In uitwerking A is het MIM als uitgangspunt genomen. Maar, omdat er in MIM geen expliciet construct is om gegevens over gegevens te registreren breidt uitwerking A het metamodel van MIM uit.

Uitwerking A introduceert de metaclass **«Gegevenstype»**, **«Kenmerksoort»**, **«Waardesoort»**, en de metaclass **«Context»**.

Een gegevenstype is de metaclass van specifieke gegevens.
Een gegevenstype bestaat uit drie kenmerken:
 - onderwerp
 - kenmerk
 - waarde

**onderwerp** verwijst naar een **«Objecttype»**.

**kenmerk** verwijst naar de metaclass **«Kenmerksoort»**. **«Kenmerksoort»** is de generalisatie van de MIM metaclassen **«Attribuutsoort»** en **«Relatiesoort»**.

**waarde** verwijst naar de metaclass **«Waardesoort»**. **«Waardesoort»** is de union van de MIM metaclassen **«Objecttype»** en de metaclass van letterlijke waardes.

<aside class="note">De metaclass van letterlijke waardes lijkt niet expliciet te bestaan in MIM 1.1.</aside>

De metaclass **«Gegevenstype»** is daarmee integraal verbonden met de metaclass **«Objecttype»**. Een set **«Gegevenstype»**s met hetzelfde onderwerp vormt een **«Objecttype»** en andersom kun je een **«Objecttype»** ook uitdrukken in termen van de **«Gegevenstype»**s waaruit het is opgebouwd.

Vaak is het daadwerkelijk instantieren van een **«Gegevenstype»** niet noodzakelijk. Echter, wanner het wel nodig is, bijvoorbeeld voor het uitdrukken van metadata, geeft deze uitbreiding van het MIM de mogelijkheid om dit te doen.

<figure id="a-metamodel">
  <img src="media/a-metamodel.png" alt="a-metamodel">
  <figcaption>Metamodel uitwerking A</figcaption>
</figure>

Om zowel historie op gegevensniveau als historie op objectniveau te ondersteunen, introduceert uitwerking A ook een metaclass **«Context»**.

**«Context»** is een groepering van meta-eigenschappen, waarmee een doorsnede van gegevens met hetzelfde onderwerp gemaakt kan worden, waarbinnen een **«Objecttype»** beschouwd kan worden.<br>
Zo is het bijvoorbeeld mogelijk om een doorsnede door de geldigheidslijn van de gegevens over een onderwerp te maken, om dat onderwerp als een object te kunnen representeren binnen een bepaalde geldigheidsperiode.

#### Metamodel - uitwerking B
Uitwerking B is gemaakt zonder uit te gaan van MIM 1.1. Deze uitwerking is gemaakt met toepassing van RDFS / OWL en heeft als metamodelleringskeuze hierin attributen van objecten ook als objecten opgenomen.

Omdat het MIM 1.1 ook een [linked data metamodel](https://docs.geostandaarden.nl/mim/mim/#metamodel-in-linked-data-ld) kent op basis van RDFS / OWL (en SHACL), is het mogelijk om deze uitwerking ook te visualizeren conform MIM 1.1.

#### Metamodel - uitwerking C

Ook uitwerking C neemt MIM 1.1 als uitgangspunt. Om gegevensmetadata te kunnen uitdrukken is in deze uitwerking het metamodel van MIM uitgebreid met een nieuwe MIM metaclass **«Metadata over data»**.

Met metaclass **«Metadata over data»** wordt het mogelijk om metadata over data als "add-on" op de data van een object te representeren, met als bijkomend voordeel dat metadata als "add-on" op de implementatie van bestaande basisregistraties en landelijke voorzieningen kan worden beschreven en geïmplementeerd (zonder impact op de objecten).

**«Metadata over data»** heeft een identificerend attribuut `betreftKenmerk` welke verwijst naar een enumeratie van boomkenmerken. Dit zijn allen kenmerken van het objecttype boom. Verder heeft het een **«Relatiesoort»** `betreftObject` en een **«Attribuutsoort»** `betreftVersie` die respectievelijk het object en de versie van het voorkomen van dat object, waarvoor de metadata geldt, duiden. De metakenmerken kunnen dan als reguliere kenmerken opgenomen worden op de **«Metadata over data»**, bijv. als **«Attribuutsoort»** of als **«Relatiesoort»**.

Deze metadata kan per specifieke serializatie op een specifieke manier gerepresenteerd worden.

#### Metamodel - uitwerking D

Uitwerking D neem wederom MIM 1.1 als uitgangspunt. Om gegevensmetadata te kunnen uitdrukken is in deze uitwerking het metamodel van MIM uitgebreid met een nieuwe MIM metaclass **«Metadata»**.

Het stereotype **«Metadata»** geeft aan dat het informatie-element gegevens beschrijft over het gegeven op het niveau waarop het informatie-element is gekoppeld.

### Informatiemodel

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-informatiemodel-a">Informatiemodel A</a></li>
      <li class=""><a href="#tab-informatiemodel-b">Informatiemodel B</a></li>
      <li class=""><a href="#tab-informatiemodel-c">Informatiemodel C</a></li>
      <li class=""><a href="#tab-informatiemodel-d-object">Informatiemodel D (object)</a></li>
      <li class=""><a href="#tab-informatiemodel-d-gegevensmeta">Informatiemodel D (gegevensmetadata)</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-informatiemodel-a" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <div class="figure"><img src="media/a-informatiemodel.png" alt="a-informatiemodel"/></div>
        </span>
      </div> 
      <div id="tab-informatiemodel-b" class="tab-pane">
        <span class="glyphicon glyphicon-fire glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <div class="figure"><img src="media/b-informatiemodel.png" alt="b-informatiemodel"/></div>
        </span>
      </div>
      <div id="tab-informatiemodel-c" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <div class="figure"><img src="media/c-informatiemodel.png" alt="c-informatiemodel"/></div>
        </span>
      </div>
      <div id="tab-informatiemodel-d-object" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <div class="figure"><img src="media/d-informatiemodel-object.png" alt="d-informatiemodel-object"/></div>
        </span>
      </div>
      <div id="tab-informatiemodel-d-gegevensmeta" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <div class="figure"><img src="media/d-informatiemodel-gegevensmeta.png" alt="d-informatiemodel-gegevensmeta"/></div>
        </span>
      </div>
    </div>
  </section>
</div>

#### Informatiemodel - uitwerking A
Informatiemodel A bouwt op de geïntroduceerde metamodel-uitbreidingen in <a href=#metamodel-uitwerking-a></a>. Vanwege de daar gedefiniëerde relatie tussen **«Gegevenstype»** en **«Objecttype»** is het mogelijk om informatie zowel vanuit een objectbeschouwing, als vanuit een gegevensbeschouwing, als gecombineerd te representeren.

#### Informatiemodel - uitwerking B
Informatiemodel maakt van elk attribuut een **«Objecttype»**. Daarmee verandert het oorspronkelijke informatiemodel in de casus. Alle attributen worden gemodelleerd als een relatie-object-attribuut constructie.
Dit maakt het mogelijk om metadata als attribuut toe te voegen aan een geobjectificeerd attribuut.

#### Informatiemodel - uitwerking C

Informatiemodel C bouwt voort op de geïntroduceerde metamodel-uitbreidingen in <a href=#metamodel-uitwerking-c></a>. Voor elk kenmerken van het **«Objecttype»** `Boom` waarvoor metadata moet worden bijgehouden, wordt een **«Metadata over data»** geïntroduceerd, met een betreftKenmerk, betroftObject en een betreftVersie zoals beschreven in <a href=#metamodel-uitwerking-c></a>. Daarnaast wordt de metadata als reguliere  kenmerken van de **«Metadata over data»** gemodelleerd.

#### Informatiemodel - uitwerking D

In uitwerking D zijn twee informatiemodellen gemaakt. Eén voor de objectinformatie zonder metadata op gegevensniveau en één waarin metadata op gegevensniveau is opgenomen. Vanwege de modelleerwijze die dusdanig verschilt is het nodig om twee verschillende logische modellen te hanteren. Hierbij is het wel mogelijk om het model zonder metadata op gegevensniveau af te leiden van het model met metadata op gegevensniveau.

Het model zonder metadata op gegevensniveau neemt het conceptuele informatiemodel en voegt daaraan toe een identificatie en een relatie naar een instantie van metaclass **«Metadata»** met **«Metadata»** attributen voor de versie en de tijdslijn geldigheid en tijdslijn registratie. Dit is in lijn met NEN 3610:2020.

Het model met metadata op gegevensniveau maakt gebruik van [MIM gegevensgroepen](https://docs.geostandaarden.nl/mim/mim/#gegevensgroep). Ieder attribuut waarvoor metadata geregistreerd wordt krijgt een eigen [gegevensgroeptype](https://docs.geostandaarden.nl/mim/mim/#gegevensgroeptype). Deze gegevensgroep heeft een **«Attribuutsoort»** gelijknamig aan het betreffende attribuut die de waarde van het gegeven krijgt. Daarnaast heeft heet 1 of meerdere **«Metadata»** meta-eigenschappen waarmee metadata gekoppeld worden. Het objectmodel van Boom heeft per attribuut waar metadata voor wordt bijgehouden een gelijknamige referentie naar de bijbehorende gegevensgroep. De gegevensgroep constructie voor metadata maakt dat er een verschil is met het IMboom model zonder metadata op gegevensniveau, maar het is een logisch en gestandaardiseerd verschil.

Overige Motivatie voor deze uitwerking:
- Deze standaardconstructies maken gebruik van standaard encoding regels mogelijk (bijvoorbeeld UML-GML encoding)
-	Standaardconstructies betekent ook standaard leesregels van het UML
-	Het leidt tot een standaard XML serialisatie (standaard implementatie conform GML)

### Gegevens

In de uitwerking van de casus naar gegevens zoomen we, om het overzichtelijk te houden, in op één van de attributen van de casus: `aantalBladeren`. Vervolgens laten we zien hoe de uitwerkingen de boom als object representeren, hoe als losse gegevens met metadata, en hoe dit er gecombineerd uit zou zien. 

In het voorbeeld zie je steeds twee versie-instanties van dezelfde boom.

#### Gegevens - uitwerking A

##### XML

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-a-xml-object">Gegevens A - Object</a></li>
      <li class=""><a href="#tab-gegevens-a-xml-gegevens">Gegevens A - Gegevens</a></li>
      <li class=""><a href="#tab-gegevens-a-xml-object-en-gegevens">Gegevens A - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-a-xml-object" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
&lt;bomen&gt;
  &lt;Boom&gt;
    &lt;geregistreerdMet&gt;
      &lt;Registratiegegevens&gt;
        &lt;beginGeldigheid&gt;2019-09-10&lt;/beginGeldigheid&gt;
        &lt;eindGeldigheid&gt;2020-05-31&lt;/eindGeldigheid&gt;
        &lt;eindRegistratie&gt;2020-05-31T00:00:00Z&lt;/eindRegistratie&gt;
        &lt;tijdstipRegistratie&gt;2019-09-10T00:00:00Z&lt;/tijdstipRegistratie&gt;
        &lt;versie&gt;8&lt;/versie&gt;
      &lt;/Registratiegegevens&gt;
    &lt;/geregistreerdMet&gt;
    &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
    &lt;aantalBladeren&gt;350000&lt;/aantalBladeren&gt;
    &lt;hoogte&gt;22.2&lt;/hoogte&gt;
    &lt;omtrek&gt;49.4&lt;/omtrek&gt;
    &lt;soort&gt;
      &lt;code&gt;342938483&lt;/code&gt;
      &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
    &lt;/soort&gt;
    &lt;status&gt;aanwezig&lt;/status&gt;
    &lt;monumentaleStatus&gt;monumentaal&lt;/monumentaleStatus&gt;
  &lt;/Boom&gt;
  &lt;Boom&gt;
    &lt;geregistreerdMet&gt;
      &lt;Registratiegegevens&gt;
        &lt;beginGeldigheid&gt;2020-09-16&lt;/beginGeldigheid&gt;
        &lt;tijdstipRegistratie&gt;2020-09-16T00:00:00Z&lt;/tijdstipRegistratie&gt;
        &lt;versie&gt;10&lt;/versie&gt;
      &lt;/Registratiegegevens&gt;
    &lt;/geregistreerdMet&gt;
    &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
    &lt;aantalBladeren&gt;372000&lt;/aantalBladeren&gt;
    &lt;hoogte&gt;22.9&lt;/hoogte&gt;
    &lt;omtrek&gt;50.9&lt;/omtrek&gt;
    &lt;soort&gt;
      &lt;code&gt;342938483&lt;/code&gt;
      &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
    &lt;/soort&gt;
    &lt;status&gt;aanwezig&lt;/status&gt;
    &lt;monumentaleStatus&gt;monumentaal&lt;/monumentaleStatus&gt;
  &lt;/Boom&gt;
&lt;/bomen&gt;
          </pre>
        </span>
      </div> 
      <div id="tab-gegevens-a-xml-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-fire glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
&lt;gegevens&gt;
   &lt;gegeven&gt;
      &lt;onderwerp&gt;de-witte-kastanje&lt;/onderwerp&gt;
      &lt;kenmerk&gt;aantalBladeren&lt;/kenmerk&gt;
      &lt;waarde&gt;350000&lt;/waarde&gt;
      &lt;beginGeldigheid&gt;2019-09-10&lt;/beginGeldigheid&gt;
      &lt;eindGeldigheid&gt;2020-09-16&lt;/eindGeldigheid&gt;
      &lt;tijdstipRegistratie&gt;2019-09-19T00:00:00Z&lt;/tijdstipRegistratie&gt;
      &lt;eindRegistratie&gt;2020-09-16T00:00:00Z&lt;/eindRegistratie&gt;
      &lt;bron&gt;
         &lt;onzekerheid&gt;0.09&lt;/onzekerheid&gt;
         &lt;uitgevoerdDoor&gt;
            &lt;naam&gt;Opbladeren B.V.&lt;/naam&gt;
         &lt;/uitgevoerdDoor&gt;
         &lt;uitgevoerdOp&gt;2019-06-27&lt;/uitgevoerdOp&gt;
      &lt;/bron&gt;
      &lt;bronhouder&gt;
         &lt;naam&gt;Gemeente Kemeltoet&lt;/naam&gt;
      &lt;/bronhouder&gt;
   &lt;/gegeven&gt;
   &lt;gegeven&gt;
      &lt;kenmerk&gt;aantalBladeren&lt;/kenmerk&gt;
      &lt;onderwerp&gt;de-witte-kastanje&lt;/onderwerp&gt;
      &lt;waarde&gt;3720000&lt;/waarde&gt;
      &lt;beginGeldigheid&gt;2020-09-16&lt;/beginGeldigheid&gt;
      &lt;tijdstipRegistratie&gt;2020-09-16T00:00:00Z&lt;/tijdstipRegistratie&gt;
      &lt;bron&gt;
         &lt;onzekerheid&gt;0.05&lt;/onzekerheid&gt;
         &lt;uitgevoerdDoor&gt;
            &lt;naam&gt;Opbladeren B.V.&lt;/naam&gt;
         &lt;/uitgevoerdDoor&gt;
         &lt;uitgevoerdOp&gt;2020-09-16&lt;/uitgevoerdOp&gt;
      &lt;/bron&gt;
      &lt;bronhouder&gt;
         &lt;naam&gt;Gemeente Kemeltoet&lt;/naam&gt;
      &lt;/bronhouder&gt;
   &lt;/gegeven&gt;
&lt;/gegevens&gt;
          </pre>
        </span>
      </div>
      <div id="tab-gegevens-a-xml-object-en-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
&lt;bomen&gt;
  &lt;Boom&gt;
    &lt;geregistreerdMet&gt;
      &lt;Registratiegegevens&gt;
        &lt;bestaatUit&gt;
          &lt;gegeven&gt;
            &lt;onderwerp&gt;de-witte-kastanje&lt;/onderwerp&gt;
            &lt;kenmerk&gt;aantalBladeren&lt;/kenmerk&gt;
            &lt;waarde&gt;350000&lt;/waarde&gt;
            &lt;beginGeldigheid&gt;2019-09-10&lt;/beginGeldigheid&gt;
            &lt;eindGeldigheid&gt;2020-09-16&lt;/eindGeldigheid&gt;
            &lt;tijdstipRegistratie&gt;2019-09-19T00:00:00Z&lt;/tijdstipRegistratie&gt;
            &lt;eindRegistratie&gt;2020-09-16T00:00:00Z&lt;/eindRegistratie&gt;
            &lt;bron&gt;
              &lt;onzekerheid&gt;0.09&lt;/onzekerheid&gt;
              &lt;uitgevoerdDoor&gt;
                &lt;naam&gt;Opbladeren B.V.&lt;/naam&gt;
              &lt;/uitgevoerdDoor&gt;
              &lt;uitgevoerdOp&gt;2019-06-27&lt;/uitgevoerdOp&gt;
            &lt;/bron&gt;
            &lt;bronhouder&gt;
              &lt;naam&gt;Gemeente Kemeltoet&lt;/naam&gt;
            &lt;/bronhouder&gt;
          &lt;/gegeven&gt;
        &lt;/bestaatUit&gt;
        &lt;beginGeldigheid&gt;2019-09-10&lt;/beginGeldigheid&gt;
        &lt;eindGeldigheid&gt;2020-05-31&lt;/eindGeldigheid&gt;
        &lt;tijdstipRegistratie&gt;2019-09-10T00:00:00Z&lt;/tijdstipRegistratie&gt;
        &lt;eindRegistratie&gt;2020-05-31T00:00:00Z&lt;/eindRegistratie&gt;
        &lt;versie&gt;8&lt;/versie&gt;
      &lt;/Registratiegegevens&gt;
    &lt;/geregistreerdMet&gt;
    &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
    &lt;aantalBladeren&gt;350000&lt;/aantalBladeren&gt;
    &lt;hoogte&gt;22.2&lt;/hoogte&gt;
    &lt;omtrek&gt;49.4&lt;/omtrek&gt;
    &lt;soort&gt;
      &lt;code&gt;342938483&lt;/code&gt;
      &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
    &lt;/soort&gt;
    &lt;status&gt;aanwezig&lt;/status&gt;
    &lt;monumentaleStatus&gt;monumentaal&lt;/monumentaleStatus&gt;
  &lt;/Boom&gt;
  &lt;Boom&gt;
    &lt;geregistreerdMet&gt;
      &lt;Registratiegegevens&gt;
        &lt;bestaatUit&gt;
          &lt;gegeven&gt;
            &lt;onderwerp&gt;de-witte-kastanje&lt;/onderwerp&gt;
            &lt;kenmerk&gt;aantalBladeren&lt;/kenmerk&gt;
            &lt;waarde&gt;3720000&lt;/waarde&gt;
            &lt;beginGeldigheid&gt;2020-09-16&lt;/beginGeldigheid&gt;
            &lt;tijdstipRegistratie&gt;2020-09-16T00:00:00Z&lt;/tijdstipRegistratie&gt;
            &lt;bron&gt;
              &lt;onzekerheid&gt;0.05&lt;/onzekerheid&gt;
              &lt;uitgevoerdDoor&gt;
                &lt;naam&gt;Opbladeren B.V.&lt;/naam&gt;
              &lt;/uitgevoerdDoor&gt;
              &lt;uitgevoerdOp&gt;2020-09-16&lt;/uitgevoerdOp&gt;
            &lt;/bron&gt;
            &lt;bronhouder&gt;
              &lt;naam&gt;Gemeente Kemeltoet&lt;/naam&gt;
            &lt;/bronhouder&gt;
          &lt;/gegeven&gt;
        &lt;/bestaatUit&gt;
        &lt;beginGeldigheid&gt;2020-09-16&lt;/beginGeldigheid&gt;
        &lt;tijdstipRegistratie&gt;2020-09-16T00:00:00Z&lt;/tijdstipRegistratie&gt;
        &lt;versie&gt;10&lt;/versie&gt;
      &lt;/Registratiegegevens&gt;
    &lt;/geregistreerdMet&gt;
    &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
    &lt;aantalBladeren&gt;372000&lt;/aantalBladeren&gt;
    &lt;hoogte&gt;22.9&lt;/hoogte&gt;
    &lt;omtrek&gt;50.9&lt;/omtrek&gt;
    &lt;soort&gt;
      &lt;code&gt;342938483&lt;/code&gt;
      &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
    &lt;/soort&gt;
    &lt;status&gt;aanwezig&lt;/status&gt;
    &lt;monumentaleStatus&gt;monumentaal&lt;/monumentaleStatus&gt;
  &lt;/Boom&gt;
&lt;/bomen&gt;
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>



##### JSON
<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-a-json-object">Gegevens A - Object</a></li>
      <li class=""><a href="#tab-gegevens-a-json-gegevens">Gegevens A - Gegevens</a></li>
      <li class=""><a href="#tab-gegevens-a-json-object-en-gegevens">Gegevens A - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-a-json-object" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
[
  {
    "geregistreerdMet": {
      "versie": "8",
      "beginGeldigheid": "2019-09-10",
      "eindGeldigheid": "2020-05-31",
      "tijdstipRegistratie": "2019-09-10T00:00:00Z",
      "eindRegistratie": "2020-05-31T00:00:00Z"
    },
    "identificatie": "de-witte-kastanje",
    "status": "aanwezig",
    "soort": {
      "code": "342938483",
      "waarde": "Aesculus hippocastanum"
    },
    "hoogte": 22.2,
    "omtrek": 49.4,
    "aantalBladeren": 350000,
    "monumentaleStatus": "monumentaal"
  },
  {
    "geregistreerdMet": {
      "versie": "10",
      "beginGeldigheid": "2020-09-16",
      "tijdstipRegistratie": "2020-09-16T00:00:00Z"
    },
    "identificatie": "de-witte-kastanje",
    "status": "aanwezig",
    "soort": {
      "code": "342938483",
      "waarde": "Aesculus hippocastanum"
    },
    "hoogte": 22.9,
    "omtrek": 50.9,
    "aantalBladeren": 372000,
    "monumentaleStatus": "monumentaal"
  }
]
          </pre>
        </span>
      </div> 
      <div id="tab-gegevens-a-json-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-fire glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
[
  {
    "onderwerp": "de-witte-kastanje",
    "kenmerk": "aantalBladeren",
    "waarde": 350000,
    "beginGeldigheid": "2019-09-10",
    "eindGeldigheid": "2020-09-16",
    "tijdstipRegistratie": "2019-09-19T00:00:00Z",
    "eindRegistratie": "2020-09-16T00:00:00Z",
    "bronhouder": {
      "naam": "Gemeente Kemeltoet"
    },
    "bron": {
      "onzekerheid": 0.09,
      "uitgevoerdDoor": {
        "naam": "Opbladeren B.V."
      },
      "uitgevoerdOp": "2019-06-27"
    }
  },
  {
    "onderwerp": "de-witte-kastanje",
    "kenmerk": "aantalBladeren",
    "waarde": 3720000,
    "beginGeldigheid": "2020-09-16",
    "tijdstipRegistratie": "2020-09-16T00:00:00Z",
    "bronhouder": {
      "naam": "Gemeente Kemeltoet"
    },
    "bron": {
      "onzekerheid": 0.05,
      "uitgevoerdDoor": {
        "naam": "Opbladeren B.V."
      },
      "uitgevoerdOp": "2020-09-16"
    }
  }
]
          </pre>
        </span>
      </div>
      <div id="tab-gegevens-a-json-object-en-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
[
  {
    "geregistreerdMet": {
      "versie": "8",
      "beginGeldigheid": "2019-09-10",
      "eindGeldigheid": "2020-05-31",
      "tijdstipRegistratie": "2019-09-10T00:00:00Z",
      "eindRegistratie": "2020-05-31T00:00:00Z",
      "bestaatUit": [
        {
          "onderwerp": "de-witte-kastanje",
          "kenmerk": "aantalBladeren",
          "waarde": 350000,
          "beginGeldigheid": "2019-09-10",
          "eindGeldigheid": "2020-09-16",
          "tijdstipRegistratie": "2019-09-19T00:00:00Z",
          "eindRegistratie": "2020-09-16T00:00:00Z",
          "bronhouder": {
            "naam": "Gemeente Kemeltoet"
          },
          "bron": {
            "onzekerheid": 0.09,
            "uitgevoerdDoor": {
              "naam": "Opbladeren B.V."
            },
            "uitgevoerdOp": "2019-06-27"
          }
        }
      ]
    },
    "identificatie": "de-witte-kastanje",
    "status": "aanwezig",
    "soort": {
      "code": "342938483",
      "waarde": "Aesculus hippocastanum"
    },
    "hoogte": 22.2,
    "omtrek": 49.4,
    "aantalBladeren": 350000,
    "monumentaleStatus": "monumentaal"
  },
  {
    "geregistreerdMet": {
      "versie": "10",
      "beginGeldigheid": "2020-09-16",
      "tijdstipRegistratie": "2020-09-16T00:00:00Z",
      "bestaatUit": [
        {
          "onderwerp": "de-witte-kastanje",
          "kenmerk": "aantalBladeren",
          "waarde": 3720000,
          "beginGeldigheid": "2020-09-16",
          "tijdstipRegistratie": "2020-09-16T00:00:00Z",
          "bronhouder": {
            "naam": "Gemeente Kemeltoet"
          },
          "bron": {
            "onzekerheid": 0.05,
            "uitgevoerdDoor": {
              "naam": "Opbladeren B.V."
            },
            "uitgevoerdOp": "2020-09-16"
          }
        }
      ]
    },
    "identificatie": "de-witte-kastanje",
    "status": "aanwezig",
    "soort": {
      "code": "342938483",
      "waarde": "Aesculus hippocastanum"
    },
    "hoogte": 22.9,
    "omtrek": 50.9,
    "aantalBladeren": 372000,
    "monumentaleStatus": "monumentaal"
  }
]
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>



##### RDF (Turtle/TriG)

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-a-rdf-object">Gegevens A - Object</a></li>
      <li class=""><a href="#tab-gegevens-a-rdf-gegevens">Gegevens A - Gegevens</a></li>
      <li class=""><a href="#tab-gegevens-a-rdf-object-en-gegevens">Gegevens A - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-a-rdf-object" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
@prefix : &lt;http://example.disgeo.nl/id/boom/&gt; .
@prefix doc: &lt;http://example.disgeo.nl/doc/boom/&gt; .
@prefix disgeo: &lt;http://example.disgeo.nl/def/disgeo#&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .
@prefix nen3610: &lt;http://definities.geostandaarden.nl/def/nen3610#&gt; .<br>
doc:de-witte-kastanje-v8 {<br>
  doc:de-witte-kastanje-v8 a nen3610:Registratiegegevens ;
    nen3610:versie &quot;8&quot;;
    nen3610:beginGeldigheid &quot;2019-09-10&quot;^^xsd:date ;
    nen3610:eindGeldigheid &quot;2020-05-31&quot;^^xsd:date ;
    nen3610:tijdstipRegistratie &quot;2019-09-19T00:00:00Z&quot;^^xsd:dateTime ;
    nen3610:eindRegistratie &quot;2020-05-31T00:00:00Z&quot;^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    nen3610:geregistreerdMet doc:de-witte-kastanje-v8 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.2 ;
    disgeo:omtrek 49.4 ;
    disgeo:aantalBladeren 350000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}<br>
doc:de-witte-kastanje-v10 {<br>
  doc:de-witte-kastanje-v10 a nen3610:Registratiegegevens ;
    nen3610:versie &quot;10&quot;;
    nen3610:beginGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
    nen3610:tijdstipRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    nen3610:geregistreerdMet doc:de-witte-kastanje-v10 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.9 ;
    disgeo:omtrek 50.9 ;
    disgeo:aantalBladeren 372000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}
          </pre>
        </span>
      </div> 
      <div id="tab-gegevens-a-rdf-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-fire glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
@prefix : &lt;http://example.disgeo.nl/id/boom/&gt; .
@prefix s: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#subject&gt; .
@prefix p: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate&gt; .
@prefix o: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#object&gt; .
@prefix disgeo: &lt;http://example.disgeo.nl/def/disgeo#&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .
@prefix nen3610: &lt;http://definities.geostandaarden.nl/def/nen3610#&gt; .

[ s: :de-witte-kastanje; p: disgeo:aantalBladeren; o: 350000 ]
  a disgeo:Gegeven ;
  nen3610:beginGeldigheid &quot;2019-09-10&quot;^^xsd:date ;
  nen3610:eindGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
  nen3610:tijdstipRegistratie &quot;2019-09-19T00:00:00Z&quot;^^xsd:dateTime ;
  nen3610:eindRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
  disgeo:bronhouder [
    disgeo:naam &quot;Gemeente Kemeltoet&quot; ;
  ] ;
  disgeo:bron [
    a disgeo:Observatie ;
    disgeo:onzekerheid 0.09 ;
    disgeo:uitgevoerdDoor [
      disgeo:naam &quot;Opbladeren B.V.&quot; ;
    ] ;
    disgeo:uitgevoerdOp &quot;2019-06-27&quot;^^xsd:date ;
  ] ;
.

[ s: :de-witte-kastanje; p: disgeo:aantalBladeren; o: 372000 ]
  a disgeo:Gegeven ;
  nen3610:beginGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
  nen3610:tijdstipRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
  disgeo:bronhouder [
    disgeo:naam &quot;Gemeente Kemeltoet&quot; ;
  ] ;
  disgeo:bron [
    a disgeo:Observatie ;
    disgeo:onzekerheid 0.05 ;
    disgeo:uitgevoerdDoor [
      disgeo:naam &quot;Opbladeren B.V.&quot; ;
    ] ;
    disgeo:uitgevoerdOp &quot;2020-09-16&quot;^^xsd:date ;
  ] ;
.
          </pre>
        </span>
      </div>
      <div id="tab-gegevens-a-rdf-object-en-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
@prefix : &lt;http://example.disgeo.nl/id/boom/&gt; .
@prefix doc: &lt;http://example.disgeo.nl/doc/boom/&gt; .
@prefix disgeo: &lt;http://example.disgeo.nl/def/disgeo#&gt; .
@prefix s: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#subject&gt; .
@prefix p: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate&gt; .
@prefix o: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#object&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .
@prefix nen3610: &lt;http://definities.geostandaarden.nl/def/nen3610#&gt; .

doc:de-witte-kastanje-v8 {
  doc:de-witte-kastanje-v8 a nen3610:Registratiegegevens ;
    nen3610:versie &quot;8&quot;;
    nen3610:beginGeldigheid &quot;2019-09-10&quot;^^xsd:date ;
    nen3610:eindGeldigheid &quot;2020-05-31&quot;^^xsd:date ;
    nen3610:tijdstipRegistratie &quot;2019-09-19T00:00:00Z&quot;^^xsd:dateTime ;
    nen3610:eindRegistratie &quot;2020-05-31T00:00:00Z&quot;^^xsd:dateTime ;
    disgeo:bestaatUit [
      s: :de-witte-kastanje; p: disgeo:aantalBladeren; o: 350000 ;
      a disgeo:Gegeven ;
      nen3610:beginGeldigheid &quot;2019-09-10&quot;^^xsd:date ;
      nen3610:eindGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
      nen3610:tijdstipRegistratie &quot;2019-09-19T00:00:00Z&quot;^^xsd:dateTime ;
      nen3610:eindRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
      disgeo:bronhouder [
        disgeo:naam &quot;Gemeente Kemeltoet&quot; ;
      ] ;
      disgeo:bron [
        a disgeo:Observatie ;
        disgeo:onzekerheid 0.09 ;
        disgeo:uitgevoerdDoor [
          disgeo:naam &quot;Opbladeren B.V.&quot; ;
        ] ;
        disgeo:uitgevoerdOp &quot;2019-06-27&quot;^^xsd:date ;
      ] ;
    ] ;
  .

  :de-witte-kastanje a disgeo:Boom ;
    nen3610:geregistreerdMet doc:de-witte-kastanje-v8 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.2 ;
    disgeo:omtrek 49.4 ;
    disgeo:aantalBladeren 350000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}

doc:de-witte-kastanje-v10 {

  doc:de-witte-kastanje-v10 a nen3610:Registratiegegevens ;
    nen3610:versie &quot;10&quot;;
    nen3610:beginGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
    nen3610:tijdstipRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
    disgeo:bestaatUit [
      s: :de-witte-kastanje; p: disgeo:aantalBladeren; o: 372000 ;
      a disgeo:Gegeven ;
      nen3610:beginGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
      nen3610:tijdstipRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
      disgeo:bronhouder [
        disgeo:naam &quot;Gemeente Kemeltoet&quot; ;
      ] ;
      disgeo:bron [
        a disgeo:Observatie ;
        disgeo:onzekerheid 0.05 ;
        disgeo:uitgevoerdDoor [
          disgeo:naam &quot;Opbladeren B.V.&quot; ;
        ] ;
        disgeo:uitgevoerdOp &quot;2020-09-16&quot;^^xsd:date ;
      ] ;
    ] ;
  .

  :de-witte-kastanje a disgeo:Boom ;
    nen3610:geregistreerdMet doc:de-witte-kastanje-v10 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.9 ;
    disgeo:omtrek 50.9 ;
    disgeo:aantalBladeren 372000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>

##### RDF* (Turtle/TriG)

Serialisatie conform (de nog in ontwikkeling zijnde) [RDF*](https://w3c.github.io/rdf-star/rdf-star-cg-spec.html).

Merk op dat deze serializatie enkel verschilt op het stuk waarin [RDF Reification](https://www.w3.org/TR/rdf11-mt/#reification) wordt toegepast. Het is een vervanging van
<pre>s: :de-witte-kastanje; p: disgeo:aantalBladeren; o: 350000</pre> 
met 
<pre>&lt;&lt; :de-witte-kastanje disgeo:aantalBladeren 350000 &gt;&gt;</pre>.

Omdat uitwerking A uitgaat van het kunnen modelleren van een gegeven als onderwerp van kenmerken is het 100% compatibel met [RDF Reification](https://www.w3.org/TR/rdf11-mt/#reification) en [RDF*](https://w3c.github.io/rdf-star/rdf-star-cg-spec.html) en hoeft er aan het informatiemodel niks te wijzigen.

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-a-rdf-star-object">Gegevens A - Object</a></li>
      <li class=""><a href="#tab-gegevens-a-rdf-star-gegevens">Gegevens A - Gegevens</a></li>
      <li class=""><a href="#tab-gegevens-a-rdf-star-object-en-gegevens">Gegevens A - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-a-rdf-star-object" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
@prefix : &lt;http://example.disgeo.nl/id/boom/&gt; .
@prefix doc: &lt;http://example.disgeo.nl/doc/boom/&gt; .
@prefix disgeo: &lt;http://example.disgeo.nl/def/disgeo#&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .
@prefix nen3610: &lt;http://definities.geostandaarden.nl/def/nen3610#&gt; .<br>
doc:de-witte-kastanje-v8 {<br>
  doc:de-witte-kastanje-v8 a nen3610:Registratiegegevens ;
    nen3610:versie &quot;8&quot;;
    nen3610:beginGeldigheid &quot;2019-09-10&quot;^^xsd:date ;
    nen3610:eindGeldigheid &quot;2020-05-31&quot;^^xsd:date ;
    nen3610:tijdstipRegistratie &quot;2019-09-19T00:00:00Z&quot;^^xsd:dateTime ;
    nen3610:eindRegistratie &quot;2020-05-31T00:00:00Z&quot;^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    nen3610:geregistreerdMet doc:de-witte-kastanje-v8 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.2 ;
    disgeo:omtrek 49.4 ;
    disgeo:aantalBladeren 350000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}<br>
doc:de-witte-kastanje-v10 {<br>
  doc:de-witte-kastanje-v10 a nen3610:Registratiegegevens ;
    nen3610:versie &quot;10&quot;;
    nen3610:beginGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
    nen3610:tijdstipRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    nen3610:geregistreerdMet doc:de-witte-kastanje-v10 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.9 ;
    disgeo:omtrek 50.9 ;
    disgeo:aantalBladeren 372000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}
          </pre>
        </span>
      </div> 
      <div id="tab-gegevens-a-rdf-star-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-fire glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
@prefix : &lthttp://example.disgeo.nl/id/boom/&gt; .
@prefix disgeo: &lt;http://example.disgeo.nl/def/disgeo#&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .
@prefix nen3610: &lt;http://definities.geostandaarden.nl/def/nen3610#&gt; .

&lt;&lt; :de-witte-kastanje disgeo:aantalBladeren 350000 &gt;&gt;
  a disgeo:Gegeven ;
  nen3610:beginGeldigheid "2019-09-10"^^xsd:date ;
  nen3610:eindGeldigheid "2020-09-16"^^xsd:date ;
  nen3610:tijdstipRegistratie "2019-09-19T00:00:00Z"^^xsd:dateTime ;
  nen3610:eindRegistratie "2020-09-16T00:00:00Z"^^xsd:dateTime ;
  disgeo:bronhouder [
    disgeo:naam "Gemeente Kemeltoet" ;
  ] ;
  disgeo:bron [
    a disgeo:Observatie ;
    disgeo:onzekerheid 0.09 ;
    disgeo:uitgevoerdDoor [
      disgeo:naam "Opbladeren B.V." ;
    ] ;
    disgeo:uitgevoerdOp "2019-06-27"^^xsd:date ;
  ] ;
.
&lt;&lt; :de-witte-kastanje disgeo:aantalBladeren 372000 &gt;&gt;
  a disgeo:Gegeven ;
  nen3610:beginGeldigheid "2020-09-16"^^xsd:date ;
  nen3610:tijdstipRegistratie "2020-09-16T00:00:00Z"^^xsd:dateTime ;
  disgeo:bronhouder [
    disgeo:naam "Gemeente Kemeltoet" ;
  ] ;
  disgeo:bron [
    a disgeo:Observatie ;
    disgeo:onzekerheid 0.05 ;
    disgeo:uitgevoerdDoor [
      disgeo:naam "Opbladeren B.V." ;
    ] ;
    disgeo:uitgevoerdOp "2020-09-16"^^xsd:date ;
  ] ;
.
          </pre>
        </span>
      </div>
      <div id="tab-gegevens-a-rdf-star-object-en-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
@prefix : &lt;http://example.disgeo.nl/id/boom/&gt; .
@prefix doc: &lt;http://example.disgeo.nl/doc/boom/&gt; .
@prefix disgeo: &lt;http://example.disgeo.nl/def/disgeo#&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .
@prefix nen3610: &lt;http://definities.geostandaarden.nl/def/nen3610#&gt; .

doc:de-witte-kastanje-v8 {
  doc:de-witte-kastanje-v8 a nen3610:Registratiegegevens ;
    nen3610:versie &quot;8&quot;;
    nen3610:beginGeldigheid &quot;2019-09-10&quot;^^xsd:date ;
    nen3610:eindGeldigheid &quot;2020-05-31&quot;^^xsd:date ;
    nen3610:tijdstipRegistratie &quot;2019-09-19T00:00:00Z&quot;^^xsd:dateTime ;
    nen3610:eindRegistratie &quot;2020-05-31T00:00:00Z&quot;^^xsd:dateTime ;
    disgeo:bestaatUit [
      &lt;&lt; :de-witte-kastanje disgeo:aantalBladeren 350000 &gt;&gt;
        a disgeo:Gegeven ;
        nen3610:beginGeldigheid &quot;2019-09-10&quot;^^xsd:date ;
        nen3610:eindGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
        nen3610:tijdstipRegistratie &quot;2019-09-19T00:00:00Z&quot;^^xsd:dateTime ;
        nen3610:eindRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
        disgeo:bronhouder [
          disgeo:naam &quot;Gemeente Kemeltoet&quot; ;
        ] ;
        disgeo:bron [
          a disgeo:Observatie ;
          disgeo:onzekerheid 0.09 ;
          disgeo:uitgevoerdDoor [
            disgeo:naam &quot;Opbladeren B.V.&quot; ;
          ] ;
          disgeo:uitgevoerdOp &quot;2019-06-27&quot;^^xsd:date ;
        ] ;
    ] ;
  .

  :de-witte-kastanje a disgeo:Boom ;
    nen3610:geregistreerdMet doc:de-witte-kastanje-v8 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.2 ;
    disgeo:omtrek 49.4 ;
    disgeo:aantalBladeren 350000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}

doc:de-witte-kastanje-v10 {

  doc:de-witte-kastanje-v10 a nen3610:Registratiegegevens ;
    nen3610:versie &quot;10&quot;;
    nen3610:beginGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
    nen3610:tijdstipRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
    disgeo:bestaatUit [
      &lt;&lt; :de-witte-kastanje disgeo:aantalBladeren 372000 &gt;&gt;
        a disgeo:Gegeven ;
        nen3610:beginGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
        nen3610:tijdstipRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
        disgeo:bronhouder [
          disgeo:naam &quot;Gemeente Kemeltoet&quot; ;
        ] ;
        disgeo:bron [
          a disgeo:Observatie ;
          disgeo:onzekerheid 0.05 ;
          disgeo:uitgevoerdDoor [
            disgeo:naam &quot;Opbladeren B.V.&quot; ;
          ] ;
          disgeo:uitgevoerdOp &quot;2020-09-16&quot;^^xsd:date ;
        ] ;
    ] ;
  .

  :de-witte-kastanje a disgeo:Boom ;
    nen3610:geregistreerdMet doc:de-witte-kastanje-v10 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.9 ;
    disgeo:omtrek 50.9 ;
    disgeo:aantalBladeren 372000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>

#### Gegevens - uitwerking B

Het onderscheid tussen objecten vs gegevens wordt in deze uitwerking gemaakt via het gebruik van verschillende namespaces voor objecten, waardenlijsten, gegevens en instantiedata. In de Turtle/TriG serialisatie is dit terug te zien. In de json en xml serialisatie worden de namespaces niet meegenomen waardoor dit onderscheid verloren gaat.

Het is in deze uitwerking niet mogelijk om gegevens met metadata te scheiden van de objectweergave, omdat de gegevensmetadata integraal onderdeel is geworden van het modelleren van attributen. Vandaar dat alleen object-en-gegevens serialisaties gemaakt kunnen worden.<br>
Het is uiteraard mogelijk om deze af te leiden, maar hiervoor zou een apart uitwisselingsmodel nodig zijn.

##### XML

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-a-xml-object-en-gegevens">Gegevens B - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-b-xml-object-en-gegevens" class="tab-pane active">
        <span class="glyphicon glyphicon-fire glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
&lt;Boom&gt;
   &lt;beginGeldigheid&gt;1835-01-01&lt;/beginGeldigheid&gt;
   &lt;boom_aantalBladeren&gt;
      &lt;AantalBladeren&gt;
         &lt;aantalBladeren&gt;350000&lt;/aantalBladeren&gt;
         &lt;bron&gt;
            &lt;onzekerheid&gt;0.09&lt;/onzekerheid&gt;
            &lt;uitgevoerdDoor&gt;
               &lt;naam&gt;Opbladeren B.V.&lt;/naam&gt;
            &lt;/uitgevoerdDoor&gt;
            &lt;uitgevoerdOp&gt;2019-06-27&lt;/uitgevoerdOp&gt;
         &lt;/bron&gt;
         &lt;bronhouder&gt;
            &lt;naam&gt;Gemeente Kemeltoet&lt;/naam&gt;
         &lt;/bronhouder&gt;
         &lt;eindRegistratie&gt;2020-09-16T00:00:00Z&lt;/eindRegistratie&gt;
         &lt;tijdstipRegistratie&gt;2019-09-19T00:00:00Z&lt;/tijdstipRegistratie&gt;
      &lt;/AantalBladeren&gt;
      &lt;AantalBladeren&gt;
         &lt;aantalBladeren&gt;372000&lt;/aantalBladeren&gt;
         &lt;bron&gt;
            &lt;onzekerheid&gt;0.05&lt;/onzekerheid&gt;
            &lt;uitgevoerdDoor&gt;
               &lt;naam&gt;Opbladeren B.V.&lt;/naam&gt;
            &lt;/uitgevoerdDoor&gt;
            &lt;uitgevoerdOp&gt;2020-09-16&lt;/uitgevoerdOp&gt;
         &lt;/bron&gt;
         &lt;bronhouder&gt;
            &lt;naam&gt;Gemeente Kemeltoet&lt;/naam&gt;
         &lt;/bronhouder&gt;
         &lt;tijdstipRegistratie&gt;2020-09-16T00:00:00Z&lt;/tijdstipRegistratie&gt;
      &lt;/AantalBladeren&gt;
   &lt;/boom_aantalBladeren&gt;
   &lt;boom_hoogte&gt;
      &lt;Hoogte /&gt;
      &lt;Hoogte /&gt;
      &lt;Hoogte /&gt;
      &lt;Hoogte /&gt;
   &lt;/boom_hoogte&gt;
   &lt;boom_omtrek&gt;
      &lt;Omtrek /&gt;
      &lt;Omtrek /&gt;
   &lt;/boom_omtrek&gt;
   &lt;boom_plantjaar&gt;
      &lt;Plantjaar /&gt;
   &lt;/boom_plantjaar&gt;
   &lt;boom_soort&gt;
      &lt;Boomsoort /&gt;
      &lt;Boomsoort /&gt;
   &lt;/boom_soort&gt;
   &lt;boom_status&gt;
      &lt;Boomstatus /&gt;
   &lt;/boom_status&gt;
&lt;/Boom&gt;
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>

##### JSON

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-a-json-object-en-gegevens">Gegevens B - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-b-json-object-en-gegevens" class="tab-pane active">
        <span class="glyphicon glyphicon-fire glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
{ 
  "beginGeldigheid": "1835-01-01",
  "boom_aantalBladeren" : [
    {
      "bron" : {
        "onzekerheid": 0.09 ,
        "uitgevoerdDoor": {
          "naam": "Opbladeren B.V."
        },
        "uitgevoerdOp": "2019-06-27"
      },
      "bronhouder": {
        "naam": "Gemeente Kemeltoet"
      },
      "aantalBladeren": 350000,
      "tijdstipRegistratie": "2019-09-19T00:00:00Z",
      "eindRegistratie": "2020-09-16T00:00:00Z"
    } ,
    {
      "bron" : {
        "onzekerheid": 0.05 ,
        "uitgevoerdDoor": {
          "naam": "Opbladeren B.V."
        },
        "uitgevoerdOp": "2020-09-16"
      },
      "bronhouder": {
        "naam": "Gemeente Kemeltoet"
      },
      "aantalBladeren": 372000,
      "tijdstipRegistratie": "2020-09-16T00:00:00Z"
    }
  ],
  "boom_hoogte" : [ {}, {}, {}, {} ],
  "boom_omtrek" :  [ {}, {} ],
  "boom_plantjaar": [ {} ],
  "boom_soort": [ {}, {} ],
  "boom_status": [ {} ]
}
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>


##### RDF (Turtle/TriG)

<aside class="note">
  In de RDF uitwerking is er onderscheid gemaakt tussen de URI-patronen van objecten, en van attribuutobjecten per bronhoudertype.
</aside>

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-a-rdf-object-en-gegevens">Gegevens B - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-b-rdf-object-en-gegevens" class="tab-pane active">
        <span class="glyphicon glyphicon-fire glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
@prefix disgeo: &lt;http://ld.disgeo.nl/def/sor/objecttypen/&gt; .
@prefix data: &lt;http://ld.disgeo.nl/id/sor/data/&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .
@prefix rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#&gt; .
@prefix data-gem: &lt;http://ld.disgeo.nl/id/gem/data/&gt; .
@prefix data-prov: &lt;http://ld.disgeo.nl/id/prov/data/&gt; .<br>
data:Boom_1 disgeo:beginGeldigheid &quot;1835-01-01&quot;^^xsd:date;
disgeo:boom_aantalBladeren data-gem:aant_bladeren_2, data-gem:aant_bladeren_1;
disgeo:boom_hoogte data-gem:hoogte_1, data-gem:hoogte_2, data-gem:hoogte_3, data-gem:hoogte_4;
disgeo:boom_omtrek data-gem:omtrek_1, data-gem:omtrek_2;
disgeo:boom_plantjaar data-gem:plantjaar_1;
disgeo:boom_soort data-gem:soort_1, data-gem:soort_2;
disgeo:boom_status data-gem:Boomstatus_1 ;
disgeo:boom_monumentaleStatus data-prov:MonumentaleStatus_registratie_1, data-prov:MonumentaleStatus_registratie_2.<br>
data-gem:aant_bladeren_1 a rdfs:Resource;
  disgeo:bron [
    a disgeo:Observatie ;
    disgeo:onzekerheid 0.09 ;
    disgeo:uitgevoerdDoor [
      disgeo:naam &quot;Opbladeren B.V.&quot; ;
    ] ;
    disgeo:uitgevoerdOp &quot;2019-06-27&quot;^^xsd:date ;
  ] ;
  disgeo:bronhouder [
    disgeo:naam &quot;Gemeente Kemeltoet&quot; ;
  ] ;
  disgeo:aantalBladeren 350000;
  nen3610:tijdstipRegistratie &quot;2019-09-19T00:00:00Z&quot;^^xsd:dateTime ;
  nen3610:eindRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
.<br>
data-gem:aant_bladeren_2 a rdfs:Resource;
  disgeo-gem:onzekerheid 0.05;
  disgeo-gem:bron [
    a disgeo:Observatie ;
    disgeo:onzekerheid 0.05 ;
    disgeo:uitgevoerdDoor [
      disgeo:naam &quot;Opbladeren B.V.&quot; ;
    ] ;
    disgeo:uitgevoerdOp &quot;2020-09-16&quot;^^xsd:date ;
  ] ;
  disgeo:bronhouder [
    disgeo:naam &quot;Gemeente Kemeltoet&quot; ;
  ] ;
  disgeo:aantalBladeren 372000;
  nen3610:tijdstipRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
.
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>

#### Gegevens - uitwerking C

In uitwerking C is het mogelijk om zowel een objectbeschouwing, als een combinatie van beide te representeren.

Het is niet eenvoudig mogelijk om een aparte gegevens-serialisatie te maken. Deze is wel af te leiden, maar hiervoor zou een apart uitwisselingsmodel, of specifieke serialisatieregels, opgesteld moeten worden.

Uitwerking C laat het concreet representeren van de metadata aan de specifieke serialisatie over. Dit betekent dat metadata op verschillende manieren geserialiseerd kan worden. In deze uitwerking is een envoudig te bepalen variant per serialisatie gekozen.

##### XML

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-c-xml-object">Gegevens C - Object</a></li>
      <li class=""><a href="#tab-gegevens-c-xml-object-en-gegevens">Gegevens C - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-c-xml-object" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
&lt;bomen&gt;
  &lt;BoomVoorkomen&gt;
    &lt;Boom&gt;
      &lt;voorkomen&gt;
        &lt;Historie&gt;
          &lt;versie&gt;8&lt;/versie&gt;
          &lt;beginGeldigheid&gt;2019-09-10&lt;/beginGeldigheid&gt;
          &lt;eindGeldigheid&gt;2020-05-31&lt;/eindGeldigheid&gt;
          &lt;tijdstipRegistratie&gt;2019-09-10T00:00:00Z&lt;/tijdstipRegistratie&gt;
          &lt;eindRegistratie&gt;2020-05-31T00:00:00Z&lt;/eindRegistratie&gt;
        &lt;/Historie&gt;
      &lt;/voorkomen&gt;
      &lt;aantalBladeren&gt;350000&lt;/aantalBladeren&gt;
      &lt;hoogte&gt;22.2&lt;/hoogte&gt;
      &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
      &lt;monumentaleStatus&gt;monumentaal&lt;/monumentaleStatus&gt;
      &lt;omtrek&gt;49.4&lt;/omtrek&gt;
      &lt;soort&gt;
        &lt;code&gt;342938483&lt;/code&gt;
        &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
      &lt;/soort&gt;
      &lt;status&gt;aanwezig&lt;/status&gt;
    &lt;/Boom&gt;
  &lt;/BoomVoorkomen&gt;
  &lt;BoomVoorkomen&gt;
    &lt;Boom&gt;
      &lt;voorkomen&gt;
        &lt;Historie&gt;
          &lt;versie&gt;10&lt;/versie&gt;
          &lt;beginGeldigheid&gt;2020-09-16&lt;/beginGeldigheid&gt;
          &lt;tijdstipRegistratie&gt;2020-09-16T00:00:00Z&lt;/tijdstipRegistratie&gt;
        &lt;/Historie&gt;
      &lt;/voorkomen&gt;
      &lt;aantalBladeren&gt;372000&lt;/aantalBladeren&gt;
      &lt;hoogte&gt;22.9&lt;/hoogte&gt;
      &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
      &lt;omtrek&gt;50.9&lt;/omtrek&gt;
      &lt;soort&gt;
        &lt;code&gt;342938483&lt;/code&gt;
        &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
      &lt;/soort&gt;
      &lt;status&gt;aanwezig&lt;/status&gt;
    &lt;/Boom&gt;
  &lt;/BoomVoorkomen&gt;
&lt;/bomen&gt;
          </pre>
        </span>
      </div>
      <div id="tab-gegevens-c-xml-object-en-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
&lt;bomen&gt;
  &lt;BoomVoorkomen&gt;
    &lt;Boom&gt;
      &lt;voorkomen&gt;
        &lt;Historie&gt;
          &lt;versie&gt;8&lt;/versie&gt;
          &lt;beginGeldigheid&gt;2019-09-10&lt;/beginGeldigheid&gt;
          &lt;eindGeldigheid&gt;2020-05-31&lt;/eindGeldigheid&gt;
          &lt;tijdstipRegistratie&gt;2019-09-10T00:00:00Z&lt;/tijdstipRegistratie&gt;
          &lt;eindRegistratie&gt;2020-05-31T00:00:00Z&lt;/eindRegistratie&gt;
        &lt;/Historie&gt;
      &lt;/voorkomen&gt;
      &lt;aantalBladeren metadataOverData:href=&quot;#de-witte-kastanje-8-AantalBladerenMetadata&quot;&gt;350000&lt;/aantalBladeren&gt;
      &lt;hoogte&gt;22.2&lt;/hoogte&gt;
      &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
      &lt;monumentaleStatus&gt;monumentaal&lt;/monumentaleStatus&gt;
      &lt;omtrek&gt;49.4&lt;/omtrek&gt;
      &lt;soort&gt;
        &lt;code&gt;342938483&lt;/code&gt;
        &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
      &lt;/soort&gt;
      &lt;status&gt;aanwezig&lt;/status&gt;
    &lt;/Boom&gt;
    &lt;MetadataOverData metadataOverData:id=&quot;de-witte-kastanje-8-AantalBladerenMetadata&quot;&gt;
      &lt;beginGeldigheid&gt;2019-09-10&lt;/beginGeldigheid&gt;
      &lt;eindGeldigheid&gt;2020-09-16&lt;/eindGeldigheid&gt;
      &lt;tijdstipRegistratie&gt;2019-09-19T00:00:00Z&lt;/tijdstipRegistratie&gt;
      &lt;eindRegistratie&gt;2020-09-16T00:00:00Z&lt;/eindRegistratie&gt;
      &lt;bron&gt;
        &lt;onzekerheid&gt;0.09&lt;/onzekerheid&gt;
        &lt;uitgevoerdDoor&gt;
          &lt;naam&gt;Opbladeren B.V.&lt;/naam&gt;
        &lt;/uitgevoerdDoor&gt;
        &lt;uitgevoerdOp&gt;2019-06-27&lt;/uitgevoerdOp&gt;
      &lt;/bron&gt;
      &lt;bronhouder&gt;
        &lt;naam&gt;Gemeente Kemeltoet&lt;/naam&gt;
      &lt;/bronhouder&gt;
    &lt;/MetadataOverData&gt;
  &lt;/BoomVoorkomen&gt;
  &lt;BoomVoorkomen&gt;
    &lt;Boom&gt;
      &lt;voorkomen&gt;
        &lt;Historie&gt;
          &lt;versie&gt;10&lt;/versie&gt;
          &lt;beginGeldigheid&gt;2020-09-16&lt;/beginGeldigheid&gt;
          &lt;tijdstipRegistratie&gt;2020-09-16T00:00:00Z&lt;/tijdstipRegistratie&gt;
        &lt;/Historie&gt;
      &lt;/voorkomen&gt;
      &lt;aantalBladeren metadataOverData:href=&quot;#de-witte-kastanje-10-AantalBladerenMetadata&quot;&gt;372000&lt;/aantalBladeren&gt;
      &lt;hoogte&gt;22.9&lt;/hoogte&gt;
      &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
      &lt;omtrek&gt;50.9&lt;/omtrek&gt;
      &lt;soort&gt;
        &lt;code&gt;342938483&lt;/code&gt;
        &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
      &lt;/soort&gt;
      &lt;status&gt;aanwezig&lt;/status&gt;
    &lt;/Boom&gt;
    &lt;MetadataOverData metadataOverData:id=&quot;de-witte-kastanje-10-AantalBladerenMetadata&quot;&gt;
      &lt;beginGeldigheid&gt;2020-09-16&lt;/beginGeldigheid&gt;
      &lt;tijdstipRegistratie&gt;22020-09-16T00:00:00Z&lt;/tijdstipRegistratie&gt;
      &lt;bron&gt;
        &lt;onzekerheid&gt;0.05&lt;/onzekerheid&gt;
        &lt;uitgevoerdDoor&gt;
          &lt;naam&gt;Opbladeren B.V.&lt;/naam&gt;
        &lt;/uitgevoerdDoor&gt;
        &lt;uitgevoerdOp&gt;2020-09-16&lt;/uitgevoerdOp&gt;
      &lt;/bron&gt;
      &lt;bronhouder&gt;
        &lt;naam&gt;Gemeente Kemeltoet&lt;/naam&gt;
      &lt;/bronhouder&gt;
    &lt;/MetadataOverData&gt;
  &lt;/BoomVoorkomen&gt;
&lt;/bomen&gt;
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>

##### JSON

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-c-json-object">Gegevens C - Object</a></li>
      <li class=""><a href="#tab-gegevens-c-json-object-en-gegevens">Gegevens C - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-c-json-object" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
[
  {
    "voorkomen": {
      "versie": "8",
      "beginGeldigheid": "2019-09-10",
      "eindGeldigheid": "2020-05-31",
      "tijdstipRegistratie": "2019-09-10T00:00:00Z",
      "eindRegistratie": "2020-05-31T00:00:00Z"
    },
    "identificatie": "de-witte-kastanje",
    "status": "aanwezig",
    "soort": {
      "code": "342938483",
      "waarde": "Aesculus hippocastanum"
    },
    "hoogte": 22.2,
    "omtrek": 49.4,
    "aantalBladeren": 350000,
    "monumentaleStatus": "monumentaal"
  },
  {
    "voorkomen": {
      "versie": "10",
      "beginGeldigheid": "2020-09-16",
      "tijdstipRegistratie": "2020-09-16T00:00:00Z"
    },
    "identificatie": "de-witte-kastanje",
    "status": "aanwezig",
    "soort": {
      "code": "342938483",
      "waarde": "Aesculus hippocastanum"
    },
    "hoogte": 22.9,
    "omtrek": 50.9,
    "aantalBladeren": 372000,
    "monumentaleStatus": "monumentaal"
  }
]
          </pre>
        </span>
      </div>
      <div id="tab-gegevens-c-json-object-en-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
[
  {
    "voorkomen": {
      "versie": "8",
      "beginGeldigheid": "2019-09-10",
      "eindGeldigheid": "2020-05-31",
      "tijdstipRegistratie": "2019-09-10T00:00:00Z",
      "eindRegistratie": "2020-05-31T00:00:00Z"
    },
    "_metadataOverData": {
      "betreftKenmerk": "aantalBladeren",
      "betreftObject": "de-witte-kastanje",
      "betreftVersie": "8",
      "beginGeldigheid": "2019-09-10",
      "eindGeldigheid": "2020-09-16",
      "tijdstipRegistratie": "2019-09-19T00:00:00Z",
      "eindRegistratie": "2020-09-16T00:00:00Z",
      "bronhouder": {
        "naam": "Gemeente Kemeltoet"
      },
      "bron": {
        "onzekerheid": 0.09,
        "uitgevoerdDoor": {
          "naam": "Opbladeren B.V."
        },
        "uitgevoerdOp": "2019-06-27"
      }
    },
    "identificatie": "de-witte-kastanje",
    "status": "aanwezig",
    "soort": {
      "code": "342938483",
      "waarde": "Aesculus hippocastanum"
    },
    "hoogte": 22.2,
    "omtrek": 49.4,
    "aantalBladeren": 350000,
    "monumentaleStatus": "monumentaal"
  },
  {
    "voorkomen": {
      "versie": "10",
      "beginGeldigheid": "2020-09-16",
      "tijdstipRegistratie": "2020-09-16T00:00:00Z"
    },
    "_metadataOverData": {
      "betreftKenmerk": "aantalBladeren",
      "betreftObject": "de-witte-kastanje",
      "betreftVersie": "10",
      "beginGeldigheid": "2020-09-16",
      "tijdstipRegistratie": "2020-09-16T00:00:00Z",
      "bronhouder": {
        "naam": "Gemeente Kemeltoet"
      },
      "bron": {
        "onzekerheid": 0.05,
        "uitgevoerdDoor": {
          "naam": "Opbladeren B.V."
        },
        "uitgevoerdOp": "2020-09-16"
      }
    },
    "identificatie": "de-witte-kastanje",
    "status": "aanwezig",
    "soort": {
      "code": "342938483",
      "waarde": "Aesculus hippocastanum"
    },
    "hoogte": 22.9,
    "omtrek": 50.9,
    "aantalBladeren": 372000,
    "monumentaleStatus": "monumentaal"
  }
]
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>

##### RDF (Turtle/TriG)

Het is niet eenvoudig mogelijk om standaard RDF reificatie, of RDF* toe te passen voor uitwerking C. Dit komt omdat uitwerking C geen manier heeft om een individueel gegeven aan te wijzen, in tegenstelling tot uitwerking A. Waarschijnlijk is het wel mogelijk om dit af te leiden. De details daarvan zouden uitgewerkt moeten worden.

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-c-rdf-object">Gegevens C - Object</a></li>
      <li class="active"><a href="#tab-gegevens-c-rdf-object-en-gegevens">Gegevens C - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-c-rdf-object" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
@prefix : &lt;http://example.disgeo.nl/id/boom/&gt; .
@prefix doc: &lt;http://example.disgeo.nl/doc/boom/&gt; .
@prefix disgeo: &lt;http://example.disgeo.nl/def/disgeo#&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .<br>
doc:de-witte-kastanje-v8 {<br>
  doc:de-witte-kastanje-v8 a disgeo:Historie ;
    disgeo:versie "8";
    disgeo:beginGeldigheid "2019-09-10"^^xsd:date ;
    disgeo:eindGeldigheid "2020-05-31"^^xsd:date ;
    disgeo:tijdstipRegistratie "2019-09-19T00:00:00Z"^^xsd:dateTime ;
    disgeo:eindRegistratie "2020-05-31T00:00:00Z"^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    disgeo:voorkomen doc:de-witte-kastanje-v8 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.2 ;
    disgeo:omtrek 49.4 ;
    disgeo:aantalBladeren 350000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}<br>
doc:de-witte-kastanje-v10 {<br>
  doc:de-witte-kastanje-v10 a disgeo:Historie ;
    disgeo:versie "10";
    disgeo:beginGeldigheid "2020-09-16"^^xsd:date ;
    disgeo:tijdstipRegistratie "2020-09-16T00:00:00Z"^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    disgeo:voorkomen doc:de-witte-kastanje-v10 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.9 ;
    disgeo:omtrek 50.9 ;
    disgeo:aantalBladeren 372000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}
          </pre>
        </span>
      </div>
    </div>
    <div class="tab-content">
      <div id="tab-gegevens-c-rdf-object-en-gegevens" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
@prefix : &lt;http://example.disgeo.nl/id/boom/&gt; .
@prefix doc: &lt;http://example.disgeo.nl/doc/boom/&gt; .
@prefix disgeo: &lt;http://example.disgeo.nl/def/disgeo#&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .
@prefix meta: &lt;http://example.disgeo.nl/id/metadata-over-data/&gt;  .<br>
doc:de-witte-kastanje-v8 {<br>
  doc:de-witte-kastanje-v8 a disgeo:Historie ;
    disgeo:versie "8";
    disgeo:beginGeldigheid "2019-09-10"^^xsd:date ;
    disgeo:eindGeldigheid "2020-05-31"^^xsd:date ;
    disgeo:tijdstipRegistratie "2019-09-19T00:00:00Z"^^xsd:dateTime ;
    disgeo:eindRegistratie "2020-05-31T00:00:00Z"^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    disgeo:voorkomen doc:de-witte-kastanje-v8 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.2 ;
    disgeo:omtrek 49.4 ;
    disgeo:aantalBladeren 350000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .<br>
  meta:de-witte-kastanje-v8-aantalBladeren a digeo:MetadataOverData ;
    disgeo:betreftKenmerk disgeo:aantalBladeren ;
    disgeo:betreftObject :de-witte-kastanje ;
    disgeo:betreftVersie "8" ;
    disgeo:beginGeldigheid "2019-09-10"^^xsd:date ;
    disgeo:eindGeldigheid "2020-09-16"^^xsd:date ;
    disgeo:tijdstipRegistratie "2019-09-19T00:00:00Z"^^xsd:dateTime ;
    disgeo:eindRegistratie "2020-09-16T00:00:00Z"^^xsd:dateTime ;
    disgeo:bronhouder [
      disgeo:naam "Gemeente Kemeltoet" ;
    ] ;
    disgeo:bron [
      a disgeo:Observatie ;
      disgeo:onzekerheid 0.09 ;
      disgeo:uitgevoerdDoor [
        disgeo:naam "Opbladeren B.V." ;
      ] ;
      disgeo:uitgevoerdOp "2019-06-27"^^xsd:date ;
    ] ;
  .
}<br>
doc:de-witte-kastanje-v10 {<br>
  doc:de-witte-kastanje-v10 a disgeo:Historie ;
    disgeo:versie "10";
    disgeo:beginGeldigheid "2020-09-16"^^xsd:date ;
    disgeo:tijdstipRegistratie "2020-09-16T00:00:00Z"^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    disgeo:voorkomen doc:de-witte-kastanje-v10 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.9 ;
    disgeo:omtrek 50.9 ;
    disgeo:aantalBladeren 372000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .<br>
  meta:de-witte-kastanje-v10-aantalBladeren a digeo:MetadataOverData ;
    disgeo:betreftKenmerk disgeo:aantalBladeren ;
    disgeo:betreftObject :de-witte-kastanje ;
    disgeo:betreftVersie "10" ;
    disgeo:beginGeldigheid "2020-09-16"^^xsd:date ;
    disgeo:tijdstipRegistratie "2020-09-16T00:00:00Z"^^xsd:dateTime ;
    disgeo:bronhouder [
      disgeo:naam "Gemeente Kemeltoet" ;
    ] ;
    disgeo:bron [
      a disgeo:Observatie ;
      disgeo:onzekerheid 0.05 ;
      disgeo:uitgevoerdDoor [
        disgeo:naam "Opbladeren B.V." ;
      ] ;
      disgeo:uitgevoerdOp "2020-09-16"^^xsd:date ;
    ] ;
  .
}
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>

#### Gegevens - uitwerking D

##### XML

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-d-xml-object">Gegevens D - Object</a></li>
      <li class=""><a href="#tab-gegevens-d-xml-object-en-gegevens">Gegevens D - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-d-xml-object" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
&lt;bomen&gt;
  &lt;Boom&gt;
    &lt;registratiegegevens&gt;
      &lt;Registratiegegevens&gt;
        &lt;beginGeldigheid&gt;2019-09-10&lt;/beginGeldigheid&gt;
        &lt;eindGeldigheid&gt;2020-05-31&lt;/eindGeldigheid&gt;
        &lt;eindRegistratie&gt;2020-05-31T00:00:00Z&lt;/eindRegistratie&gt;
        &lt;tijdstipRegistratie&gt;2019-09-10T00:00:00Z&lt;/tijdstipRegistratie&gt;
        &lt;versie&gt;8&lt;/versie&gt;
      &lt;/Registratiegegevens&gt;
    &lt;/registratiegegevens&gt;
    &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
    &lt;aantalBladeren&gt;350000&lt;/aantalBladeren&gt;
    &lt;hoogte&gt;22.2&lt;/hoogte&gt;
    &lt;omtrek&gt;49.4&lt;/omtrek&gt;
    &lt;soort&gt;
      &lt;code&gt;342938483&lt;/code&gt;
      &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
    &lt;/soort&gt;
    &lt;status&gt;aanwezig&lt;/status&gt;
    &lt;monumentaleStatus&gt;monumentaal&lt;/monumentaleStatus&gt;
  &lt;/Boom&gt;
  &lt;Boom&gt;
    &lt;registratiegegevens&gt;
      &lt;Registratiegegevens&gt;
        &lt;beginGeldigheid&gt;2020-09-16&lt;/beginGeldigheid&gt;
        &lt;tijdstipRegistratie&gt;2020-09-16T00:00:00Z&lt;/tijdstipRegistratie&gt;
        &lt;versie&gt;10&lt;/versie&gt;
      &lt;/Registratiegegevens&gt;
    &lt;/registratiegegevens&gt;
    &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
    &lt;aantalBladeren&gt;372000&lt;/aantalBladeren&gt;
    &lt;hoogte&gt;22.9&lt;/hoogte&gt;
    &lt;omtrek&gt;50.9&lt;/omtrek&gt;
    &lt;soort&gt;
      &lt;code&gt;342938483&lt;/code&gt;
      &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
    &lt;/soort&gt;
    &lt;status&gt;aanwezig&lt;/status&gt;
    &lt;monumentaleStatus&gt;monumentaal&lt;/monumentaleStatus&gt;
  &lt;/Boom&gt;
&lt;/bomen&gt;
          </pre>
        </span>
      </div> 
      <div id="tab-gegevens-d-xml-object-en-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
&lt;bomen&gt;
  &lt;Boomregistratie&gt;
    &lt;Boom&gt;
      &lt;registratiegegevens&gt;
        &lt;Registratiegegevens&gt;
          &lt;beginGeldigheid&gt;2019-09-10&lt;/beginGeldigheid&gt;
          &lt;eindGeldigheid&gt;2020-05-31&lt;/eindGeldigheid&gt;
          &lt;eindRegistratie&gt;2020-05-31T00:00:00Z&lt;/eindRegistratie&gt;
          &lt;tijdstipRegistratie&gt;2019-09-10T00:00:00Z&lt;/tijdstipRegistratie&gt;
          &lt;versie&gt;8&lt;/versie&gt;
        &lt;/Registratiegegevens&gt;
      &lt;/registratiegegevens&gt;
      &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
      &lt;aantalBladeren&gt;
        &lt;AantalbladerenGegevens&gt;
          &lt;aantalBladeren&gt;350000&lt;/aantalBladeren&gt;
          &lt;beginGeldigheid&gt;2019-09-10&lt;/beginGeldigheid&gt;
          &lt;eindGeldigheid&gt;2020-05-31&lt;/eindGeldigheid&gt;
          &lt;tijdstipRegistratie&gt;2019-09-10T00:00:00Z&lt;/tijdstipRegistratie&gt;
          &lt;eindRegistratie&gt;2020-05-31T00:00:00Z&lt;/eindRegistratie&gt;
          &lt;bron xlink:href=&quot;#observatie-123&quot; xlink:type=&quot;simple&quot;/&gt;
          &lt;bronhouder xlink:href=&quot;#bronhouder-123&quot; xlink:type=&quot;simple&quot;/&gt;
        &lt;/AantalbladerenGegevens&gt;
      &lt;/aantalBladeren&gt;
      &lt;hoogte&gt;22.2&lt;/hoogte&gt;
      &lt;omtrek&gt;49.4&lt;/omtrek&gt;
      &lt;soort&gt;
        &lt;code&gt;342938483&lt;/code&gt;
        &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
      &lt;/soort&gt;
      &lt;status&gt;aanwezig&lt;/status&gt;
      &lt;monumentaleStatus&gt;monumentaal&lt;/monumentaleStatus&gt;
    &lt;/Boom&gt;
    &lt;Observatie gml:id=&quot;observatie-123&quot;&gt;
      &lt;onzekerheid&gt;0.09&lt;/onzekerheid&gt;
      &lt;uitgevoerdDoor&gt;Opbladeren B.V.&lt;/uitgevoerdDoor&gt;
      &lt;uitgevoerdOp&gt;2019-06-27&lt;/uitgevoerdOp&gt;
    &lt;/Observatie&gt;
    &lt;Bronhouder gml:id=&quot;bronhouder=123&quot;&gt;
      &lt;naam&gt;Gemeente Kemeltoet&lt;/naam&gt;
    &lt;/Bronhouder&gt;
  &lt;/Boomregistratie&gt;
  &lt;Boomregistratie&gt;
    &lt;Boom&gt;
      &lt;registratiegegevens&gt;
        &lt;Registratiegegevens&gt;
          &lt;beginGeldigheid&gt;2020-09-16&lt;/beginGeldigheid&gt;
          &lt;tijdstipRegistratie&gt;2020-09-16T00:00:00Z&lt;/tijdstipRegistratie&gt;
          &lt;versie&gt;10&lt;/versie&gt;
        &lt;/Registratiegegevens&gt;
      &lt;/registratiegegevens&gt;
      &lt;identificatie&gt;de-witte-kastanje&lt;/identificatie&gt;
      &lt;aantalBladeren&gt;
        &lt;AantalbladerenGegevens&gt;
          &lt;aantalBladeren&gt;372000&lt;/aantalBladeren&gt;
          &lt;beginGeldigheid&gt;2020-09-16&lt;/beginGeldigheid&gt;
          &lt;tijdstipRegistratie&gt;2019-09-19T00:00:00Z&lt;/tijdstipRegistratie&gt;
          &lt;bron xlink:href=&quot;#observatie-456&quot; xlink:type=&quot;simple&quot;/&gt;
          &lt;bronhouder xlink:href=&quot;#bronhouder-456&quot; xlink:type=&quot;simple&quot;/&gt;
        &lt;/AantalbladerenGegevens&gt;
      &lt;/aantalBladeren&gt;
      &lt;hoogte&gt;22.9&lt;/hoogte&gt;
      &lt;omtrek&gt;50.9&lt;/omtrek&gt;
      &lt;soort&gt;
        &lt;code&gt;342938483&lt;/code&gt;
        &lt;waarde&gt;Aesculus hippocastanum&lt;/waarde&gt;
      &lt;/soort&gt;
      &lt;status&gt;aanwezig&lt;/status&gt;
      &lt;monumentaleStatus&gt;monumentaal&lt;/monumentaleStatus&gt;
    &lt;/Boom&gt;
    &lt;Observatie gml:id=&quot;observatie-456&quot;&gt;
      &lt;onzekerheid&gt;0.05&lt;/onzekerheid&gt;
      &lt;uitgevoerdDoor&gt;Opbladeren B.V.&lt;/uitgevoerdDoor&gt;
      &lt;uitgevoerdOp&gt;2020-09-16&lt;/uitgevoerdOp&gt;
    &lt;/Observatie&gt;
    &lt;Bronhouder gml:id=&quot;bronhouder=456&quot;&gt;
      &lt;naam&gt;Gemeente Kemeltoet&lt;/naam&gt;
    &lt;/Bronhouder&gt;
  &lt;/Boomregistratie&gt;
&lt;/bomen&gt;
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>


##### JSON
<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-d-json-object">Gegevens D - Object</a></li>
      <li class=""><a href="#tab-gegevens-d-json-object-en-gegevens">Gegevens D - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-d-json-object" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
[
  {
    "registratiegegevens": {
      "versie": "8",
      "beginGeldigheid": "2019-09-10",
      "eindGeldigheid": "2020-05-31",
      "tijdstipRegistratie": "2019-09-10T00:00:00Z",
      "eindRegistratie": "2020-05-31T00:00:00Z"
    },
    "identificatie": "de-witte-kastanje",
    "status": "aanwezig",
    "soort": {
      "code": "342938483",
      "waarde": "Aesculus hippocastanum"
    },
    "hoogte": 22.2,
    "omtrek": 49.4,
    "aantalBladeren": 350000,
    "monumentaleStatus": "monumentaal"
  },
  {
    "registratiegegevens": {
      "versie": "10",
      "beginGeldigheid": "2020-09-16",
      "tijdstipRegistratie": "2020-09-16T00:00:00Z"
    },
    "identificatie": "de-witte-kastanje",
    "status": "aanwezig",
    "soort": {
      "code": "342938483",
      "waarde": "Aesculus hippocastanum"
    },
    "hoogte": 22.9,
    "omtrek": 50.9,
    "aantalBladeren": 372000,
    "monumentaleStatus": "monumentaal"
  }
]
          </pre>
        </span>
      </div>
      <div id="tab-gegevens-d-json-object-en-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
[
  {
    "registratiegegevens": {
      "versie": "8",
      "beginGeldigheid": "2019-09-10",
      "eindGeldigheid": "2020-05-31",
      "tijdstipRegistratie": "2019-09-10T00:00:00Z",
      "eindRegistratie": "2020-05-31T00:00:00Z"
    },
    "identificatie": "de-witte-kastanje",
    "status": {},
    "soort": {},
    "hoogte": {},
    "omtrek": {},
    "aantalBladeren": {
      "aantalBladeren": 350000,
      "beginGeldigheid": "2019-09-10",
      "eindGeldigheid": "2020-09-16",
      "tijdstipRegistratie": "2019-09-19T00:00:00Z",
      "eindRegistratie": "2020-09-16T00:00:00Z",
      "bronhouder": {
        "naam": "Gemeente Kemeltoet"
      },
      "bron": {
        "onzekerheid": 0.09,
        "uitgevoerdDoor": {
          "naam": "Opbladeren B.V."
        },
        "uitgevoerdOp": "2019-06-27"
      }
    }
    "monumentaleStatus": {}
  },
  {
    "registratiegegevens": {
      "versie": "10",
      "beginGeldigheid": "2020-09-16",
      "tijdstipRegistratie": "2020-09-16T00:00:00Z"
    },
    "_metadataOverData": {
      "betreftKenmerk": "aantalBladeren",
      "betreftObject": "de-witte-kastanje",
      "betreftVersie": "10",
    },
    "identificatie": "de-witte-kastanje",
    "status": {},
    "soort": {},
    "hoogte": {},
    "omtrek": {},
    "aantalBladeren": {
      "aantalBladeren": 372000,
      "beginGeldigheid": "2020-09-16",
      "tijdstipRegistratie": "2020-09-16T00:00:00Z",
      "bronhouder": {
        "naam": "Gemeente Kemeltoet"
      },
      "bron": {
        "onzekerheid": 0.05,
        "uitgevoerdDoor": {
          "naam": "Opbladeren B.V."
        },
        "uitgevoerdOp": "2020-09-16"
      }
    },
    "monumentaleStatus": {}
  }
]
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>



##### RDF (Turtle/TriG)

<div class="container--tabs">
  <section class="row">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab-gegevens-d-rdf-object">Gegevens D - Object</a></li>
      <li class=""><a href="#tab-gegevens-d-rdf-object-en-gegevens">Gegevens D - Object en Gegevens</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-gegevens-d-rdf-object" class="tab-pane active"> 
        <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
@prefix : &lt;http://example.disgeo.nl/id/boom/&gt; .
@prefix doc: &lt;http://example.disgeo.nl/doc/boom/&gt; .
@prefix disgeo: &lt;http://example.disgeo.nl/def/disgeo#&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .
@prefix nen3610: &lt;http://definities.geostandaarden.nl/def/nen3610#&gt; .<br>
doc:de-witte-kastanje-v8 {<br>
  doc:de-witte-kastanje-v8 a nen3610:Registratiegegevens ;
    nen3610:versie &quot;8&quot;;
    nen3610:beginGeldigheid &quot;2019-09-10&quot;^^xsd:date ;
    nen3610:eindGeldigheid &quot;2020-05-31&quot;^^xsd:date ;
    nen3610:tijdstipRegistratie &quot;2019-09-19T00:00:00Z&quot;^^xsd:dateTime ;
    nen3610:eindRegistratie &quot;2020-05-31T00:00:00Z&quot;^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    nen3610:geregistreerdMet doc:de-witte-kastanje-v8 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.2 ;
    disgeo:omtrek 49.4 ;
    disgeo:aantalBladeren 350000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}<br>
doc:de-witte-kastanje-v10 {<br>
  doc:de-witte-kastanje-v10 a nen3610:Registratiegegevens ;
    nen3610:versie &quot;10&quot;;
    nen3610:beginGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
    nen3610:tijdstipRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    nen3610:geregistreerdMet doc:de-witte-kastanje-v10 ;
    disgeo:status disgeo:Aanwezig ;
    disgeo:soort disgeo:342938483 ;
    disgeo:hoogte 22.9 ;
    disgeo:omtrek 50.9 ;
    disgeo:aantalBladeren 372000 ;
    disgeo:monumentaleStatus disgeo:Monumentaal ;
  .
}
          </pre>
        </span>
      </div> 
      <div id="tab-gegevens-d-rdf-object-en-gegevens" class="tab-pane">
        <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
        <span class="col-md-10">
          <pre>
@prefix : &lt;http://example.disgeo.nl/id/boom/&gt; .
@prefix doc: &lt;http://example.disgeo.nl/doc/boom/&gt; .
@prefix disgeo: &lt;http://example.disgeo.nl/def/disgeo#&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .
@prefix meta: &lt;http://example.disgeo.nl/id/metadata-over-data/&gt; .<br>
doc:de-witte-kastanje-v8 {<br>
  doc:de-witte-kastanje-v8 a disgeo:Historie ;
    disgeo:versie &quot;8&quot;;
    disgeo:beginGeldigheid &quot;2019-09-10&quot;^^xsd:date ;
    disgeo:eindGeldigheid &quot;2020-05-31&quot;^^xsd:date ;
    disgeo:tijdstipRegistratie &quot;2019-09-19T00:00:00Z&quot;^^xsd:dateTime ;
    disgeo:eindRegistratie &quot;2020-05-31T00:00:00Z&quot;^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    disgeo:registratiegegevens doc:de-witte-kastanje-v8 ;
    disgeo:status [] ;
    disgeo:soort [] ;
    disgeo:hoogte [] ;
    disgeo:omtrek [] ;
    disgeo:aantalBladeren [
      disgeo:aantalBladeren 350000 ;
      disgeo:beginGeldigheid &quot;2019-09-10&quot;^^xsd:date ;
      disgeo:eindGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
      disgeo:tijdstipRegistratie &quot;2019-09-19T00:00:00Z&quot;^^xsd:dateTime ;
      disgeo:eindRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
      disgeo:bronhouder [
        disgeo:naam &quot;Gemeente Kemeltoet&quot; ;
      ] ;
      disgeo:bron [
        a disgeo:Observatie ;
        disgeo:onzekerheid 0.09 ;
        disgeo:uitgevoerdDoor [
          disgeo:naam &quot;Opbladeren B.V.&quot; ;
        ] ;
        disgeo:uitgevoerdOp &quot;2019-06-27&quot;^^xsd:date ;
      ] ; 
    ] ;
    disgeo:monumentaleStatus [] ;
  .
}<br>
doc:de-witte-kastanje-v10 {<br>
  doc:de-witte-kastanje-v10 a disgeo:Historie ;
    disgeo:versie &quot;10&quot;;
    disgeo:beginGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
    disgeo:tijdstipRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
  .<br>
  :de-witte-kastanje a disgeo:Boom ;
    disgeo:voorkomen doc:de-witte-kastanje-v10 ;
    disgeo:status [] ;
    disgeo:soort [] ;
    disgeo:hoogte [] ;
    disgeo:omtrek [] ;
    disgeo:aantalBladeren [
      disgeo:aantalBladeren 372000 ;
      disgeo:beginGeldigheid &quot;2020-09-16&quot;^^xsd:date ;
      disgeo:tijdstipRegistratie &quot;2020-09-16T00:00:00Z&quot;^^xsd:dateTime ;
      disgeo:bronhouder [
        disgeo:naam &quot;Gemeente Kemeltoet&quot; ;
      ] ;
      disgeo:bron [
        a disgeo:Observatie ;
        disgeo:onzekerheid 0.05 ;
        disgeo:uitgevoerdDoor [
          disgeo:naam &quot;Opbladeren B.V.&quot; ;
        ] ;
        disgeo:uitgevoerdOp &quot;2020-09-16&quot;^^xsd:date ;
      ] ;
    ] ;
    disgeo:monumentaleStatus [] ;
  .
}
          </pre>
        </span>
      </div>
    </div>
  </section>
</div>