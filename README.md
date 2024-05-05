# Backend Final Project Kelompok 2 Nike Clone

## Development Step

1. Install Dependencies

```
npm run install
```

2. Create .env file

```
cp .env.example .env
```

Inside .env

```
NODE_ENV=development
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
JWT_SECRET="o/7/Qy9YvHrd3kVb+HBXjrq0J3tZ8TttJ9zJHSa8NDJjnbxjzJFT1SP3Kg++46Ud
tR19UUpHEqtGkdGjEqPOtw=="
```

3. Apply Migration

```
npx prisma migrate reset
```

4. Seed data

seed data product:

```
node prisma/seed/product.js
```

seed data users:

```
node prisma/seed/users.js
```

5. Cek apakah data seed sudah ada di database dengan prisma studio

```
npx prisma studio
```

6. Happy develop guys!!
