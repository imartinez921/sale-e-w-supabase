export const projectId = process.env.CLOUD_PROJECT_ID
export const cloudLocation = "https://us-central1-aiplatform.googleapis.com"
import { NextApiRequest, NextApiResponse } from "next";

const { EndpointServiceClient } = require('@google-cloud/aiplatform');

// Specifies the location of the api endpoint
const clientOptions = {
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
};
const client = new EndpointServiceClient(clientOptions);


export default async function askForCustomerDiscounts(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ error: 'Question is required.' });
    }

    try {
        const endpoint = 'YOUR_VERTEX_AI_ENDPOINT'; // Replace with your Vertex AI endpoint
        const request = {
            endpoint,
            instances: [{ content: question }],
        };

        const [response] = await client.predict(request);
        const answer = response.predictions[0]?.content;

        return res.json({ answer });
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}