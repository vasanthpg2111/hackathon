import mysql.connector as mysql
def signin(u,p):
    rep=[]

    # Establish the connection
    db = mysql.connect(
        host="localhost",       # Replace with your MySQL server host
        user="root",   # Replace with your MySQL username
        password="Vibin@#123",
        database="rentycars"
    )

    #creating cursor
    cursor=db.cursor()
    cursor.execute("select * from signin where username= '"+u+"' ")
    res=cursor.fetchall()
    for i in res:
        for j in i:
            rep.append(j)
    if rep==[]:
        cursor.execute("insert into signin values('"+u+"','"+p+"') ")
        db.commit()
        a='1'
        return a,"new signin registered!"
    elif rep[0]==u and rep[1]==p:
        a='2'
        return a,"signed in succesfully!"

    elif rep[0]==u and rep[1]!=p:
        a='0'
        return a,"wrong password, \n if you are a new user the username is not avilable!"

    
        

    



