
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
        return Math.round(aereal_price(volume, weight) * 100) / 100;
    } else {
        return Math.round(maritime_price(volume, weight) * 100) / 100;
    }
}

function print_prices() {
    var height_tags = document.getElementsByName('height');
    var width_tags  = document.getElementsByName('width');
    var length_tags = document.getElementsByName('height');
    var weight_tags = document.getElementsByName('weight');
    var boxes = height_tags.length;
    var total_maritime = 0;
    var total_aereal = 0;
    for (var i = 0; i < boxes; i++) {
        var height = height_tags[i].value;
        var width  = width_tags[i].value;
        var length = length_tags[i].value;
        var weight = weight_tags[i].value;
        var maritime = get_price(false, height, width, length, weight);
        var aereal   = get_price(true, height, width, length, weight);
        total_maritime += maritime;
        total_aereal += aereal;
    }
    $('#aereal').html(total_aereal);
    $('#maritime').html(total_maritime);
}

function clone_box() {
    var box = $('#box')[0];
    var cloned = box.cloneNode(true);
    box.parentNode.insertBefore(cloned, box);
}
