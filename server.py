import socket,os
from helpers.handlerRequest import handlerRequest
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
    header: str = splittingHeaderBody(data)[0]
    requestLine:str = header.split("\r\n")[0]
    print(f"{requestLine}")

    if "GET / HTTP/1.1" in requestLine:
        obj:dict = {
            "requestLine": requestLine,
            "pathFile":"./templates/login/login.html",
            "type": "html"
        }
        msgResponse:bytes = handlerRequest (1,obj)
        conn.send(msgResponse)
    if "GET /loginStyle.css HTTP/1.1" in requestLine:
        obj: dict = {
            "requestLine": requestLine,
            "pathFile":"./templates/login/loginStyle.css",
            "type":"css"
        }
        msgResponse:bytes = handlerRequest(1,obj)
        conn.send(msgResponse)
    if "GET /assets/loginAvatar.svg HTTP/1.1" in requestLine:
        obj: dict = {
            "requestLine": requestLine,
            "pathFile": "./templates/login/assets/loginAvatar.svg",
            "type": "svg"
        }
        msgResponse:bytes = handlerRequest(1,obj)
        conn.send(msgResponse)
    if "POST /dashboard HTTP/1.1" in requestLine:
        obj:dict = {
            "requesLine": requestLine,
            "pathFile": "./templates/dashboard/index.html",
            "type": "html"
        }
        msgResponse:bytes = handlerRequest(1,obj)
        conn.send(msgResponse)
    if "GET /indexStyle.css HTTP/1.1" in requestLine:
        obj:dict ={
            "requestLine": requestLine,
            "pathFile": "./templates/dashboard/indexStyle.css",
            "type": "css"
        }
        msgResponse:bytes = handlerRequest(1,obj)
        conn.send(msgResponse)
    if "GET /indexCode.js HTTP/1.1" in requestLine:
        obj:dict = {
            "requestLine": requestLine,
            "pathFile": "./templates/dashboard/indexCode.js",
            "type": "js"
        }
        msgResponse:bytes = handlerRequest(1,obj)
        conn.send(msgResponse)

    conn.close()