const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const products = await prisma.product.create({
    data: {
      product_name: "Nike Blazer Low '77 Jumbo",
      product_description: `They say, "Don't fix what works". We say, "Perfect it". This streetwear superstar gets revamped with jumbo-sized details. Harnessing the old-school look you love, the Nike Blazer Low '77 Jumbo features an oversized Swoosh design, extra-wide laces and thicker stitching.`,
      product_price: "1459000",
      shopping_preference: "woman",
      category: {
        create: {
          category_name: "Shoes",
        },
      },
      product_color: {
        createMany: {
          data: [
            {
              product_color_name: "White",
            },
            {
              product_color_name: "University Blue",
            },
            {
              product_color_name: "Pink Oxford",
            },
          ],
        },
      },
      product_size: {
        createMany: {
          data: [
            {
              product_size_value: "EU 35",
            },
            {
              product_size_value: "EU 36",
            },
            {
              product_size_value: "EU 37",
            },
            {
              product_size_value: "EU 38",
            },
            {
              product_size_value: "EU 39",
            },
            {
              product_size_value: "EU 40",
            },
            {
              product_size_value: "EU 41",
            },
            {
              product_size_value: "EU 42",
            },
            {
              product_size_value: "EU 43",
            },
          ],
        },
      },
      product_image: {
        createMany: {
          data: [
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9d11e437-3a3d-441f-a493-d54a538ad4f4/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 1,
            },
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/87b7358d-07fe-4655-86ef-fc749076606d/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 1,
            },
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dd4c8b66-8909-4575-ab11-2faa772f1e2d/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 1,
            },
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bea1d707-0f60-4517-9bb0-ff0ff1db4ce2/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 1,
            },
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ab3cd814-34e4-492f-bab5-799184c265f2/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 2,
            },
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6a844b01-e017-446b-94b8-4bbe52be9b0e/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 2,
            },
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/85fe9b24-4b6b-48c8-b247-db59c567af99/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 2,
            },
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bb98a754-db3e-40aa-ab46-a2d6a0fda2a9/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 2,
            },
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0551d1ae-aac7-49f9-828b-4d5a2b050652/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 3,
            },
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99865daa-13b2-4486-a708-68aaefa5e405/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 3,
            },
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25218b85-d6bb-45b5-b9da-ccef1c0ab8f1/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 3,
            },
            {
              image_url:
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/daec2e21-d159-4cdf-af90-89c69362be8f/blazer-low-77-jumbo-shoes-cdj0gL.png",
              image_width: 1729,
              image_height: 2160,
              product_color_id: 3,
            },
          ],
        },
      },
      product_details: {
        createMany: {
          data: [
            {
              product_stock: 100,
              product_color_id: 1,
              product_size_id: 1,
            },
            {
              product_stock: 100,
              product_color_id: 1,
              product_size_id: 2,
            },
            {
              product_stock: 100,
              product_color_id: 1,
              product_size_id: 3,
            },
            {
              product_stock: 100,
              product_color_id: 2,
              product_size_id: 4,
            },
            {
              product_stock: 100,
              product_color_id: 2,
              product_size_id: 5,
            },
            {
              product_stock: 100,
              product_color_id: 2,
              product_size_id: 6,
            },
            {
              product_stock: 100,
              product_color_id: 3,
              product_size_id: 7,
            },
            {
              product_stock: 100,
              product_color_id: 3,
              product_size_id: 8,
            },
            {
              product_stock: 100,
              product_color_id: 3,
              product_size_id: 9,
            },
          ],
        },
      },
    },
  });

  console.log("products:", { products });
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
