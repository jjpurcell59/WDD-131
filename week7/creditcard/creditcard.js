$(document).ready(function () {
    Stripe.setPublishableKey('pk_test_9D43kM3d2vEHZYzPzwAblYXl');

    var cardNumber, cardMonth, cardYear, cardCVC, cardHolder;
    var paymentAmount = 199;

    function validateField() {
        var $input = $(this);
        if (this.validity.valid) {
            $input.removeClass('invalid');
        } else {
            $input.addClass('invalid');
        }
    }

    function checkCardType() {
        cardNumber = $('#card-number').val();
        var cardType = Stripe.card.cardType(cardNumber);

        switch (cardType) {
            case 'Visa':
                $('#card-image').html('<img src="visa-icon.svg" alt="Visa">');
                break;
            case 'MasterCard':
                $('#card-image').html('<img src="mastercard-icon.svg" alt="MasterCard">');
                break;
            case 'American Express':
                $('#card-image').html('<img src="amex-icon.svg" alt="American Express">');
                break;
            default:
                $('#card-image').html('<img src="default-card-icon.svg" alt="Card">');
                break;
        }
    }

    $('#card-number').on('input', checkCardType);
    $('#form-container input').on('blur input', validateField);
    $('#amount').text(`Paying: $${paymentAmount}`);

    $('#card-btn').on('click', function(e) {
        var allValid = true;
        $('#form-container input').each(function() {
            if (!this.validity.valid) {
                $(this).addClass('invalid');
                allValid = false;
            }
        });
        if (!allValid) {
            e.preventDefault();
            return;
        }
        
    });
});