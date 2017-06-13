module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'IBMWatsonToneAnalyzer',
        "tagline": "IBMWatsonToneAnalyzer API Package",
        "keywords": ["API"],
        "description": "The Tone Analyzer service uses linguistic analysis to detect emotional tones, social propensities, and writing styles in written communication.",
        'image': 'http://www.contegix.com/wp-content/uploads/2016/10/ToneAnalyzer.svg',
        'repo': 'https://github.com/RapidSoftwareSolutions/Marketplace-IBMWatsonToneAnalyzer-Package',
        'accounts': {
            "domain": "https://www.ibm.com/watson?ref=rapidapi",
            "credentials": ["username", "password"]
        },
        'blocks': [{
            "name":"analyzeToneFromText",
            "description": "Analyzes the tone of a piece of text. The message is analyzed for several tones - social, emotional, and language. For each tone, various traits are derived. For example, conscientiousness, agreeableness, and openness.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "text",
                    type: "String",
                    info: "Text that contains the content to be analyzed. The Tone Analyzer Service supports up to 128KB of text, or about 1000 sentences. Sentences with less than three words cannot be analyzed.",
                    required: true
                },
                {
                    name: "tones",
                    type: "Select",
                    options:["emotion", "language", "social"],
                    info: "Filter the results by a specific tone. Valid values for tones are `emotion`, `language`, and `social`.",
                    required: false
                },
                {
                    name: "sentences",
                    type: "String",
                    info: "Filter your response to remove the sentence level analysis. Valid values for sentences are true and false. This parameter defaults to true when it's not set, which means that a sentence level analysis is automatically provided. Change `sentences=false` to filter out the sentence level analysis.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"analyzeToneFromHtml",
            "description": "Analyzes the tone of a piece of html. The message is analyzed for several tones - social, emotional, and language. For each tone, various traits are derived. For example, conscientiousness, agreeableness, and openness.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "html",
                    type: "String",
                    info: " HTML document that contains the content to be analyzed. The Tone Analyzer Service supports up to 128KB of text, or about 1000 sentences. Sentences with less than three words cannot be analyzed.",
                    required: true
                },
                {
                    name: "tones",
                    type: "Select",
                    options:["emotion", "language", "social"],
                    info: "Filter the results by a specific tone. Valid values for tones are `emotion`, `language`, and `social`.",
                    required: false
                },
                {
                    name: "sentences",
                    type: "String",
                    info: "Filter your response to remove the sentence level analysis. Valid values for sentences are true and false. This parameter defaults to true when it's not set, which means that a sentence level analysis is automatically provided. Change `sentences=false` to filter out the sentence level analysis.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }]
    })
};
