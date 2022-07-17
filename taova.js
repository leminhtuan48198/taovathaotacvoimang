let arr=[]
let count=0
function addItem(){
    arr[count]=document.getElementById("item").value;
    alert('element: '+document.getElementById("item").value+" Added at index "+count)
    count++
    document.getElementById("item").value=""
}
function display_array(){
    let e = "<hr/>";
    for (let i = 0; i < arr.length; i++) {
        e += "Element " + i + " = " + arr[i] + "<br/>";
    }
    document.getElementById("display_arr").innerHTML = e;

}