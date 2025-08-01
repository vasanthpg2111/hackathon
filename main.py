from rentycars import client
from rentycars import app
# Import Module
import tkinter as tk
from tkinter import PhotoImage
root=tk.Tk()
username,password=app.signin(root,tk)
print("Renty Carzz")
print(username)
print(password)
a,rep=client.send(username,password)
root=tk.Tk()
app.signin_reply(root,tk,rep)
if a==str(1) or a==str(2):
    root=tk.Tk()
    rep=app.rent_sell(root,tk)
    print(rep)
    if rep=="sell":
        info=app.sell()
        print(info)
    
