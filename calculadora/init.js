
//select-form
$(document).ready(function(){
    $('select').formSelect();
  });

/*
 * All prices are in USD
 * Weight is expressed in pounds
 * Volume is expressed in cubic feet
 */

function aereal_price(volume, weight) {
    var aereal_volume = volume / 166;
    var volume_price = aereal_volume * 3;
    var weight_price =  weight * 3;
    return Math.max(volume_price, weight_price, 10);
}

function maritime_price(volume, weight) {
    var volume_price = (volume * 12 / 1728);
    var weight_price = weight * 12;
    return Math.max(volume_price, weight_price, 35);
}

function get_price(aereal, height, width, length, weight) {
    var volume = height * width * length;
    if (aereal) {
        return aereal_price(volume, weight) * 100 / 100;
    } else {
        return maritime_price(volume, weight) * 100 / 100;
    }
}

function print_prices() {
    var height = $('#height')[0].value;
    var width  = $('#width')[0].value;
    var length = $('#length')[0].value;
    var weight = $('#weight')[0].value;

    var maritime = get_price(false, height, width, length, weight);
    var aereal   = get_price(true, height, width, length, weight);

    $('#aereal').html(aereal);
    $('#maritime').html(maritime);
}
