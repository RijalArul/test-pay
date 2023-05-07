{
	"info": {
		"_postman_id": "876b53f4-d781-4e6a-baf2-528bbb520c57",
		"name": "dipay",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Create Company",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "company_name",
							"value": "Bren Esport",
							"type": "text"
						},
						{
							"key": "telephone_number",
							"value": "+62811717172",
							"type": "text"
						},
						{
							"key": "is_active",
							"value": "false",
							"type": "text"
						},
						{
							"key": "address",
							"value": "Jl Pulo Gadung No 3",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:3000/api/companies",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"companies"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create Employees By Company ID",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "name",
							"value": "Echo Benny QTK",
							"type": "text"
						},
						{
							"key": "email",
							"value": "bennyqtk@mail.com",
							"type": "text"
						},
						{
							"key": "phone_number",
							"value": "+628782727",
							"type": "text"
						},
						{
							"key": "job_title",
							"value": "staff",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:3000/api/companies/6456bdbe1c09bd035b85db9f/employees",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"companies",
						"6456bdbe1c09bd035b85db9f",
						"employees"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Companies",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/companies",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"companies"
					]
				}
			},
			"response": []
		},
		{
			"name": "Set Active Company ID",
			"request": {
				"method": "PUT",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/companies/64569c6821d8d2012b3ff3ba/set_active",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"companies",
						"64569c6821d8d2012b3ff3ba",
						"set_active"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Employees By COmpany ID",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/companies/6456bda91c09bd035b85db9b/employees",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"companies",
						"6456bda91c09bd035b85db9b",
						"employees"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Detail of Employee",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": []
				},
				"url": {
					"raw": "http://localhost:3000/api/employees/6456be541c09bd035b85db",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"employees",
						"6456be541c09bd035b85db"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Employee by EmployeeID and COmpanyID",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "name",
							"value": "RSG Demonkite",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:3000/api/companies/6456bdb21c09bd035b85db9d/employees/6456be821c09bd035b85dbae",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"companies",
						"6456bdb21c09bd035b85db9d",
						"employees",
						"6456be821c09bd035b85dbae"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Employee By EMployeeID",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/employees/6456be821c09bd035b85dbae",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"employees",
						"6456be821c09bd035b85dbae"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a Fibonacci",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "n",
							"value": "5",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:3000/api/fibonacci",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"fibonacci"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a Combination",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "n",
							"value": "4",
							"type": "text"
						},
						{
							"key": "r",
							"value": "2",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:3000/api/combination",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"combination"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Countries",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/countries",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"countries"
					]
				}
			},
			"response": []
		}
	]
}