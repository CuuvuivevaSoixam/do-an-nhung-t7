const socket = io();

// -------Deviece control----
let thongbaobat='bạn có muốn bật đèn không'
let thongbaotat='bạn có muốn tắt đèn không'
document.querySelector('#but1').addEventListener('click',()=> {
    if (confirm(thongbaobat)){
        socket.emit('led1', 'on')
        // document.getElementById("but1").style.background="blue"
        // document.getElementById("but2").style.background="gray"
        document.querySelector('#anh1').src='./img/den_bat.png'
        // document.getElementById('nutall').style.background= 'red'
    }
})
document.querySelector('#but2').addEventListener('click',()=> {
    if (confirm(thongbaotat)){
        socket.emit('led1', 'off')
        // document.getElementById("but2").style.background="blue"
        // document.getElementById("but1").style.background="gray"
        document.querySelector('#anh1').src='./img/den_tat.png'
    }
})
document.querySelector('input').onclick = function(e){
    if (this.checked){
        if (confirm(thongbaobat)){
            socket.emit('led2', 'on')
            document.querySelector('#anh2').src='./img/cua_mo.png'
            document.querySelector('input').checked= true
        }
        else{
            document.querySelector('input').checked= false
            document.querySelector('#anh2').src='./img/cua_dong.png'
        }
    }
    else{
        if (confirm(thongbaotat)){
            socket.emit('led2', 'off')
            document.querySelector('#anh2').src='./img/cua_dong.png'
            document.querySelector('input').checked= false
        }
        else{
            document.querySelector('input').checked= true
            document.querySelector('#anh2').src='./img/cua_mo.png'
        }
    }
}

//------Socket IO ----


socket.on('updateSensor', msg => {     //lang nghe du lieu tu mqtt
    console.log(msg);
    handlingData(msg);
});

socket.on('led', msg => {
    if (msg === 'on') {
        document.querySelector('#anh1').src = './img/den_bat.png';
    }
    if (msg === 'off') {
        document.querySelector('#anh1').src = './img/den_tat.png';
    }
    console.log(`den ${msg}`);
});

socket.on('cua', msg => {
    if (msg === 'on') {
        document.querySelector('#anh2').src = './img/cua_mo.png';
    }
    if (msg === 'off') {
        document.querySelector('#anh2').src = './img/cua_dong.png';
    }
    console.log(`cua ${msg}`);
});