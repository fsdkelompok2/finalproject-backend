const { prisma } = require("../models/prisma");
const ErrorData = require("./ErrorData");

class ProductFilter {
    constructor({ products, queryStr }) {
      this.products = products;
      this.queryStr = queryStr;
    }
  
    async filter() {
      // 1. Meng-copy queryStr untuk dimanipulasi
      let queryStrCopy = { ...this.queryStr };

      // 2. Menghapus queryStr yang belum dibutuhkan
      const fieldsToRemove = ['page'];
      fieldsToRemove.forEach((field) => delete queryStrCopy[field]);
  
      // 3. Mengatur ulang queryStr
      // 3.1. Menjadikan tipe data queryStryCopy.product_id dari string menjadi number
      if(queryStrCopy.product_id) {
        (queryStrCopy.product_id = Number(queryStrCopy.product_id));
      }

      // 3.2. Mencari category_id dari category_name yang disediakan oleh queryString di tabel category
      // Setelah itu membuat properti category dan menghapus properti category_name di object queryStrCopy
      if(queryStrCopy.category_name) {
        const categoryName = queryStrCopy.category = await prisma.category.findFirst({
          where: {
            category_name: queryStrCopy.category_name
          },
          select: {
            category_id: true,
          }
        });

        if(!categoryName) {
          throw new ErrorData(404, "category not found");
        }
        
        delete queryStrCopy.category_name;
      }
      
      // 4. Cari products di database
      this.products = await this.products.findMany({
        where: {
          ...queryStrCopy
        }
      })

      return this;
    }
  
    async pagination({ productsPerPage }) {
      const currentPage = Number(this.queryStr.page) || 1;
      const skipNumOfItems = productsPerPage * (currentPage - 1);
      const takeItemsUntilIndex = skipNumOfItems + productsPerPage
      
      this.products.slice(skipNumOfItems, takeItemsUntilIndex);
 
      return this;
    }
};
  
module.exports = ProductFilter;