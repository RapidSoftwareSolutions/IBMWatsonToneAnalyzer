[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/IBMWatsonToneAnalyzer/functions?utm_source=RapidAPIGitHub_IBMToneFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# IBMWatsonToneAnalyzer Package
The Tone Analyzer service uses linguistic analysis to detect emotional tones, social propensities, and writing styles in written communication.
* Domain: [ibm.com](https://www.ibm.com/watson)
* Credentials: username, password

## How to get credentials:
0. Register to [IBM Bluemix Console](https://console.ng.bluemix.net/registration/)
1. After log in choose Tone Analyzer from [services](https://console.ng.bluemix.net/catalog/?category=watson)
2. Connect Tone Analyzer to your application at the left side, choose pricing plan and click on 'Create' button at the bottom of the page.
3. Click on 'Service Credentials' tab to see your username and password.


## Custom datatypes:
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]```
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```


## IBMWatsonToneAnalyzer.analyzeToneFromText
Analyzes the tone of a piece of text. The message is analyzed for several tones - social, emotional, and language. For each tone, various traits are derived. For example, conscientiousness, agreeableness, and openness.

| Field       | Type       | Description
|-------------|------------|----------
| username    | credentials| Username obtained from IBM Bluemix.
| password    | credentials| Password obtained from IBM Bluemix.
| text        | String     | Text that contains the content to be analyzed. The Tone Analyzer Service supports up to 128KB of text, or about 1000 sentences. Sentences with less than three words cannot be analyzed.
| tones       | Select     | Filter the results by a specific tone. Valid values for tones are `emotion`, `language`, and `social`.
| sentences   | String     | Filter your response to remove the sentence level analysis. Valid values for sentences are true and false. This parameter defaults to true when it's not set, which means that a sentence level analysis is automatically provided. Change `sentences=false` to filter out the sentence level analysis.

## IBMWatsonToneAnalyzer.analyzeToneFromHtml
Analyzes the tone of a piece of html. The message is analyzed for several tones - social, emotional, and language. For each tone, various traits are derived. For example, conscientiousness, agreeableness, and openness.

| Field       | Type       | Description
|-------------|------------|----------
| username    | credentials| Username obtained from IBM Bluemix.
| password    | credentials| Password obtained from IBM Bluemix.
| html        | String     | HTML document that contains the content to be analyzed. The Tone Analyzer Service supports up to 128KB of text, or about 1000 sentences. Sentences with less than three words cannot be analyzed.
| tones       | Select     | Filter the results by a specific tone. Valid values for tones are `emotion`, `language`, and `social`.
| sentences   | String     | Filter your response to remove the sentence level analysis. Valid values for sentences are true and false. This parameter defaults to true when it's not set, which means that a sentence level analysis is automatically provided. Change `sentences=false` to filter out the sentence level analysis.
