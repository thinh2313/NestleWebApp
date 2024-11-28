//-------- Read Excel --------------------------------------------------------------------------------
//document.getElementById('upload').addEventListener('change', handleFileSelect, false);
//var ExcelToJSON = function() {

//const { data } = require("jquery");

//    this.parseExcel = function(file) {
//      var reader = new FileReader();

//        reader.onload = function (e) {
//            var data = e.target.result;
//            var workbook = XLSX.read(data, {
//                type: 'binary'
//            });
//        workbook.SheetNames.forEach(function(sheetName) {
//          var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
//          var json_object = JSON.stringify(XL_row_object);
//          console.log(JSON.parse(json_object));
//          jQuery('#xlx_json').val(json_object);
//        })
//      };

//      reader.onerror = function(ex) {
//        console.log(ex);
//      };

//      reader.readAsBinaryString(file);
//    };
//  };

//  function handleFileSelect(evt) {

//    var files = evt.target.files;
//    var xl2json = new ExcelToJSON();
//    xl2json.parseExcel(files[0]);
//  }
//-------------- ExportExcel ------------------------------------------------------
//window.onbeforeunload = function () {
//    return "Sau khi đọc được thông báo này, mọi trách nhiệm đã thuộc về bạn !!!"
//}
var titlename = document.getElementById("nameCamp");
const date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let fullDate = day + "-" + month + "-" + year;
function playMusic() {
    document.getElementById("introYEP").play();

}

 function ExportExcel() {
    $("#table2excel").table2excel({
        name: "TênFile",
        filename: titlename.value +"_"+ fullDate+"Winners.xlsx",
        fileext: ".xls",
    });
};
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    const startTime = performance.now()
    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime
        if (elapsedTime > duration) {
            callback(finalNumber)
        } else {
            const rate = elapsedTime / duration
            const currentNumber = Math.round(rate * finalNumber)
            callback(currentNumber)
            requestAnimationFrame(updateNumber)
        }
    }
    requestAnimationFrame(updateNumber)
}
let arrData = localStorage.getItem("DataLuckyDraw");
//------------- Run Draw -----------------------------------------------------------
const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);
const arrHistory = [];
function handleFormSubmit(event) {
    //---------------------------------------
    var table = document.getElementById("joiner");
    var header = [];
    var rows = [];

    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var headerrow = table.rows[0].cells[i].innerHTML;

        var singledata = headerrow;
        headerrow = singledata.replace(/ /g, "");
        var splitdata = headerrow;
        headerrow = splitdata.replace(/\n/g, "");
        //var splitnhay = headerrow;
        //headerrow = splitnhay.replace(/"/g, "");
        header.push(headerrow);
    }

    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var singledata = row[header[j]] = table.rows[i].cells[j].innerHTML;
            row[header[j]] = singledata.replace(/ /g, "");
            var splitdata = row[header[j]];
            row[header[j]] = splitdata.replace(/\n/g, "");

        }
        rows.push(row);
    }
//---------------------------------------
    //
        document.getElementById("drawAudio").play();
        document.getElementById("congraAudio").pause();
    //
    document.getElementById("phaohoa").style.display = "none";
    document.getElementById("submit").disabled=true;

    function myTimer() {
        for(var i=0;i<10;i++){
            const rd = Math.floor(Math.random()*9);
            document.getElementById(i).innerHTML = rd;
        }
    
    }
    const myInterval = setInterval(myTimer, 30);

    function myStop() {
        clearInterval(myInterval);
      }
  
    //const data = new FormData(event.target);

    //const formJSON = Object.fromEntries(data.entries());
    //const varname = document.getElementById("xlx_json").value;

    //if (varname == null || varname == undefined || varname == "" || varname =="                                "||varname==" ") {
    //    alert("Cần dữ liệu CSV - JSON");
    //    window.location.reload();
    //}
    event.preventDefault();
    var obj = [];
    if (arrData == [] || arrData == null || arrData == "[]") {
        obj = rows;
        localStorage.removeItem("DataLuckyDraw");
        localStorage.clear();

    }
    else {

        obj = JSON.parse(arrData);

    }
    if (obj.length == 0 || obj == null) {
        alert("Hãy kiểm tra danh sách người tham dự")
        window.location.reload();
    }

    document.getElementById("submit").style.alignContent = "center";
    document.getElementById("submit").textContent = "Quay";
    document.getElementById("status").style.color = "white";

    let x = Math.floor(Math.random() * obj.length);
    var arr = obj[x].IDJOINER;
    let numbTostring = arr.toString();
    setTimeout(result,1800);
    function result() {
        for (let i = 0; i < 10; i++) {
            animateNumber(numbTostring[i], 3000, 0, function (number) {
                if (i == 3 || i == 4 || i == 5 || i == 6) {
                    number = "x";

                    document.getElementById(i).innerText = number;
                }
                document.getElementById(i).innerText = number;
            })
        };
    
    }
    const phoneUser = obj[x].IDJOINER;
    const person = obj[x].NAME;
    const nameCus = document.getElementById("nameCus").value;
    const nameCamp = document.getElementById("nameCamp").value;
    const datetime = new Date().toLocaleString().replace(",", " ");
    person.toString();
    //---------------------------
    var IDitemprize = $("#IDDETAIL option:selected").val();
    var e = document.getElementById("IDDETAIL");
    var itemprize = e.options[e.selectedIndex].text;
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    //---------------------------
    //--------
    $("#result").append(
        "<tr>"
        + "<td> " + itemprize + "</td>"
        + "<td>" + person + "</td>"
        + "<td>" + phoneUser + "</td>"
        + "<td>" + date + "</td>"
        + "<td style=\"display:none\"> " + IDitemprize + "</td>"

        + "</tr>"
    );
    function myGreeting() {       
         document.getElementById("phaohoa").style.display = "block";
        document.getElementById("congraAudio").play();
        document.getElementById("modal-congrate").style.display = "block";
        const alertWinner = "<p>" + "Chúc mừng \"" + " <span class=\"colorCongrate\">" + person + "</span>\"" + "</p>"
            + "<p>" + " có số điện thoại \"" + " <span class=\"colorCongrate\">" + phoneUser + "</span>\"" + "</p>"
            + "<p>" + " đã đoạt " + " <span class=\"colorCongrate\">" + itemprize + "</span>" + " của chương trình" + "</p>";
        document.getElementById("congrate").innerHTML = alertWinner;
        document.getElementById("status").style.color = "transparent";
        document.getElementById("submit").disabled=false;
        setTimeout(stopPhaohoa, 7000)

        
    }
    obj.splice(x, 1);
    localStorage.setItem("DataLuckyDraw", JSON.stringify(obj));
    //------------History------------------------
    const itemHistory = "<p>" + datetime + ": \"" + nameCus + "\" - " + nameCamp + " - " + person + " - " + phoneUser + " - " + itemprize + "</p>";
    
    arrHistory.push(itemHistory);
    localStorage.setItem("HistoryDraw", arrHistory )
    arrData = JSON.stringify(obj);
    setTimeout(myGreeting, 5000);
    setTimeout(myStop, 1800);
    function stopPhaohoa() {
        document.getElementById("phaohoa").style.display = "none";
}

}
function runprogram3() {
    //---------------------------------------
    var table = document.getElementById("joiner");
    var header = [];
    var rows = [];

    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var headerrow = table.rows[0].cells[i].innerHTML;

        var singledata = headerrow;
        headerrow = singledata.replace(/ /g, "");
        var splitdata = headerrow;
        headerrow = splitdata.replace(/\n/g, "");
        //var splitnhay = headerrow;
        //headerrow = splitnhay.replace(/"/g, "");
        header.push(headerrow);
    }

    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var singledata = row[header[j]] = table.rows[i].cells[j].innerHTML;
            row[header[j]] = singledata.replace(/ /g, "");
            var splitdata = row[header[j]];
            row[header[j]] = splitdata.replace(/\n/g, "");

        }
        rows.push(row);
    }
    var obj = [];
    if (arrData == [] || arrData == null || arrData == "[]") {
        obj = rows;
        localStorage.removeItem("DataLuckyDraw");
        localStorage.clear();

    }
    else {

        obj = JSON.parse(arrData);

    }
    if (obj.length == 0 || obj == null) {
        alert("Hãy kiểm tra danh sách người tham dự")
        window.location.reload();
    }

    //---------------------------------------
    //
    document.getElementById("drawAudio").play();
    document.getElementById("congraAudio").pause();
    //
    document.getElementById("phaohoa").style.display = "none";
    document.getElementById("submit").disabled = true;

    function myTimer() {
        for (var i = 0; i < 3; i++) {
            const rd = Math.floor(Math.random() * 9);
            document.getElementById(i).innerHTML = rd;
        }

    }
    const myInterval = setInterval(myTimer, 30);

    function myStop() {
        clearInterval(myInterval);
    }

    //const data = new FormData(event.target);

    //const formJSON = Object.fromEntries(data.entries());
    //const varname = document.getElementById("xlx_json").value;

    //if (varname == null || varname == undefined || varname == "" || varname =="                                "||varname==" ") {
    //    alert("Cần dữ liệu CSV - JSON");
    //    window.location.reload();
    //}
    event.preventDefault();
    
    document.getElementById("submit").style.alignContent = "center";
    document.getElementById("submit").textContent = "Quay";
    document.getElementById("status").style.color = "white";

    let x = Math.floor(Math.random() * obj.length);
    var arr = obj[x].IDJOINER;
    let numbTostring = arr.toString();
    setTimeout(result, 1800);
    function result() {
        for (let i = 0; i < 3; i++) {
            animateNumber(numbTostring[i], 3000, 0, function (number) {
                document.getElementById(i).innerText = number;
            })
        };

    }
    const phoneUser = obj[x].PHONE;
    const person = obj[x].NAME;
    const nameCus = document.getElementById("nameCus").value;
    const nameCamp = document.getElementById("nameCamp").value;
    const datetime = new Date().toLocaleString().replace(",", " ");
    person.toString();
    //---------------------------
    var IDitemprize = $("#IDDETAIL option:selected").val();
    var e = document.getElementById("IDDETAIL");
    var itemprize = e.options[e.selectedIndex].text;
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    //---------------------------
    //--------
    $("#result").append(
        "<tr>"
        + "<td> " + itemprize + "</td>"
        + "<td>" + person + "</td>"
        + "<td>" + phoneUser + "</td>"
        + "<td>" + date + "</td>"
        + "<td style=\"display:none\"> " + IDitemprize + "</td>"

        + "</tr>"
    );
    function myGreeting() {
        document.getElementById("phaohoa").style.display = "block";
        document.getElementById("congraAudio").play();
        document.getElementById("modal-congrate").style.display = "block";
        const alertWinner = "<p>" + "Chúc mừng \"" + " <span class=\"colorCongrate\">" + person + "</span>\"" + "</p>"
            + "<p>" + " có số điện thoại \"" + " <span class=\"colorCongrate\">" + phoneUser + "</span>\"" + "</p>"
            + "<p>" + " đã đoạt " + " <span class=\"colorCongrate\">" + itemprize + "</span>" + " của chương trình" + "</p>";
        document.getElementById("congrate").innerHTML = alertWinner;
        document.getElementById("status").style.display = "transparent";
        document.getElementById("submit").disabled = false;
        setTimeout(stopPhaohoa, 7000)


    }
    obj.splice(x, 1);
    localStorage.setItem("DataLuckyDraw", JSON.stringify(obj));
    //------------History------------------------
    const itemHistory = "<p>" + datetime + ": \"" + nameCus + "\" - " + nameCamp + " - " + person + " - " + phoneUser + " - " + itemprize + "</p>";

    arrHistory.push(itemHistory);
    localStorage.setItem("HistoryDraw", arrHistory)
    arrData = JSON.stringify(obj);
    setTimeout(myGreeting, 5000);
    setTimeout(myStop, 1800);
    function stopPhaohoa() {
        document.getElementById("phaohoa").style.display = "none";
    }

}


//-------------------- Modal ----------------------------------------
// Modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 

 function Export() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (document.getElementById("modal-congrate")) {
        document.getElementById("modal-congrate").style.display = "none";

    }
}
//--------HideShow Title---------------
function showhideTitle() {
    const title = document.getElementById("titlecampaign").style;
    if (title.color == "transparent") {
        title.color = "#b2b2b2";
    } else {
        title.color = "transparent";
    }
}










//----------Nestle_YEP-----------


function submitform(number, time_draw) {
    let datatoSheet = new FormData();
    const id = document.getElementById("id_employee");
    const firstName = document.getElementById("LASTNAME");
    const lastName = document.getElementById("FIRSTNAME");
    const bu = document.getElementById("BU");
    const gift = document.getElementById("GIFT");

    datatoSheet.append("id", id.value);
    datatoSheet.append("firstname", firstName.value);
    datatoSheet.append("lastname", lastName.value);
    datatoSheet.append("bu", bu.value);
    datatoSheet.append("timedraw", time_draw);
    datatoSheet.append("gift", gift.value);
    datatoSheet.append("result", number[0]);
    datatoSheet.append("status", number[1])
    fetch(
        'https://script.google.com/macros/s/AKfycbxZ1mDaicZIRS4bSeQ79wocLEswK7pqm0BZYLKuPXHTZsMcfzLhzwX-wTuqA8MeC85a1A/exec'
        , {
            method: "POST",
            body: datatoSheet
        })
        .then(res => res.text())
        .then(status => { console.log(status) })

}
function getUserData(id) {
    
    window.location.href = "/Luckynumber/Details/" + id;

    //window.location.href="Details/" + id;
    //data_nv = { ...data }
    //if (statusApi != 200) {
    //    console.log('Mã nhân viên không tồn tại');
    //}
    //else {
    //    console.log("Nhan vien", data_nv);
    //    const numbOfDraw = document.getElementById("timedraw");
    //    localStorage.setItem('NhanVien', JSON.stringify(data_nv));
    //    console.log("Storage", data_fromStorage)
    //    document.getElementById("pagestep1").style.display = "none";
    //    document.getElementById("btn-shake").style.display = "none";
    //    document.getElementById("step-bottle").style.display = "flex";
    //    numbOfDraw.innerHTML = "Bạn còn " + data_nv.timeDraw + " lượt lắc.";
    //    numbOfDraw.style.display = "block";
    //    welcome()
    //}
}
function tohome() {
    window.location.href = "/Luckynumber/index"
}

function find_MANV() {
   const MANV = document.getElementById("msnv");
    console.log(MANV)
    if (MANV == undefined || MANV == null || MANV == "") {
        alert("Chưa nhập mã nhân viên")
    }
    else {
        getUserData(MANV.value.toUpperCase());
    }

}
function thankyou() {
    const timedraw = document.getElementById("numbdraw");
    document.getElementById("timedraw").style.display = "none";
    document.getElementById("step-bottle").style.display = "none";
    document.getElementById("step-thankyou").style.display = "flex";
    console.log("so luot rut cua ban: ", timedraw.value)
}
function rutXam() {
    const lastName = document.getElementById("LASTNAME");
    const stepBottle = document.getElementById("step-bottle");
    const stepResult = document.getElementById("step-result");
    const stepCauchuc = document.getElementById("step-cauchuc");
    const stepLucky = document.getElementById("step-lucky");
    //document.getElementById("bg").style.backgroundImage = " url(\"/Assets/img/Elements/bg_gieoque_lastscreen.png\")";
    stepBottle.style.display = "none";
    //let luckynumber = Math.floor((Math.random() * 430))
    let luckynumber = 4;
    if (luckynumber < 5) {
        fetch('/Luckynumber/Luckyperson', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },

        })
            .then(res => {
                res.json().then(data => {
                    console.log(data);
                    if (data[1] == "x") {
                        console.log("null pass")
                        console.log(data);
                        const intdata = data[0];
                        UpdateSolanrut(data);
                       

                        logoCauchuc.style.marginTop = "5%";
                        //document.getElementById("cauchuc").src = dongvien2[getRandomInt(dongvien2.length)].img;
                        stepResult.style.display = "flex";
                        document.getElementById("noticestep4").innerHTML = "Xin chúc mừng " + lastName.value;
                        
                        document.getElementById("normalnumber").innerHTML = intdata;



                        document.getElementById("timedraw").style.display = "none"
                        console.log("Que may man cua ban la : ", intdata );
                        stepBottle.style.display = "none"
                        stepCauchuc.style.display = "none"
                    }

                    // 30 số may mắn XAM THUONG THUONG vvvvvvvvvvvvvvvvvvvvvvvvvvv

                    if (data[1] == "THUONGTHUONG")
                     {
                        console.log("THUONG THUONG", data);
                        const intdata =data[0];

                        UpdateSolanrut(data);
                        stepLucky.style.display = "flex"
                        document.getElementById("timedraw").style.display = "none"
                        document.getElementById("noticestep4-1").innerHTML = "Xin chúc mừng " + lastName.value;
                        document.getElementById("luckynumber").innerHTML = intdata;
                        console.log("Que may man cua ban la : ", intdata);
                    }

                    // 30 số may mắn XAM THUONG THUONG ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

                    
                })
                console.log(res.status)
            })
    }

    //------------------------------ Xem Ky ---------------------
    //else {
    //    ///----------------mains
        
    //    UpdateSolanrut(0)
       
    //    //stepResult.style.display = "flex"
    //    //document.getElementById("timedraw").style.display = "none"
    //    //document.getElementById("noticestep4").innerHTML = "Số quẻ của " + lastName.value + " là :";
    //    //document.getElementById("normalnumber").innerHTML = normal_numb[x];
    //    //console.log("Que may man cua ban la : ", normal_numb[x]);

    //    logoCauchuc.style.marginTop = "5%";
    //    document.getElementById("cauchuc").src = dongvien2[getRandomInt(dongvien2.length)].img;
    //    stepBottle.style.display = "none"
    //    stepCauchuc.style.display = "flex"
    //}
    //------------------------------ Xem Ky ---------------------
}

function UpdateSolanrut(number) {
    const timedraw = document.getElementById("numbdraw");
    const MANV = document.getElementById("id_employee");
    //const execute_numb = timedraw.value-1
    timedraw.value --
    fetch('/Luckynumber/Edit/' + MANV.value, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }

    })
        .then(res => {
            document.getElementById("bottle").style.pointerEvents = "unset";

            console.log("Update luot rut", timedraw.value)
                const numbOfDraw = document.getElementById("timedraw");
            numbOfDraw.innerHTML = "Bạn còn " + timedraw.value + " lượt lắc.";
            console.log("so luot rut con lai ban: ", timedraw.value)
            if (timedraw.value < 1) {
                    console.log('enter submit')
                submitform(number, timedraw.value)
                
            }
           
        })
}
function getRandomInt(x) {
    return Math.floor(Math.random() * x);
}
function shake() {
    document.getElementById("introYEP").play();
//
    const stepBottle = document.getElementById("step-bottle")
    const stepCauchuc = document.getElementById("step-cauchuc")
    const stepResult = document.getElementById("step-result")
    document.getElementById("bottle").classList.add("animate-shake");
    // Reset animation
    setTimeout(() => {
        document.getElementById("bottle").classList.remove("animate-shake");

    }, 3500); // match this with the animation-duration
};

function goRun() {
    const logoCauchuc = document.getElementById("logoCauchuc");
    const MANV = document.getElementById("id_employee");
    document.getElementById("bottle").style.pointerEvents = "unset";

    //

    function currrentNumbdraw() {
        fetch('/luckynumber/employee/' + MANV.value, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },

        })
            .then(res => {
                res.json().then(data => {
                    console.log("luot quay continue", data)
                    const numbOfDraw = document.getElementById("timedraw");
                    const stepCauchuc = document.getElementById("step-cauchuc");
                    const stepBottle = document.getElementById("step-bottle")
                    const btnstep = document.getElementById("btn-step");
                    btnstep.style.display = "none";
                    stepCauchuc.style.display = "none";
                    stepBottle.style.display = "flex"


                    numbOfDraw.innerHTML = "Bạn còn " + data.TIMEDRAW + " lượt lắc.";
                })
                console.log(res.status)
            })
    }
    currrentNumbdraw();
    //window.location.href = "/Luckynumber/Details/" + MANV.value

}
    
function Run() {
    document.getElementById("bottle").style.pointerEvents = "none";
    //
    const dongvien1 = [{
        text: "Moi rut them",
        message: "Maggie",
        img: "/Assets/img/Elements/Maggie.png"

    },
    {
        text: "Moi rut them",
        message: "Kitkat",
        img: "/Assets/img/Elements/Kitkat.png"

    },

    {
        text: "Moi rut them",
        message: "Nestcafe",
        img: "/Assets/img/Elements/Nestcafe.png"

    }
    ];
    const dongvien2 = [{
        text: "Rut them luot nua nhe",
        message: "Milo",
        img: "/Assets/img/Elements/Milo.png"
    },
    {
        text: "Rut them luot nua nhe",
        message: "Nestea",
        img: "/Assets/img/Elements/Nestea.png"

    },
    {
        text: "Moi rut them",
        message: "Lavie",
        img: "/Assets/img/Elements/Lavie.png"

    }
    ];
    const dongvien3 = [{
        text: "Rut them luot nua nhe",
        message: "Milo",
        img: "/Assets/img/Elements/Milo.png"
    },
    {
        text: "Rut them luot nua nhe",
        message: "Nestea",
        img: "/Assets/img/Elements/Nestea.png"

    },
    {
        text: "Moi rut them",
        message: "Lavie",
        img: "/Assets/img/Elements/Lavie.png"

        },
        {
            text: "Moi rut them",
            message: "Maggie",
            img: "/Assets/img/Elements/Maggie.png"

        },
        {
            text: "Moi rut them",
            message: "Kitkat",
            img: "/Assets/img/Elements/Kitkat.png"

        },

        {
            text: "Moi rut them",
            message: "Nestcafe",
            img: "/Assets/img/Elements/Nestcafe.png"

        }
    ];
    const stepBottle = document.getElementById("step-bottle")
    const stepCauchuc = document.getElementById("step-cauchuc")
    const btnstep = document.getElementById("btn-step");
    const timedraw = document.getElementById("numbdraw");
    const logoCauchuc = document.getElementById("logoCauchuc");
    const audio = document.getElementById("introYEP");
    const audioshake = document.getElementById("audioshake");

    console.log(timedraw.value)
    if (timedraw.value > 3) {
        audio.volume = 0.2;
        audioshake.play();
        shake();
        setTimeout(() => {
            audio.volume = 1;
            UpdateSolanrut();
            console.log(dongvien3[0]);
            logoCauchuc.style.marginTop = "5%";
            document.getElementById("cauchuc").src = dongvien3[getRandomInt(dongvien3.length)].img;
            stepBottle.style.display = "none"
            stepCauchuc.style.display = "flex"
            btnstep.style.display = "block";
        }, 3000)
    }
    if (timedraw.value == 3) {
        audio.volume = 0.2;
        audioshake.play();
        shake();
        setTimeout(() => {
            audio.volume = 1;
            UpdateSolanrut();
            console.log(dongvien2[0]);
            logoCauchuc.style.marginTop = "5%";
            document.getElementById("cauchuc").src = dongvien2[getRandomInt(dongvien2.length)].img; 
            stepBottle.style.display = "none"
            stepCauchuc.style.display = "flex"
            btnstep.style.display = "block";
        }, 3000)
    }
    if (timedraw.value == 2) {
        audio.volume = 0.2;
        audioshake.play();
        shake()
        setTimeout(() => {
            audio.volume = 1;

            UpdateSolanrut();
            logoCauchuc.style.marginTop = "5%";
            document.getElementById("cauchuc").src = dongvien1[getRandomInt(dongvien1.length)].img;
            stepBottle.style.display = "none"
            stepCauchuc.style.display = "flex"
            btnstep.style.display = "block";
        }, 3000)
    }
    if (timedraw.value == 1) {
        audio.volume = 0.2;
        audioshake.play();
        shake()
        setTimeout(() => {
            audio.volume = 1;
             rutXam() }, 3000)
    }
    if (timedraw.value <= 0) {
        thankyou()
    }

}
