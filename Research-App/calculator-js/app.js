function insert(num) {
    document.form.textview.value = document.form.textview.value+num
}

function equal() {
    var val = document.form.textview.value;
    if (val) {
        document.form.textview.value = eval(val);
    }
}

function clean() {
    document.form.textview.value = "";
}

function del() {
    var val = document.form.textview.value;
    document.form.textview.value = val.substring(0,val.length-1);
}