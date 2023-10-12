export const projectId = process.env.CLOUD_PROJECT_ID
export const cloudLocation = "us-central1"

const { EndpointServiceClient } = require('@google-cloud/aiplatform');

// Specifies the location of the api endpoint
const clientOptions = {
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
};
export const googleClient = new EndpointServiceClient(clientOptions);

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
