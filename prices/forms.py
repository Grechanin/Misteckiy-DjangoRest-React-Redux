from django import forms
from .models import OrderModel

class OrderForm(forms.ModelForm):
    class Meta:
        model = OrderModel
        fields = [
        	"order_name",
        	"client_name",
        	"phone_number",
        	"email",
        	"coment"
        ]
        widgets = {
            'content': forms.Textarea(attrs={'cols': 80, 'rows': 20}),
        }

    def clean_phone_no(self):
        data_ph = self.cleaned_data.get('phone_number')
        return data_ph

