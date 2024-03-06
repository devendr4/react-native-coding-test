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


# Communication
### Were there any decision points you came across? Did you need to make any assumptions?
Yes, I had to make multiple assumptions from the Figma design. Here's a list of them:
- It wasn't very clear when it was needed to show the 'Pagar' button inside the payments tab, so I added it to all payments with a `status` of 'DELAYED'
- Similar to the previous point, it wasn't really clear in the orders tab when it was needed for the orders to be colored red, so I changed them to red only if the `orderStatus` was 'LATE'
- It's not that clear how my payments installments there are, so I assumed it's only 4 based on the Figma designs.
### Were there any questions you would have asked if this was a real-world scenario?
Yes, I would have asked these questions:
- Should we add a dark mode?
- Will the app only be available in Spanish? Should we add support for more languages?
- Should we develop the app as 'offline first'?
- How many payment installments are there? Is it a fixed number or can it vary?
### If you have any feedback or reflections, please share them with us. For example, if you could redo these exercises, what would you have done differently?
- I would have given more freedom when it comes to styling. In this case I had to use dripsy because it was already installed and I wanted to comply to the existing project styles. But as a personal preference I would have used some other library such as https://github.com/marklawlor/nativewind
### If this prototype were to be deployed in a real-world scenario, what considerations would you take into account to ensure scalability and maintainability?
- I would have added more comments explaining the funcionality of each component used for the prototype, and also used a more defined and organized component methodology, such as Atomic Design. On the other side, most of the scalability of the app would depend more on the backend side of things, which was out of the scope for this task, but in general, I would add more servers and resources to ensure we could keep the demand of a lot of users using the App at once.
### Did you incur any technical debt during this challenge? How would you plan to address this in a real-world setting?
- I don't think there's any technical debt at the moment, but in a real-world setting I would make sure to keep up to date all libraries used in the project.
