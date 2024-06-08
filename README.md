# My Weather Dashboard

## Descripción

My Weather Dashboard es una aplicación web que proporciona información detallada del clima para cualquier ciudad. La aplicación muestra la ciudad con su hora y fecha, el clima actual, el pronóstico a cinco días, un pronóstico horario y gráficos de temperatura y humedad. Además, permite buscar el clima por nombre de ciudad o utilizar la ubicación actual del usuario.

## Requisitos

- Node.js (v12 o superior)
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

    Cambiar el nombre del archivo `.env.example` a `.env`, ingresar sus variables:

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

![alt text](public\readmeImg\image-1.png)

### Busqueda por ciudad

- El input responde tanto al hacer enter o al hacer clic en el boton buscar

![alt text](public\readmeImg\image-2.png)

![alt text](public\readmeImg\image-3.png)

![alt text](public\readmeImg\image-4.png)

### Busqueda por ubicación actual

- Se debe de dar acceso a la ubicación

![alt text](public\readmeImg\image-7.png)

![alt text](public\readmeImg\image-5.png)

![alt text](public\readmeImg\image-6.png)

### Cambio de tema

- Se tiene el tema dark y ligth

1. Dark Mode

![alt text](public\readmeImg\image-8.png)

![alt text](public\readmeImg\image-9.png)

2. Ligth Mode

![alt text](public\readmeImg\image-10.png)

![alt text](public\readmeImg\image-11.png)

### Las Graficas cuentan con Tooltips 

![alt text](public\readmeImg\image-12.png)

![alt text](public\readmeImg\image-13.png)

![alt text](public\readmeImg\image-14.png)

![alt text](public\readmeImg\image-15.png)