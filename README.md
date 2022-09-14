
# Ecommerce-api

This is an Ecommerse App with api to view product, insert product,signup,login,and view categoty


#### Install Required modules

```install
  npm i
```
#### Run app

```run
  npx nodemon index.js
```


#### Sign up user

```http
  POST localhost:3000/signup
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email|
| `password` | `string` | **Required**. Password|


#### Login user

```http
  Post localhost:3000/login
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email|
| `password` | `string` | **Required**. Password|

```Token
After Login a Token will be generate which will be used for authenticate the user
```
####Access Token for all api


#### Add product

```http
  POST localhost:3000/api/v1/product/add 
```


| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `auth`    | `string` | **Required**. auth token to authenticate user|

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**. Name of product |
| `price` | `integer` | **Required**. price |
| `description` | `string` | **Required**. Description |
| `categoryId` | `integer` | **Required**. categoryId |
| `vendorId` | `integer` | **Required**. vendorId |

#### Get all product

```http
  GET localhost:3000/api/v1/product/all
```

#### Get all category

```http
  GET localhost:3000/api/v1/category/all
```

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dibyakanta-nayak-77bab11b9)


## Authors

- [@Litun098](https://github.com/Litun098)


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

