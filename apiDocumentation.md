## Endpoints

List of Available Endpoints:

- `POST /users/register`
- `POST /users/login`
- `GET /products/sneakers`
- `GET /products/sneakers/:id`
- `GET /products/sneakers/brands`
- `GET /invoice`
- `POST /invoice/payment`
- `POST /invoice/add`

### POST /register

#### Description

- Create a new user data

#### Request

- Body
  ```json
  {
    "email": String,
    "password": String,
    "name": String,
    "address": String,
    "phoneNumber": String,
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
    "data" : {
      "id" : Integer,
      "email" : String,
    },
     "message": 'User has been created successfully'
    }
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "error": {
      "message": String
    }
  }
  ```

### POST /login

#### Description

- Create AccessToken from data

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```
- Body
  ```json
  {
    "email": String,
    "password": String,
  }
  ```

#### Response

_200 - OK_

- Body

  ```json
  {
    "access_token" : String,
    "email": String,
    "name": String
  }
  ```

_401 - Unauthorized_

- Body

  ```json
  {
    "statusCode": 401,
    "error": {
      "message": String
    }
  }
  ```

### GET /products/sneakers

#### Description

- Get all the products data

#### Response

_200 - OK_

- Body

  ```json
  {
    "data": [
      {
        "id": String,
        "sku": String,
        "brand": String,
        "name": String,
        "colorway": String,
        "gender": String,
        "silhouette": String,
        "releaseYear": String,
        "releaseDate": String,,
        "retailPrice": Integer,
        "estimatedMarketValue": Integer,
        "story": String,
        "image": Object,
        "links": Object
      },
      ...
    ]
  }
  ```

### GET /products/brands

#### Description

- Get all the brands data

#### Response

_200 - OK_

- Body

  ```json
  {
    "data": Array
  }
  ```

### GET /products/sneakers/:id

#### Description

- Get a products data based on given id

#### Response

_200 - OK_

- Body

  ```json
  {
    "data": [
      {
        "id": String,
        "sku": String,
        "brand": String,
        "name": String,
        "colorway": String,
        "gender": String,
        "silhouette": String,
        "releaseYear": String,
        "releaseDate": String,,
        "retailPrice": Integer,
        "estimatedMarketValue": Integer,
        "story": String,
        "image": Object,
        "links": Object
      },
      ...
    ]
  }
  ```

### GET /invoice

#### Description

- Get all invoice data

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded",
    "access_token": String
  }
  ```

#### Response

_200 - OK_

- Body

  ```json
  {
    "data": [
      {
        "itemName": String,
        "price": Integer,
        "size": Integer,
        "quantity": Integer,
        "invoiceNumber": String,
        "userId": Integer,
      },
      ...
    ]
  }
  ```

_401 - Unauthorized_

- Body
  ```json
  {
    "statusCode": 401,
    "error": {
      "message": String
    }
  }
  ```

### POST /invoice/add

#### Description

- Create a new invoice data

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded",
    "access_token": String
  }
  ```
- Body
  ```json
  {
    "itemName": String,
    "price": Integer,
    "size": Integer,
    "quantity": Integer,
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
    "data": {
      "itemName": String,
      "price": Integer,
      "size": Integer,
      "quantity": Integer,
      "UserId": Integer,
      "invoiceNumber": String,
  }
  }
  ```

_401 - Unauthorized_

- Body
  ```json
  {
    "statusCode": 401,
    "error": {
      "message": String
    }
  }
  ```

_400 - Bad Request_

- Body

  ```json
  {
    "statusCode": 400,
    "error": {
      "message": String
    }
  }
  ```

### POST /invoice/payment

#### Description

- Create a payment token

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded",
    "access_token": String
  }
  ```
- Body
  ```json
  {
    "amount": Integer
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
    "token": {
      "token": String,
      "redirect_url": String
    }
  }
  ```

_401 - Unauthorized_

- Body
  ```json
  {
    "statusCode": 401,
    "error": {
      "message": String
    }
  }
  ```

_400 - Bad Request_

- Body

  ```json
  {
    "statusCode": 400,
    "error": {
      "message": String
    }
  }
  ```

### Global Error

#### Response

_404 - Not Found_

- Body
  ```json
  {
    "statusCode": 404,
    "error": {
      "message": "Error not found"
    }
  }
  ```

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": "Internal Server Error"
    }
  }
  ```
