# Verslag 17e expertgroepbijeenkomst
23 september 2021

## Agenda
Geen agenda rondgestuurd

Aanwezig: Dick, Gabriella, Pano, Jan, Paul, Niels, Lennart, en Linda

## Gedetailleerde aantekeningen van het gesprek

### Plannen tot eind 2021

Onderwerp | status / % gereed per 31-12-2021 (ambitie)
----------|---------------------------------
Modelleerprincipes | vastgesteld door expertgroep (levend document) 
Scope document Bestuurlijke gebieden | besproken met BZK en vastgesteld
Lessons learned High5’s | definitief
Modellering historie en levensloop | minimal viable product 
Modellering metadata | minimal viable product
Modellering identificatie | minimal viable product
Modellering waardelijsten | concept
Modellering autorisatie-eisen | 2022
Modellering geometrie | 2022
Scope document Netwerken | concept

Op basis van bovenstaande tabel gaan we in de expertgroep de komende maanden verder met de modellering van metadata; historie en levensloop; identificatie; en waardelijsten. Authorisatiegegevens en geometrie komen pas volgend jaar aan de orde. Lennart vraagt of geometrie niet belangrijker voor de meeste gebruikers is dan metadata. Dit zou zo kunnen zijn, maar we hebben op dit moment niemand die de prioriteit aangeeft van onderwerpen, dus de volgorde hebben we als informatiemodelleurs zelf op ons eigen gevoel bepaald.

### Metadata voortgang & discussie
- Pano geeft een overzicht van onze huidige ideeën over het modelleren van metadata, waarbij de metadata gescheiden worden van de gegevens die echt over het object gaan. Dit maakt het gebruiken van gegevens in samenhang beter mogelijk. Hij zoomt met name in op de provenance (herkomstgegevens) van informatieobjecten / gegevens. Hierbij is een Nederlandse vertaling van het W3C Provenance model toegepast.
- Lennart: een ander voordeel van het scheiden van metadata / object is dat je de metadata later kunt opnemen, aanpassen, foutjes corrigeren, zonder dat je daarmee het object aanpast.
- Er is gesproken over de plek van herkomstgegevens in het informatiemodel. Is dit metadata over de registratiegegevens, of over het informatieobject? In ieder geval: het gaat niet om de herkomst van het gebouw maar de herkomst van de gegevens over het gebouw. 
- Opgemerkt werd dat de modellering van herkomstgegevens niet te complex gemaakt moet worden: van elk gegeven moet je je afvragen waarom je dit wilt weten. Echter, hoe ingewikkeld je de herkomstmodellering ook maakt, als je deze gegevens loskoppelt van het object heb je daar geen last van. De registratiegegevens zitten wel 1 op 1 gekoppeld aan het object, de provenance gegevens niet 1 op 1. Idealiter zouden deze gegevens later opgenomen moeten kunnen worden dan de objectgegevens zonder dat daarmee ook het object wijzigt. 
- Wat voor werk ligt er nog op het gebied van metadata?
	- metadata op attribuutniveau; dit kunnen we voor ons uit schuiven. Hangt af van of we de SOR voorlopig bovenop de huidige administraties gaan realiseren. 
	- InOnderzoek is wel nu al relevant, wordt al toegepast. Dit aspect moeten we wel dit jaar nog  meenemen.
- Bij het modelleerwerk moeten we goed voor ogen houden wat er in de uitwisseling nodig is. Misschien is een rijk model daar niet nodig, althans in de uitlevering. Het informatiemodel is een uitwisselmodel, geen registratie model. I.e. we leggen in het model vast wat we willen uitwisselen; dus welke gegevens een bronhouder moet aanleveren, en welke er voor gebruikers te krijgen zijn. maar het specificeert niet HOE de gegevens worden opgeslagen. 
- Lennart vraagt zich af of relaties 'onder historie worden opgeslagen'. Daarbij speelt ook: het is van belang (het heeft impact op implementatie) welk object eigenaar van de relatie is. Misschien is het daarom goed om in het informatiemodel de relaties twee kanten uit te specificeren. Dan kan er in de uitwisseling en registratie gekozen worden. Lennart gaat hier twee voorbeelden voor uitwerken [uitwerking inmiddels gereed](
https://github.com/Geonovum/disgeo-imsor/blob/master/issues/60-metadata/muteren-informatieobject.md). Dit staat de volgende keer op de agenda.
- En verder op de agenda het vastleggen van kwaliteitseisen.