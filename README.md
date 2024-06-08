# My Weather Dashboard

## Descripción

My Weather Dashboard es una aplicación web que proporciona información detallada del clima para cualquier ciudad. La aplicación muestra la ciudad con su hora y fecha, el clima actual, el pronóstico a cinco días, un pronóstico horario y gráficos de temperatura y humedad. Además, permite buscar el clima por nombre de ciudad o utilizar la ubicación actual del usuario.

## Tecnologías Utilizadas
- **Next.js** - Framework de React para desarrollo web.
- **JavaScript** - Lenguaje de programación principal utilizado en el proyecto.
- **Chart.js** - Librería de gráficos para visualización de datos.
- **Styled-components** - Librería para escribir CSS en JavaScript.

## APIs Utilizadas
Este proyecto utiliza las siguientes APIs para obtener y mostrar datos:

- **OpenWeatherMap API**: Esta API proporciona datos meteorológicos actualizados y precisos. Puedes obtener más información y registrar una clave API en [OpenWeatherMap API](https://openweathermap.org/api).
  
- **TimeZoneDB API**: Esta API proporciona información de zonas horarias y conversión de tiempo. Puedes obtener más información y registrar una clave API en [TimeZoneDB API](https://timezonedb.com/api).

## Requisitos

- Node.js (v16 o superior)
- Yarn o npm

## Configuración

1. Clona el repositorio:

    ```bash
    git clone https://github.com/Jonathanr26/my-weather-dashboard.git
    cd tu-repositorio
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

    o

    ```bash
    yarn install
    ```

3. Configura las variables de entorno:

    Cambiar las variables de entorno, ingresar sus variables:

    ```env
    API_KEY_WEATHER=your_api_key_here
    API_KEY_TIMEZONE=your_api_key_here
    ```

## Ejecución

### Desarrollo

- Para iniciar la aplicación en modo de desarrollo:

    ```bash
    npm run dev
    ```

    o

    ```bash
    yarn dev
    ```

### Pruebas

- Para ejecutar las pruebas unitarias:

    ```bash
    npm run test
    ```

    o

    ```bash
    yarn test
    ```

## Enfoque Adoptado

### Componentes Principales

1. TimeLocationCard: Muestra la hora y la fecha actualizadas en tiempo real para una ubicación específica.

2. DetailedWeatherCard: Muestra información detallada del clima actual, incluyendo la temperatura, la sensación térmica, y la descripción del clima.

3. FiveDayForecast: Muestra el pronóstico del clima para los próximos cinco días.

4. HourlyForecast: Muestra el pronóstico del clima para las próximas horas.

5. TemperatureChart y HumidityChart: Muestran gráficos de la temperatura y la humedad respectivamente.

6. SearchBar y CurrentLocationButton: Permiten al usuario buscar el clima por nombre de ciudad o utilizar su ubicación actual.

7. ToggleSwitch: Permite cambiar entre los modos claro y oscuro.

### Gestión del Estado

Se utiliza el hook useState para gestionar el estado de la aplicación, incluyendo la ciudad buscada, el clima actual, el pronóstico, el índice UV, el estado de carga, y los posibles errores.

### Obtención de Datos

Se utilizan funciones asíncronas para obtener datos del clima y la zona horaria a través de APIs externas (getWeatherByCity, getForecastByCity, getWeatherByCoords, getForecastByCoords, getUVIndex, getTimeZone). Los datos se almacenan en el estado y se utilizan para actualizar los componentes correspondientes.

### Manejo de Errores

Se captura cualquier error durante la obtención de datos y se muestra un modal de error (ErrorModal) con el mensaje correspondiente.

## Suposiciones y Problemas Conocidos

### Suposiciones

- Se supone que la API de getWeatherByCity y otras APIs de clima responden con datos válidos y necesarios para mostrar la información del clima.

- Se asume que el navegador del usuario soporta geolocalización si el usuario elige utilizar su ubicación actual.

### Problemas Conocidos

- Dependencia de la API: La aplicación depende de varias APIs externas para obtener datos del clima y la zona horaria. Si alguna de estas APIs no está disponible o si la clave de la API no es válida, la aplicación no podrá obtener y mostrar los datos.

- Precisión del Tiempo: La precisión de la hora y la fecha depende de la configuración del servidor de la API y de la precisión de la sincronización de tiempo en el dispositivo cliente.

## Ejemplo de Uso

### Carga inicial

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/03a597b1-10b6-455c-9728-41a2c4bfe60c)


### Busqueda por ciudad

- El input responde tanto al hacer enter o al hacer clic en el boton buscar

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/2374f117-013c-4b92-989d-e134b8393cd4)

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/0f782fd0-6e6a-4fc1-b626-149a72c9b520)

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/c54ae46c-dc54-41b1-a42f-561ccb147a46)

### Busqueda por ubicación actual

- Se debe de dar acceso a la ubicación

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/36fbe5dd-23d9-4564-a0af-533e65c14ec8)

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/2657cdca-a7c6-42da-a570-5df2a20cc4d6)

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/c8672154-4277-4616-a7f6-90e0937486e8)

### Cambio de tema

- Se tiene el tema dark y ligth

1. Dark Mode

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/47447b08-fca2-4d17-95ab-1641010c6d43)

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/11c52ecb-5d8f-41a3-8bff-489bd4f32ac2)

2. Ligth Mode

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/9fad41c9-2f6e-4372-b306-cb1c9efdc590)

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/90e8588f-b8d8-443d-99d9-c391e1a71552)

### Las Graficas cuentan con Tooltips 

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/5a7b1c03-c2fd-41c2-ac3d-b53250d2b5a1)

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/5a5c8400-5e3d-4d70-ad93-4de42d08daba)

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/e2d6b097-1bb8-4844-9114-c594c70ed8bc)

![image](https://github.com/Jonathanr26/my-weather-dashboard/assets/54649236/216bab92-0630-4bcc-813e-66d4b63b7acf)
