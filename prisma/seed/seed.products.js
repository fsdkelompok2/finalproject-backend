const products = [
    {
        product_name: "Nike Cortez Textile",
        product_description: `One word: tradition. From heritage running to fashion phenom, its retro appeal, sponge-soft midsole and see-saw detailing deliver decade after decade. This iteration offers easy-to-style colours with a vintage vibe.`,
        product_price: "1399000",
        product_thumb: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37f1a17a-a29d-4fd1-8ab0-1ab0933a78e5/cortez-textile-shoes-tDJ6fc.png",
        sex_cat: "women",
        category: {
          connect: {
            category_name: "Lifestyle"
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
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/549cb5d3-74a3-4f88-8efb-99cfa2e315f0/cortez-textile-shoes-tDJ6fc.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 1,
              },
              {
                image_url:
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc799179-361a-4b12-a495-81ec72c8cbbf/cortez-textile-shoes-tDJ6fc.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 1,
              },
              {
                image_url:
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb697d5b-3867-4353-bff8-65ce4eadc798/cortez-textile-shoes-tDJ6fc.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 1,
              },
              {
                image_url:
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d8ca73c5-cf1b-49d4-9e3d-07908e11cb64/cortez-textile-shoes-tDJ6fc.png",
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
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1d24b44e-a4b9-4d21-bf13-fcd35ef4f868/cortez-textile-shoes-tDJ6fc.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 2,
              },
              {
                image_url:
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90dc027a-8db6-4066-97ab-ce93af48074b/cortez-textile-shoes-tDJ6fc.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 2,
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
    {
        product_name: "Nike Blazer Low '77 Jumbo",
        product_description: `They say, "Don't fix what works". We say, "Perfect it". This streetwear superstar gets revamped with jumbo-sized details. Harnessing the old-school look you love, the Nike Blazer Low '77 Jumbo features an oversized Swoosh design, extra-wide laces and thicker stitching.`,
        product_price: "1459000",
        product_thumb: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ab3cd814-34e4-492f-bab5-799184c265f2/blazer-low-77-jumbo-shoes-cdj0gL.png",
        sex_cat: "women",
        category: {
          connect: {
            category_name: "Lifestyle"
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
    {
        product_name: "Nike Court Vision Low Next Nature",
        product_description: `The Court Vision Low blends the fast-break style of '80s basketball with the fast-paced culture of today's game. It features a synthetic leather upper inspired by old-school sneakers and the classic rubber cupsole featured on some of the most iconic silhouettes of the past.`,
        product_price: "1199000",
        product_thumb: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29a58cdc-d85a-4f01-a226-ede927c8c881/court-vision-low-next-nature-shoes-D5BmqX.png",
        sex_cat: "women",
        category: {
          connect: {
            category_name: "Tennis"
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
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/74ad7fbb-1d56-478e-bde5-1fbc056873fe/court-vision-low-next-nature-shoes-D5BmqX.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 1,
              },
              {
                image_url:
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/058f407d-f781-407f-9e41-7e3441473dfb/court-vision-low-next-nature-shoes-D5BmqX.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 1,
              },
              {
                image_url:
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79638668-3370-4f52-9810-aa4f2d410f28/court-vision-low-next-nature-shoes-D5BmqX.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 1,
              },
              {
                image_url:
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9a21a07-89db-4542-bc59-6f678d96c71d/court-vision-low-next-nature-shoes-D5BmqX.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 1,
              },
              {
                image_url:
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1385ce3e-1a5e-470b-bfef-b5bea2210141/court-vision-low-next-nature-shoes-D5BmqX.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 2,
              },
              {
                image_url:
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ba92ef86-e27c-4d10-9395-8c1541b8d03d/court-vision-low-next-nature-shoes-D5BmqX.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 2,
              },
              {
                image_url:
                  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29a58cdc-d85a-4f01-a226-ede927c8c881/court-vision-low-next-nature-shoes-D5BmqX.png",
                image_width: 1729,
                image_height: 2160,
                product_color_id: 2,
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
];

module.exports = {products}