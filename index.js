import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


const API_URL = "https://v2.jokeapi.dev/joke/Any?format=txt";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/wynik", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        const englishJoke = result.data;

        const translationUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(englishJoke)}&langpair=en|pl`;
        const translationResult = await axios.get(translationUrl);
        
        const polishJoke = translationResult.data.responseData.translatedText;

    
        res.render("index.ejs", { 
            joke: polishJoke, 
            originalJoke: englishJoke 
        });

    } catch (error) {
        console.error(error);
        res.render("index.ejs", { joke: "Ups! Coś poszło nie tak przy pobieraniu żartu." });
    }
});


app.listen(port, () => {
    console.log("Serwer działa na porcie " + port + ".");
});
