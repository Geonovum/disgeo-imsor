# Verslag 20ste expertgroepbijeenkomst
16 december 2021

## Agenda
- Modellering van identificatie
- Voortzetting expertgroep Q1 2022

Aanwezig: Rik, Niels, Dick, Paul, Pano, Linda

## Gedetailleerde aantekeningen van het gesprek
Pano presenteert de ideeën voor identificatie. 

Vragen, antwoorden, discussie, en conclusies uit deze sessie: 

Paul: wissel je de functionele identificatie uit? In NEN 3610 is het gebruikelijk om functionele en technische id beide uit te wisselen. We stellen dit ons voor als de opname van een attribuut `identificatie` dat de functionele identificatie als waarde bevat. 

Welke dingen moeten identificeerbaar zijn? De meeste objecten, en misschien ook individuele gegevens, als er metadata over die gegevens opgenomen wordt. De 'meeste' objecten, en niet alle, omdat er bijvoorbeeld deelobjecten kunnen zijn waarvan het niet nodig is om ze apart te identificeren. Moeten informatieobjecten (setjes metadata) ook identificeerbaar zijn? We denken van niet. Het lijkt niet nodig om een informatieobject, i.e. een set `Registratiegegevens`, te hergebruiken. 

'Voor elk object moet ook een URI als identificatie (afleidbaar) zijn': maak hiervan: **"een technische URI conform de NL URI strategie"**. 

De intentie is om in de SOR identificatie ook het attribuut `versie`, dat in NEN 3610:2021 (concept) bij `Registratiegegevens` zit, toe te passen. 

Hoe verhoudt SOR identificatie zich tot UOI? We vinden in het SOR modelleerteam dat het UOI niet concreet genoeg is om dingen uit over te nemen. We kunnen wel zeggen dat we het UOI scenario over het maken van een federatieve verwantschapslaag overnemen en uitwerken. 

Scenario 1: in dit scenario zou er een nieuwe SOR registratie ontstaan die de huidige geobasisregistraties vervangt en waarin alle objecten een nieuw id krijgen dat in de SOR ontstaat. We achten dit iig op korte termijn niet waarschijnlijk. Dick geeft aan dat dit wel het ideaalplaatje is, maart dat het een federatief systeem zou zijn, dus met meerdere database-tonnetjes in de tekening.

Scenario 2: de SOR is een federatieve laag bovenop de bestaande registraties die je intact laat en waarvan de bestaande identificaties hergebruikt worden. Alleen nieuw te introduceren objecttypen krijgen in dit scenario een SOR-id. 

In de verwantschapslaag / koppeltabel heb je relaties nodig die de verwantschap aangeven. De verwantschapsrelatie owl:sameAs is in bijna alle gevallen te sterk en kan beter niet gebruikt worden. dc:subject is iets minder sterk en zou eventueel wel gebruikt kunnen worden, maar wordt meestal gebruikt om te verwijzen naar begrippen, niet naar objecten. Wellicht moeten er eigen verwantschapsrelaties gemaakt worden.

Scenario 3: zoals 2, maar dan met voor elk object een SOR-id. Er is een SOR-id service nodig. Dit scenario zou goed zijn om in een transitieperiode te gebruiken. Op termijn zou je dan van de oude id's afscheid nemen en de SOR-id in de registraties opnemen. Voor de implementatie is er geen verschil tussen 2 en 3, voor de gebruikers is er een groot verschil: zij gebruiken alleeen het SOR-id en kunnen daarmee alle gegevens over een object opvragen. 

Een ID-koppeltabel of in de woorden van Jan 'Sleutelregister' geeft wel beheerlast.

NB in scenario 2 en 3 heb je geen SOR informatieobjecten en dergelijke; het is alleen een federatieve laag bovenop de bestaande voorzieningen. De vraag is dan hoe we de wensen, die we in generieke onderwerpen hebben uitgewerkt, hieraan kunnen relateren.

Om te kiezen moeten we weten of we uitgaan van een nieuwe SOR en dus SOR objecttypen definieren; of uitgaan van een laag bovenop de huidige registraties. Maar scenario 2 is iets eenvoudiger maar daarmee kan je ook bijna alles. Wat we zouden kunnen doen is **beschrijven bij deze scenario's wat je wel en niet kan** en dit aan gebruikers voorleggen. Dit gaan we als huiswerk doen. 

Vanuit de architectuurgroep zou eigenlijk verzameld moeten worden wat de gebruikersgroepen zijn en wat die willen.

De expertgroep gaat volgend jaar verder, in ieder geval in Q1 met een frequentie van 1x per maand.

Evaluerend: alle onderwerpen (bijna) zijn geraakt, maar niet afgerond. Probeer dit wel te doen of in ieder geval tijdelijke keuzes te maken. Dit willen we gaan doen tijdens het uitmodelleren van de eerste component. 