const http = require("http");

const serveur = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello les Pros je suis la </h1>");
  res.write("<p>Ici un paragraph ................</p>");
  res.end();
});

serveur.listen(3000, "localhost", () => {
  console.log("serveur demarreer et ecoute du port 3000");
});
