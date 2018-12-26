$(document).ready(function(){
	var form = $('#form_buying_product');

	function basketUpdating(product_id, product_qnt, is_delete, is_checkout_list=false) {
		var data = {};
		data.is_delete = is_delete;
		data.product_id = product_id;
		data.product_qnt = product_qnt;
		data.is_checkout_list = is_checkout_list;
		var csrf_token = $('input[name="csrfmiddlewaretoken"]').val();
		data["csrfmiddlewaretoken"] = csrf_token;

		var url = '/basket_adding/';
		$.ajax({
		 url: url,
		 type: 'POST',
		 data: data,
		 cache: true,
		 success: function (data) {
			 if (data.total_product_qnt >= 0){
			 	$('#basket_total_qnt').text('('+data.total_product_qnt+')');
			 	$('#sm-basket_total_qnt').text('('+data.total_product_qnt+')');
			 	$('.basket-items ul').html('');
			 	$.each(data.products, function (index, value) {
					$('.basket-items ul').append('<li><a data-fancybox="gallery" href="' + value.image_url +'" class="outline-focus-none"><img class="basket-img" src="' + value.image_url +'"/></a>' + '<p class="basket-p">' + value.name + ', ' + value.nmb + ' шт. по ' + value.price_pre_item + ' грн   '
					  + '<a class="delete-item" href="#" data-product_id="' + value.id + '"><sup title="Видалити">X</sup></a></p>'
					  + '</li>');
                });

             if (data.is_checkout_list){
             	$('.checkout-table-body').html('');
             	$.each(data.products, function(index, value) {
             		index+=1
             		$('.checkout-table-body').append(
             			'<tr><td>' + index + '</td><td><a data-fancybox="gallery" href="' + value.image_url +'" class="outline-focus-none"><img class="checkout-img" src="' + value.image_url +'"/></a>' + '</td><td>' + value.name + '</td><td><input type="text" value="'
             			 + value.nmb + '" class="product-nmb-in-basket" name="product_nmb_in_basket_id_'+value.id+'">' + '</td><td><span class="product-price-pre-item">' + value.price_pre_item + '</span></td><td><span class="total-product-price-in-basket">' + value.total_price
             			 + '</span></td><td><a class="delete-item" href="#" data-product_id="' + value.id + '"><span title="Видалити">X</span></a></td></tr>'
             			);
             	});
             	totalOrderAmounCalculator();
             };
			 };
		 },
		 error: function () {
			
		 }
		});
    };
	form.on('submit', function(e){
		e.preventDefault();
		var product_qnt = $('#product-qnt-input').val();
		var qnt_submit_btn = $('#qnt-submit-btn');
		var product_id = qnt_submit_btn.data('product_id');
		var product_name = qnt_submit_btn.data('name');
		var product_price = qnt_submit_btn.data('price');

		basketUpdating(product_id, product_qnt, is_delete = false);
	});



	$('.basket').on('click', function(e){
		e.preventDefault();
		$('.basket-items').slideToggle('slow');
	});	


	$(document).on('click', '.delete-item', function(e){
		e.preventDefault();
		product_qnt = 0;
		product_id = $(this).data('product_id');
		basketUpdating(product_id, product_qnt, is_delete = true);
	});


	$(document).on('click', '.delete-item-checkout', function(e){
		e.preventDefault();
		product_qnt = 0;
		product_id = $(this).data('product_id');
		basketUpdating(product_id, product_qnt, is_delete = true, is_checkout_list=true);
	});

	
	function totalOrderAmounCalculator() {
		var total_order_amount = 0;
		$('.total-product-price-in-basket').each(function () {
			total_order_amount += parseFloat($(this).text());
        });
		$('#total_order_amount').text(total_order_amount.toFixed(2));
    };


	$('input.product-nmb-in-basket').on('input', function (e) {
		var current_product_nmb_in_basket = $(this).val();
		var product_price_pre_item = $(this).closest('tr').find('.product-price-pre-item').text();
		var total_product_price_in_basket = current_product_nmb_in_basket*product_price_pre_item;
		$(this).closest('tr').find('.total-product-price-in-basket').text(total_product_price_in_basket.toFixed(2));
		totalOrderAmounCalculator();
    });

    totalOrderAmounCalculator();
});