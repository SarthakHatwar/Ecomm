Create a new product:
URL: https://ecommm-qsak.onrender.com/products/create
Method: POST
example body
{
  "name": "toothbrush",
  "quantity": 20
}
List products:
URL: https://ecommm-qsak.onrender.com/products
Method: GET
Delete a product (replace :id with the actual product ID):
URL: https://ecommm-qsak.onrender.com/products/:id
Method: DELETE
Update quantity (replace :id with the actual product ID):
URL: https://ecommm-qsak.onrender.com/:id/update_quantity/?number=10
Method: POST
