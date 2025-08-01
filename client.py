import socket
import time

def send(username,password):
    # Create a socket object
    client_socket=socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Connect to the server (use server IP address here)
    server_ip = '192.168.29.22'  # change this to your server's IP address
    server_port = 8080

    client_socket.connect((server_ip, server_port))
    print("connected to server!")

    # Send message
    client_socket.send(username.encode("utf-8"))
    client_socket.send(password.encode("utf-8"))

    #reciving reply from server
    a=client_socket.recv(1024).decode("utf-8")
    rep=client_socket.recv(1024).decode("utf-8")
    return a,rep

    # Close the socket
    client_socket.close()
