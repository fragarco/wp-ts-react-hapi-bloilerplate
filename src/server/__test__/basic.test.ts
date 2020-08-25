import * as Path from "path";
import { WebControlServer } from "../server";

describe("Initial connection to /", () => {
    let backend: WebControlServer = null;

    beforeAll(async (done) => {
        const rootdir = Path.join(process.cwd(), "dist");
        backend = new WebControlServer(rootdir, 80);
        backend.server.events.on("start", () => {
            done();
        });
        await backend.init();
        backend.server.start();
    });

    afterAll((done) => {
        backend.server.events.on("stop", () => {
            done();
        });
        backend.server.stop();
    });

    it("Should success with server connection", async () => {
        const options = {
            method: "GET",
            url: "/",
        };
        const data = await backend.server.inject(options);
        expect(data.statusCode).toBe(200);
    });
});
