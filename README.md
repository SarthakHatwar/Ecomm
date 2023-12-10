Create a new product:
URL: http://localhost:3000/products/create
Method: POST
example body
{
  "name": "toothbrush",
  "quantity": 20
}
List products:
URL: http://localhost:3000/products
Method: GET
Delete a product (replace :id with the actual product ID):
URL: http://localhost:3000/products/:id
Method: DELETE
Update quantity (replace :id with the actual product ID):
URL: http://localhost:3000/products/:id/update_quantity/?number=10
Method: POST
