from django import forms
from .models import Order
# from phonenumber_field.modelfields import PhoneNumberField


# class CheckoutContactForm(forms.Form):
#     client_name = forms.CharField(required=True, max_length=100)
#     phone = PhoneNumberField()
#     email = forms.EmailField(required=False)
#     comments = forms.CharField(required=False)


class CheckoutContactForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = [
        	"name",
        	"phone",
        	"email",
        	"comments"
        ]


    def clean_phone_no(self):
        data_ph = self.cleaned_data.get('phone')
        return data_ph

