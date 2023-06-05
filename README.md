Define the .env file the following parameters:

`
client_id=<CLIENT_ID>

client_secret=<CLIENT_SECRET>

scopes=read_products,write_products //add more if need it

redirect_uri=http://localhost:4000/api/shopify/redirect
`

To Execute the server:

`node api`

To start the authentication flow, open the url -> http://localhost:4000/api/shopify/authorize?shop=<SHOP_NAME>

After the flow is completed, the authorization code is printed in the logs. You can use to retrieve the token for the API calls
