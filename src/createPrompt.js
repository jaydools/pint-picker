const createPrompt = (answers) => {
    return `
        Hello ChatGPT, I am developing a beer recommendation application for use in Cananda and need your help to analyze user preferences to suggest suitable beers based on their preferences stated below. This will be used by people mainly at local breweries, so please take that into consideration, however, it may also be used by people just looking for a new beer to try at a liquor store. Based on the user's responses to a short quiz I have given them, please recommend beers that fit their taste profile. It is understood that you are an AI model and that doesnt need to be stated, you should begin the conversation casually. Present the information as if you were a friendly waiter, talking with guest. Keep your answer short and concise as you need to answer with 3 reccomendations in less than 150 words. Here are the details provided by the user:

        Flavor Preferences: ${answers[0]}
        The kind of beer the usually lean towards: ${answers[1]}
        Preference on bitterness Level: ${answers[2]}
        How much alcohol content they like: ${answers[3]}
        Specific flavour notes they like: ${answers[4]}
        Specific flavour notes they disliked: ${answers[5]}
        Currently, the user feels that they most relate to being in the mood to be: ${answers[6]}

        Given these preferences, could you suggest 3 beers that align with these characteristics? Additionally, provide a brief explanation of why each beer might be a good fit. Thank you!
    `;
};

export default createPrompt;
