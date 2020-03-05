function make_dom() {
    //first div
  var div_container = create_element_with_class("div", "container");
  var div_py_5 = create_element_with_class("div", "py-5");
  var img = create_element_with_class("img", "d-block");
  var h2 = create_element("h2");
  var p = create_element_with_class("p", "lead");
  
  add_class_to_tag("body", "bg-light");
  add_class_to_element(div_py_5, "text-center");
  add_child_to_parent(document.body, div_container);
  add_child_to_parent(div_container, div_py_5);
  add_class_to_element(img, "mx-auto");
  add_class_to_element(img, "mb-4");
  add_child_to_parent(div_py_5, img);
  enchulate_img(img);
  add_text_to_parent(h2, 'Checkout form');
  add_child_to_parent(div_py_5, h2);
  add_text_to_parent(p, 'Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.');
  add_child_to_parent(div_py_5, p);  
  //second div
  var div_row = create_element_with_class("div", "row");  
  var col_md_4 = create_element_with_class("div", "col-md-4");
  var h4 = create_element_with_class("h4", "d-flex");
  var span_muted = create_element_with_class("span", "text-muted");
  var span_badge = create_element_with_class("span", "badge");
  var ul = create_element_with_class("ul", "list-group");
  var li = create_element_with_class("li", "list-group-item");
  var div_h6 = create_element("div");
  var h6 = create_element_with_class("h6", "my-0");
  var small_muted = create_element_with_class("small", "text-muted");
  var span_text = create_element_with_class("span", "text-muted");
  var li_2 = create_element_with_class("li", "list-group-item");
  var div_h6_2 = create_element("div");
  var h6_2 = create_element_with_class("h6", "my-0");
  var small_muted_2 = create_element_with_class("small", "text-muted");
  var span_text_2 = create_element_with_class("span", "text-muted");
  var li_3 = create_element_with_class("li", "list-group-item");
  var div_h6_3 = create_element("div");
  var h6_3 = create_element_with_class("h6", "my-0");
  var small_muted_3 = create_element_with_class("small", "text-muted");
  var span_text_3 = create_element_with_class("span", "text-muted");
  
  add_child_to_parent(div_container, div_row);
  add_child_to_parent(div_row, col_md_4);
  add_class_to_element(col_md_4, 'order-md-2');
  add_class_to_element(col_md_4, 'mb-4');  
  add_child_to_parent(col_md_4, h4);
  add_class_to_element(h4, 'justify-content-between'); 
  add_class_to_element(h4, 'align-items-center');
  add_class_to_element(h4, 'mb-3');  
  add_child_to_parent(h4, span_muted);
  add_text_to_parent(span_muted, 'Your cart');
  add_child_to_parent(h4, span_badge);
  add_class_to_element(span_badge, 'badge-secondary');
  add_class_to_element(span_badge, 'badge-pill');
  add_text_to_parent(span_badge, '3');
  add_child_to_parent(col_md_4, ul);
  add_class_to_element(ul, 'mb-3');
  add_child_to_parent(ul, li);
  add_class_to_element(li, 'd-flex');
  add_class_to_element(li, 'justify-content-between');
  add_class_to_element(li, 'lh-condensed');
  add_child_to_parent(li, div_h6);
  add_child_to_parent(div_h6, h6);
  add_text_to_parent(h6, 'Product name');
  add_child_to_parent(div_h6, small_muted);
  add_text_to_parent(small_muted, 'Brief description');
  add_child_to_parent(li, span_text);
  add_text_to_parent(span_text, '$12');
  add_child_to_parent(ul, li_2);
  add_class_to_element(li_2, 'd-flex');
  add_class_to_element(li_2, 'justify-content-between');
  add_class_to_element(li_2, 'lh-condensed');
  add_child_to_parent(li_2, div_h6_2);
  add_child_to_parent(div_h6_2, h6_2);
  add_text_to_parent(h6_2, 'Second product');
  add_child_to_parent(div_h6_2, small_muted_2);
  add_text_to_parent(small_muted_2, 'Brief description');
  add_child_to_parent(li_2, span_text_2);
  add_text_to_parent(span_text_2, '$8');
  add_child_to_parent(ul, li_3);
  add_class_to_element(li_3, 'd-flex');
  add_class_to_element(li_3, 'justify-content-between');
  add_class_to_element(li_3, 'lh-condensed');
  add_child_to_parent(li_3, div_h6_3);
  add_child_to_parent(div_h6_3, h6_3);
  add_text_to_parent(h6_3, 'Third item');
  add_child_to_parent(div_h6_3, small_muted_3);
  add_text_to_parent(small_muted_3, 'Brief description');
  add_child_to_parent(li_3, span_text_3);
  add_text_to_parent(span_text_3, '$5');
  var li_4 = create_element_with_class("li", "list-group-item");
  var div_h6_4 = create_element("div");
  var h6_4 = create_element_with_class("h6", "my-0");
  var small = create_element("small");
  var span_4 = create_element_with_class("span", "text-success");
  add_child_to_parent(ul, li_4);
  add_class_to_element(li_4, 'd-flex');
  add_class_to_element(li_4, 'justify-content-between');
  add_class_to_element(li_4, 'bg-light');
  add_child_to_parent(li_4, div_h6_4);
  add_class_to_element(div_h6_4, "text-success");
  add_child_to_parent(div_h6_4, h6_4);
  add_text_to_parent(h6_4, 'Promo code');
  add_child_to_parent(div_h6_4, small);
  add_text_to_parent(small, 'EXAMPLECODE');
  add_child_to_parent(li_4, span_4);
  add_text_to_parent(span_4, '-$5');
  var li_5 = create_element_with_class("li", "list-group-item");
  var span_5 = create_element("span");
  var strong = create_element("strong");
  add_child_to_parent(ul, li_5);
  add_class_to_element(li_5, 'd-flex');
  add_class_to_element(li_5, 'justify-content-between');
  add_child_to_parent(li_5, span_5);
  add_text_to_parent(span_5, 'Total (USD)');
  add_child_to_parent(li_5, strong);
  add_text_to_parent(strong, '$20');
  var form_card = create_element_with_class("form", "card" );
  var div_input = create_element_with_class("div", "input-group"); 
  var input = create_element_with_class("input", "form-control");
  var div_group = create_element_with_class("div", "input-group-append");
  var button = create_element_with_class("button", "btn");
  add_child_to_parent(col_md_4, form_card);
  add_class_to_element(form_card, 'p-2');
  add_child_to_parent(form_card, div_input);  
  add_child_to_parent(div_input, input);
  add_attribute_to_parent(input, 'type', 'text');
  add_attribute_to_parent(input, 'placeholder', 'Promo code');
  add_child_to_parent(div_input, div_group);  
  add_child_to_parent(div_group, button);
  add_class_to_element(button, 'btn-secondary');
  add_attribute_to_parent(button, 'type', 'submit');
  add_text_to_parent(button, 'Redeem');
//second.2 div
    var col_md_8 = create_element_with_class("div", "col-md-8");
    var h4_2 = create_element_with_class("h4", "mb-3");
    var form_validation = create_element_with_class("form","needs-validation" );
    var divrow = create_element_with_class("div", "row" );
    var col_md_6 = create_element_with_class("div","col-md-6");
    var label = create_element("label"); 
    var input_form = create_element_with_class("input", "form-control");
    var div_invalid = create_element_with_class("div", "invalid-feedback");
    var div_mb_3 = create_element_with_class("div", "col-md-6");
    var label_last = create_element("label");
    var input_last = create_element_with_class("input", "form-control");
    var div_invalid_2 = create_element_with_class("div", "invalid-feedback");
    add_child_to_parent(div_row, col_md_8);
    add_class_to_element(col_md_8, 'order-md-1');  
    add_child_to_parent(col_md_8, h4_2);
    add_text_to_parent(h4_2, 'Billing address');  
    add_child_to_parent(col_md_8, form_validation);
    add_attribute_to_parent(form_validation, 'novalidate', '');
    add_child_to_parent(form_validation, divrow);
    add_child_to_parent(divrow, col_md_6);
    add_class_to_element(col_md_6, 'mb-3');
    add_child_to_parent(col_md_6, label);
    add_attribute_to_parent(label, 'for', 'firstName');
    add_text_to_parent(label, 'First name');
    add_child_to_parent(col_md_6, input_form);
    add_attribute_to_parent(input_form, 'type', 'text');
    add_attribute_to_parent(input_form, 'id', 'firstName');
    add_attribute_to_parent(input_form, 'placeholder', '');
    add_attribute_to_parent(input_form, 'value', '');
    add_attribute_to_parent(input_form, 'required', '');
    add_child_to_parent(col_md_6, div_invalid);
    add_text_to_parent(div_invalid, 'Valid first name is required.');
    add_child_to_parent(divrow, div_mb_3);
    add_class_to_element(div_mb_3, 'mb-3');
    add_child_to_parent(div_mb_3, label_last);
    add_attribute_to_parent(label_last, 'for', 'lastName');
    add_text_to_parent(label_last, 'Last name');
    add_child_to_parent(div_mb_3, input_last);
    add_attribute_to_parent(input_last, 'type', 'text');
    add_attribute_to_parent(input_last, 'id', 'lastName');
    add_attribute_to_parent(input_last, 'placeholder', '');
    add_attribute_to_parent(input_last, 'value', '');
    add_attribute_to_parent(input_last, 'required', '');
    add_child_to_parent(div_mb_3, div_invalid_2);
    add_text_to_parent(div_invalid_2, 'Valid last name is required.');
    //second.3 username div
    var div_username = create_element_with_class("div", "mb-3");
    var lab_user = create_element("label");
    var input_group = create_element_with_class("div", "input-group");
    var prepend = create_element_with_class("div", "input-group-prepend");
    var span_group = create_element_with_class("span", "input-group-text");
    var input_user = create_element_with_class("input", "form-control");
    var inv_feed = create_element_with_class("div", "invalid-feedback");
    add_child_to_parent(form_validation, div_username);
    add_child_to_parent(div_username, lab_user);
    add_attribute_to_parent(lab_user, 'for', 'username');
    add_text_to_parent(lab_user, 'Username');
    add_child_to_parent(div_username, input_group);
    add_child_to_parent(input_group, prepend);
    add_child_to_parent(prepend, span_group);
    add_text_to_parent(span_group, '@');
    add_child_to_parent(input_group, input_user);
    add_attribute_to_parent(input_user, 'id', 'username');
    add_attribute_to_parent(input_user, 'placeholder', 'Username');
    add_attribute_to_parent(input_user, 'required', '');
    add_child_to_parent(input_group, inv_feed);
    add_attribute_to_parent(inv_feed, 'style', 'width: 100%;');
    add_text_to_parent(inv_feed, 'Your username is required.');
    //second.4 email div
    var div_email = create_element_with_class("div", "mb-3");
    var lab_mail = create_element("label");
    var span_mail = create_element_with_class("span", "text-muted");
    var input_mail = create_element_with_class("input", "form-control");
    var inv_feed_mail = create_element_with_class("div", "invalid-feedback");
    add_child_to_parent(form_validation, div_email);
    add_child_to_parent(div_email, lab_mail);
    add_attribute_to_parent(lab_mail, 'for', 'email');
    add_text_to_parent(lab_mail, 'Email');
    add_child_to_parent(lab_mail, span_mail);
    add_text_to_parent(span_mail, '(Optional)');
    add_child_to_parent(div_email, input_mail);
    add_attribute_to_parent(input_mail, 'type', 'email');
    add_attribute_to_parent(input_mail, 'id', 'email');
    add_attribute_to_parent(input_mail, 'placeholder', 'you@example.com');
    add_child_to_parent(div_email, inv_feed_mail);
    add_text_to_parent(inv_feed, 'Please enter a valid email address for shipping updates.');
    //second.5 address div
    var div_address = create_element_with_class("div", "mb-3");
    var lab_address = create_element("label");
    var input_address = create_element_with_class("input", "form-control");
    var inv_feed_address = create_element_with_class("div", "invalid-feedback");
    add_child_to_parent(form_validation, div_address);
    add_child_to_parent(div_address, lab_address);
    add_attribute_to_parent(lab_address, 'for', 'address');
    add_text_to_parent(lab_address, 'Address');
    add_child_to_parent(div_address, input_address);
    add_attribute_to_parent(input_address, 'type', 'text');
    add_attribute_to_parent(input_address, 'id', 'address');
    add_attribute_to_parent(input_address, 'placeholder', '1234 Main St');
    add_attribute_to_parent(input_address, 'required', '');
    add_child_to_parent(div_address, inv_feed_address);
    add_text_to_parent(inv_feed_address, 'Please enter your shipping address.');
    //second.6 optional address div
    var div_address_2 = create_element_with_class("div", "mb-3");
    var lab_address_2 = create_element("label");
    var span_address_2 = create_element_with_class("span", "text-muted");
    var input_address_2 = create_element_with_class("input", "form-control");
    add_child_to_parent(form_validation, div_address_2);
    add_child_to_parent(div_address_2, lab_address_2);
    add_attribute_to_parent(lab_address_2, 'for', 'address2');
    add_text_to_parent(lab_address_2, 'Address 2');
    add_child_to_parent(lab_address_2, span_address_2);
    add_text_to_parent(span_address_2, '(Optional)');
    add_child_to_parent(div_address_2, input_address_2);
    add_attribute_to_parent(input_address_2, 'type', 'text');
    add_attribute_to_parent(input_address_2, 'id', 'address2');
    add_attribute_to_parent(input_address_2, 'placeholder', 'Apartment or suite');
   //second.7 country div
    var row_country = create_element_with_class("div", "row");
    var col_md_5_country = create_element_with_class("div", "col-md-5");
    var label_country = create_element("label");
    var select = create_element_with_class("select", "custom-select");
    var option = create_element("option");
    var option_usa = create_element("option");
    var inv_feed_country = create_element_with_class("div", "invalid-feedback");

    add_child_to_parent(form_validation, row_country);
    add_child_to_parent(row_country, col_md_5_country);
    add_class_to_element(col_md_5_country, 'mb-3');
    add_child_to_parent(col_md_5_country, label_country);
    add_attribute_to_parent(label_country, 'for', 'country');
    add_text_to_parent(label_country, 'Country');
    add_child_to_parent(col_md_5_country, select);
    add_class_to_element(select, 'd-block');
    add_class_to_element(select, 'w-100');
    add_attribute_to_parent(select, 'id', 'country');
    add_attribute_to_parent(select, 'required', '');
    add_child_to_parent(select, option);
    add_attribute_to_parent(option, 'value', '');
    add_text_to_parent(option, 'Choose...');
    add_child_to_parent(select, option_usa);
    add_text_to_parent(option_usa, 'United States');
    add_child_to_parent(col_md_5_country, inv_feed_country);
    add_text_to_parent(inv_feed_country, 'Please select a valid country.');
    
    var col_md_4_state = create_element_with_class("div", "col-md-4");
    var label_state = create_element("label");
    var select_state = create_element_with_class("select", "custom-select");
    var option_state = create_element("option");
    var option_califoria = create_element("option");
    var inv_feed_state = create_element_with_class("div", "invalid-feedback");
    add_child_to_parent(row_country, col_md_4_state);
    add_class_to_element(col_md_4_state, 'mb-3');
    add_child_to_parent(col_md_4_state, label_state);
    add_attribute_to_parent(label_state, 'for', 'state');
    add_text_to_parent(label_state, 'State');
    add_child_to_parent(col_md_4_state, select_state);
    add_class_to_element(select_state, 'd-block' );
    add_class_to_element(select_state, 'w-100');
    add_attribute_to_parent(select_state, 'id', 'state');
    add_attribute_to_parent(select_state, 'required', '');
    add_child_to_parent(select_state, option_state);
    add_attribute_to_parent(option_state, 'value', '');
    add_text_to_parent(option_state, 'Choose...');
    add_child_to_parent(select_state, option_califoria);
    add_text_to_parent(option_califoria, 'California');
    add_child_to_parent(col_md_4_state, inv_feed_state);
    add_text_to_parent(inv_feed_state, 'Please provide a valid state.');
    //zip div
    var col_md_3_zip = create_element_with_class("div", "col-md-3");
    var label_zip = create_element("label");
    var input_zip = create_element_with_class("input", "form-control");
    var inv_feed_zip = create_element_with_class("div", "invalid-feedback");
    add_child_to_parent(row_country, col_md_3_zip);
    add_class_to_element(col_md_3_zip, "mb-3");
    add_child_to_parent(col_md_3_zip, label_zip);
    add_attribute_to_parent(label_zip, 'for', 'zip');
    add_text_to_parent(label_zip, 'Zip');
    add_child_to_parent(col_md_3_zip, input_zip);
    add_attribute_to_parent(input_zip, 'type', 'text');
    add_attribute_to_parent(input_zip, 'id', 'zip');
    add_attribute_to_parent(input_zip, 'placeholder', '');
    add_attribute_to_parent(input_zip, 'required', '');
    add_child_to_parent(col_md_3_zip, inv_feed_zip);
    add_text_to_parent(inv_feed_zip, 'Zip code required.');

    //
    var hr = create_element_with_class("hr", "mb-4");
    var div_custom = create_element_with_class("div", "custom-control");
    var input_custom = create_element_with_class("input", "custom-control-input" );
    var label_custom = create_element_with_class("label", "custom-control-label");
    add_child_to_parent(form_validation, hr);
    add_child_to_parent(form_validation, div_custom);
    add_class_to_element(div_custom,'custom-checkbox');
    add_child_to_parent(div_custom, input_custom);
    add_attribute_to_parent(input_custom, 'type', 'checkbox');
    add_attribute_to_parent(input_custom, 'id', 'same-address');
    add_child_to_parent(div_custom, label_custom);
    add_attribute_to_parent(label_custom, 'for', 'same-address');
    add_text_to_parent(label_custom, 'Shipping address is the same as my billing address');

    var div_custom_2 = create_element_with_class("div", "custom-control");
    var input_custom_2 = create_element_with_class("input", "custom-control-input" );
    var label_custom_2 = create_element_with_class("label", "custom-control-label");
    add_child_to_parent(form_validation, div_custom_2);
    add_class_to_element(div_custom_2,'custom-checkbox');
    add_child_to_parent(div_custom_2, input_custom_2);
    add_attribute_to_parent(input_custom_2, 'type', 'checkbox');
    add_attribute_to_parent(input_custom_2, 'id', 'save-info');
    add_child_to_parent(div_custom_2, label_custom_2);
    add_attribute_to_parent(label_custom_2, 'for', 'save-info');
    add_text_to_parent(label_custom_2, 'Save this information for next time');

    //Payment div
    var h4_pay = create_element_with_class("h4", "mb-3");
    var div_pay = create_element_with_class("div", "d-block" );
    var div_control_pay = create_element_with_class("div", "custom-control");
    var input_credit = create_element_with_class("input","custom-control-input" );
    var label_credit = create_element_with_class("label", "custom-control-label");
    add_child_to_parent(form_validation, h4_pay);
    add_text_to_parent(h4_pay, 'Payment');
    add_child_to_parent(form_validation, div_pay);
    add_class_to_element(div_pay, 'my-3');
    add_child_to_parent(div_pay, div_control_pay);
    add_class_to_element(div_control_pay, "custom-radio");
    add_child_to_parent(div_control_pay, input_credit);
    add_attribute_to_parent(input_credit, 'id', 'credit');
    add_attribute_to_parent(input_credit, 'name', 'paymentMethod');
    add_attribute_to_parent(input_credit, 'type', 'radio');
    add_attribute_to_parent(input_credit, 'checked', '');
    add_attribute_to_parent(input_credit, 'required', '');
    add_child_to_parent(div_control_pay, label_credit);
    add_attribute_to_parent(label_credit, 'for', 'credit');
    add_text_to_parent(label_credit, 'Credit card');
            //Debit
    var div_control_pay_2 = create_element_with_class("div", "custom-control");
    var input_credit_2 = create_element_with_class("input","custom-control-input" );
    var label_credit_2 = create_element_with_class("label", "custom-control-label");
    add_child_to_parent(div_pay, div_control_pay_2);
    add_class_to_element(div_control_pay_2, "custom-radio");
    add_child_to_parent(div_control_pay_2, input_credit_2);
    add_attribute_to_parent(input_credit_2, 'id', 'debit');
    add_attribute_to_parent(input_credit_2, 'name', 'paymentMethod');
    add_attribute_to_parent(input_credit_2, 'type', 'radio');
    add_attribute_to_parent(input_credit_2, 'required', '');
    add_child_to_parent(div_control_pay_2, label_credit_2);
    add_attribute_to_parent(label_credit_2, 'for', 'debit');
    add_text_to_parent(label_credit_2, 'Debit card');
            //Paypal
    var div_control_pay_3 = create_element_with_class("div", "custom-control");
    var input_credit_3 = create_element_with_class("input","custom-control-input" );
    var label_credit_3 = create_element_with_class("label", "custom-control-label");
    add_child_to_parent(div_pay, div_control_pay_3);
    add_class_to_element(div_control_pay_3, "custom-radio");
    add_child_to_parent(div_control_pay_3, input_credit_3);
    add_attribute_to_parent(input_credit_3, 'id', 'paypal');
    add_attribute_to_parent(input_credit_3, 'name', 'paymentMethod');
    add_attribute_to_parent(input_credit_3, 'type', 'radio');
    add_attribute_to_parent(input_credit_3, 'required', '');
    add_child_to_parent(div_control_pay_3, label_credit_3);
    add_attribute_to_parent(label_credit_3, 'for', 'paypal');
    add_text_to_parent(label_credit_3, 'Paypal');

    //Name on card div
    var div_name = create_element_with_class("div", "row");
    var col_md_6_name = create_element_with_class("div", "col-md-6");
    var label_name = create_element("label");
    var input_name = create_element_with_class("input", "form-control");
    var small_name = create_element_with_class("small", "text-muted");
    var inv_feed_name = create_element_with_class("div", "invalid-feedback");
    add_child_to_parent(form_validation, div_name);
    add_child_to_parent(div_name, col_md_6_name);
    add_class_to_element(col_md_6_name, 'mb-3');
    add_child_to_parent(col_md_6_name, label_name);
    add_attribute_to_parent(label_name, 'for', 'cc-name');
    add_text_to_parent(label_name, 'Name on card');
    add_child_to_parent(col_md_6_name, input_name);
    add_attribute_to_parent(input_name, 'type', 'text');
    add_attribute_to_parent(input_name, 'id', 'cc-name');
    add_attribute_to_parent(input_name, 'placeholder', '');
    add_attribute_to_parent(input_name, 'required', '');
    add_child_to_parent(col_md_6_name, small_name);
    add_text_to_parent(small_name, 'Full name as displayed on card');
    add_child_to_parent(col_md_6_name, inv_feed_name);
    add_text_to_parent(inv_feed_name, 'Name on card is required');

    var col_md_6_name_2 = create_element_with_class("div", "col-md-6");
    var label_name_2 = create_element("label");
    var input_name_2 = create_element_with_class("input", "form-control");
    var inv_feed_name_2 = create_element_with_class("div", "invalid-feedback");
    add_child_to_parent(div_name, col_md_6_name_2);
    add_class_to_element(col_md_6_name_2, 'mb-3');
    add_child_to_parent(col_md_6_name_2, label_name_2);
    add_attribute_to_parent(label_name_2, 'for', 'cc-number');
    add_text_to_parent(label_name_2, 'Credit card number');
    add_child_to_parent(col_md_6_name_2, input_name_2);
    add_attribute_to_parent(input_name_2, 'type', 'text');
    add_attribute_to_parent(input_name_2, 'id', 'cc-number');
    add_attribute_to_parent(input_name_2, 'placeholder', '');
    add_attribute_to_parent(input_name_2, 'required', '');
    add_child_to_parent(col_md_6_name_2, inv_feed_name_2);
    add_text_to_parent(inv_feed_name_2, 'Credit card number is required');

    //Expiration
    var div_exp = create_element_with_class("div", "row");
    var col_md_3_exp = create_element_with_class("div", "col-md-3");
    var label_exp = create_element("label");
    var input_exp = create_element_with_class("input", "form-control");
    var inv_feed_exp = create_element_with_class("div", "invalid-feedback");
    add_child_to_parent(form_validation, div_exp);
    add_child_to_parent(div_exp, col_md_3_exp);
    add_class_to_element(col_md_3_exp, 'mb-3');
    add_child_to_parent(col_md_3_exp, label_exp);
    add_attribute_to_parent(label_exp, 'for', 'cc-expiration');
    add_text_to_parent(label_exp, 'Expiration');
    add_child_to_parent(col_md_3_exp, input_exp);
    add_attribute_to_parent(input_exp, 'type', 'text');
    add_attribute_to_parent(input_exp, 'id', 'cc-expiration');
    add_attribute_to_parent(input_exp, 'placeholder', '');
    add_attribute_to_parent(input_exp, 'required', '');
    add_child_to_parent(col_md_3_exp, inv_feed_exp);
    add_text_to_parent(inv_feed_exp, 'Expiration date required');

    var col_md_3_exp_2 = create_element_with_class("div", "col-md-3");
    var label_exp_2 = create_element("label");
    var input_exp_2 = create_element_with_class("input", "form-control");
    var inv_feed_exp_2 = create_element_with_class("div", "invalid-feedback");
    add_child_to_parent(div_exp, col_md_3_exp_2);
    add_class_to_element(col_md_3_exp_2, 'mb-3');
    add_child_to_parent(col_md_3_exp_2, label_exp_2);
    add_attribute_to_parent(label_exp_2, 'for', 'cc-cvv');
    add_text_to_parent(label_exp_2, 'CVV');
    add_child_to_parent(col_md_3_exp_2, input_exp_2);
    add_attribute_to_parent(input_exp_2, 'type', 'text');
    add_attribute_to_parent(input_exp_2, 'id', 'cc-cvv');
    add_attribute_to_parent(input_exp_2, 'placeholder', '');
    add_attribute_to_parent(input_exp_2, 'required', '');
    add_child_to_parent(col_md_3_exp_2, inv_feed_exp_2);
    add_text_to_parent(inv_feed_exp_2, 'Security code required');
    //button
    var hr_button = create_element_with_class("hr", "mb-4");
    var button_checkout = create_element_with_class("button", "btn");
    add_child_to_parent(form_validation, hr_button);
    add_child_to_parent(form_validation, button_checkout);
    add_class_to_element(button_checkout, "btn-primary");
    add_class_to_element(button_checkout, "btn-lg");
    add_class_to_element(button_checkout, "btn-block");
    add_attribute_to_parent(button_checkout, 'type', 'submit');
    add_text_to_parent(button_checkout, 'Continue to checkout');
    //footer
    var footer = create_element_with_class("footer", "my-5");
    var p_footer = create_element_with_class("p", "mb-1");
    add_child_to_parent(div_container, footer);
    add_class_to_element(footer, "pt-5");
    add_class_to_element(footer, "text-muted");
    add_class_to_element(footer, "text-center");
    add_class_to_element(footer, "text-small");
    add_child_to_parent(footer, p_footer);
    add_text_to_parent(p_footer, "© 2017-2019 Company Name");
    //footer ul
    var ul_footer = create_element_with_class("ul", "list-inline");
    var li_privacy = create_element_with_class("li", "list-inline-item");
    var a_privacy = create_element("a");
    var li_terms = create_element_with_class("li", "list-inline-item");
    var a_terms = create_element("a");
    var li_support = create_element_with_class("li", "list-inline-item");
    var a_support = create_element("a");
    add_child_to_parent(footer, ul_footer);
    add_child_to_parent(ul_footer, li_privacy);
    add_child_to_parent(li_privacy, a_privacy);
    add_attribute_to_parent(a_privacy, 'href', 'https://getbootstrap.com/docs/4.3/examples/checkout/#');
    add_text_to_parent(a_privacy, 'Privacy');
    add_child_to_parent(ul_footer, li_terms);
    add_child_to_parent(li_terms, a_terms);
    add_attribute_to_parent(a_terms, 'href', 'https://getbootstrap.com/docs/4.3/examples/checkout/#');
    add_text_to_parent(a_terms, 'Terms');
    add_child_to_parent(ul_footer, li_support);
    add_child_to_parent(li_support, a_support);
    add_attribute_to_parent(a_support, 'href', 'https://getbootstrap.com/docs/4.3/examples/checkout/#');
    add_text_to_parent(a_support, 'Support');

}

function add_class_to_tag(tag, css_class) {
  var selection = document.getElementsByTagName(tag);
  if (selection.length > 1) {
    //add class to every element
    for (i = 0; i < selection.length; i++) {
      add_class_to_element(element, css_class);
    }
  } else {
    // one element only
    add_class_to_element(selection[0], css_class);
  }
}

function add_class_to_element(element, css_class) {
  element.classList.add(css_class);
}

function create_element_with_class(element_type, css_class) {
  var element = document.createElement(element_type);
  add_class_to_element(element, css_class);
  return element;
}

function add_child_to_parent(parent, child) {
  parent.appendChild(child);
}

function enchulate_img(img) {
  img.src = "./stylesheet/img/bootstrap-solid.svg";
  img.width = "72";
  img.height = "72";
}

function create_element(element_type) {
    var element = document.createElement(element_type);
    return element;
}

function add_text_to_parent(parent, text){
    var text = document.createTextNode(text);
    parent.appendChild(text)
}

function add_attribute_to_parent(element, attribute, value){
    //var element = document.createElement(attribute);
    element.setAttribute(attribute, value);
}