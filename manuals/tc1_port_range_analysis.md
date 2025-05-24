Test Case 1: Port Range Analysis


---

Aim:

To scan a specified range of ports on a target IP address using Python's socket module, identify open/closed ports, implement timeout handling, and validate results with nmap.


---

Requirements:

Python (3.x)

socket module (built-in)

nmap tool (for cross-verification)

Basic understanding of TCP/IP networking



---

Theory:

A port scanner is a tool used in cybersecurity to probe a host for open ports. Each service on a computer listens on a port number. An open port can indicate an available service; a closed port may be secure or inactive.

Socket Programming allows low-level networking control.

Timeouts prevent the program from hanging on unresponsive ports.

Nmap is a popular network scanner for verification.



---

Algorithm and Procedure:

1. Input: Target IP address, start and end port range.


2. For each port in the range:

Create a socket.

Set a timeout (e.g., 1 second).

Attempt connection.

If successful, mark the port as open.

Else, mark the port as closed.

Close the socket.



3. Display open ports.


4. Run nmap on the same range to compare results.




---

Configuration and Implementation:

Short Python Code:

import socket

target_ip = '127.0.0.1'  # Replace with actual target
start_port = 20
end_port = 100

print(f"Scanning ports {start_port} to {end_port} on {target_ip}...")

for port in range(start_port, end_port + 1):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(1)  # Timeout in seconds
    result = s.connect_ex((target_ip, port))
    if result == 0:
        print(f"Port {port} is OPEN")
    s.close()


---

Output and Result:

Sample Output:

Scanning ports 20 to 100 on 127.0.0.1...
Port 22 is OPEN
Port 80 is OPEN
