import socket
from rentycars import database
data=[]

# Create a socket object
server_socket=socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind the socket to a host and port
server_socket.bind(('192.168.29.22', 8080)) 

# Start listening

server_socket.listen(1)
print("Server is listening for connections...")

# Accept a connection
conn, addr = server_socket.accept()

# Receive message
for i in range(2):
    message = conn.recv(1024).decode("utf-8")
    data.append(message)
print("message recived")

a,rep=database.signin(data[0],data[1])
#sending reply to client
conn.send(a.encode("utf-8"))
conn.send(rep.encode("utf-8"))





# Close connection
conn.close()




