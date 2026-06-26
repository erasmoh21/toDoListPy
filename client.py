import socket

CLIENTADDR = ("127.0.0.1",45000) 
SERVERADDR = ("127.0.0.1",80)

client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
client.bind(CLIENTADDR)
client.connect(SERVERADDR)

data=""
while data!="N" or data!="n":
    data = input("Digit a message to send to the server: ").encode()
    print(f"[[Me]]: {data}")
    if data != "N" or data!="n":
        client.send(data)
    else:
        client.send("n".encode())
        break
    msg=client.recv(1600).decode()
    print(f"[[Server]]: {msg}")