// Require diet
var server = require('diet')

// Create Server Instance 1
var app = server()
app.listen('http://localhost:8000/')
app.get('/', function($){ 
    $.end('welcome to my website') 
})

// Create Server Instance 2
var app2 = server()
app2.listen('http://localhost:9000/')
app2.get('/', function($){ 
    $.end('welcome to my mobile api') 
})