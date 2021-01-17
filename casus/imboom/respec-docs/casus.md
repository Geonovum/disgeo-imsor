# De casus
In deze fictieve casus wordt er door provincies en gemeenten informatie vastgelegd over bomen. De informatie die
wordt vastgelegd gaat uit van onderstaand *conceptueel* informatiemodel.

<figure id="imsor-model-boom">
    <img src="/casus/imboom/media/imsor-model-boom.png" alt="Informatiemodel bomen">
    <figcaption>Informatiemodel bomen</figcaption>
</figure>

De gemeentes houden volgende kenmerken van bomen bij:
- status
- soort
- hoogte
- omtrek
- aantalBladeren
- plantjaar
- geometrie

De provincies houden de volgende kenmerken van bomen bij:
- monumentaleStatus

Zowel de gemeentes als de provincies houden ook metagegevens behorende bij gegevens (zie bijlage onderste blok).
De gemeente houdt gegevens bij voor kenmerk:
<ul>
  <li><b>hoogte</b>:</li>
  <ul>
    <li>nauwkeurigheid van meting: een decimale waarde tussen 0 en 1, waarbij 0 het minst nauwkeurig en het meest nauwkeurigheid is.</li>
    <li>de uitvoerder van de meting: de instantie die de meting heeft uitgevoerd het moment van meten</li>
  </ul>
  <li><b>omtrek</b>:
  <ul>
    <li>nauwkeurigheid van meting: een decimale waarde tussen 0 en 1, waarbij 0 het minst nauwkeurig en het meest nauwkeurigheid is.</li>
    <li>de uitvoerder van de meting: de instantie die de meting heeft uitgevoerd</li>
    <li>het moment van meten</li>
  </ul>
<li><b>aantalBladeren</b>:
  <ul>
    <li>onzekerheid van telling: een decimale waarde tussen de 0 en 1, waarbij 0 het minst onzeker en 1 het meest onzeker is.</li>
    <li>de uitvoerder van de telling: de instantie die de telling heeft uitgevoerd</li>
    <li>het moment van tellen</li>
  </ul>
<li><b>plantjaar</b>:
  <ul>
    <li>sprake van schatting: een boolean waarde die aangeeft of het jaar van planten een schatting is ofniet.</li>
  </ul>
</ul>

De provincie houdt gegevens bij voor kenmerk:

<li><b>monumentaleStatus</b>:
  <ul>
    <li>brondocument: het brondocument, identificeerbaar met een nummer (CharacterString), waarin de beslissing staat voor de specifiek status van de boom.</li>
  </ul>
</ul>

## De witte kastanje
In gemeente Kemeltoet staat een Aesculus hippocastanum (Witte paardenkastanje). Deze boom mag worden gerekend tot de fraaiste bomen in gemeente Kemeltoet en de provincie Neder-Over-Bakzijl. Prominent staat hij centraal in het park aan de oostzijde van een pittoresk kasteeltje. Het park is rond 1830 ontworpen door de fameuze architect J. van Rooij. Gedurende de inrichting van de tuin liet hij de kastanje en enkele omringende esdoorns planten. De takken van de kastanje reiken rondom tot op de grond.

<u>Bij de gemeente staat geregistreerd voor deze boom:</u>

**status**:
- Op `10-03-1984` is geregistreerd dat de status `aanwezig` is

**soort**:
- Op `10-03-1984` is geregistreerd dat de soort code `1138` en waarde `Aesculus hippocastanum` is.
- Vanwege een codestelsel aanpassing is op 23-11-2010 geregistreerd dat de soort code `342938483` en waarde `Aesculus hippocastanum` is.

**hoogte**:
- Op `17-12-2008` is geregistreerd dat de hoogte `21.3` meter was, met nauwkeurigheid `0.85`, gemeten door `De Boomspecialist` op `16-12-2008`
- Op `02-06-2018` is geregistreerd dat de hoogte `22.2` meter was, met nauwkeurigheid `0.95`, gemeten door `Groentechniek BVC` op `25-05-2018`
- Op `28-06-2019` is geregistreerd dat de hoogte `22.2` meter was, met nauwkeurigheid `0.95`, gemeten door `Groentechniek BVC` op `27-06-2019`
- Op `31-05-2020` is geregistreerd dat de hoogte `22.9` meter was, met nauwkeurigheid `0.98`, gemeten door `Groentechniek BVC` op `31-05-2020`

**omtrek**:
- Op `28-06-2019` is geregistreerd dat de omtrek `49.4` meter was, met nauwkeurigheid `0.95`, gemeten door `Groentechniek BVC` op `27-06-2019`
- Op `31-05-2020` is geregistreerd dat de omtrek `50.9` meter was, met nauwkeurigheid `0.98`, gemeten door `Groentechniek BVC` op `31-05-2020`

**aantalBladeren**:
- Op `19-09-2019` is geregistreerd dat het aantal bladeren `350000` was, met onzekerheid van `0.09`, berekend door `Opbladeren B.V.` op `10-09-2019`
- Op `16-09-2020` is geregistreerd dat het aantal bladeren `372000` was, met onzekerheid van `0.05`, berekend door `Opbladeren B.V.` op `16-09-2020`

**plantjaar**:
- Op `10-03-1984` is geregistreerd dat de plantjaar `1835` is, en is de indicatie dat dit een geschatte waarde is op `true` gezet.

De gemeente heeft de beginGeldigheid van het eerste voorkomen van gegevens over deze boom bepaald als `01-01-1835`.

<u>Bij de provincie staat geregistreerd voor deze boom:</u>

**monumentaleStatus**:
- Op `09-11-1998` is geregistreerd dat de monumentaleStatus `niet monumentaal` was
- Op `25-03-2012` is geregistreerd dat de monumentaleStatus `monumentaal` was, op basis van brondocument met nummer `PVNOB-2012423`

De provincie heeft de beginGeldigheid van het eerste voorkomen van gegevens over deze boom bepaald als `09-11-1998`.
