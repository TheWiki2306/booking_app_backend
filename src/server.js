import app from "./app.js";

const PORT = process.env.PORT || 8585;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})
