
// Smooth scrolling
document.querySelectorAll('#index a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add mail fields in register form
let numFields = 0;
$(".addMail").click(function (e) {
    if (numFields < 3) {
        $(".mailGroup").append(
            `
            <div class="form-row mb-3">
                <div class="col">
                    <input type="email" class="form-control">
                </div>
                <div class="col">
                    <button class="btn btn-outline-danger del" type="button"><i class="fas fa-times"></i></button>
                </div>
        </div>
        `
        );
        numFields++;
    }
    $(".del").off().click(function () {
        $(this).closest('div.form-row').remove();
        numFields--;
    });
});

// Change agenda
morningDiv = `<div id="accordion">

                <!-- Item 1 -->
                <div class="card">
                    <div class="card-header">
                        <h5>
                            <a href="#collapse1" data-parent="#accordion" data-toggle="collapse">
                                Item mañana 1
                            </a>
                        </h5>
                    </div>

                    <div id="collapse1" class="collapse show">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ea iste a doloremque, cumque, debitis eum vel ipsum architecto aut, recusandae totam ullam aperiam. Nesciunt expedita officiis animi quam corporis optio inventore facilis sint et nulla in, repellat debitis dolor at nisi quo, unde temporibus. Quos nisi nostrum officia, illo.
                        </div>
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="card">
                    <div class="card-header">
                        <h5>
                            <a href="#collapse2" data-parent="#accordion" data-toggle="collapse">
                                Item mañana 2
                            </a>
                        </h5>
                    </div>

                    <div id="collapse2" class="collapse">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ea iste a doloremque, cumque, debitis eum vel ipsum architecto aut, recusandae totam ullam aperiam. Nesciunt expedita officiis animi quam corporis optio inventore facilis sint et nulla in, repellat debitis dolor at nisi quo, unde temporibus. Quos nisi nostrum officia, illo.
                        </div>
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="card">
                    <div class="card-header">
                        <h5>
                            <a href="#collapse3" data-parent="#accordion" data-toggle="collapse">
                                Item mañana 3
                            </a>
                        </h5>
                    </div>

                    <div id="collapse3" class="collapse">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ea iste a doloremque, cumque, debitis eum vel ipsum architecto aut, recusandae totam ullam aperiam. Nesciunt expedita officiis animi quam corporis optio inventore facilis sint et nulla in, repellat debitis dolor at nisi quo, unde temporibus. Quos nisi nostrum officia, illo.
                        </div>
                    </div>
                </div>

                <!-- Item 4 -->
                <div class="card">
                    <div class="card-header">
                        <h5>
                            <a href="#collapse4" data-parent="#accordion" data-toggle="collapse">
                                Item mañana 4
                            </a>
                        </h5>
                    </div>

                    <div id="collapse4" class="collapse">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ea iste a doloremque, cumque, debitis eum vel ipsum architecto aut, recusandae totam ullam aperiam. Nesciunt expedita officiis animi quam corporis optio inventore facilis sint et nulla in, repellat debitis dolor at nisi quo, unde temporibus. Quos nisi nostrum officia, illo.
                        </div>
                    </div>
                </div>
            </div>`;
afternoonDiv = `<div id="accordion">

                <!-- Item 1 -->
                <div class="card">
                    <div class="card-header">
                        <h5>
                            <a href="#collapse1" data-parent="#accordion" data-toggle="collapse">
                                Item tarde 1
                            </a>
                        </h5>
                    </div>

                    <div id="collapse1" class="collapse show">
                        <div class="card-body">
                            Bacon ipsum dolor amet prosciutto ham buffalo hamburger, ham hock pig brisket capicola turkey kevin. Capicola bacon cupim short loin, frankfurter flank pork ham hock porchetta biltong prosciutto jowl pastrami fatback shoulder. Strip steak pastrami cupim burgdoggen boudin, sausage tenderloin bacon hamburger landjaeger pork chop rump ham hock meatball. Pork chop beef ribs picanha doner prosciutto hamburger fatback.
                        </div>
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="card">
                    <div class="card-header">
                        <h5>
                            <a href="#collapse2" data-parent="#accordion" data-toggle="collapse">
                                Item tarde 2
                            </a>
                        </h5>
                    </div>

                    <div id="collapse2" class="collapse">
                        <div class="card-body">
                            Bacon ipsum dolor amet prosciutto ham buffalo hamburger, ham hock pig brisket capicola turkey kevin. Capicola bacon cupim short loin, frankfurter flank pork ham hock porchetta biltong prosciutto jowl pastrami fatback shoulder. Strip steak pastrami cupim burgdoggen boudin, sausage tenderloin bacon hamburger landjaeger pork chop rump ham hock meatball. Pork chop beef ribs picanha doner prosciutto hamburger fatback.
                        </div>
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="card">
                    <div class="card-header">
                        <h5>
                            <a href="#collapse3" data-parent="#accordion" data-toggle="collapse">
                                Item tarde 3
                            </a>
                        </h5>
                    </div>

                    <div id="collapse3" class="collapse">
                        <div class="card-body">
                            Bacon ipsum dolor amet prosciutto ham buffalo hamburger, ham hock pig brisket capicola turkey kevin. Capicola bacon cupim short loin, frankfurter flank pork ham hock porchetta biltong prosciutto jowl pastrami fatback shoulder. Strip steak pastrami cupim burgdoggen boudin, sausage tenderloin bacon hamburger landjaeger pork chop rump ham hock meatball. Pork chop beef ribs picanha doner prosciutto hamburger fatback.
                        </div>
                    </div>
                </div>

                <!-- Item 4 -->
                <div class="card">
                    <div class="card-header">
                        <h5>
                            <a href="#collapse4" data-parent="#accordion" data-toggle="collapse">
                                Item tarde 4
                            </a>
                        </h5>
                    </div>

                    <div id="collapse4" class="collapse">
                        <div class="card-body">
                            Bacon ipsum dolor amet prosciutto ham buffalo hamburger, ham hock pig brisket capicola turkey kevin. Capicola bacon cupim short loin, frankfurter flank pork ham hock porchetta biltong prosciutto jowl pastrami fatback shoulder. Strip steak pastrami cupim burgdoggen boudin, sausage tenderloin bacon hamburger landjaeger pork chop rump ham hock meatball. Pork chop beef ribs picanha doner prosciutto hamburger fatback.
                        </div>
                    </div>
                </div>
            </div>`;
$("#afternoonBtn").click(function () {
    $("#morningBtn").removeClass("btn-schedule-active");
    $("#afternoonBtn").addClass("btn-schedule-active");
    $("#accordion").replaceWith(afternoonDiv);
});
$("#morningBtn").click(function () {
    $("#afternoonBtn").removeClass("btn-schedule-active");
    $("#morningBtn").addClass("btn-schedule-active");
    $("#accordion").replaceWith(morningDiv);
});

// Change challenge buttons classes

$('.btn-special').click(function () {
   $('.btn-special').removeClass('btn-active');
   $(this).addClass('btn-active');
});

// CAROUSEL
function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
    moveToSelected($(this));
});

$('#prev').click(function() {
    moveToSelected('prev');
});

$('#next').click(function() {
    moveToSelected('next');
});
