import requests

ser = serial.Serial('COM3', 9600)  # Cambia COM3 según tu puerto

while True:
    action = ser.readline().decode('utf-8').strip()
    print("Acción:", action)
    response = requests.post("http://localhost:5000/api/game/move", json={
        "player": 1,
        "action": action
    })
    print("Respuesta:", response.status_code)