export interface PaymentFormData {
  amount: string;
  failure_url: string;
  product_code: string;
  product_delivery_charge: string;
  product_service_charge: string;
  signature: string;
  signed_field_names: string;
  success_url: string;
  tax_amount: string;
  transaction_uuid: string;
}
