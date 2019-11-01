# PoC-API-EXPRESS

## Getting Started

### Clone Repository
```
$ git clone https://github.com/zeroray/poc-api-express.git
```

### Configure .env
Duplicate or rename **.env.example** to **.env** and complete, follow an example:

```
DEV_DATABASE_URL=mongodb://localhost:27017/poc-api-express-dev
TEST_DATABASE_URL=mongodb://localhost:27017/poc-api-express-test
DATABASE_URL=mongodb://localhost:27017/poc-api-express-prod
PORT=3000
```

### Install
```
$ npm install
$ npm start
```

### Execute
#### User

**Method POST**
For add User

http://localhost:3000/api/user/add

**Header**
Content-Type:application/json

```json
{
	"name": "Daniel",
	"lastName": "Fuentes"
}
```

------------


**Method GET**
Get all Users
http://localhost:3000/api/user


### Run Test
```
$ npm run test
```

### Comments
This is a PoC and is free to any use.
The project handle three environments with the different database names (dev, test, prod)