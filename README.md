# IBMWatsonToneAnalyzer Package
The Tone Analyzer service uses linguistic analysis to detect emotional tones, social propensities, and writing styles in written communication.
* Domain: https://www.ibm.com/watson?ref=rapidapi
* Credentials: username, password

## How to get credentials: 
0. Register to [IBM Bluemix Console](https://console.ng.bluemix.net/registration/) 
1. After log in choose Natural Language Classifier from [services](https://console.ng.bluemix.net/catalog/?category=watson)
2. Connect Natural Language Classifier to your application at the left side, choose pricing plan and click on 'Create' button at the bottom of the page.
3. Click on 'Service Credentials' tab to see your username and password.

## IBMWatsonToneAnalyzer.analyzeToneFromText
Analyzes the tone of a piece of text. The message is analyzed for several tones - social, emotional, and language. For each tone, various traits are derived. For example, conscientiousness, agreeableness, and openness.

| Field       | Type       | Description
|-------------|------------|----------
| username    | credentials| Username obtained from IBM Bluemix.
| password    | credentials| Password obtained from IBM Bluemix.
| text        | String     | Text that contains the content to be analyzed. The Tone Analyzer Service supports up to 128KB of text, or about 1000 sentences. Sentences with less than three words cannot be analyzed.
| version     | String     | When we make breaking changes to the API, we release a new, dated version. The value for the version parameter is the date for the version of the API that you want to call. The current version is 2016-05-19, and the documentation reflects the current version.
| tones       | String     | Filter the results by a specific tone. Valid values for tones are `emotion`, `language`, and `social`.
| sentences   | String     | Filter your response to remove the sentence level analysis. Valid values for sentences are true and false. This parameter defaults to true when it's not set, which means that a sentence level analysis is automatically provided. Change `sentences=false` to filter out the sentence level analysis.

## IBMWatsonToneAnalyzer.analyzeToneFromHtml
Analyzes the tone of a piece of html. The message is analyzed for several tones - social, emotional, and language. For each tone, various traits are derived. For example, conscientiousness, agreeableness, and openness.

| Field       | Type       | Description
|-------------|------------|----------
| username    | credentials| Username obtained from IBM Bluemix.
| password    | credentials| Password obtained from IBM Bluemix.
| html        | String     | Text that contains the content to be analyzed. The Tone Analyzer Service supports up to 128KB of text, or about 1000 sentences. Sentences with less than three words cannot be analyzed.
| version     | String     | When we make breaking changes to the API, we release a new, dated version. The value for the version parameter is the date for the version of the API that you want to call. The current version is 2016-05-19, and the documentation reflects the current version.
| tones       | String     | Filter the results by a specific tone. Valid values for tones are `emotion`, `language`, and `social`.
| sentences   | String     | Filter your response to remove the sentence level analysis. Valid values for sentences are true and false. This parameter defaults to true when it's not set, which means that a sentence level analysis is automatically provided. Change `sentences=false` to filter out the sentence level analysis.

