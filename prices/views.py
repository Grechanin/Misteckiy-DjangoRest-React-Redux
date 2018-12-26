from arthouse.settings import production
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.generic import FormView
from django.shortcuts import render, get_object_or_404
from .forms import OrderForm
from .models import Prices, PriceCategory, ProiceCategoryDescription, OrderModel


def prices(request):
    prices = Prices.objects.filter(is_active=True)[0]

    tab_title = prices.tab_title
    title = prices.title
    short_description = prices.short_description
    description = prices.description

    price_categorys = PriceCategory.objects.filter(is_active=True)
    price_category_description = ProiceCategoryDescription.objects.filter(is_active=True)
    context = {
            'tab_title': tab_title,
            'title': title,
            'description': description,
            'short_description': short_description,
            'price_categorys':price_categorys,
            'price_category_description':price_category_description,
            }

    return render(request, 'prices/prices.html', context)


class OrderFormView(FormView):
    form_class = OrderForm
    template_name  = 'prices/order_form.html'
    success_url = '/prices/'


    def form_invalid(self, form):
        response = super(OrderFormView, self).form_invalid(form)
        if self.request.is_ajax():
            
            return JsonResponse(form.errors, status=400)
        else:
            return response

    def form_valid(self, form):
        response = super(OrderFormView, self).form_valid(form)
        form.save(commit=False)
        order_name = form.cleaned_data.get('order_name')
        client_name = form.cleaned_data.get('client_name')
        client_email = form.cleaned_data.get('email')
        client_phone = form.clean_phone_no()
        client_coment = form.cleaned_data.get('coment')

        client_subject = 'Ваше замовлення %s прийнято' % order_name
        client_message = '%s дякуємо за Ваше замовлення! \nМи сконтактуємо з Вами найблищим часом для підтвердження замовлення.' % client_name
        from_email = production.EMAIL_HOST_USER
        to_client_email = [client_email]
        send_mail(
            client_subject,
            client_message,
            from_email,
            to_client_email,
            fail_silently=False,
        )

        admin_subject = 'Нове замовлення проекту від %s' % order_name
        admin_massege = 'Клієнт: %s \nТелефон: %s \nEmail: %s \nКоментар: %s' % (client_name, 
                                                                                    client_phone,
                                                                                    client_email,
                                                                                    client_coment
                                                                                    )
        to_admin_email = [production.EMAIL_HOST_USER]
        send_mail(
            admin_subject,
            admin_massege,
            from_email,
            to_admin_email,
            fail_silently=False,
        )
        form.save()
        print(form.clean_phone_no())
        
        if self.request.is_ajax():
            # print(form.cleaned_data)
            data = {
                'message': "Successfully submitted form data."
            }
            return JsonResponse(data)
        else:
            return response