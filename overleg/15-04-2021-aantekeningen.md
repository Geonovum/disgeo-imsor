# Verslag 9e expertgroepbijeenkomst 
15 april 2021

## Agenda: 
1.	Levensloop: Hoe gaan we dit modelleren. We hopen hier tijdens dit 9e overleg een knoop over door te kunnen hakken. 
Ter voorbereiding heeft Pano een aantal [discussietopics](https://github.com/Geonovum/disgeo-imsor/discussions) hierover aangemaakt op Github. Lees deze alvast door en laat je reactie achter! Ongezouten meningen zijn ook welkom 😉 
Op basis van de reacties vullen wij de voor- en nadelenlijstjes weer aan zodat we tijdens de bijeenkomst dit allemaal op een rijtje hebben en een goede beslissing kunnen maken.
2. [verwijderd] 

Aanwezig: Annemiek, Lennart, Gabriella, Pano, Niels, Rik, en Paul. Jan en Dick schuiven later aan. En als gast Ruud Kathmann.

# Gedetailleerde aantekeningen van het gesprek
Linda opent de vergadering. Als tweede agendapunt hadden we oorspronkelijk staan om het over de modelleerprincipes te hebben, maar we hebben besloten toch de hele vergadering aan levensloop te wijden. 

- Pano licht de verschillende uitwerkingen voor het modelleren van levensloop allemaal kort toe. Deze staan beschreven in de Github repository onder [Discussions](https://github.com/Geonovum/disgeo-imsor/discussions).
	- Nadeel van [uitwerking 1](https://github.com/Geonovum/disgeo-imsor/discussions/28): daarin kun je niet meerdere plannen tegelijk hebben
	- [Uitwerking 2](https://github.com/Geonovum/disgeo-imsor/discussions/29): 
		- Als het geplande gerealiseerd is, sluit je het geplande object af en neem je de nieuwe gegevens over in het bestaande object.
		- Paul: voordeel van 2b is dat je geen conventie over de id constructie af hoeft te spreken. Dit is een nadeel bij 2a. 
	- [Uitwerking 3](https://github.com/Geonovum/disgeo-imsor/discussions/31): 
		- Ruud en Dick bevestigen: brondocumenten zijn binnen scope van de SOR dus het modelleren van een apart uitgesplitst plan (een specifiek soort brondocument), plus een gepland object, is wel denkbaar.
		- functioneel: gebruikers willen weten hoe het object er in de toekomst uit ziet. En willen nadere documentatie over het geplande object, bv een vergunning of luchtfoto, kunnen achterhalen. Via de informatie in het het brondocument moet dit kunnen.
		- NB: Pano heeft bij het uitwerken nog niet heel hard nagedacht over richting van relaties.
	- [Uitwerking 4](https://github.com/Geonovum/disgeo-imsor/discussions/33): 
		- Er zijn in de groep nogal wat vragen en er is veel uitleg nodig om deze uitwerking te begrijpen. Dat is wel een nadeel: moeilijker te begrijpen. 
        - `status ontwerp ja/nee` is misschien duidelijker, als gegeven bij registratieobject, zo heet het in DSO.
	- [Uitwerking 5](https://github.com/Geonovum/disgeo-imsor/discussions/34): 
		- De statuslijst is verschillend voor de 2 registraties, je kunt dus niet één precies hetzelfde informatiemodel gebruiken voor beide registraties, dit is een nadeel.
		- Tijdreizen is moelijker, dit moet bv in bovenliggende service worden gerealiseerd. Dit valt volgens Lennart overigens wel mee, je maakt eigenlijk 2 subdomeinen.
		- Je kunt meerdere plannen na elkaar hebben, via de tijdgeldigheid.
	- [Uitwerking 6](https://github.com/Geonovum/disgeo-imsor/discussions/36): 
		- Deze wordt toegelicht door Rik. Hij wil het object van zijn representatie scheiden, omdat het object buiten nog niet is veranderd, je wil alleen een nieuwe representatie alvast weergeven. Het duurt even voordat het de groep duidelijk wordt, ook deze is wat lastig uit te leggen. Het is semantisch zuiverder, meer atomair gemodelleerd, maar niet gebruikelijk om dit zo te modelleren.
		- Het fysiek object heeft geen status (dit is een foutje in het diagram), status zit bij het representatie object.
		- Paul: de vraag is of het wat oplost
		- Michel vindt het wel een goed idee, wel afstemmen met NEN 2660
		- Rik: essentie is het onderscheid tussen operatie/onderhoud representaties en ontwerp representaties.
		- Paul: deze scheiding zou wellicht wel op veel plekken impact hebben
		- Pano: nadeel: moeilijker te bevragen; er zit weinig informatie bij het object zelf, de Verharding, je moet dus altijd door gaan zoeken bij de gerelateerde objecten.
		- Paul: iets te veel meta
		- Niels: vindt dat juist fijn
		- Michel: Misschien is het geen 'informatieobject' of 'representatie' maar NEN 2660 Toestand.
        - Rik: legt zich erbij neer dat deze uitwerking niet favoriet is.
- Linda stelt voor om één van de uitwerkingen te kiezen en die verder uit te gaan werken. 
	- Linda: kiest 2a, 2b ook een optie.
	- Lennart: kiest 2
	- Ruud: kiest 2, maar wel met de nuance dat je een uitzondering moet kunnen maken voor eenvoudige wijzigingen. Discussie over eenvoudige wijzigingen, die je via een toekomstmutatie opneemt ipv volgens uitwerking 2, volgt. Moet er wel of niet sprake zijn van 2 manieren om iets uit te drukken? Wanneer is het 'eenvoudig' en wanneer niet, wat is de regel hiervoor?
	- Niels: oplossing in scope zoeken: deze eenvoudige wijzigingen niet in de SOR laten bestaan maar pas opnemen als de wijziging is gerealiseerd.
	- Ruud: maar dan wel mogelijk maken dat je een toekomstmutatie invoert. Tijdreizen in de toekomst moet mogelijk zijn.
	- Lennart: als planstatus maar niet in gerealiseerde objecten terecht komt. Dan gaat het mis. Bij een toekomstmutatie zeg je dus status Gerealiseerd en beginGeldigheid datum in de toekomst.
	- Michel: je moet dan vastleggen wanneer iets een plan is en wanneer gewoon een kleine verandering. Dat is ook complex.
	- Ruud: het object moet het object blijven, dat is persistent. 
	- Lennart: als je dus een gepland object hebt, en het is gerealiseerd, zorg je dat de wijziging door wordt gevoerd in het bestaande object. Dit kan zelfs met een automatische trigger.
- Conclusie: de consensus is om uitwerking 2 verder te gaan uitwerken. Daarbij 'simpele gevallen' meenemen, en brondocument meenemen in het model.

