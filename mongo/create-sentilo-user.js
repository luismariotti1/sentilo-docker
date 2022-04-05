use sentilo
db.createUser({
    user: "sentilo",
    pwd: "sentilo",
    roles: [{role: "readWrite", db:"sentilo"}]
}) 
