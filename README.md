## Prototype Chaning and Prototype Inheritance

![Prototype](/image/1.png)

## Client-server Architecture and REST

![REST](/image/2.png)

# Scale an API's

**Understanding API performance challenges**

- **Inefficient database queries** – UN-Optimized API queries lead to slow data retrieval.
- **Oversized payloads** – Large response sizes increase network transfer time.
- **Network latency** – Slow API responses due to external network delays.
- **High request volume** – Frequent API calls from users or integrations strain API performance.
- **Heavy computation - ** block the request processing

**DB Optimization**

- simple, quick and efficient queries
- understanding data access pattern
- utilizing primary key and indexing technique
- as many caches as need

A **Data Access Pattern** refers to the way an application interacts with a database to read and write data efficiently. It defines structured methods for querying, caching, and managing data to optimize performance and scalability.

Common Data Access Patterns:

- **Active Record** – Each database table is represented as a model, where objects handle their own CRUD operations (e.g., Sequelize ORM).
- **Repository Pattern** – Separates business logic from data access, using a repository class to manage database operations.
- **Unit of Work** – Batches multiple operations into a single transaction to improve efficiency and maintain consistency.
- **Cache-Aside (Lazy Loading)** – Loads data into a cache only when requested, reducing database queries.
- **Indexing & Pagination** – Uses indexes for fast lookup and paginates large datasets to optimize query performance.

**App Optimization**

- purpose-built request and response object = not passing data that are not necessary
- optimize the core/business logic
- implement fast-fail validations

```
POST - /api/v1/users
[
  {
    "name": "Vinod Kumar",
    "age":22
  },
  {
    "name": "Deepak",
    "age":25
  }
]

Problem - the data user passed inside the request.body is not valid form as this REST API end-point need.


`﻿`routes - middleware - controller - services - respository

option 01 : you can check the validation inside middleware and return from midlleware only
option 02 : you get validation error in repository than you are returning from there

which one is good ? - option 01

```

---

---

**System Architecture to scale API's**

- **Localized Access to DB: **means **reducing the physical or logical distance between the API server and the database** to minimize latency and improve query performance.

- Deploy databases closer to API servers :

  - Deploy an API server in **India** that connects to a **DB instance in Mumbai**.
  - Deploy another API server in the **US** with a **DB replica in Virginia**.
  - This prevents Indian users from querying a US-based database, reducing response time.

- **Optimized network paths: ** minimize latency by choosing the best routes for data transfer.
  For Example: use content delivery network to find out nearest possible servers.
