const apiKey = process.env.NEXT_PUBLIC_OPENAI_API;

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

const jwt_decode = require('jwt-decode');

const handler = async (req, res) => {    
    if (req.method !== "POST") return res.status(400).json({ response: 'Only POST requests allowed.' });

    const { token, prompt } = req.body;

    const tokenValid = await jwt_decode(token).stripeRole;

    if (!tokenValid) return res.status(200).json({ response: "  You are currently using the free plan, please upgrade." });
    if (!prompt || prompt === "" || prompt === null || prompt === undefined) return res.status(200).json({ response: "  There was an error with your prompt, please try again." });

    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write me an article based on this prompt: ${prompt}`,
        max_tokens: 260
      });

      return res.status(200).json({ response: completion.data.choices[0].text });
    } catch (error) {
      return res.status(400).end();
    };
};

export default handler;
