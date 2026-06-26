import socket

server = socket.create_server(('localhost',80),family=socket.AF_INET)
server.listen(1)
conn,addr= server.accept()


data="Hello from server!!!"
conn.send(data.encode())
conn.close()