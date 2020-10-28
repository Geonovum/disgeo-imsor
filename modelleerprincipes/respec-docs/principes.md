# Principes

De modelleerprincipes worden hieronder nader uiteengezet...

## **P1**. Objecten zijn herbruikbaar

| | | |
|-|-|-|
|  **id** | P1 |
| **Stelling** | Objecten zijn (her)bruikbaar in verschillende registraties |
| **Rationale** | Wanneer we samenhang willen moet een objectbeschrijving vanuit de ene registratie hergebruikt kunnen worden in een andere registratie. Zij het als verwijzing, of omdat de andere registratie ook gegevens beschrijft over hetzelfde object. |
| **Implicaties** | TODO |

**Relaties**

invulling van:
* [**U1**](#u1-informatiemodel-bevordert-samenhang)

**Voorbeelden**

TODO

## **P1.1**. Objecttypes zijn herbruikbaar

| | | |
|-|-|-|
| **id** | P1.1 |
| **Stelling** | Objecttypes zijn (her)bruikbaar in verschillende registraties. |
| **Rationale** | Om [**P1**](#p1-objecten-zijn-herkbruikbaar) te realiseren moeten ook objecttypes hebruikbaar zijn in verschillende registraties. |
| **Implicaties** | Dit houdt in dat de gegevens die vastgelegd worden over objecten, op basis van het objecttype, herbruikbaar moeten zijn.|

**Relaties**

afgeleid van:
* [**P1**](#p1-objecten-zijn-herbruikbaar)

**Voorbeelden**

TODO

## **P1.1.1**. Alleen directe eigenschappen
| | | |
|-|-|-|
| **id** | P1.1 |
| **Stelling** | Alleen directe eigenschappen komen voor op een objecttype. |
| **Rationale** | Om herbruikbaarheid te bevorderen moet een objecttype leiden tot objectbeschrijvingen die herkenbaar zijn onafhankelijk van de registratiecontext. Het modelleren van directe eigenschappen bevordert dit, omdat deze eigenschappen een essentieel aspect van het object beschrijven.<br><br>(TODO beter formuleren) |
| **Implicaties** | TODO|

**Relaties**

afgeleid van:
* [**P1.1**](#p1-1-objecttypes-zijn-herbruikbaar)

**Voorbeelden**

TODO

## **P2**. Consistent gebruik van objecttypering voor soorten geo-objecten

Het conceptuele model gebruikt een taxonomische structuur (met klasse-subklasse relaties) voor het modelleren van geo-informatieobjecten, waarbij elk sub-object op zijn minst 1 verplichte attribuut kent die hem onderscheidt van zijn 'parent'. Blijkt dit niet het geval te zijn, dan wordt het gemodelleert als een attribuutwaarde van het attribuut 'type'. 

Of gebruik gemaakt kan worden van keuze construct

<!-- ## **P4**. Onderscheid in verschillende soorten metadata 

Er zijn vier verschillende 'soorten' metadata in de SOR: -->