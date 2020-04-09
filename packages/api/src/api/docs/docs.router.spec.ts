import supertest from "supertest";
import { app } from "../../app";

const request = supertest(app);

describe("docs router", () => {
  it("gets the dev docs endpoint", async () => {
    expect.assertions(1);

    const response = await request.get("/api/docs/dev/");

    expect(response.status).toBe(200);
  });
});
