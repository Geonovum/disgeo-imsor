# Verslag 23e expertgroepbijeenkomst
24 maart 2022

Aanwezig: Pano, Linda, Dick, Paul, Lennart, Rik, Niels

Onderwerp: 
- Geometrie modellering zoals beschreven in [generieke onderwerpen document](https://geonovum.github.io/disgeo-imsor/documentatie/#geometrie)
- Vervolg expertgroep

## Geometrie modellering

Pano presenteert onze verdere uitwerking - optie 3 - op basis van de input van vorige keer. We hebben ervoor gekozen in deze optie om geometrie niet als zelfstandig object te modelleren. Dit zou veel impact hebben op registraties en ook op tooling zoals imvertor. Hoe komt geometrie eigenlijk tot stand? Er wordt gemeten, er ontstaan plaatsbepalingspunten, hieruit wordt geometrie afgeleid. Het model willen we dus ook beginnen op te bouwen bij plaatsbepalingspunten; op basis van O&M. 

De observed property is een punt van het grondvlak van het object. De feature of interest is het object (bv een gebouw). Als je de meetpunten combineert kun je er gegevens uit afleiden, zoals de geometrie van het grondvlak van het gebouw. 

De relatie tussen observed property en het specifieke kenmerk dat daarvan afgeleid is, is impliciet. De vraag is hoe erg dat is. Conceptueel zou je willen zeggen dat het gegeven, geometrie, is afgeleid uit bepaalde meetpunten. Dit lijkt op wat we eerder hebben besproken over metagegevens op attribuutniveau. 

Je zou ook nog een gegeven Plaatsbepaling ertussen kunnen modelleren waarmee je expliciet maakt dat het gegeven bij het object hoort en dat het is afgeleid van een set plaatsbepalingen. 

Paul: de vorige keer zeiden we dat de observed property de grondvlakgeometrie is. Dan zou je de relatie toch kunnen afleiden uit de gegevens. 

Pano: Daar hebben we het over gehad en dat klopt toch niet helemaal; de waarnemer observeert niet het hele grondvlak maar een specifiek punt in de werkelijkheid. 

Lennart: Dit lijkt wel op hoe de BRK het doet. 

Dick: Waarom heet het geometrie2dGrondvlak, dit kan toch ook 3D zijn? 

Pano: Dit is puur ter illustratie, we hebben een objecttype uit de high 5 gebruikt. 

Dick: Hoe je aan de plaatsbepalingspunten komt maakt hierbij niet uit? Het kan ook zijn dat ze worden afgeleid uit een BIM model bijvoorbeeld. Je bepaalt dan vanuit het BIM model wat het grondvlak is waar het object het terrein snijdt. 

Niels: dat is wel een nieuwe interpretatie van het plaatsbepalingspunt. Misschien moet je dan wel kijken hoe het BIM model tot stand is gekomen. 

Pano: een BIM model kan ook de herkomst zijn van een geometrie, per object kan dit anders zijn. 

Paul: ik zou de relatie 2 kanten op leggen of een tweede relatie leggen van Gebouw naar plaatsbepalingspunt met de rol 'grondvlak afgeleid van' of iets dergelijks. En ik mis toch de expliciete link naar het grondvlak gegeven. 

Niels, Lennart: de meeste gebruikers hebben genoeg aan het grondvlak. Die gebruikers die wel de plaatsbepalingspunten willen gebruiken, lezen dan in de documentatie hoe de impliciete relatie in elkaar zit. Maar wat was ook al weer precies de use case? 

Linda: in de BGT zijn er gebruikers die van elk van het coordinatenpaar van het grondvlak de nauwkeurigheid willen weten. 

Linda: wat vinden we nu van het model in optie 3? 

Meeste reacties zijn positief; Rik is in principe niet blij met de keuze om geometrie niet als object te modelleren, maar kan er mee leven. 

Paul: Enige mogelijke probleempunt is nog de situatie dat een object meerdere geometrieën heeft die allebei van plaatsbepalingen zijn afgeleid; en dat 1 plaatsbepaling bij beide geometrieën gebruikt wordt. Dan moet je meerdere observedProperties hebben. 

Niels: de aanname is by convention dat dat niet voorkomt. 

Ander punt: kan een plaatsbepalings gaan over meer dan één feature of interest? 

Linda: in de BGT is dit zelfs een regel, dat aan elkaar grenzende objecten plaatsbepalingspunten moeten delen met elkaar. Maar in O&M heeft de relatie misschien een kardinaliteit van 1 ... Ik heb het opgezocht, de relatie is [1..*]. 

Allen: het model zoals het in optie 3 staat is acceptabel. 

Linda: dan kunnen we dit onderdeel afronden. Wat we nog zouden kunnen bespreken is topologische relaties. Dit speelt bij bestuurlijke gebieden. Je zou dit kunnen modelleren als expliciete relaties zoals 'ligt binnen' tussen verschillende soorten bestuurlijke gebieden. 

Paul: Nieuwe NEN3610 zegt hier iets over. De relaties hebben gestandaardiseerde namen, deze zou ik overnemen. Verder kun je de relaties expliciet modelleren danwel opnemen als constraints. 

Pano: Expliciet modelleren heeft de voorkeur. 

Linda: Het lijkt me dat gebruikers deze relaties wel willen gebruiken. 

Pano: Ja, ik ken bijvoorbeeld de wens vanuit de DSO om de relatie tussen gemeentes en provincie te gebruiken. 

Dick: is dit dan de bestuurlijke of de ruimtelijke relatie? 

Pano: dat is een uitzoekpunt. 

Paul: en waar komt de behoefte vandaan? 

In EMSO staat de relatie benoemd; het is een uitzoekpunt of deze relatie impliciet of expliciet moet zijn. Als je de relatie kan afleiden (op basis van de geometrie), kun je deze in informatieproducten wel gebruiken. 

Andere overweging, bij de totstandkoming van deze gegevens; heeft het toegevoegde waarde om topologische regels vast te leggen in je IM op basis waarvan je gegevens kan valideren? 

Discussie hierover: er zullen allerlei regels een rol spelen bij de totstandkoming, maar de vraag is of je deze ook vast moet leggen in je model als een soort validatieregels. Kennis over het totstandkomingsproces is aan de andere kant wel nuttig vanuit gebruik. We doen het voor de gebruikers, dus uitzoekpunt is waar de gebruikers behoefte aan hebben. 

Niels: in EMSO staan ook uitgangspunten over vlakdekkendheid etc. Dit is niet hetzelfde als ruimtelijke relaties tussen bestuurlijke gebieden. 3D vlakdekkendheid is misschien nog lastig te bereiken. Het is misschien niet zozeer iets dat moet terugkomen in je informatiemodel maar meer een onderwerp voor kwaliteitseisen die je beschrijft.

Verder hebben we over geometrie op dit moment nu niets te bespreken. 

**Uitzoekpunten:**
- Is de relatie tussen bv gemeenten en provincie de relatie tussen de bestuurlijke eenheden of de ruimtelijke relatie? 
- Wat is de gebruikersbehoefte: moet de relatie expliciet zijn of kan deze impliciet zijn?

## Volgende expertgroep bijeenkomst
Even gesproken over hoe nu verder, en wat het volgende onderwerp op de agenda van de expertgroep zal zijn. 

Linda: we zijn begonnen met het modelleren van concrete subonderwerpen van de SOR. Misschien kan de expertgroep opschuiven richting een reviewrol in een korter overleg met vaste frequentie, waarbij we ad hoc een langere sessie plannen als dat nodig is. 

Lennart: er zijn nog wel generieke onderwerpen die we niet afgerond hebben. Bijvoorbeeld over de relatie tussen eigenschappen en informatieobjecten, met name over de richting van relaties, beide kanten op vs één richting (en welke dan). [hier wat discussie over]. Dit is ook een onderwerp in de MIM werkgroep, maar het is dit beter in deze expertgroep te bespreken vanwege het raakvlak met NEN 2660. 

**Besloten: dit onderwerp zetten we volgende keer op de agenda.**
