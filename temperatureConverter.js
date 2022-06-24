/*
Write a function convert_temp(temp, from_scale, to_scale) converting temperature from one scale to another. Return converted temp value.

Round converted temp value to an integer(!).

Reading: http://en.wikipedia.org/wiki/Conversion_of_units_of_temperature

possible scale inputs:
    "C"  for Celsius
    "F"  for Fahrenheit
    "K"  for Kelvin
    "R"  for Rankine
    "De" for Delisle
    "N"  for Newton
    "Re" for Réaumur
    "Ro" for Rømer
temp is a number, from_scale and to_scale are strings.

convert_temp(   100, "C",  "F") # => 212
convert_temp(    40, "Re", "C") # => 50
convert_temp(    60, "De", "F") # => 140
convert_temp(373.15, "K",  "N") # => 33
convert_temp(   666, "K",  "K") # => 666
*/

function convertTemp(temp, from_scale, to_scale){
  const conversions = {
    'CC': temp => temp,
    'FC': temp => (temp - 32) * 5/9,
    'KC': temp => temp - 273.15,
    'RC': temp => (temp - 491.67) * 5/9,
    'DeC': temp => 100 - temp * 2/3,
    'NC': temp => temp * 100/33,
    'ReC': temp => temp * 5/4,
    'RoC': temp => (temp - 7.5) * 40/21,
    'CF' : temp => temp * 9/5 + 32,
    'CK' : temp => temp + 273.15,
    'CR' : temp => (temp + 273.15) * 9/5,
    'CDe' : temp => (100 - temp) * 3/2,
    'CN' : temp => temp * 33/100,
    'CRe' : temp => temp * 4/5,
    'CRo' : temp => temp * 21/40 + 7.5
  }
  const from = from_scale + 'C';
  const to = 'C' + to_scale;
  const fromValue = conversions[from](temp);
  const toValue = conversions[to](fromValue);
  return Math.round(toValue);
}