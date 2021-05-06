# Verslag 10e expertgroepbijeenkomst
6 mei 2021

## Agenda: 
1. Levensloop: Op basis van de commentaren uit onze vorige meeting hebben we uitwerking 2 [[verder uitgewerkt](https://github.com/Geonovum/disgeo-imsor/discussions/38)]. Deze uitwerking bespreken we graag met jullie. 
2. Vervolgsessies

Aanwezig: Annemiek Pano Niels Ruud Dick Gabriella Jan Linda Lennart Rik
Afgemeld: Paul, Michel

## Gedetailleerde aantekeningen van het gesprek

### Uitwerking Levensloop
Volgens Ruud zijn er in de recente consultatie van het inhoud document reacties binnengekomen die impact op de eisen aan levensloop zouden kunnen hebben. Opmerkingen uit de meest recente consultatie van het Eisen aan inhoud doucment kunnen we echter nog niet meenemen; deze zijn nog niet op een rijtje gezet en afgewogen. 

Pano neemt ons verder mee in de modellering van levensloop.  
- In het model hebben we relaties van plan naar object gelegd; zodat het object niet wijzigt als er iets met plannen gebeurt. In services kan de relatie beide kanten op gebruikt worden.
- Ook is realisatiedatum toegevoegd op ObjectGepland om toekomstsituatie te kunnen bekijken. 
- Om te toetsen of het model werkt hebben we ook voorbeeldinstanties en -data gemaakt.
- Lennart: Waarom is er voor realisatiedatum gekozen en niet om dan beginGeldigheid met datum in de toekomst in te vullen? Pano: geldigheid gaat over 'wanneer is het plan er' en realisatiedatum gaat over 'wanneer is het beoogd dat dit is uitgevoerd'. Daardoor kun je 2 vragen stellen: welke plannen zijn er, en hoe ziet dit er op een bepaald moment in de toekomst uit. 
- Ruud merkt op dat we ook toekomstige datum in gerealiseerd object kunnen opnemen voor simpele toekomstmutaties en dat je dat ook in plaats van de uitwerking 2 zou kunnen doen. Hij mist nu de toekomstmutatie. Pano: in dit model kun je beide doen. Met een toekomstmutatie kun je geen alternatieve plannen hebben. Je kunt er dus niet alles mee afvangen want dit komt bv bij panden wel voor, heeft navraag bij WG inhoud geleerd. 
- Ruud: waarom isPlanVan en heeftGeleidTot allebei op 1 object? Pano: De ene is om alle plannen te vinden, de ander alleen om het plan te vinden dat heeft geleid tot het gewijzigde object. Lennart: een andere manier zou zijn om bij het plan op te nemen of het gerealiseerd is, teruggetrokken is, enz. 
- Lennart: je kan ook werken met een gereserveerde identificatie, bij een geplande verharding, die gereserveerd is voor het nog te realiseren object, dat er op dat moment nog niet is. In de implementatie is dat handig, voor situaties dat het object er nog niet is maar je er wel naar wilt verwijzen. Is die use case er? Ja, Ruud en Jan noemen hier voorbeelden van. Bv energieleverancier die wil koppelen aan een pand of verblijfsobject dat er nog niet is. 
- Je zou dit kunnen oplossen door naar het geplande object te wijzen en die relatie om te leggen naar het gerealiseerde object zodra dat er is. Of: voor die gevallen zou je een toekomstmutatie kunnen opvoeren op het moment dat de realisatiedatum zeker genoeg is, want dan kan je naar dat toekomstige object alvast verwijzen; maar dan heb je een toekomstmutatie én een gepland object over hetzelfde. Rik: Nadeel is wel dat dit verwarrend kan zijn en lastiger te implementeren. 
- Een werkwijze / werkafspraak zou kunnen zijn dat je, zodra duidelijk is dat een plan gerealiseerd gaat worden en wanneer, ook de bijbehorende toekomstmutatie opvoert.
- Rik: Zo'n gepland object, bevat dat alleen het gewijzigde deel van de geometrie, of de hele geometrie opnieuw? Pano: dat laatste. Niels: dat komt niet per se overeen met de huidige werkpraktijk althans niet bij wegen, bij panden zou het misschien wel zo gaan. Maar voor wegbeheer wordt de geometrie soms nog verder ingedeeld omdat er een klein stukje wordt onderhouden. Ruud: dit is een afbakeningskwestie. Voor beheer kan je kleinere vlakken hebben. 
- Lennart: toekomstmutatie opvoeren kan op het moment dat bronhouder 'besluit' neemt (geen juridisch besluit bedoeld). Dat zijn meestal wel bestendige momenten, intentieverklaringen. Rond het beheer van geplande objecten moet wel een behoorlijjk circus worden opgetuigd, nl om netjes de link in te vullen dat een plan is gerealiseerd, of als plan is ingetrokken deze ook af te sluiten etc.
- Rik: nadeel is ook wel dat er vrij veel business rules in zitten, combinaties die in de data niet zouden mogen voorkomen.
- Pano: concludeert dat het een goed idee is om toekomstmutatie op te laten voeren (met status bestaand en datum in de toekomst) zodra uitvoering van plan zeker genoeg is. Het is daarmee een soort tussenoplossing. Maar is wel bezorgd dat dit het complexer zou kunnen maken.
- Lennart: het zou me helpen als we een BAG voorbeeld hadden ipv een Verharding. 
- Ruud: Alternatieve plannen, wat zijn dat? Als er 2 plannen zijn en het is nog niet bekend welke goedgekeurd zal worden, zijn ze nog niet relevant. Linda: we hebben eerder gevraagd aan de WG Inhoud hoe belangrijk die alternatieve plannen zijn, en kregen toen terug dat ze wel kunnen voorkomen, met name voor panden. Of ze veel voorkomen of maar in 0,01% van de gevallen weten we niet. **Actie:** dit gaan we nogmaals navragen bij de WG inhoud, want het maakt ons model ingewikkelder. 
- Lennart is blij met deze oplossing want je kan de huidige en geplande werkelijkheid netjes scheiden van elkaar en toch alles terug vinden. Je kan alle kanten op. Het is echter wel een uitdaging om de huidige BAG op deze manier uit te drukken (en dat is wel nodig...want we willen de benodigde samenhang realiseren met zo weinig mogelijk impact op huidige praktijk). Zou je de bronhouders kunnen laten registreren zoals ze nu doen, en in de LV dit vertalen naar onze SOR uitwerking? Ruud suggereert om Pieter Dijkstra te vragen of BAG geinteresseerd is hierover mee te denken. **Actie:** dit regelen.
- Gabriella presenteert de testdata en queries die we hebben gemaakt om voor onszelf de uitwerking te toetsen. Dit laat o.a. zien dat we de realisatiedatum gebruiken niet om te tijdreizen, maar om te filteren op plannen in de toekomst. Lennart: dit stelt mij gerust w.b.t. mijn eerdere opmerking over geldigheidsdatum vs realisatiedatum, want ik zie dat je tijdreizen doet op de geldigheidsdatum. 
- Lennart: nogmaals: goede oplossing. Wel goed uitleggen aan bronhouders, zodat ze het goed toepassen. En dat gebruikers het begrijpen. Die kunnen dan opzoeken: hoe ziet de werkelijkheid over 2 maanden uit (met de linkerkant van de diagrammen, de toekomstmutaties) en wat zijn er eigenlijk allemaal voor plannen voor de toekomst (met de rechterkant). 
- Linda: is er naast de BAG nog een andere groep waar we dit moeten neerleggen ter toetsing? Bv de BGT? Volgens Niels en Jan zitten in de BGT nu niet op grote schaal plantopo objecten. Bovendien, de modellering van plantopo in de BGT ligt dichtbij onze huidige uitwerking. Dus daar verstoren we geen huidige werkwijze. Wellicht gaat de nieuwe architectuur, waarbij het horizontale berichtenverkeer wordt vevangen door APIs, ook voor grote impact zorgen. Conclusie: we hoeven nu niet te toetsen bij de BGT, alleen bij de BAG.

### Vervolgsessies van deze expertgroep
- Na de 10e sessie (deze) zijn er nog geen nieuwe bijeenkomsten gepland.
- Dick plant 4 nieuwe om de 3 weken op donderdagen op een later tijdstip: half 3. 
- De backlog met onderwerpen staat hier https://github.com/Geonovum/disgeo-imsor/projects/1

### Acties
- Bij de Werkgroep Inhoud nogmaals navragen hoe het zit met alternatieve plannen. Moeten we die ondersteunen? In welke situaties komen ze voor en hoe veelvuldig? 
- Onze levensloop uitwerking toetsen op werkbaarheid bij de huidige BAG. Via Pieter Dijkstra. 