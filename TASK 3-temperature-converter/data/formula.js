var formula = `{
    "conversions": [
        {
            "from": "Celsius",
            "to": "Kelvin",
            "formula": "K = C + 273.15"
        },
        {
            "from": "Celsius",
            "to": "Fahrenheit",
            "formula": "F = (9/5)C + 32"
        },
        {
            "from": "Celsius",
            "to": "Rankine",
            "formula": "R = (9/5)C + 491.67"
            
        },
        {
            "from": "Celsius",
            "to": "Celsius",
            "formula": "C = C"
            
        },
        {
            "from": "Kelvin",
            "to": "Celsius",
            "formula": "C = K - 273.15"
        },
        {
            "from": "Kelvin",
            "to": "Fahrenheit",
            "formula": "F = (9/5)K - 459.67"
        },
        {
            "from": "Kelvin",
            "to": "Rankine",
            "formula": "R = K * 1.8"
        }, 
        {
            "from": "Kelvin",
            "to": "Kelvin",
            "formula": "K = K"
        },
        {
            "from": "Fahrenheit",
            "to": "Celsius",
            "formula": "C = (F - 32) * 5/9"
        },
        {
            "from": "Fahrenheit",
            "to": "Kelvin",
            "formula": "K = (F + 459.67) * 5/9"
        },
        {
            "from": "Fahrenheit",
            "to": "Rankine",
            "formula": "R = F + 459.67"
        },
        {
            "from": "Fahrenheit",
            "to": "Fahrenheit",
            "formula": "F = F"
        },
        {
            "from": "Rankine",
            "to": "Celsius",
            "formula": "C = (R - 491.67) * 5/9"
        },
        {
            "from": "Rankine",
            "to": "Kelvin",
            "formula": "K = R * 5/9"
        },
        {
            "from": "Rankine",
            "to": "Fahrenheit",
            "formula": "F = R - 459.67"
        },
        {
            "from": "Rankine",
            "to": "Rankine",
            "formula": "R = R"
        }
    ]
}`;
