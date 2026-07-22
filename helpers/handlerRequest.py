def handlerRequest(typeRequest:int,objRequest: dict)->bytes:
    '''
    Parameters:
        TypeRequest:
            1 = HTTP GET Request\n
            2 = Fetch Request
    '''
    msgRequest:bytes = bytes()  
    if typeRequest == 1:
        file = open(objRequest["pathFile"],"r").read()
        lenFile = len(file.encode())
        if objRequest["type"] == "html":
            msgRequest = (
                "HTTP/1.1 200 OK\r\n"
                "Content-Type: text/html\r\n"
                f"Content-Length: {lenFile}\r\n"
                "\r\n"
                f"{file}"
            ).encode()
        if objRequest["type"] == "css":
            msgRequest = (
                "HTTP/1.1 200 OK\r\n"
                "Content-Type: text/css\r\n"
                f"Content-Length: {lenFile}\r\n"
                "\r\n"
                f"{file}"
            ).encode()
        if objRequest["type"] == "js":
            msgRequest = (
                "HTTP/1.1 200 OK\r\n"
                "Content-Type: text/javascript\r\n"
                f"Content-Length: {lenFile}\r\n"
                "\r\n"
                f"{file}"
            ).encode()
        if objRequest["type"] == "svg":
            msgRequest = (
                "HTTP/1.1 200 OK\r\n"
                "Content-Type: image/svg+xml\r\n"
                f"Content-Length: {lenFile}\r\n"
                "\r\n"
                f"{file}"
            ).encode()
 
    return msgRequest 