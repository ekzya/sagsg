
// ОТКЛЮЧЕНИЕ ПРИБЛИЖЕНИЯ ПРИ ДВОЙНОМ НАЖАТИИ (SAFARI)

document.ondblclick = function (e) {
    e.preventDefault();
}

// сдвиг нижней области

let a = 0;

$(".close").on("click", function () {
    a++;
    if (a % 2 === 1) {
        $(".bottom").css({
            height: "0",
            borderTop: 0
        });
        $(".noclose").css({
            display: "none",
        });
        $(".close img").attr("src", "img/352469_arrow_up_icon.svg");
    } else {
        $(".bottom").css({
            height: "15vh",
            borderTop: "5px solid #3d3d3d"
        });
        $(".noclose").css({
            display: "block",
        });
        $(".close img").attr("src", "img/352466_arrow_down_icon.svg");
    }
});
// размер кисти

// если размер будет <10 то происходит смещение

function left() {
    if (Number($(".number").html()) < 10) {
        $(".number").css({
            marginLeft: "7px"
        });
    } else {
        $(".number").css({
            marginLeft: "0"
        });
    };

};

// при нажатии на "больше" происходит увеличение кисти и изменение прозрачности
let num = 16;
let numb = $(".number").html();
let rea = (Number(num));



$(".size .back").on("touchstart", function () {
    if ((Number($(".number").html())) < 36) {
        $(".backk").css({
            opacity: .7
        });
        rea += 1;
        num = rea;
        context.lineWidth = num;
        $(".number").html(rea);
        left();
    } else {
        return;
    }
});



// при нажатии на "больше" происходит камбек прозрачности

$(".size .back").on("touchend", function () {
    $(".backk").css({
        opacity: .4
    });
});

// при нажатии на "меньше" происходит уменьшении кисти и изменение прозрачности

$(".size .fowrard").on("touchstart", function () {
    if ((Number($(".number").html())) != 1) {
        $(".fowrardd").css({
            opacity: .7
        });
        rea -= 1;
        num = rea;
        context.lineWidth = num;
        $(".number").html(rea);
        left();
    } else {
        return;
    };
});

// при нажатии на "меньше" происходит камбек прозрачности

$(".size .fowrard").on("touchend", function () {
    $(".fowrardd").css({
        opacity: .4
    });
});

// РИСОВАТЬ

const canvas = $(".risovat").get(0);
const context = canvas.getContext('2d');

let isDrawing = false;

canvas.width = $(".risovat").width();
canvas.height = $(".risovat").height();

context.lineWidth = num;
context.strokeStyle = "black";
context.lineCap = "round";
context.lineJoin = "round";

$(".risovat")
    .on("touchstart", function (e) {
        isDrawing = true;
        const touch = e.originalEvent.touches[0];
        const x = touch.pageX - $(this).offset().left;
        const y = touch.pageY - $(this).offset().top;

        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    })
    .on("touchmove", function (e) {
        if (!isDrawing) return;

        const touch = e.originalEvent.touches[0];
        const x = touch.pageX - $(this).offset().left;
        const y = touch.pageY - $(this).offset().top;

        context.lineTo(x, y);
        context.stroke();
    })
    .on("touchend", function () {
        isDrawing = false;
    });



// нажатие на кнопку делете


$("#button").on("touchstart", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    $(this).css({
        transform: "scale(1.05)",
        background: "rgb(255, 64, 64)",
        boxShadow: "inset 0 0 20px 0 rgb(99, 3, 3)"
    });
});

$("#button").on("touchend", function () {
    $(this).css({
        transform: "scale(1)",
        background: "rgb(87, 87, 87)",
        boxShadow: "inset 0 0 3px 0 rgba(0, 0, 0, 0.7)"
    });
});

// нажатие на цвета

$(".black").on("touchstart", function () {
    context.fillStyle = "black";
    context.strokeStyle = "black";
    $(".red, .pink, .black-blue").css({
        transform: "translatey(0)"
    })
    $(this).css({
        transform: "translatey(-5px)"
    });
});
$(".red").on("touchstart", function () {
    context.fillStyle = "rgb(228, 40, 40)";
    context.strokeStyle = "rgb(228, 40, 40)";
    $(".black, .pink, .black-blue").css({
        transform: "translatey(0)"
    })
    $(this).css({
        transform: "translatey(-5px)"
    });
});
$(".pink").on("touchstart", function () {
    context.fillStyle = "#EF6C82";
    context.strokeStyle = "#EF6C82";
    $(".black, .red, .black-blue").css({
        transform: "translatey(0)"
    })
    $(this).css({
        transform: "translatey(-5px)"
    });
});
$(".black-blue").on("touchstart", function () {
    context.fillStyle = "#146397";
    context.strokeStyle = "#146397";
    $(".black, .pink, .red").css({
        transform: "translatey(0)"
    })
    $(this).css({
        transform: "translatey(-5px)"
    });
});



