// UI CONTROLLER
var UIController = (function () {
    var DOMstrings = {
        addBtn: '.addMail',
        delBtn: '.delMail',
        mailFormGroup: '.mailGroup',
    };

    return {
        addMailRow: function (id) {
            var html, element;

            html = `
                <div id="row${id}" class="form-row mb-3">
                    <div class="col">
                        <input type="email" class="form-control">
                    </div>
                    <div class="col">
                        <button class="btn btn-outline-danger delMail" type="button"><i class="fas fa-times"></i></button>
                    </div>
                </div>
                `;
            element = DOMstrings.mailFormGroup;

            document.querySelector(element).insertAdjacentHTML('beforeend', html);

        },

        deleteMailRow: function (rowID) {
            var el = document.getElementByID(rowID);
            el.parentNode.removeChild(el);
        },

        getDOMstrings: function() {
            return DOMstrings;
        }

    };
})();


// GLOBAL APP CONTROLLER
var controller = (function(UICrtl) {

    var state = {
        id: 0
    };

    var setupEventListeners = function () {
        var DOM = UICrtl.getDOMstrings();
        document.querySelector(DOM.addBtn).addEventListener('click', crtlAddMailRow);
        document.querySelector(DOM.delBtn).addEventListener('click', crtlDeleteMailRow);
    };

    crtlAddMailRow = function () {
        state.id += 1;
        UIController.addMailRow(state.id);
    };

    crtlDeleteMailRow = function () {
        var rowID = this.parentElement.parentElement;
        console.log("Something");
        UIController.deleteMailRow(rowID)
    };


    return {
        init: function() {
            setupEventListeners()
        }
    };

})(UIController);

controller.init();