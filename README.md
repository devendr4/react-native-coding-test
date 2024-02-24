## Getting started

Install the dependencies and run the project with the following commands:

```shell
yarn install
yarn dev
```

### Back-end

We have mocked a basic API with different endpoints to demonstrate a practical example. Below you'll find detailed information about the API endpoints available for the take-home task. The base URL for all API requests is:

```
https://finity-take-home.s3.amazonaws.com
```

### 1. Empty List Endpoint

- **Endpoint:** `/123.json`
- **Method:** `GET`
- **Description:** This endpoint returns an empty list. It can be used to test the API connectivity and response 

### 2. Late Order Endpoint

- **Endpoint:** `/456.json`
- **Method:** `GET`
- **Description:** This endpoint returns a list containing a late order. It's useful for testing order status handling, particularly late orders.

### 3. Mixed Status Orders Endpoint

- **Endpoint:** `/789.json`
- **Method:** `GET`
- **Description:** This endpoint provides a list of orders with at least one order marked as paid and one pending payment. This is critical for testing various order states.

### 4. Error Simulation Endpoint

- **Endpoint:** `/500.json`
- **Method:** `GET`
- **Description:** This endpoint is designed to simulate an error response (HTTP 500). It can be used for testing error-handling mechanisms in the application.

## Error Handling

- The API uses standard HTTP response codes to indicate the success or failure of an API request. In case of an error, the response will include an error message.