const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require('google-auth-library');

export const projectId = process.env.CLOUD_PROJECT_ID
export const cloudLocation = "us-central1"
export const endpointId = process.env.VERTEX_ENDPOINT_ID

export const aiplatform = require('@google-cloud/aiplatform');
export const { instance, prediction } = aiplatform.protos.google.cloud.aiplatform.v1.schema.predict;

const { PredictionServiceClient } = aiplatform.v1;
const { EndpointServiceClient } = require('@google-cloud/aiplatform');

// Specifies the location of the api endpoint
const clientOptions = {
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
};

const API_KEY = process.env.PALM_API_KEY;
export const googleClient = new EndpointServiceClient(clientOptions);
export const predictionServiceClient = new PredictionServiceClient(clientOptions);
export const googleTextClient = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});


export async function authGoogle() {
    const auth = new GoogleAuth({
        scopes: 'https://www.googleapis.com/auth/cloud-platform'
    });
    const client = await auth.getClient();
    const projectId = await auth.getProjectId();
    const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
    const res = await client.request({ url });
    console.log(res.data);
}



export async function createEndpoint() {
    // Configure the parent resource
    const parent = `projects/${projectId}/locations/${cloudLocation}`;
    const endpoint = {
        displayName: "SALE-E-AI",
    };
    const request = {
        parent,
        endpoint,
    };

    // Get and print out a list of all the endpoints for this resource
    const [response] = await googleClient.createEndpoint(request);
    console.log(`Long running operation : ${response.name}`);

    // Wait for operation to complete
    await response.promise();
    const result = response.result;

    console.log('Create endpoint response');
    console.log(`\tName : ${result.name}`);
    console.log(`\tDisplay name : ${result.displayName}`);
    console.log(`\tDescription : ${result.description}`);
    console.log(`\tLabels : ${JSON.stringify(result.labels)}`);
    console.log(`\tCreate time : ${JSON.stringify(result.createTime)}`);
    console.log(`\tUpdate time : ${JSON.stringify(result.updateTime)}`);
}

export async function listGoogleEndpoints() {
    // Configure the parent resource
    const parent = `projects/${projectId}/locations/${cloudLocation}`;
    const request = {
        parent,
    };

    // Get and print out a list of all the endpoints for this resource
    const [result] = await googleClient.listEndpoints(request);

    console.log(result)

    for (const endpoint of result) {
        console.log(`\nEndpoint name: ${endpoint.name}`);
        console.log(`Display name: ${endpoint.displayName}`);
        if (endpoint.deployedModels[0]) {
            console.log(
                `First deployed model: ${endpoint.deployedModels[0].model}`
            );
        }
    }
}