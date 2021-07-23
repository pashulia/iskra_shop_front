let port = 8000;

if (process.env.REACT_APP_NODE_ENV === "test") {
    port = 8010;
}

export default {
    apiUrl: "http://localhost:" + port,
    fb: {
        appId: "229425875653826"
    }
};