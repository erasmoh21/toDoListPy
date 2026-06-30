import socket,os
file = os.fdopen(os.open("./templates/login/login.html",os.O_RDONLY),"+rb")

SERVERSOCK=("localhost",80)
server = socket.create_server(SERVERSOCK,family=socket.AF_INET)
server.listen(1)
conn,addr= server.accept()

data:str=conn.recv(1600).decode().lower() 
print(f"[[Client]]: {data}")
while data != "n":
    msg:bytes = input("Something to send: ").encode()
    conn.sendfile(file)
    print(f"[[Me]]: {msg}")
    data:str=conn.recv(1600).decode().lower() 
    if data != "n":
        print(f"[[Client]]: {data}")
    else:
        conn.close()