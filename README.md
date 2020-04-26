# Node / Express API
Restful API implementation with NodeJS, Express and JsonWebToken, to demonstrate how JWT token secure restful API endpoint.

# GET Endpoint (Unsecure)
http://localhost:3002/profile, this endpoint return input json object to jet JWT token.

# POST - Login Endpoint - (Unsecure)
http://localhost:3002/profile/login : This endpoing accept body in below format and returns the JWT token to access secure endpoint.
{"fullname":"Test User","email":"test@domain.com"} 

# POST - Endpoint (secure)
http://localhost:3002/profile : This endpoint can only be accessed by valid JWT token generated by above(/profile/login) endpoint.
