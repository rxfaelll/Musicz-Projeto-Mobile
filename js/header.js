const menuBlur = $("#toggleMenuBlur");
const menuCheckbox = $("#menuCheckbox");

$(menuBlur).on("click", function(){
    $(menuCheckbox).prop("checked", false);
});