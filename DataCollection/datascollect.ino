#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

// Replace with your network credentials
const char* ssid = "nikil";
const char* password = "Password";

// Replace with the server URL and endpoint
const char* serverName = "http://10.9.142.157:8080/post_data"; // Your computer's IP address

WiFiClient wifiClient;

void setup() {
  Serial.begin(115200);
  
  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("Connected to Wi-Fi");

  // Initialize random number generator
  randomSeed(analogRead(0));
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    
    // Specify the URL
    http.begin(wifiClient, serverName);
    
    // Specify content-type header
    http.addHeader("Content-Type", "application/json");
    
    // Generate random sensor data
    int sludgeLevel = random(40, 60); // Random value between 40 and 60 cm
    float pressure = random(1000, 1500) / 100.0; // Random value between 10.00 and 15.00 atm
    int moisture = random(30, 70); // Random value between 30 and 70%
    int co2Level = random(300, 500); // Random value between 300 and 500 ppm
    float temperature = random(250, 400) / 10.0; // Random value between 25.0 and 40.0°C
    int humidity = random(50, 80); // Random value between 50 and 80%
    int methaneLevel = random(600, 800); // Random value between 600 and 800 ppm
    
    // Create JSON payload
    String httpRequestData = "{\"sludge_level\":\"" + String(sludgeLevel) + " cm\",";
    httpRequestData += "\"pressure\":\"" + String(pressure) + " atm\",";
    httpRequestData += "\"moisture\":\"" + String(moisture) + "%\",";
    httpRequestData += "\"CO2_level\":\"" + String(co2Level) + " ppm\",";
    httpRequestData += "\"temperature\":\"" + String(temperature) + "°C\",";
    httpRequestData += "\"humidity\":\"" + String(humidity) + "%\",";
    httpRequestData += "\"methane_level_in_ppm\":\"" + String(methaneLevel) + " ppm\"}";
    
    // Send HTTP POST request
    int httpResponseCode = http.POST(httpRequestData);
    
    // If the response code is successful, print the response
    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    } else {
      Serial.print("Error on sending POST: ");
      Serial.println(httpResponseCode);
    }
    
    // Free resources
    http.end();
  } else {
    Serial.println("Error in Wi-Fi connection");
  }
  
  // Send a POST request every 10 seconds
  delay(1000);
}
