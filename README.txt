Scripts to run: (npm run build, npm run lintFix, npm run start) or npm run task2.2

URL to test in Postman: http://localhost:5000/users

post body json: {"login" : "login1", "password" : "password1", "age" : 11}
put body json: {"login" : "login1", "password" : "password1", "age" : 11, "isDeleted" : false}
get body json: {"loginSubstring" : "og", "limit" : 2}