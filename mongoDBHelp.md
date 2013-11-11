HOW TO ADD LIST OF UNIVERSITES TO MONGODB:

0) Get lastest commit from github

1) Open 2 terminals

2) In the 1st terminal navigate to freshmeet directory and then use 'meteor run' command

    meteor run
    
3) In 2nd terminal type in 'meteor mongo', this will allow you to use the mongo shell.  when you get access to the shell take note of the ip address and port number after connecting (mine is ip:127.0.0.1 port:3002)

    meteor mongo
    
3) Now type 'show dbs', you should see a printed out list of dbs, type 'use meteor' this will switch you over to the meteor db we are using, check you are on the meteor db by typing in 'db'

    show dbs
    use meteor
    db
    
4) 'ctrl' + 'c' to get back to regular terminal window (2nd terminal still)

5) Use 'mongoimport' and arguments to import the csv file into the schools collection

    mongoimport --host 127.0.0.1 --port 3002 --db meteor --collection schools --type csv --file universities.csv --fields name
    
    
==========
==========

General MongoDB helpful information


DATABASE:

A physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

==========
COLLECTION:

A grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection have a similar or related purpose.

==========
DOCUMENT:

A record in a MongoDB collection and the basic unit of data in MongoDB. Documents are analogous to JSON objects but exist in the database in a more type-rich format known as BSON.

==========
FIELD:

A name-value pair in a document. A document has zero or more fields. Fields are analogous to columns in relational databases.
