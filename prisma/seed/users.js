const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const zaria = await prisma.customer.upsert({
    where: { email: "zaria74@ethereal.email" },
    update: {},
    create: {
      email: "zaria74@ethereal.email",
      password: bcrypt.hashSync("zaria", 8),
      first_name: "Zaria",
      last_name: "Brice",
      shopping_preference: "woman",
      birth: "2002-06-17T08:40:32+00:00",
      address: {
        create: {
          street: "4441 Central Pl",
          building: "house no.88",
          city: "Fairfield",
          province: "California",
          postcode: "94534",
          phone: "707-864-1446",
          country: "United States",
        },
      },
      shipment: {
        create: {
          shipment_date: "2024-01-17T08:40:32+00:00",
          ship_provider: {
            create: {
              ship_provider_name: "fedEx",
            },
          },
          address: {
            connect: {
              address_id: 1,
            },
          },
        },
      },
      cart: {
        create: {
          quantity: 1,
          product_details: {
            connect: {
              product_details_id: 1,
            },
          },
        },
      },
      wishlist: {
        create: {
          product_id: 1,
        },
      },
    },
  });
  console.log({ zaria });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
