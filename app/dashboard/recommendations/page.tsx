import { DatasetServiceClient } from "@google-cloud/aiplatform";
import { MatchServiceClient } from "@google-cloud/aiplatform";
import { projectId, cloudLocation } from "@/app/utils/google-vertex-client";

const createVertexDataSet = async (dataset: any) => {
    const parent = `projects/${projectId}/locations/${cloudLocation}`

    const aiPlatformDataSetClient = new DatasetServiceClient();

    const request = {
        parent,
        dataset
    }

    try {
        const [operation] = await aiPlatformDataSetClient.createDataset(request);
        const [response] = await operation.promise();

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}