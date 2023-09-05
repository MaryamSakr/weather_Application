window.addEventListener("load", () => {
    const locationElement = document.getElementById("location");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
    const humidityElement = document.getElementById("humidity");

    const apiKey = "4c32f3da2c34c85736d7d31a14b73e02";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=cairo,eg&appid=${apiKey}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const temperature = Math.round(data.main.temp - 273.15);

            locationElement.textContent = "القاهره";
            temperatureElement.textContent = temperature + "°C";
            humidityElement.textContent = data.main.humidity + " : الرطوبه";
            descriptionElement.textContent = "السماء صافيه";

        })
        .catch((error) => {
            console.log("An error occurred:", error);
        });
});

////////////////////////////////////////////////////////////

let options = 0;
let title = document.getElementById("job");
let cont = document.getElementById("container");
let allData = document.getElementById("info");
document.getElementById("weather-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const cityInput = document.getElementById("city");
         cityName = cityInput.value.trim();
       
        if (cityName=="القاهره")
        {
            cityName="cairo";
            getWeatherData(cityName);
        }

        else if (cityName=="الجيزه")
        {
            cityName="giza";
            
            getWeatherData(cityName);
        }
        else if (cityName=="الاسكندريه")
        {
            cityName="alexandria";
            
            getWeatherData(cityName);
        }
        else if (cityName=="الاقصر")
        {
            cityName="luxor";
            
            getWeatherData(cityName);
        }
        else if (cityName=="اسوان")
        {
            cityName="aswan";
            
            getWeatherData(cityName);
        }


        
        else if (cityName=="اسيوط")
        {
            cityName="asyut";
            
            getWeatherData(cityName);
        }
        else if (cityName=="البحيره")
        {
            cityName="beheira";
            
            getWeatherData(cityName);
        }
        else if (cityName=="الاسماعيليه")
        {
            cityName="ismailia";
            
            getWeatherData(cityName);
        }
        else if (cityName=="الفيوم")
        {
            cityName="faiyum";
            
            getWeatherData(cityName);
        }
////////////////

else if (cityName=="دمياط")
{
    cityName="damietta";
    
    getWeatherData(cityName);
}
else if (cityName=="مرسي مطروح")
{
    cityName="matruh";
    
    getWeatherData(cityName);
}
else if (cityName=="المنيا")
{
    cityName="minya";
    
    getWeatherData(cityName);
}
else if (cityName=="طنطا")
{
    cityName="tanta";
    
    getWeatherData(cityName);
}



else if (cityName=="قنا")
{
    cityName="qena";
    
    getWeatherData(cityName);
}
else if (cityName=="سوهاج")
{
    cityName="sohag";
    
    getWeatherData(cityName);
}
else if (cityName=="السويس")
{
    cityName="suez";
    
    getWeatherData(cityName);
}
else if (cityName=="الفيوم")
{
    cityName="damanhur";
    
    getWeatherData(cityName);
}




else if (cityName=="الزقازيق")
{
    cityName="zagazig";
    
    getWeatherData(cityName);
}



else if (cityName=="المنصوره")
{
    cityName="mansoura";
    
    getWeatherData(cityName);
}
else if (cityName=="العريش")
{
    cityName="arish";
    
    getWeatherData(cityName);
}
else if (cityName=="بنها")
{
    cityName="banha";
    
    getWeatherData(cityName);
}
else if (cityName=="الغردقه")
{
    cityName="hurghada";
    
    getWeatherData(cityName);
}
        // if (cityName !== "") {
        //     getWeatherData(cityName);
        // }
    });

function getWeatherData(cityName) {
    const apiKey = "4c32f3da2c34c85736d7d31a14b73e02";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((weatherData) => {
            if (weatherData.cod !== "404") {
                const main = weatherData.main;
                const currentTemp = (main.temp - 273.15).toFixed(2);
                options = currentTemp;
                const currentHumidity = main.humidity;

                displayWeatherData(currentTemp, currentHumidity, cityName);
            } else {
                displayNotFoundError();
            }
        }
        );
}

function displayWeatherData(temperature, humidity, city) {
    const weatherInfo = document.getElementById("info");
    const temperatureElement = document.getElementById("temperature");
    const locationElement = document.getElementById("location");
    const humidityElement = document.getElementById("humidity");
    locationElement.textContent = city;
    temperatureElement.textContent = temperature + "°C";
    humidityElement.textContent = humidity + " : الرطوبه";

    weatherInfo.classList.remove("hidden");
    console.log(temperature);
    if (temperature >= 35) {
        document.body.style.backgroundImage = "url('hot.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    } else if (temperature >= 28) {
        document.body.style.backgroundImage = "url('spring.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    } else {
        document.body.style.backgroundImage = " url('winter.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
}

function displayNotFoundError() {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.textContent = "لم يتم العثور علي المدينة";
    weatherInfo.classList.remove("hidden");
}
// const currentTemp = 30;
title.addEventListener("blur", () => {
    let data = document.createElement("div");
    if (title.value !== "-- اختر الوظيفه--") {
if(options==0)
{
    message =
    " برجاء ادخال اسم المدينه ";
allData.textContent = message;
allData.classList.remove("hidden");   
}
        else if (title.value === "مزارع" ) {
            
            if (options >= 35) {
                message =
                    " برجاء العلم ان درجه الحراره مرتفعه يرجي استخدام شباك التظليل لتغطيه الصوب لحمايه النباتات  يرجي توخي الحذر لنشاط القوارض و الحشرات";
                allData.textContent = message;
                allData.classList.remove("hidden");
            } else if (options >= 28) {
                message = "درجه الحراره  معتدله تميل للارتفاع برجاء العلم ان الوقت المناسب للري ف الصباح الباكر و ساعات المساء";
                allData.textContent = message;
                allData.classList.remove("hidden");
            } else {
                message = "اليوم لا يوجد ظواهر جويه غير طبيعيه  نتمني لكم قضاء يوم سعيد ";
                allData.textContent = message;
                allData.classList.remove("hidden");
            }
        } else if (title.value === "سائق") {
            if (options >= 35) {
                message = "درجات الحراره مرتفعه برجاء فحص الاطارات و اجزاء التبريد في المحرك ";
                allData.textContent = message;
                allData.classList.remove("hidden");
            } else if (options >= 28) {
                message = "  اليوم مشرق ولا توجد ظواهر مناخيه غير طبيعيه نتمني لكم قضاء يوم سعيد  ";
                allData.textContent = message;
                allData.classList.remove("hidden");
            } else {
                message = "الجو يميل للبروده و متوقع ظهور الشبوره صباحا علي طرق السفر برجاء الالتزام بقواعد المرور";
                allData.textContent = message;
                allData.classList.remove("hidden");
            }
        } else if (title.value === "طالب") {
            if (options >= 35) {
                message =
                    "يرجي العلم ان درجه الحراره مرتفعه اليوم برجاء اصطحاب كميه وفيره من السوائل و ارتاد ملابس قطنيه";
                allData.textContent = message;
                allData.classList.remove("hidden");
            } else if (options >= 28) {
                message = " درجات الحراره معتدله نتمني قضاء يوم سعيد و مع تمنياتنا بالتفوق";
                allData.textContent = message;
                allData.classList.remove("hidden");
            } else {
                message = "درجات الحراره منخفضه ننصح باصطحاب ملابس ثقيله ";
                allData.textContent = message;
                allData.classList.remove("hidden");
            }
        } else if (title.value === "مربي الحيوانات") {
            if (options >= 35) {
                message =
                    " برجاء العلم ان درجة الحرارة مرتفعه اليوم احرص علي عدم ترك الماشيه تحت اشعه الشمس و الحفاظ علي درجه حراره المياه المستخدمه في الشرب ";
                allData.textContent = message;
                allData.classList.remove("hidden");
            } else if (options >= 28) {
                message = "انه يوم مناسب لرعي الماشيه نتمني قضاء يوم سعيد ";
                allData.textContent = message;
                allData.classList.remove("hidden");
            } else {
                message = "درجات الحراره منخفضه اليوم برجاء الحرص علي وضع كميه كافيه من الطعام للحيوانات ";
                allData.textContent = message;
                allData.classList.remove("hidden");
            }
        }
    }
});




