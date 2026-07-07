import socket,os
#html = os.fdopen(os.open("./templates/login/login.html",os.O_RDONLY),"+rb")

def splittingHeaderBody(req:str)->list[str]:
    newReq = req.split("\r\n\r\n",1)
    return newReq

SERVERSOCK=("localhost",80)
server = socket.create_server(SERVERSOCK,family=socket.AF_INET)
server.listen(1)

while True:
    conn,addr= server.accept()
    data:str=conn.recv(1600).decode()   
    header = splittingHeaderBody(data)[0]
    requestLine = header.split("\r\n")[0]
    print(f"{requestLine}")

    if "GET / HTTP/1.1" in requestLine:
        html = open("./templates/login/login.html","r+b")
        conn.sendfile(html)
    if "GET /loginStyle.css HTTP/1.1" in requestLine:
        cssLoginFile = open("./templates/login/loginStyle.css","r").read()
        lenCssLoginFile =len(cssLoginFile)
        msg = (
            "HTTP/1.1 200 OK\r\n"
            "Content-Type: text/css\r\n"
            f"Content-Length: {lenCssLoginFile}\r\n"  
            "Connection: close\r\n"
            "\r\n" 
            f"{cssLoginFile}" 
        ).encode()
        conn.send(msg)

    conn.close()