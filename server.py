import socket

server = socket.create_server(('localhost',80),family=socket.AF_INET)
server.listen(1)
conn,addr= server.accept()

data=conn.recv(1600).decode().lower() 
print(f"[[Client]]: {data}")
while data != "n":
    msg = input("Something to send: ").encode()
    conn.send(msg)
    print(f"[[Me]]: {msg}")
    data=conn.recv(1600).decode().lower() 
    if data != "n":
        print(f"[[Client]]: {data}")
    else:
        conn.close()
    
