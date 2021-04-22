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
	- Nadeel van [uitwerking 1](https://github.com/Geonovum/disgeo-imsor/discussions/28): daarin kun je niet meerdere plannen tegelijk hebben. Het verschil is dat je bij 1b ook een toekomstmutatie registreert.
	- [Uitwerking 2](https://github.com/Geonovum/disgeo-imsor/discussions/29): 
		- Als het geplande gerealiseerd is, sluit je het geplande object af en neem je de nieuwe gegevens over in het bestaande object.
		- Paul: voordeel van 2b is dat je geen conventie over de id constructie af hoeft te spreken [dankzij de toevoeging van expliciete relaties]. Dit is een nadeel bij 2a. 
	- [Uitwerking 3](https://github.com/Geonovum/disgeo-imsor/discussions/31): 
		- Ruud en Dick bevestigen: brondocumenten zijn binnen scope van de SOR dus het modelleren van een apart uitgesplitst plan (een specifiek soort brondocument), plus een gepland object, is wel denkbaar. Ruud: brondocumenten blijven onderdeel van de SOR, alleen de verplichting [zoals in de BAG nu] komt te vervallen. Vraag: is het 'verhardingsplan' [in 3b] een generieke vorm van brondocument, of een speciale vorm? 
		Sommige mensen zien het 'verhardingsplan' als een plan om iets te veranderen aan een fysiek object, anderen zien het als een generiek plandocument dat bij een gepland object hoort. Een belangrijke vraag hierbij is: willen mensen bij de fysieke objecten iets over de vergunning lezen, of willen ze zien hoe het object er in de toekomst uitziet? Functioneel gezien willen ze beide: gebruikers willen weten hoe het object er in de toekomst uit ziet. En willen nadere documentatie over het geplande object, bv een vergunning of luchtfoto, kunnen achterhalen. Via de informatie in het het brondocument moet dit kunnen.
		- NB: Pano heeft bij het uitwerken nog niet heel hard nagedacht over richting van relaties. Je zou in uitwerking 2 nog een extra relatie tussen 'geplande verharding' naar een 'verhardingsplan' kunnen leggen. 
	- [Uitwerking 4](https://github.com/Geonovum/disgeo-imsor/discussions/33): 
		- Er zijn in de groep nogal wat vragen en er is veel uitleg nodig om deze uitwerking te begrijpen. Dat is wel een nadeel: moeilijker te begrijpen. 
        - De status bij registratiegegevens geeft aan of de geregistreerde gegevens wel of niet overeen komen met de werkelijke toestand - dus je kunt alleen een geplande/gerealiseerde status aan de registratiegegevens toekennen. Het`status ontwerp ja/nee` noemen is misschien duidelijker, als gegeven bij registratieobject, zo wordt het ook in de DSO gedaan. 
        - Een mogelijk voordeel [ten opzichte van uitwerking 3] is dat hier wordt gesproken over 'verhardingen' en niet 'geplande verhardingen', wat voor software misschien makkelijker te implementeren is volgens Lennart. Wel moet je telkens de 'high level' ontwerp status meenemen als je iets over gepland/gerealiseerd wil bevragen. 
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
		- Niels: Vanuit LD perspectief (waarbij meerdere typeringen van een ding kunnen voorkomen) zie ik hier oplossingen voor [voor het in samenhang bevragen van verschillende representaties]. Maar als je vanuit de relationele manier van werken denkt wordt het complexer. 
		- Paul: iets te veel expliciete metaconstructies
		- Niels: vindt dat [de expliciete meta constructies] juist fijn. 
		- Michel: Misschien is het geen 'informatieobject' of 'representatie' maar NEN 2660 Toestand.
        - Rik: legt zich erbij neer dat deze uitwerking niet favoriet is.
- Linda stelt voor om één van de uitwerkingen te kiezen en die verder uit te gaan werken. 
	- Linda: kiest 2a, 2b ook een optie.
	- Lennart: kiest 2
	- Ruud: kiest 2, maar wel met de nuance dat je een uitzondering moet kunnen maken voor eenvoudige wijzigingen. Discussie over eenvoudige wijzigingen, die je via een toekomstmutatie opneemt ipv volgens uitwerking 2, volgt. Moet er wel of niet sprake zijn van 2 manieren om iets uit te drukken? Wanneer is het 'eenvoudig' en wanneer niet, wat is de regel hiervoor?
	- Niels: oplossing in scope zoeken: deze eenvoudige wijzigingen niet in de SOR laten bestaan maar pas opnemen als de wijziging is gerealiseerd (wanneer er behoefte is om dit vast te leggen in de SOR)
	- Meer informatie over deze opnames zouden terecht kunnen komen in leveringsspecificaties, of bij het vastleggen van de populatie - het kan in tekst uitgedrukt worden.  
	- Ruud: maar dan wel mogelijk maken dat je een toekomstmutatie invoert [op het moment dat er een toepassing is van een simpele kenmerkverandering/geometriewijziging]. Tijdreizen in de toekomst moet mogelijk zijn.
	- Lennart: maar dit betekent dus dat je al zeker bent dat er een verandering wordt doorgevoerd, het is geen plan (er is geen twijfel over of de wijzigingen doorgevoerd/gerealiseerd worden). KOOP heeft dit ook met vastgestelde wetten die pas ingaan in de toekomst, met zekerheid.
	- Lennart: als planstatus maar niet in gerealiseerde objecten terecht komt. Dan gaat het mis. Bij een toekomstmutatie zeg je dus status Gerealiseerd en beginGeldigheid datum in de toekomst.
	- Michel: je moet dan vastleggen wanneer iets een plan is en wanneer gewoon een kleine verandering. Dat is ook complex.
	- Ruud: het object moet het object blijven, dat is persistent. 
	- Lennart: als je dus een gepland object hebt, en het is gerealiseerd, zorg je dat de wijziging door wordt gevoerd in het bestaande object. Dit kan zelfs met een automatische trigger.
- Conclusie: de consensus is om uitwerking 2 verder te gaan uitwerken. Daarbij 'simpele gevallen' meenemen, en brondocument meenemen in het model [uit uitwerking 4]. Hierbij is het interessant om te kijken naar de relatie tussen informatieObject (uit NEN 2660) en het brondocument; MDTO kan ook meegenomen worden. 

