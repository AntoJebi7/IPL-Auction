# 🔍 Port Range Analysis using Python (Socket Module)

This project demonstrates how to scan a range of ports on a target IP address using Python's built-in `socket` module. It determines which ports are open or closed, implements timeout handling, and cross-verifies results using `nmap`.

---

## 🧪 Aim

To scan a specified range of ports on a target IP address using Python’s `socket` module, determine which ports are open or closed, implement effective timeout handling, and verify the results with `nmap`.

---

## 🛠️ Requirements

- Python 3 (recommended to run in Google Colab or local IDE)
- `socket` module (standard library)
- Target IP address (example: `scanme.nmap.org`)
- Basic terminal access (for `nmap` verification)

---

## 📋 Algorithm and Procedure

### Algorithm:
1. Accept target IP and port range as inputs.
2. Loop through the specified port range.
3. Attempt to connect to each port with a set timeout.
4. Record and display whether each port is open or closed.
5. Cross-verify using `nmap`.

### Procedure:
1. Import the `socket` module.
2. Define the IP and port range.
3. Set a connection timeout.
4. For each port:
    - Create a socket
    - Try to connect using `connect_ex()`
    - Classify the port as OPEN or CLOSED
    - Close the socket
5. Print results and list of open ports.
6. Manually compare output with an `nmap` scan.

---

## ⚙️ Configuration and Implementation

### Python Code
```python
import socket

# Configuration
target_ip = 'scanme.nmap.org'  # Replace with desired target
start_port = 20
end_port = 1024
timeout = 0.5

open_ports = []

print(f"Scanning {target_ip} from port {start_port} to {end_port}...\n")
for port in range(start_port, end_port + 1):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(timeout)
    result = s.connect_ex((target_ip, port))
    if result == 0:
        print(f"Port {port} is OPEN")
        open_ports.append(port)
    else:
        print(f"Port {port} is CLOSED")
    s.close()

print("\nScan complete.")
print("Open ports:", open_ports)

Results should closely match nmap output (with minor differences possible due to timing or firewall rules).

Sample Result (may vary):


Port 22 is OPEN
Port 80 is OPEN
...
Open ports: [22, 80]
