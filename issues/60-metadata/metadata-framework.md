# Metadata framework voor de SOR

## Doel metadata in de SOR

- Gebruikers extra informatie geven?
- Normkwaliteit *automatisch* controleren?
- ...

## Metadata op informatiemodel-niveau

Dit is metadata over objecttypes en kenmerken (attribuutsoorten en relatiesoorten) in het informatiemodel. 

Standaarden die van toepassing zijn: 
- MIM
- ISO 19131 Geographic information — Data product specifications
- ISO 19110 (?)

Het specificeren van metadata voor informatiemodel-elementen doe je per objecttype / attribuuttype. We passen hiervoor het MIM toe, dat aangeeft hoe dit moet in [3.2.1 Modellering metagegevens voor objecten en attributen in UML](https://docs.geostandaarden.nl/mim/mim/#modellering-metagegevens-voor-objecten-en-attributen-in-uml).

Wij adviseren om het MIM aspect Kwaliteit verder uit te splitsen in: 
 - Volledigheid
 - Actualiteit
 - Ruimtelijke nauwkeurigheid
 - Eisen aan controle(frequentie)
 - Eisen aan inwinningswijze
 - ... etc.

*Per informatiemodel-element:*

Aspect | Domein | Toelichting
------ | ------ | -----------
|Naam   | Tekst  | Naam van het informatiemodel-element |
|Begrip | URI    | |
... (e.z. zoals in MIM gedefinieerd)   | ... | 
Volledigheid | Getal | Percentage
Actualiteit | Getal | [x] maanden
Nauwkeurigheidsklasse | Domeinwaarde | Hoog / Midden / Laag*
Controlefrequentie | Getal | 1 keer per [x] jaar
Inwinningswijze | Domeinwaarde | Luchtfoto / Terrestrisch / etc.

*Nauwkeurigheidsklasse*
- Hoog = centimeter tot decimeter
- Midden = decimeter tot meter
- Laag = meter tot hectometer

### Voorbeeld

#### Objecttype Abri

Aspect | Waarde | Eenheid
------ | ------ | ------- 
Naam   | Abri  
|Begrip | https://begrippen.geostandaarden.nl/sor/nl/page/abri
... (e.z. zoals in MIM gedefinieerd)   | ... 
Volledigheid | 99 | procent
Actualiteit | 12 | maanden
Nauwkeurigheidsklasse | Midden | 
Controlefrequentie | 2 | jaar
Inwinningswijze | Luchtfoto |


## Metadata op dataset-niveau
Dit is metadata over datasets en dataset series

Standaarden die van toepassing zijn: 
- Nederlands profiel op ISO 19115 Geographic information — Metadata
- DCAT & GeoDCAT-AP 
- PROV-O
- DQV


*Per informatiemodel-element:*

Aspect | Domein | Toelichting
------ | ------ | -----------
Actualiteit | Getal | [x] maanden
Nauwkeurigheid | Domeinwaarde | Domein is bv Hoog / Midden / Laag*

## Metadata op object- of attribuutniveau
Dit is metadata over informatieobjecten en hun gegevens

Standaarden die van toepassing zijn: 
- ISO 19157 Geographic information —Data quality (?)
- ISO 19156 Observations & Measurements (en SSN)
- PROV-O
- DQV
- SDW-BP 13 en 14

Aspect | Domein | Toelichting
------ | ------ | -----------
bronverwijzing |  | 
controle-informatie |  | 
nauwkeurigheid | | 
inwinningsinformatie | | 