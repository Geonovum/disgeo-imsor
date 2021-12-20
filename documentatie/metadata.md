## Metadata

Zie 
- https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/17-11-2020-expertgroepvergadering.pdf
- https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/1-12-2020-expertgroepvergadering.pdf
- de uitwerkingen in https://github.com/Geonovum/disgeo-imsor/tree/master/issues/60-metadata.
- slides metadata op attribuutniveau https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/04-03-2021-7e-expertgroepvergadering.pdf
- evt slides https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/11-02-2021-expertgroepvergadering.pdf
- https://github.com/Geonovum/disgeo-imsor/discussions/50 - definitie metadata in modelleerprincipes

### Algemeen

#### Metadata standaarden

Tekst overnemen uit Github - disgeo-imsor/issues/60-metadata/metadata-standaarden.md

#### Metamodellen - een analyse en vergelijking

tekst overnemen uit Github- disgeo-imsor/metamodel/analyse-mim-nen3610-nta8035.md


### Metadata voor de SOR 

#### Metadata framework voor de SOR

Tekst overnemen uit Github - disgeo-imsor/issues/60-metadata/metadata-framework.md


#### Metadata op objectniveau


#### Metadata op attribuutniveau

#### inventarisatie metadata voor de SOR



##### Niveaus 

|Niveau  | aandachtsgebied  | ISO 19115, Nederlands profiel op ISO 19115 | MIM   | ISO 19157Geographic information —Data quality | DCAT / Geo-DCAT-AP (DCAT 2)Data Catalog vocabulary | ISO 19131 Data product specifications | ISO 19156O&M Observations & Measurements | PROV-OProvenance vocabulary | SOSA/SSNSensor network ontology(implementatie van O&M) | DQVData quality vocabulary | SDW-BP 13 en 14Spatial data on the web best practices | ISO 191110 |
|-----------------------|-----------------------------------------------------------------------------------|--------------------------------------------|-----------|-----------------------------------------------|----------------------------------------------------|---------------------------------------|------------------------------------------|-----------------------------|--------------------------------------------------------|----------------------------|-------------------------------------------------------|------------|
| Datasetniveau   | Het gaat om metadata over datasets en dataset series.   | ja   | nee   | ja  | ja   | ja  | nee  | ja  | nee  | ja   | ja  |  |
| Informatiemodelniveau | Het gaat om metadata over objecttypes en kenmerken (attribuutsoorten en relaties) | nee  | ja  | nee   | nee  | ja  | nee  | nee   | nee  | nee  | nee   |  |
| Instantieniveau   | Het gaat om metadata over informatieobjecten en hun gegevens  | nee  | nee   | ja  | nee  | nee   | ja   | ja  | ja   | nee  | nee   |  |
|   |   |  |   |   |  |   |  |   |  |  |   |  |
|   |   |  |   |   |  |   |  |   |  |  |   |  |
|   |   |  | Gabriella | Gabriella   | Gabriella  |   | Linda  |   | Linda  |  |   |  |

##### Niveau informatiemodel 

| Van toepassing op   | Aspect   | Beschrijving   | In EMSO?   | In MIM?  | ISO 19157Geographic information —Data quality  | DCAT / Geo-DCAT-APData Catalog vocabulary   | ISO 19131 Data product specifications   | ISO 19156O&M Observations & Measurements | PROV-OProvenance vocabulary | SOSA/SSNSensor network ontology(implementatie van O&M) | DQVData quality vocabulary   |   |   |
|---------------------------------------------------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|--------------------------------------------------------|----------------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|-----------------------------|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|---|---|
| Objecttype  | Bronverwijzing   | Eis tav brondocument of ander soort bronverwijzing   |  |  |  |   |   |  |   |  |  |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen bronhouder(s): Het is mogelijk dat in het informatiemodel wordt gespecificeerd dat er verschillende (categorieën) bronhouders zijn voor één objecttype. De bronhouder is de partij die objecten kan opvoeren en afvoeren. | Uit EMSO (in 3.4.2)  | nvt  | nvt  | nvt / dct:rightsHolder / dcat:qualifiedAttribution  | SpecificationScope.level = featuretype > MaintenanceOfTheData.description   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen autorisatie gebruik: Als default zijn alle objecten in de SOR als open data voor iedereen beschikbaar. Uitzonderingen hierop worden in het informatiemodel expliciet benoemd.   | Uit EMSO (in 3.4.2)  | nvt  | nvt  | dct:accessRights - RightsStatement  | nvt   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Kwaliteitseis  | Beschrijving populatie (volledigheid en actualiteit)   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "populatie''  | DQ_Completeness  | dct:description / dqv:QualityMeasurement / dct:accrualPeriodicity / | SpecificationScope.level = featuretype > DataContentAndStructure.narrativeDescription / Maintenance.maintenanceAndUpdateFrequency | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:populationCompletenessMetric  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of objecttype verplicht of optioneel is   | Uit EMSO (in 3.4.1)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_CompletenessOmission  | dct:description  / dqv:QualityMeasurement   | SpecificationScope.level = featuretype > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:completeness  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of planstatus relevant is (relevant ontstaansmoment voor de SOR): Objecten worden in de SOR opgenomen op het moment dat deze volgens de voor het betreffende objecttype gedefinieerde criteria ontstaan   | Uit EMSO (in 2.4.4)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_ConceptualConsistency, DQ_DomainConsistency   | dct:description / dqv:QualityMeasurement  | SpecificationScope.level = featuretype > DataCaptureAndProduction.inclusionCriteria   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:compliance  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen actualiteitseis: gaat over binnen welke termijn (aantal dagen/maanden) na realisatie/ontstaan van een object, dit object beschikbaar moet zijn in de SOR  | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | dqv:QualityMeasurement  | SpecificationScope.level = featuretype > DataCaptureAndProduction.inclusionCriteria / Maintenance.maintenanceAndUpdateFrequency   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:currentness   |   |   |
|   | Kwaliteitseis  | Minimale activiteiten gericht op periodieke volledigheidscontrole  |  |  | Opstellen/uitvoeren van quality reports, conform ISO 19157 (?) |   |   | nvt  | nvt   | nvt  | nvt  |   |   |
| Kenmerk   | Bronverwijzing   | Eis tav brondocument of ander soort bronverwijzing   |  |  |  |   |   | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Bronverwijzing   | Vastleggen of een bronverwijzing (naar bv vergunningen, plaatsbepalingspunten, etc) aan de orde is voor dit kenmerk  | Uit EMSO 3.4.1 / 3.4.4 | In 2.8.2.16  | DQ_ConceptualConsistency, DQ_DomainConsistency   | nvt   | SpecificationScope.level = attributeType > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:complaince  |   |   |
| *invulling nodig  | Bronverwijzing   | Vastleggen van een reden van wijziging van een attribuutwaarde. Het is aan te bevelen om "reden van wijziging" vast te leggen aan de hand van te benoemen redenen.   | Uit EMSO 3.4.1   | nvt  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen autorisatie gebruik:  wanneer deze afwijken van de autorisatie voor het objecttype. Het is bijvoorbeeld mogelijk dat in de SOR voor een bepaald attribuut een andere bronhouder (attribuuthouder) wordt aangewezen.   | Uit EMSO (in 3.4.2)  | nvt  | nvt  | nvt / dct:rightsHolder / dct:accessRights   | SpecificationScope.level = attributetype > MaintenanceOfTheData.description   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of attribuut verplicht of optioneel is  | Uit EMSO (in 3.4.1)  | In 2.8.2.16  | DQ_CompletenessOmission  | nvt   | SpecificationScope.level = attributetype > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:completeness  |   |   |
| *invulling nodig + betere definitie van kwaliteit | Kwaliteitseis  | Beschrijving minimale eisen aan kwaliteit (nauwkeurigheid, actualiteit)  | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''; In 2.8.2.23 | DQ_PositionalAccuracy, DQ_TemporalQuality  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:accuracy / dqv:currentness / dqv:compliance (te checken dat aan de eisen wordt voldaan) |   |   |
| *invulling nodig  | Kwaliteitseis  | Eisen aan de wijze van inwinning van het attribuut   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | nvt   | SpecificationScope.level = attributetype > DataCaptureAndProduction   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:compliance (te checken dat aan de eisen wordt voldaan)  |   |   |
| *invulling nodig  | Kwaliteitseis  | Minimale inspanningsverplichtingen om atribuut op orde te houden   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Kwaliteitseis  | Minimale geometrietype die van toepassing is (2D, 2.5D, 3D)  | Uit EMSO (in 3.2.1)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_ConceptualConsistency, DQ_Completeness  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:precision / dqv:compliance (te checken dat aan de eisen wordt voldaan)  |   |   |
|   |  |  |  | nvt  |  |   |   | nvt  | nvt   | nvt  |  |   |   |
| Model   |  |  |  |  |  |   |   | nvt  | nvt   | nvt  |  |   |   |
| Model (dataset)   | Domein   | Aanduiding van het functionele domein waartoe het informatiemodel behoort.   |  | Uit 2.8.1.1 (verplicht)  | nvt  | dcat:keyword / dcat:theme   | DataProductSpecification.term   | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Model type   | De beschrijving van de aard van het informatiemodel, hoe het geinterpreteerd moet worden. (conceptueel, logisch, technisch)  |  | Uit 2.8.1.2 (verplicht)  | nvt  | dct:description   | DataProductSpecification.overview   | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Relatiekeuze type  | Aanduiding van een in MIM gedefinieerd alternatief voor een modelleringswijze, en welke keuze hierbij is gemaakt.  |  | Uit 2.8.1.3 (verplicht)  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
|   | Versie MIM   | De versie van de MIM specificatie die gebruikt is om het informatiemodel in uit te drukken.  |  | Uit 2.8.1.4 (verplicht)  | nvt  | dct:conformsTo  | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
|   | Extensie MIM   | De aanduiding van een extensie op MIM.   |  | Uit 2.8.1.5 (optioneel)  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
| Model (objecttype)  | Historie/Levensfase (Concreet) | Van elk object in de SOR wordt meta-informatie opgenomen over het ontstaansmoment en versie van het object   | Uit EMSO (in 2.5.4)  | In 2.8.2.10  | DQ_ConceptualConsistency   | dct:description / dqv:QualityMeasurement  | SpecificationScope.level = dataset > DataQuality.dataquality  | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Kwaliteitseis  | Definitie van objecttype (naam, definitie, begrip)   | Uit EMSO (in 3.4.2)  | In 2.8.2.1-2.8.2.7   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | check qSKOS quality assessment   |   |   |
| Model (kenmerk)   | Kwaliteitseis  | Definitie van attribuuttype  | Uit EMSO (in 3.4.2)  | In 2.8.2.1-2.8.2.7   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | check qSKOS quality assessment   |   |   |
|   | Indicatie softtyping   | Indicatie dat een attribuutsoort het objecttype waar het bijhoort classificeert in (sub)typen.   |  | Uit 2.8.2.15   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | nvt  |   |   |

##### Niveau instantie 

| Van toepassing op | Aspect   | Beschrijving   | In EMSO?   | In MIM? | ISO 19115Geldt op dataset niveau maar kan op zich ook gebruikt worden op instantieniveau als het past. | ISO 19157Geographic information —Data quality  | DCAT / Geo-DCAT-APData Catalog vocabulary | ISO 19131 Data product specifications | ISO 19156O&M Observations & Measurements   | PROV-OProvenance vocabulary | SOSA/SSNSensor network ontology(implementatie van O&M) | DQVData quality vocabulary |   |
|-------------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|---------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------|---------------------------------------|--------------------------------------------|-----------------------------|--------------------------------------------------------|----------------------------|---|
| Informatieobject  | Bronverwijzing | Verwijzing naar bron   |  | nvt   |  |  |   |   | nvt  | wasGeneratedBy  | nvt  | nvt  |   |
|   | Autorisatie  | In het kader van de autorisatie kan per object vastgelegd worden wie de verantwoordelijke bronhouder is. Dat kan bijvoorbeeld de aanduiding zijn welke gemeente verantwoordelijk is voor het bijhouden van het betreffende object. | Uit EMSO (in 3.4.3)  | nvt   | organisationName   | nvt  | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Autorisatie  | Vastleggen autorisatie gebruik   | Uit EMSO (in 3.4.3)  | nvt   | accessConstraints, useLimitation   | nvt  | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Kwaliteit  | Beschrijving wijze van inwinning   | Uit EMSO (in 3.4.3)  | nvt   | LI_ProcessStep.description   |  | nvt   | nvt   | ObservingProcedure,Observer  | wasGeneratedBy  | sosa:usedProcedure   | nvt  |   |
|   | Kwaliteit  | Beschrijving wijze (gebruikte bronnen) meest recente controle, moment controle en uitvoerder   | Uit EMSO (in 3.4.3)  | nvt   |  | DQM_SourceReference / DQ_TemporalQuality   | nvt   | nvt   | nvt  | wasInformedBy ?   | nvt  | nvt  |   |
|   | Kwaliteit  | Controledatum  | Uit EMSO (in 3.4.1)  | nvt   | date dateType=revision   | DQ_TemporalQuality   | nvt   | nvt   | nvt  | Activity.time   | nvt  | nvt  |   |
|   | Status   | InOnderzoek, InBewerking, maar ook ''onderzocht''  |  | nvt   | MD_DataIdentification.status   | nvt  | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Status   | Aantekenveld   | Uit EMSO (in 3.4.3)  | nvt   | LI_Source.description  | DQ_DescriptiveResult   | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Status   | Levensfase   |  | nvt   |  |  | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
| Gegevens  | Bronverwijzing | Verwijzing naar bron   |  | nvt   |  | DQM_SourceReference  |   |   | nvt  | wasGeneratedBy  | nvt  | nvt  |   |
|   | Bronverwijzing | Vastleggen van een reden van wijziging van een attribuutwaarde   | Uit EMSO 3.4.1   | nvt   |  | nvt  | nvt   | nvt   | nvt  | wasGeneratedBy  | nvt  | nvt  |   |
|   | Bronverwijzing | Onderbouwing van gegevens. Kan formeel zijn (in de vorm van een verwijzing naar vergunningen of besluiten), of technisch (verwijzing naar plaatsbepalingspunten, luchtfoto's, metingen of BIM-modellen).   | Uit EMSO 3.4.1 / 3.4.4   | nvt   |  | DQ_EvaluationMethod.referenceDoc   | nvt   | nvt   | Observation  | wasGeneratedBy  | sosa:isFeatureOfInterestOf sosa:Observation  | nvt  |   |
|   | Autorisatie  | Vastleggen bronhouder(s)   | Uit EMSO (in 3.4.1)  | nvt   | organisationName   | nvt  | nvt   | nvt   | nvt  | wasAttributedTo   | nvt  | nvt  |   |
|   | Autorisatie  | Vastleggen autorisatie gebruik   | Uit EMSO (in 3.4.1)  | nvt   | accessConstraints, useLimitation   | nvt  | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Kwaliteit  | Beschrijving wijze van inwinning   | Uit EMSO (in 3.4.1)  | nvt   |  | DQ_PositionalAccuracy (bv: mean value of positional uncertainties) | nvt   | nvt   | ObservingProcedure,Observer  | wasGeneratedBy  | sosa:usedProcedure, sosa:madeBySensor  | nvt  |   |
|   |  | precisie/nauwkeurigheid  | Uit EMSO (in 3.4.1)  | nvt   | DQ_AbsoluteExternalPositionalAccuracy  | nvt  | nvt   | nvt   | SpatialSample/horizontalPositionalAccuracy |   | ssn-system:Accuracy  | nvt  |   |
|   | Kwaliteit  | Nauwkeurigheidsklasse /  een aanduiding voor de gemiddelde/mediane/minimale/maximale nauwkeurigheid  | Uit EMSO (in 3.4.4)  | nvt   |  | DQM_SourceReference / DQ_TemporalQuality   | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Kwaliteit  | Beschrijving wijze (gebruikte bronnen) meest recente controle, moment controle en uitvoerder   | Uit EMSO (in 3.4.1)  | nvt   |  | DQ_TemporalQuality   | nvt   | nvt   | nvt  | wasInformedBy ?   | nvt  | nvt  |   |
|   | Kwaliteit  | Controledatum  | Uit EMSO (in 3.4.1)  | nvt   |  | nvt  | nvt   | nvt   | nvt  | Activity.time   | nvt  | nvt  |   |
|   | Kwaliteit  | Uitvoerder van inwinning   | Uit EMSO (in 3.4.4)  | nvt   | CI_ResponsibleParty  | nvt  | nvt   | nvt   | nvt  | actedOnBehalfOf   | nvt  | nvt  |   |
|   | Kwaliteit  | Uitvoerder van controle  | Uit EMSO (in 3.4.4)  | nvt   | CI_ResponsibleParty  | nvt  | nvt   | nvt   | nvt  | actedOnBehalfOf   | nvt  | nvt  |   |
|   | Status   | InOnderzoek, InBewerking   | Uit EMSO (in 3.4.1)  | nvt   |  | DQ_DescriptiveResult   | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Status   | Aantekenveld   |  | nvt   |  | DQ_TemporalQuality   | nvt   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Historie   | Tijdlijn geldigheid  | Uit EMSO (in 3.5)  | nvt   | LI_ProcessStep.dateTime  | DQ_TemporalQuality   | nvt   | nvt   | phenomenonTime   |   | sosa:phenomenonTime  | nvt  |   |
|   | Historie   | Tijdlijn registratie   | Uit EMSO (in 3.5)  | nvt   |  |  |   | nvt   | nvt  |   | nvt  | nvt  |   |
|   | Status   | Mate van definitief zijn van geometrie   | Uit EMSO (in 5.3.1 en 6.2.1) | nvt   | status   | nvt  | status  | nvt   | nvt  |   | nvt  | nvt  |   |
|   |  |  |  |   |  |  |   |   |  |   |  |  |   |
|   |  |  |  |   |  |  |   |   |  |   |  |  |   |
|   |  |  |  |   |  |  |   |   |  |   |  |  |   |
|   |  |  |  |   |  |  |   |   |  |   |  |  |   |

##### Niveau dataset

| Van toepassing op   | Aspect   | Beschrijving   | In EMSO?   | In MIM?  | ISO 19157Geographic information —Data quality  | DCAT / Geo-DCAT-APData Catalog vocabulary   | ISO 19131 Data product specifications   | ISO 19156O&M Observations & Measurements | PROV-OProvenance vocabulary | SOSA/SSNSensor network ontology(implementatie van O&M) | DQVData quality vocabulary   |   |   |
|---------------------------------------------------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|--------------------------------------------------------|----------------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|-----------------------------|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|---|---|
| Objecttype  | Bronverwijzing   | Eis tav brondocument of ander soort bronverwijzing   |  |  |  |   |   |  |   |  |  |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen bronhouder(s): Het is mogelijk dat in het informatiemodel wordt gespecificeerd dat er verschillende (categorieën) bronhouders zijn voor één objecttype. De bronhouder is de partij die objecten kan opvoeren en afvoeren. | Uit EMSO (in 3.4.2)  | nvt  | nvt  | nvt / dct:rightsHolder / dcat:qualifiedAttribution  | SpecificationScope.level = featuretype > MaintenanceOfTheData.description   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen autorisatie gebruik: Als default zijn alle objecten in de SOR als open data voor iedereen beschikbaar. Uitzonderingen hierop worden in het informatiemodel expliciet benoemd.   | Uit EMSO (in 3.4.2)  | nvt  | nvt  | dct:accessRights - RightsStatement  | nvt   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Kwaliteitseis  | Beschrijving populatie (volledigheid en actualiteit)   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "populatie''  | DQ_Completeness  | dct:description / dqv:QualityMeasurement / dct:accrualPeriodicity / | SpecificationScope.level = featuretype > DataContentAndStructure.narrativeDescription / Maintenance.maintenanceAndUpdateFrequency | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:populationCompletenessMetric  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of objecttype verplicht of optioneel is   | Uit EMSO (in 3.4.1)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_CompletenessOmission  | dct:description  / dqv:QualityMeasurement   | SpecificationScope.level = featuretype > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:completeness  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of planstatus relevant is (relevant ontstaansmoment voor de SOR): Objecten worden in de SOR opgenomen op het moment dat deze volgens de voor het betreffende objecttype gedefinieerde criteria ontstaan   | Uit EMSO (in 2.4.4)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_ConceptualConsistency, DQ_DomainConsistency   | dct:description / dqv:QualityMeasurement  | SpecificationScope.level = featuretype > DataCaptureAndProduction.inclusionCriteria   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:compliance  |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen actualiteitseis: gaat over binnen welke termijn (aantal dagen/maanden) na realisatie/ontstaan van een object, dit object beschikbaar moet zijn in de SOR  | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | dqv:QualityMeasurement  | SpecificationScope.level = featuretype > DataCaptureAndProduction.inclusionCriteria / Maintenance.maintenanceAndUpdateFrequency   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:currentness   |   |   |
|   | Kwaliteitseis  | Minimale activiteiten gericht op periodieke volledigheidscontrole  |  |  | Opstellen/uitvoeren van quality reports, conform ISO 19157 (?) |   |   | nvt  | nvt   | nvt  | nvt  |   |   |
| Kenmerk   | Bronverwijzing   | Eis tav brondocument of ander soort bronverwijzing   |  |  |  |   |   | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Bronverwijzing   | Vastleggen of een bronverwijzing (naar bv vergunningen, plaatsbepalingspunten, etc) aan de orde is voor dit kenmerk  | Uit EMSO 3.4.1 / 3.4.4 | In 2.8.2.16  | DQ_ConceptualConsistency, DQ_DomainConsistency   | nvt   | SpecificationScope.level = attributeType > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:complaince  |   |   |
| *invulling nodig  | Bronverwijzing   | Vastleggen van een reden van wijziging van een attribuutwaarde. Het is aan te bevelen om "reden van wijziging" vast te leggen aan de hand van te benoemen redenen.   | Uit EMSO 3.4.1   | nvt  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Autorisatie  | Vastleggen autorisatie gebruik:  wanneer deze afwijken van de autorisatie voor het objecttype. Het is bijvoorbeeld mogelijk dat in de SOR voor een bepaald attribuut een andere bronhouder (attribuuthouder) wordt aangewezen.   | Uit EMSO (in 3.4.2)  | nvt  | nvt  | nvt / dct:rightsHolder / dct:accessRights   | SpecificationScope.level = attributetype > MaintenanceOfTheData.description   | nvt  | nvt   | nvt  | nvt / dqv:QualityMeasurement > dqv:confidentiality   |   |   |
| *invulling nodig  | Kwaliteitseis  | Vastleggen of attribuut verplicht of optioneel is  | Uit EMSO (in 3.4.1)  | In 2.8.2.16  | DQ_CompletenessOmission  | nvt   | SpecificationScope.level = attributetype > DataContentAndStructure.narrativeDescription   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:completeness  |   |   |
| *invulling nodig + betere definitie van kwaliteit | Kwaliteitseis  | Beschrijving minimale eisen aan kwaliteit (nauwkeurigheid, actualiteit)  | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''; In 2.8.2.23 | DQ_PositionalAccuracy, DQ_TemporalQuality  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:accuracy / dqv:currentness / dqv:compliance (te checken dat aan de eisen wordt voldaan) |   |   |
| *invulling nodig  | Kwaliteitseis  | Eisen aan de wijze van inwinning van het attribuut   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | nvt   | SpecificationScope.level = attributetype > DataCaptureAndProduction   | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:compliance (te checken dat aan de eisen wordt voldaan)  |   |   |
| *invulling nodig  | Kwaliteitseis  | Minimale inspanningsverplichtingen om atribuut op orde te houden   | Uit EMSO (in 3.4.2)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | nvt  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | nvt  |   |   |
| *invulling nodig  | Kwaliteitseis  | Minimale geometrietype die van toepassing is (2D, 2.5D, 3D)  | Uit EMSO (in 3.2.1)  | Zie diagram in 6.1.2 / 3.2.1 "kwaliteit''  | DQ_ConceptualConsistency, DQ_Completeness  | nvt   | SpecificationScope.level = attributetype > DataQuality.dataquality  | nvt  | nvt   | nvt  | dqv:QualityMeasurement > dqv:precision / dqv:compliance (te checken dat aan de eisen wordt voldaan)  |   |   |
|   |  |  |  | nvt  |  |   |   | nvt  | nvt   | nvt  |  |   |   |
| Model   |  |  |  |  |  |   |   | nvt  | nvt   | nvt  |  |   |   |
| Model (dataset)   | Domein   | Aanduiding van het functionele domein waartoe het informatiemodel behoort.   |  | Uit 2.8.1.1 (verplicht)  | nvt  | dcat:keyword / dcat:theme   | DataProductSpecification.term   | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Model type   | De beschrijving van de aard van het informatiemodel, hoe het geinterpreteerd moet worden. (conceptueel, logisch, technisch)  |  | Uit 2.8.1.2 (verplicht)  | nvt  | dct:description   | DataProductSpecification.overview   | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Relatiekeuze type  | Aanduiding van een in MIM gedefinieerd alternatief voor een modelleringswijze, en welke keuze hierbij is gemaakt.  |  | Uit 2.8.1.3 (verplicht)  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
|   | Versie MIM   | De versie van de MIM specificatie die gebruikt is om het informatiemodel in uit te drukken.  |  | Uit 2.8.1.4 (verplicht)  | nvt  | dct:conformsTo  | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
|   | Extensie MIM   | De aanduiding van een extensie op MIM.   |  | Uit 2.8.1.5 (optioneel)  | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | dcterms:conformsTo / dqv:QualityPolicy   |   |   |
| Model (objecttype)  | Historie/Levensfase (Concreet) | Van elk object in de SOR wordt meta-informatie opgenomen over het ontstaansmoment en versie van het object   | Uit EMSO (in 2.5.4)  | In 2.8.2.10  | DQ_ConceptualConsistency   | dct:description / dqv:QualityMeasurement  | SpecificationScope.level = dataset > DataQuality.dataquality  | nvt  | nvt   | nvt  | nvt  |   |   |
|   | Kwaliteitseis  | Definitie van objecttype (naam, definitie, begrip)   | Uit EMSO (in 3.4.2)  | In 2.8.2.1-2.8.2.7   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | check qSKOS quality assessment   |   |   |
| Model (kenmerk)   | Kwaliteitseis  | Definitie van attribuuttype  | Uit EMSO (in 3.4.2)  | In 2.8.2.1-2.8.2.7   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | check qSKOS quality assessment   |   |   |
|   | Indicatie softtyping   | Indicatie dat een attribuutsoort het objecttype waar het bijhoort classificeert in (sub)typen.   |  | Uit 2.8.2.15   | nvt  | nvt   | nvt   | nvt  | nvt   | nvt  | nvt  |   |   |

##### Overig

| Van toepassing op  | Aspect   | Beschrijving   | In EMSOR?   | In MIM? |
|--------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|---------|
| Kenmerk  | Kwaliteit (?)  | Dit kenmerk (of bepaalde waardes van een kenmerk) worden achterwege gelaten. Bv: een product met alleen objecten met status:gerealiseerd, omdat alleen dit boeiend is voor de gebruikers | Uit EMSO (in 1.4)   |   |
| Gegevens   | Invulling van inwinningsregel/afbakening | Voor netwerken: de geometrie zal zich moeten bevinden binnen de contouren van de bijbehorende reele objecten   | Uit EMSO (in 2.4.4) |   |
| Kenmerk (relatie)  | Invulling van kwaliteitseis  | Alle functionele ruimten hebben 2D geometrie, alle reële objecten en functionele gebouwobjecten hebben 2.5D, en enkele specifieke reële objecten hebben 3D (zie de lijst in comment)   | Uit EMSO (in 3.2.1) |   |
| Gegevens (of mogelijk Dataset) | Kwaliteitseis  | Iedere geometrie moet zijn voorzien van een verwijzing naar het coördinaatreferentiesysteem (RD-NAP) waarin de coördinaten van de geometrie zijn beschreven.   | Uit EMSO (in 3.2.2) |   |
| Informatieobject   | Inwinning  | Wat wordt wel/niet meegenomen als onderdeel van de geometrie van het object conform een objecttype   | Uit EMSO (in 3.2.3) |   |
| Dataset  | Kwaliteit  | Beschrijving van het soort informatieproduct dat wordt afgeleid (1:1 set gegevens, of bewerkte gegevens - generalisatie, transformatie, verrijking)  | Uit EMSO (1.4)  |   |
| Objecttype/kenmerk   | Kwaliteit  | Voor elk objecttype is vastgelegd welke levensfasen in de vastlegging van een object worden onderscheiden.   | Uit EMSO (in 2.4.4) |   |