const { PrismaClient } = require("@prisma/client");
const { products } = require("../seed/seed.products");
const { categories } = require("./seed.categories");

const prisma = new PrismaClient();

// seeding categories!
async function seedCategories() {
    const existingCategories = await prisma.category.findMany();

    if (existingCategories.length === 0) {
        for (let category of categories) {
            await prisma.category.create({
                data: category
            });
        }
        console.log("Categories seeded successfully!")
    } else {
        console.log("No new categories been added!")
    }
};

//seeding products!
async function seedProducts() {
    await seedCategories();
    
    for (let product of products) {
        await prisma.product.create({
            data: product
        });
        console.log("Product seeded successfuly!")
    }    
}

seedProducts()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
