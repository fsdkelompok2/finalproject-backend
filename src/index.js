const app = require("./app");
const { prisma } = require("./models/prisma");

// Check Database Connection
async function checkConnection() {
  await prisma.$connect();
}
checkConnection()
  .then(async () => {
    console.log("Connect to database success.");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Failed to connect database", error);
    await prisma.$disconnect();
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
