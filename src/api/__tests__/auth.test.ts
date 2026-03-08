import { getAPIKey } from "../auth";
import { IncomingHttpHeaders } from "http";

import { describe, expect, test } from "vitest";
describe("getAPIKey", () => {
    test("returns the API key when header is present and correct", () => {
        const headers: IncomingHttpHeaders = {
        authorization: "ApiKey my-secret-key"
        };
        expect(getAPIKey(headers)).toBe("my-secret-key");
    });

    test("returns null if authorization header is missing", () => {
        const headers: IncomingHttpHeaders = {};
        expect(getAPIKey(headers)).toBeNull();
    });

    test("returns null if authorization header does not start with ApiKey", () => {
        const headers: IncomingHttpHeaders = {
        authorization: "Bearer somethingelse"
        };
        expect(getAPIKey(headers)).toBeNull();
    });

    test("returns null if authorization header is malformed", () => {
        const headers: IncomingHttpHeaders = {
        authorization: "ApiKey"
        };
        expect(getAPIKey(headers)).toBeNull();
    });

    test("returns null if authorization header is an empty string", () => {
        const headers: IncomingHttpHeaders = {
        authorization: ""
        };
        expect(getAPIKey(headers)).toBeNull();
    });
    test("fail test", () => {
        const headers: IncomingHttpHeaders = {
        authorization: "ApiKey my-secret-key"
        };
        expect(getAPIKey(headers)).toBe("wrong-key");
    });
});
