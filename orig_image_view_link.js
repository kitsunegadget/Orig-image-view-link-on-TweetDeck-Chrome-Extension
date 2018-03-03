//div.id "open-modal"のdisplayがblockにならないとmed-trayもmedia-imgも生成されないので,DOMの変更を監視。
setTimeout(function() {
    console.log("orig image view READY.");
    var open_modal = document.getElementById("open-modal")

    open_modal.addEventListener("DOMSubtreeModified", function(){
        var med_tray = document.getElementsByClassName("med-tray");
        var id = document.getElementById("original-size"); //elementが生成されてなければnull

        if (open_modal.style.display === "block" && id === null){
            element = addElement();
            if (element != null){
                med_tray[0].appendChild(element);
                //console.log("apeendChild");
            }
        }
    });
}, 5000);

function addElement(){
    var mediaImg = document.querySelector(".med-tray .media-img");
    if (mediaImg != undefined) {
        var mediaURL = mediaImg.src;

        //largeの文字を引いてorigを追加する。もしsmallだった場合も5文字なのでだいじょうぶ。
        editURL = mediaURL.substr(0, mediaURL.length-5)+"orig";
        //console.log(editURL);

        var element = document.createElement("a");
        element.text = "Original size";
        element.style = "position: absolute; bottom: 0; margin-left: -39px; line-height: 1.4; ";
        element.href = editURL; //ここを画像リンクにする
        element.target = "_blank";
        element.id = "original-size"; //フラグ管理用にidをつける。状態が変わればelementは自動的に消える。
        
        return element;
    }
    return null;
};