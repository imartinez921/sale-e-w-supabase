import { Client, Environment, LocationsApi, ApiError } from "square";

export const client = new Client({
    environment: Environment.Sandbox,
    accessToken: process.env.SANDBOX_SECRET,
})

const { locationsApi } = client;