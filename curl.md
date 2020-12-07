curl -i \
-H "Content-Type: application/json" \
-X POST \
-d '{}' https://xovz10gxz6.execute-api.us-east-1.amazonaws.com/latest/pizzas/orders


curl -i \
-H "Content-Type: application/json" \
-X POST \
-d '{"pizzaId":1,"address":"221B Baker Street"}' \
 https://xovz10gxz6.execute-api.us-east-1.amazonaws.com/latest/orders

 curl -i \
-H "Content-Type: application/json" \
-X PUT \
-d '{"pizzaId":2}' \
 https://xovz10gxz6.execute-api.us-east-1.amazonaws.com/latest/orders/42

 curl -i \
-H "Content-Type: application/json" \
-X DELETE \
 https://xovz10gxz6.execute-api.us-east-1.amazonaws.com/latest/orders/42

aws dynamodb create-table --table-name pizza-orders \
--attribute-definitions AttributeName=orderId,AttributeType=S \
--key-schema AttributeName=orderId,KeyType=HASH \
--provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
--query TableDescription.TableArn --output text

arn:aws:dynamodb:us-east-1:395317091169:table/pizza-orders

aws iam put-role-policy --role-name counting-api-executor \
--policy-name PizzaApiDynamoDB \
--policy-document file://./roles/dynamodb.json


curl -i \
-H "Content-Type: application/json" \
-X POST \
-d '{"pizza":4,"address":"221b Baker Street"}' \
 https://xovz10gxz6.execute-api.us-east-1.amazonaws.com/latest/orders

aws dynamodb scan \
--table-name pizza-orders \
--region us-east-1 \
--output json


curl -i \
-H "Content-Type: application/json" \
 https://xovz10gxz6.execute-api.us-east-1.amazonaws.com/latest/orders


curl -i \
-H "Content-Type: application/json" \
 https://xovz10gxz6.execute-api.us-east-1.amazonaws.com/latest/orders/7e5bf848-250d-4c4e-8d0d-0f0248df6be1