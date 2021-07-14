# Metadata framework voor de SOR

## Doel metadata in de SOR

- Gebruikers extra informatie geven?
- normkwaliteit automatisch controleren?
- ...

## Metadata op informatiemodel-niveau

Dit is metadata over objecttypes en kenmerken (attribuutsoorten en relatiesoorten). 

Standaarden die van toepassing zijn: 
- MIM
- ISO 19131 Geographic information — Data product specifications

Het specificeren van metadata voor informatiemodel-elementen kunnen we op 2 manieren doen: 
- per objecttype / attribuuttype aangeven welke metadata elementen van toepassing zijn en wat het domein ervan is (constraints aan de inhoud); 
- per metadata-element aangeven wat het domein ervan is en voor welke objecttypen/attribuuttypen het van toepassing is (de scope van het metadata-element). 

*Per informatiemodel-element:*

Aspect | Domein | Toelichting
------ | ------ | -----------
|Naam   | Tekst  | Naam van het informatiemodel-element |
|Begrip | URI    | |
... (e.z. zoals in MIM gedefinieerd)   | ... | 
Actualiteitseis | Getal | [x] maanden
Controle-eis | Getal | 1 keer per [x] jaar
Nauwkeurigheidsklasse | Domeinwaarde | Domein is bv Hoog / Midden / Laag*

- Hoog = centimeter tot decimeter
- Midden = decimeter tot meter
- Laag = meter tot hectometer

### Voorbeeld

#### Objecttype Pand

Aspect | Waarde 
------ | ------ 
Naam   | Abri  
|Begrip | https://begrippen.geostandaarden.nl/sor/nl/page/abri
... (e.z. zoals in MIM gedefinieerd)   | ... 
Actualiteitseis | 12 
Controle-eis | 2 
Nauwkeurigheidsklasse | Midden


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