from arthouse.settings import production
from django.core.mail import send_mail
from django.http import JsonResponse
from django.shortcuts import render
from django.template import loader
from .forms import CheckoutContactForm
from .models import *


def basket_adding(request):
    return_dict = dict()
    session_key = request.session.session_key
    print(request.POST)
    data = request.POST
    product_id = data.get("product_id")
    nmb = data.get("product_qnt")
    nmb = int(nmb)
    is_delete = data.get("is_delete")
    is_checkout_list = data.get("is_checkout_list")
    print(is_delete)
    print(product_id)

    if is_delete == 'true':
        product = ProductInBasket.objects.get(product_id=product_id, session_key=session_key)
        print('HERE!!!!! %s' % product)
        print(product_id)
        product.is_active = False
        product.save(force_update=True)

    else:

        product_to_update, created = ProductInBasket.objects.get_or_create(session_key=session_key, product_id=product_id, defaults={'nmb': nmb})
        if not created:
            product_to_update.nmb = nmb
            product_to_update.is_active = True
            product_to_update.save(force_update=True)

    products_in_basket = ProductInBasket.objects.filter(session_key=session_key, is_active=True)
    total_product_qnt = products_in_basket.count()

    return_dict["total_product_qnt"] = total_product_qnt
    return_dict["is_checkout_list"] = is_checkout_list
    return_dict["products"] = list()

    for obj in products_in_basket:
        product_dict = dict()
        product_dict['id'] = obj.product.id
        product_dict['name'] = obj.product.name
        product_dict['price_pre_item'] = obj.price_pre_item
        product_dict['nmb'] = obj.nmb
        product_dict['total_price'] = obj.total_price
        product_dict['image_url'] = obj.product.gypsumimage_set.get(is_main=True).image.url
        return_dict['products'].append(product_dict)
    # print(return_dict['products'])
    return JsonResponse(return_dict)


def checkout(request):
    title = "У Вашій корзині немає товарів"
    session_key = request.session.session_key
    products_in_basket = ProductInBasket.objects.filter(session_key=session_key, is_active=True, order__isnull=True)
    # print(request.session.session_key)
    form = CheckoutContactForm(request.POST or None)
    if request.POST:
        print(request.POST)
        if form.is_valid():
            print('Form is valid!')
            title = "Дякуємо за замовлення!"
            sub_title = "З вами невдовзі сконтактують"
            data = request.POST
            name = data['name']
            phone = data['phone'] 
            email = data['email']
            comments = data['comments']



            # user, created = User.objects.get_or_create(username=phone, defaults={'first_name':name})
            # order = Order.objects.create(user=user, name=name, phone=phone, status_id=1)
            order = Order.objects.create(name=name, phone=phone, email=email, comments=comments, status_id=1)
            for key, value in data.items():
                if key.startswith('product_nmb_in_basket_id_'):
                    product_in_basket_id = key.split('product_nmb_in_basket_id_')[1]
                    product_in_basket = ProductInBasket.objects.get(id=product_in_basket_id)
                    product_in_basket.nmb = value
                    product_in_basket.order = order
                    product_in_basket.session_key = ''
                    product_in_basket.save(force_update=True)

                    ProductInOrder.objects.create(product=product_in_basket.product, nmb=product_in_basket.nmb,
                                                  price_pre_item=product_in_basket.price_pre_item, total_price=product_in_basket.total_price,
                                                  order=order)

            client_subject = 'Ваше замовлення прийнято' 
            client_message = '%s дякуємо за Ваше замовлення! \nМи сконтактуємо з Вами найблищим часом для підтвердження замовлення.' % name
            
            from_email = production.EMAIL_HOST_USER
            to_client_email = [email]
            send_mail(
                client_subject,
                client_message,
                from_email,
                to_client_email,
                fail_silently=False,
            )

            admin_subject = 'Нове замовлення ліпнини від %s' % name
            admin_massege = 'Клієнт: %s \nТелефон: %s \nEmail: %s \nКоментар: %s' % (name, 
                                                                                        phone,
                                                                                        email,
                                                                                        comments
                                                                                        )
            products_in_order = ProductInOrder.objects.filter(order=order)
            html_message = loader.render_to_string(
                                                    'orders/email_massege.html',
                                                    {
                                                        'products_in_order': products_in_order,
                                                        'order':  order, 
                                                    }
                                                )
            
            to_admin_email = [production.EMAIL_HOST_USER]
            send_mail(
                admin_subject,
                admin_massege,
                from_email,
                to_admin_email,
                fail_silently=False,
                html_message=html_message,
            )

        else:
            print("Form isn't valid!!!")
    return render(request, 'orders/checkout.html', locals())