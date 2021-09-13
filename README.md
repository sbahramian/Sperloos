*************************************************************************************************************
** Saeid Bahramian                                                                                         **
** Bahramian.info@gmail.com                                                                                **
** 09039937184                                                                                             **
*************************************************************************************************************

step 1) #####################################################################################################
This app is for daily and monthly weather information in London.
Information is received from site https://www.accuweather.com/

npm install
node .\index.js

step 2) #####################################################################################################
To change the city, please refer to the config section.
./config/default_config.json

{
    "get_london_weather" : {
        "daily" : "https://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328",
        "monthly" : "https://www.accuweather.com/en/gb/london/ec4a-2/september-weather/328328"
    }
}

step 3) #####################################################################################################
After running the application in the current output path will be located in the './result/london.json' folder

step 4) #####################################################################################################
And this is an output taken from the program

{
    "city_name": "London",
    "update_tiem": "2021-09-13T13:22:57.715Z",
    "daily_calendar": {
      "report_date": "September 13 - September 24",
      "result": [
        {
          "info": {
            "date": {
              "day": "Mon",
              "date": "9/13"
            }
          },
          "phrase": "Mainly cloudy",
          "temp": {
            "high": "21°",
            "low": "/15°"
          },
          "precip": "25%"
        },
        {
          "info": {
            "date": {
              "day": "Tue",
              "date": "9/14"
            }
          },
          "phrase": "Periods of rain",
          "temp": {
            "high": "19°",
            "low": "/14°"
          },
          "precip": "66%"
        },
        {
          "info": {
            "date": {
              "day": "Wed",
              "date": "9/15"
            }
          },
          "phrase": "Clouds breaking for some sun",
          "temp": {
            "high": "20°",
            "low": "/13°"
          },
          "precip": "11%"
        },
        {
          "info": {
            "date": {
              "day": "Thu",
              "date": "9/16"
            }
          },
          "phrase": "Partly sunny",
          "temp": {
            "high": "21°",
            "low": "/13°"
          },
          "precip": "6%"
        },
        {
          "info": {
            "date": {
              "day": "Fri",
              "date": "9/17"
            }
          },
          "phrase": "A few afternoon showers",
          "temp": {
            "high": "20°",
            "low": "/13°"
          },
          "precip": "60%"
        },
        {
          "info": {
            "date": {
              "day": "Sat",
              "date": "9/18"
            }
          },
          "phrase": "Times of sun and clouds",
          "temp": {
            "high": "21°",
            "low": "/13°"
          },
          "precip": "25%"
        },
        {
          "info": {
            "date": {
              "day": "Sun",
              "date": "9/19"
            }
          },
          "phrase": "Cloudy",
          "temp": {
            "high": "20°",
            "low": "/14°"
          },
          "precip": "25%"
        },
        {
          "info": {
            "date": {
              "day": "Mon",
              "date": "9/20"
            }
          },
          "phrase": "A touch of afternoon rain",
          "temp": {
            "high": "20°",
            "low": "/13°"
          },
          "precip": "63%"
        },
        {
          "info": {
            "date": {
              "day": "Tue",
              "date": "9/21"
            }
          },
          "phrase": "A shower in the a.m.; cloudy",
          "temp": {
            "high": "21°",
            "low": "/13°"
          },
          "precip": "58%"
        },
        {
          "info": {
            "date": {
              "day": "Wed",
              "date": "9/22"
            }
          },
          "phrase": "Mainly cloudy",
          "temp": {
            "high": "20°",
            "low": "/13°"
          },
          "precip": "25%"
        },
        {
          "info": {
            "date": {
              "day": "Thu",
              "date": "9/23"
            }
          },
          "phrase": "Times of clouds and sun",
          "temp": {
            "high": "19°",
            "low": "/13°"
          },
          "precip": "10%"
        },
        {
          "info": {
            "date": {
              "day": "Fri",
              "date": "9/24"
            }
          },
          "phrase": "An afternoon shower in spots",
          "temp": {
            "high": "20°",
            "low": "/12°"
          },
          "precip": "40%"
        }
      ]
    },
    "monthly_calendar": [
      {
        "date": "1",
        "temp": {
          "high": "17°",
          "low": "13°"
        }
      },
      {
        "date": "2",
        "temp": {
          "high": "17°",
          "low": "13°"
        }
      },
      {
        "date": "3",
        "temp": {
          "high": "21°",
          "low": "10°"
        }
      },
      {
        "date": "4",
        "temp": {
          "high": "17°",
          "low": "12°"
        }
      },
      {
        "date": "5",
        "temp": {
          "high": "25°",
          "low": "13°"
        }
      },
      {
        "date": "6",
        "temp": {
          "high": "26°",
          "low": "11°"
        }
      },
      {
        "date": "7",
        "temp": {
          "high": "27°",
          "low": "18°"
        }
      },
      {
        "date": "8",
        "temp": {
          "high": "27°",
          "low": "17°"
        }
      },
      {
        "date": "9",
        "temp": {
          "high": "21°",
          "low": "15°"
        }
      },
      {
        "date": "10",
        "temp": {
          "high": "20°",
          "low": "16°"
        }
      },
      {
        "date": "11",
        "temp": {
          "high": "21°",
          "low": "12°"
        }
      },
      {
        "date": "12",
        "temp": {
          "high": "20°",
          "low": "11°"
        }
      },
      {
        "date": "13",
        "temp": {
          "high": "21°",
          "low": "15°"
        }
      },
      {
        "date": "14",
        "temp": {
          "high": "19°",
          "low": "14°"
        }
      },
      {
        "date": "15",
        "temp": {
          "high": "20°",
          "low": "13°"
        }
      },
      {
        "date": "16",
        "temp": {
          "high": "21°",
          "low": "13°"
        }
      },
      {
        "date": "17",
        "temp": {
          "high": "20°",
          "low": "13°"
        }
      },
      {
        "date": "18",
        "temp": {
          "high": "21°",
          "low": "13°"
        }
      },
      {
        "date": "19",
        "temp": {
          "high": "20°",
          "low": "14°"
        }
      },
      {
        "date": "20",
        "temp": {
          "high": "20°",
          "low": "13°"
        }
      },
      {
        "date": "21",
        "temp": {
          "high": "21°",
          "low": "13°"
        }
      },
      {
        "date": "22",
        "temp": {
          "high": "20°",
          "low": "13°"
        }
      },
      {
        "date": "23",
        "temp": {
          "high": "19°",
          "low": "13°"
        }
      },
      {
        "date": "24",
        "temp": {
          "high": "20°",
          "low": "12°"
        }
      },
      {
        "date": "25",
        "temp": {
          "high": "19°",
          "low": "13°"
        }
      },
      {
        "date": "26",
        "temp": {
          "high": "19°",
          "low": "10°"
        }
      },
      {
        "date": "27",
        "temp": {
          "high": "20°",
          "low": "10°"
        }
      },
      {
        "date": "28",
        "temp": {
          "high": "20°",
          "low": "10°"
        }
      },
      {
        "date": "29",
        "temp": {
          "high": "19°",
          "low": "10°"
        }
      },
      {
        "date": "30",
        "temp": {
          "high": "20°",
          "low": "9°"
        }
      }
    ]
  }