#!/usr/bin/python
import socket   #socket
import commands#
HOST='127.0.0.1'
PORT=50007
s= socket.socket(socket.AF_INET,socket.SOCK_STREAM)   #
s.bind((HOST,PORT))   #
s.listen(1)
conn,addr=s.accept()      
while 1:
         
       print addr   
       data=conn.recv(1024)    
       print data
       test=raw_input("Please input cmd:") 
       conn.sendall(test)
       #s.sendall(test) 
    