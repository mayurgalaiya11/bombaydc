/**
 * Created by User on 08-04-2021.
 */
(function ($) {
    $(document).ready(function () {
        $("#seeAnotherField").change(function () {
            if ($(this).val() == "yes") {
                $('#otherFieldDiv').show();
                $('#otherField').attr('required', '');
                $('#otherField').attr('data-error', 'This field is required.');
            } else {
                $('#otherFieldDiv').hide();
                $('#otherField').removeAttr('required');
                $('#otherField').removeAttr('data-error');
            }
        });
        $("#seeAnotherField").trigger("change");
        //Back to top
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });
})(jQuery);