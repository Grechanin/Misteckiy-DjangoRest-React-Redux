from prices.models import Prices, ProiceCategoryDescription, PriceCategory
from .serializers import (  DesignPricesDetailSerializer, 
                            DesignPricesListSerializer, 
                            DesignPricesCategoriesSerializer, 
                            OrderFormSerializer
                            )
from rest_framework import generics
from arthouse.settings import production
from django.core.mail import send_mail


class DesignPricesListAPI(generics.ListAPIView):
    queryset = ProiceCategoryDescription.objects.filter(is_active=True)
    serializer_class = DesignPricesListSerializer
    # permission_classes = (IsAdminUser,)

class DesignPricesCategoriesAPI(generics.ListAPIView):
    queryset = PriceCategory.objects.filter(is_active=True)
    serializer_class = DesignPricesCategoriesSerializer
    # permission_classes = (IsAdminUser,)


class DesignPricesDetailAPI(generics.RetrieveAPIView):
    queryset = Prices.objects.filter(is_active=True)
    serializer_class = DesignPricesDetailSerializer
    # permission_classes = (IsAdminUser,)
    def get_object(self):
    	queryset = self.get_queryset()
    	obj = queryset[0]
    	return obj


class OrderFormAPI(generics.CreateAPIView):
    # queryset = OrderModel.objects.filter(is_active=True)
    serializer_class = OrderFormSerializer
    # permission_classes = (IsAdminUser,)

    def perform_create(self, serializer):
        serializer.save()

        order_name = self.request.data.get('order_name')
        client_name = self.request.data.get('client_name')
        client_email = self.request.data.get('email')
        client_phone = self.request.data.get('client_phone')
        client_coment = self.request.data.get('coment')

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