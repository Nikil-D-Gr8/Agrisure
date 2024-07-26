# Agrisure - BIO Whizz

## Overview

Agrisure - BIO Whizz is an integrated solution designed to assist farmers in setting up and managing biogas plants. This project aims to address the knowledge and financial barriers that farmers face by providing a comprehensive suite of tools, including a web application, data analytics meter, and a chatbot.

## Project Structure

The project is organized into several key folders:

- **src** and **public**: These folders contain the source code for the React web application. The application is accessible at [Agrisure BIO Whizz Webapp](https://agrisure.pages.dev/), hosted using Cloudflare.

- **Datacollection/Arduino**: This folder contains the Arduino code for the BIO Whizz data analytics meter, which is used to gather relevant data for analysis.

- **Datacollection/python server**: This folder houses the server code responsible for collecting data from the application and sending it to the real-time database.

- **chatbot**: This folder contains the code for running a Gradio app with LangChain as a chatbot, providing an interactive support system for users.

## Getting Started

### Web Application

The React web application is hosted at [Agrisure BIO Whizz Webapp](https://agrisure.pages.dev/). It provides an interface for farmers to access information and tools for setting up and managing biogas plants.

### Data Analytics Meter

1. Navigate to the `Datacollection/Arduino` folder.
2. Upload the Arduino code to your Arduino device.
3. The device will collect data and send it to the server for analysis.

### Python Server

1. Navigate to the `Datacollection/python server` folder.
2. Run the server script to start collecting data from the application.
3. The server will send the collected data to the real-time database for further processing and analysis.

### Chatbot

1. Navigate to the `chatbot` folder.
2. Run the Gradio app script to start the chatbot.
3. The chatbot, powered by LangChain, will provide interactive support and guidance to users.

## Contributing

We welcome contributions to improve Agrisure - BIO Whizz. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.


## Contact

For any questions or support, please contact the project maintainer at [snikilpaul@gmail.com](snikilpaul@gmail.com)
