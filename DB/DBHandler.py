import sqlite3
cx = sqlite3.connect("app.db")
cu = cx.cursor()

cu.execute(
    """CREATE TABLE IF NOT EXISTS Task (
            id INTEGER PRIMARY KEY,
            taskName TEXT NOT NULL,
            description TEXT NOT NULL,
            deadline TEXT NOT NULL,
            priority TEXT NOT NULL,
            typeTask TEXT NOT NULL
        )
""")

def insertTask(task:list):
    try:
        cu.execute("INSERT INTO Task (id,taskName,description,deadline,priority,typeTask) VALUES(?,?,?,?,?,?)",task)
    except sqlite3.Error as error:
        print(f"Something went wrong: {error}")
    finally:
        cx.close()


def deleteTask(id:int):
    try:
        cu.execute("DELETE FROM Task WHERE id = ?",(id,))
    except sqlite3.Error as error:
        print(f"Something went wrong: {error}")
    finally:
        cx.close()

def updateTask(id:int,fieldToChange:str,newValue:str):
    try:
        cu.execute("UPDATE Task SET ? = ? WHERE id = ?",(fieldToChange,newValue,id))
    except sqlite3.Error as error:
        print(f"Something went wrong: {error}")
    finally:
        cx.close()


def getTask(id:int):
    try:
        cu.execute("SELECT * FROM Task WHERE id = ?",(id,))
    except sqlite3.Error as error:
        print(f"Something went wrong: {error}")
    finally:
        cx.close()



cx.commit()