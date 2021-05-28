# Verslag 11e expertgroepbijeenkomst
27 mei 2021

## Agenda: 
1. Introductie: korte toelichting van de consultatieresultaten van het inhoudelijke eisen document, korte toelichting over het parkeren van Levensloop modellering, eventuele andere relevante nieuwtjes.
1. Modelleerprincipes samenhangende objectenregistratie: 
	- Bespreking van het Modelleerprincipes document en de daarin beschreven definities, uitgangspunten, principes en richtlijnen. Deze zullen een belangrijke basis vormen voor ons verdere werk en ons hopelijk helpen in het maken van modelleerkeuzes. Het is wel de bedoeling dat dit een levend document wordt dat nog kan worden aangevuld, waarbij duidelijk is aangegeven welke uitgangspunten/principes/richtlijnen door de expertgroep gedragen worden.
	- Doel van de bespreking is om een eerste beeld te krijgen van de meningen in de expertgroep over de punten in dit document. We willen graag weten welke punten jullie allemaal onderschrijven en bij welke punten nog discussie en/of nadere uitwerking nodig is. Daarnaast willen we graag weten of er nog punten ontbreken. 
	- Zie https://geonovum.github.io/disgeo-imsor/modelleerprincipes. 

Aanwezig: Annemiek, Lennart, Michel, Gabriella, Pano, Niels, Rik, Paul, Jan, Dick.

# Gedetailleerde aantekeningen van het gesprek
Linda opent de vergadering. Mededeling: In afstemming met de werkgroep Inhoud is het onderwerp “Levensloop” voor nu even geparkeerd, in afwachting van een mogelijke wijziging (versimpeling) van de inhoudelijke eisen ten aanzien van levensloop van objecten. Vandaag gaan we het dus hebben over de modelleerprincipes, Pano zal deze introduceren.  

**Definities:**
- Pano: we hebben een aantal definities voor begrippen opgenomen in het document. Dit is geen complete lijst, het gaat om een aantal begrippen die van belang zijn voor het ontwikkelen van de samenhangende objectenregistratie [omdat de termen soms anders worden geinterpreteerd door mensen].
- Michel: Ik heb nog wel mijn bedenkingen bij dit onderscheidt [gaat over de definities van 'conceptueel model' en 'logisch model'], maar zolang we het alleen in deze context gebruiken is het ok. 
[Over definitie van 'object'en 'informatieobject'] In de NEN2660, als we het over een objecttypen model hebben (OTL), zijn de instanties hiervan objecten. Hier gaat het bij de definitie van 'object' over een werkelijk ding, het concept gaat over het object, en een informatieobject is een instantie van een objecttype. Wat is een objecttype dan? Is het ook een soort informatieobject, of is het een set gegevens over iets wat aanwijsbaar is in de werkelijkheid? Het 'informatieobject' hier is het 'object' in NEN2660, en 'concept' in NEN2660 lijkt synoniem te zijn van 'objecttype' hier. 
- Er ontstaat ook discussie rond de definitie van 'gegeven'. Lennart ziet een linked data bias. Michel ziet het als een generieke beschrijving (het gaat om key-value pairs), wat pas invulling in linked data zou krijgen wanneer je het ook over subjects/objects hebt.  
- Lennart: [voorstel voor nieuwe definitie 'gegeven'] "Een gegeven is de waarde, het feit, die we hebben geconstateerd voor een eigenschap van een object."
- Paul merkt op dat het jammer is dat we deze definities weer moeten beschrijven. 
Maar aangezien blijkt dat het toch niet altijd goed wordt toegepast in huidige modellen, is het toch belangrijk om dit weer aan de orde te laten komen.
- [voorstel aanpassing van definitie 'metadata']: het gaat om 'gegevens over gegevens', niet 'gegevens over informatieobjecten' - anders zeg je dat je geen metadata kunt opnemen over de directe eigenschappen. 

**Uitgangspunten uit andere disgeo documenten:**
- Michel: bij samenhang [over punten uit architectuurvisie/beleidsvisie] gaat het niet alleen om samenhang in de data (hoewel dit een primair doel is), maar ook om samenhang in de objecttyperingen. 
- Michel: [bij beleidsvisie punt 4] moeten we het ook hebben over wijzigingen in de definities (van bv objecttypen)? 
- Lennart: [bij beleidsvisie punt 4, mogelijke vraag voor Inhoud] gaat het om vrijwilligheid in de implementatie of in het informatiemodel?
- Michel: [punt 4] heeft niet met objecten (instanties) te maken, maar echt met objecttypen. Misschien moet je er een disclaimer bij zetten [in de specs?] om duidelijk te maken dat het impact kan hebben als je iets doorvoert. 
- Paul: Dit is een belangrijke vraag, want aanpassen van een informatiemodel is niet heel lastig - maar het kan wel veel impact hebben op de standaard en de implementatie daarvan. 

**Uitgangspunten:**

**U1:**
- Lennart: fundamentele vraag: de registraties hebben al informatiemodellen, dus het is raar om een informatiemodel te maken; eigenlijk wil je samenhang tussen die modellen; het lijkt hier [U1] te gaan om een semantisch model, niet een informatiemodel.
- Jan: gegevens = data; informatie = bewerkte data. Er is een verschil tussen samenhang op het niveau van data en het niveau van informatie.
- Niels: je moet dit [U1] lezen in licht van andere definities hierbinnen. Dan lijkt het hier te gaan om samenhang tussen de objecten. Het zegt nog niks over samenhang tussen bestaande IMs.
- Michel: het is niet duidelijk of IMSOR huidige IMs gaat vervangen of dat het hierboven ligt. 
- Paul: IMSOR lijkt te duiden op een topmodel.
- Lennart: Als voorbeeld [om de positie van SOR beter te begrijpen]: als er een relatie is tussen een brug (BGT) en een perceel (BRK) moet je dat in de registraties kunnen registreren, of alleen op een conceptueel niveau?. Als dit tweede het geval is, dan is het afleidbaar (ie bewerkte data), en dit hoort niet thuis in een logisch model.
- Niels: Heel simpel gezegd [over U1] willen we meer samenhang dan in de huidige registraties. Mensen hadden bij het opstellen van deze punten waarschijnlijk niet voor ogen hoe dit precies moest. Dit kunnen we nog op verschillende manieren realiseren. Zo moet je dit uitgangspunt interpreteren.

**U2:**
- Michel: Het gaat hierbij ook om internationale standaarden. [voorstel voor aanpassing van de titel]: 'nationale' weglaten, of 'nationale en internationale standaarden' gebruiken.
- Lennart: Bij 'nationale standaarden' gaat het meestal over een interpretatie/adoptie (ie localised version) van internationale standaarden. Dit is belangrijk aangezien je in de natioanle context concretere afspraken maakt over alle opties die beschreven staan in de internationale versies van de standaarden.

**U3:**
- Paul: Bij de modelleermethodes moet ook iets worden gezegd over het belang van validatie mechanismes, en of er mogelijkheden zijn om te valideren voor elke methode/paradigma (want het lijkt belangrijk om te kunnen valideren in het geval van de SOR). 
- Misschien dekt 'graaf' toch niet de lading (GraphQL is bv redelijk OO). 
- Bij het voorbeeld ontstaan er twijfels over het eigenschap 'documentnummer'. Pano ziet het niet als een eigenschap van het pand, Michel merkt op dat het om een gecombineerde externe key lijkt te gaan. Lennart legt uit dat het om een audit trail van een pand gaat, en dat ze destijds de keuze hebben gemaakt om het op deze impliciete wijze te modelleren. Dit had eigenlijk niet in een conceptueel model hoeven staan - maar in een logisch model zou het wel kunnen, aangezien je dan wel met historie/trails kunt werken. De eigenschap/relatie is echter lastig te begrijpen en kan tot silo-denken leiden, dit moeten we zien te vermijden. 

**U4**
- Michel: Wanneer je data hebt wordt dit lastiger, want dan moet het bv backwards-compatible zijn, etc.
- Het is ook handig om iets te zeggen over versie-management, werken met vastgestelde versies. 

**U5**
- Michel: beter van balans spreken, niet prioriteit. 
- Lennart: deels mee eens, wel een blocking issue met de prioriteit: als je een SOR in nederland wil realiseren heb je meer aandacht nodig voor de semantiek/goed bedenken van de betekenis van dingen - dit zou dan boven de gebruikers moeten staan. 
- Rik: dit is iets wat meer tractie moet krijgen, zodat je maatwerk oplossingen uit de weg gaat. Vaak wijk je af van standaarden wanneer je opdrachtgever iets vraagt, eigenlijk zou je het omkeren en willen zeggen tegen gebruikers: heb je wel deze behoefte? (Dus misschien ook belangrijk om te voorkomen dat je aan allerlei exotische wensen/eisen gaat voldoen.)
- Jan: [over 'overheidsgebruikers']: is dat inclusief "bedrijven met een publieke taak (zoals bv. Netbeheerders)? Handig deze ook mee te nemen, aangezien ze ook in de categorie 'verplicht gebruik' zitten. 

**Principes**

**P1**
- Lennart: zou dit niet ambitieuzer kunnen? We kunnen zeggen dat als we het over dezelfde concepten hebben, dat we het ook expliciet aangeven. 
- Michel: zoals een uniform unique identifier. Dit zou echt iets toevoegen aan de samenhang, als we kunnen zeggen dat we het over hetzelfde ding hebben. [voorstel voor aanpassing van dit principe]: 'we gaan niet voor een unique id, maar we maken het wel mogelijk om relaties te leggen wanneer we het hebben over hetzelfde object (bv, door 'sameAs' relaties toe te staan)'. 
- Paul: ik lees dat je gegevens los wil trekken van de dingen waar ze betrekking op hebben. Alleen dan begrijp ik niet meer goed wat een informatieobject is. Wat is het 'herbruikbare' hier? lijkt te duiden op een ID, niet het object zelf.
Lennart: Dit is een bottom-up formulering, ik denk dat top-down hier beter bij past (als ik over hetzelfde object in de werkelijkheid meer informatie vastleg willen we deze semantische samenhang op zo'n manier realiseren dat we weten dat het over hetzelfde object gaat).
- [Voorstel voor aanpassing van principe]: de term 'herbruikbaar' veranderen - denk liever aan iets zoals 'linkbaar' of 'combineerbaar'. Ook iets over metadata opnemen in deze stelling, en de formulering herzien. Ook kijken naar een invulling van dit principe, waarbij we bv iets kunnen zeggen over het opnemen van 'sameAs'-achtige relaties.
- Paul: Een onderwerp als inwinningsregels zou ook een relatie hiermee kunnen hebben.

**P2**
- [Voorstel voor aanpassing van principe]: om het concreter te maken kunnen we zeggen 'objecttypes moeten dezelfde naam hebben, of naar dezelfde concepten verwijzen.'
- Paul: lastig, bij mij hangen kenmerken samen met de objecttypes, het lijkt alsof dat hier ook weer los wordt getrokken. 
- Er zijn twee verschillende views: je zou kunnen zeggen dat je dingen kan combineren als ze hetzelfde objecttype hebben (via een 'sameAs' relatie, bv), of dat dingen combineerbaar zijn als hun objecttypes gebaseerd zijn op hetzelfde concept.
- Michel: Het zou verhelderend zijn als we een voorbeeld (bv van de BAG en BGT) kunnen maken met de twee mogelijke links of afgestemde IDs/afgestemde klassen en de rol van IMSOR daarin.
- Lennart: Lijkt me handig als we de verschillende soorten samenhang kunnen presenteren met voorbeelden (semantische samenhang, logische samenhang, etc). 
- Twee 'paden' voor samenhang worden onderscheiden: een pad waarbij semantische verbanden en algoritmes/specificaties een grote rol spelen, en een pad waarbij URIs/IDs die instanties linken de voorkeur heeft. 

**Conclusie:** Het was niet mogelijk om alle modeleerprincipes langs de gaan, bij de volgende meeting zullen we dit moeten afronden (het gaat om P3, P4 en de richtlijnen). Via Github kunnen de behandelde punten verder worden besproken. De voorstellen voor aanpassingen zullen we ook behandelen/verwerken. Het is belangrijk om een concreter beeld te krijgen van (het soort) samenhang dat we willen bereiken met de realisatie van de SOR, dit is van belang voor onze opdracht. 
