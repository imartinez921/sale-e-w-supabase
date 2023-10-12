const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require('google-auth-library');

export const projectId = process.env.CLOUD_PROJECT_ID
export const cloudLocation = "us-central1"
export const endpointId = process.env.VERTEX_ENDPOINT_ID


// Specifies the location of the api endpoint
const clientOptions = {
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
};

const API_KEY = process.env.PALM_API_KEY;
export const googleTextClient = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});