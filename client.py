import socket

CLIENTADDR = ("127.0.0.1",45000) 
SERVERADDR = ("127.0.0.1",80)

client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
client.bind(CLIENTADDR)
client.connect(SERVERADDR)

msg = client.recv(1600).decode();
print(msg)