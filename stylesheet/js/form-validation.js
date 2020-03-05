function make_dom() {
    //first div
  var div_container = create_element_with_class("div", "container");
  var div_py_5 = create_element_with_class("div", "py-5");
  var img = create_element_with_class("img", "d-block");
  var h2 = create_element("h2");
  var p = create_element_with_class("p", "lead")
  
  add_class_to_tag("body", "bg-light");
  add_class_to_element(div_py_5, "text-center");
  add_child_to_parent(document.body, div_container);
  add_child_to_parent(div_container, div_py_5);
  add_class_to_element(img, "mx-auto");
  add_class_to_element(img, "mb-4");
  add_child_to_parent(div_py_5, img);
  enchulate_img(img);
  add_text_to_parent(h2, 'Checkout form')
  add_child_to_parent(div_py_5, h2);
  add_text_to_parent(p, 'Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.')
  add_child_to_parent(div_py_5, p)  
  //second div
  var div_row = create_element_with_class("div", "row")  
  var col_md_4 = create_element_with_class("div", "col-md-4")
  var h4 = create_element_with_class("h4", "d-flex")
  var span_muted = create_element_with_class("span", "text-muted")
  var span_badge = create_element_with_class("span", "badge")
  var ul = create_element_with_class("ul", "list-group")
  var li = create_element_with_class("li", "list-group-item")
  var div_h6 = create_element("div")
  var h6 = create_element_with_class("h6", "my-0")
  var small_muted = create_element_with_class("small", "text-muted")
  var span_text = create_element_with_class("span", "text-muted")
  var li_2 = create_element_with_class("li", "list-group-item")
  var div_h6_2 = create_element("div")
  var h6_2 = create_element_with_class("h6", "my-0")
  var small_muted_2 = create_element_with_class("small", "text-muted")
  var span_text_2 = create_element_with_class("span", "text-muted")
  var li_3 = create_element_with_class("li", "list-group-item")
  var div_h6_3 = create_element("div")
  var h6_3 = create_element_with_class("h6", "my-0")
  var small_muted_3 = create_element_with_class("small", "text-muted")
  var span_text_3 = create_element_with_class("span", "text-muted")
  
  add_child_to_parent(div_container, div_row)
  add_child_to_parent(div_row, col_md_4)
  add_class_to_element(col_md_4, 'order-md-2')
  add_class_to_element(col_md_4, 'mb-4')  
  add_child_to_parent(col_md_4, h4)
  add_class_to_element(h4, 'justify-content-between') 
  add_class_to_element(h4, 'align-items-center')
  add_class_to_element(h4, 'mb-3')  
  add_child_to_parent(h4, span_muted)
  add_text_to_parent(span_muted, 'Your cart')
  add_child_to_parent(h4, span_badge)
  add_class_to_element(span_badge, 'badge-secondary')
  add_class_to_element(span_badge, 'badge-pill')
  add_text_to_parent(span_badge, '3')
  add_child_to_parent(col_md_4, ul)
  add_class_to_element(ul, 'mb-3')
  add_child_to_parent(ul, li)
  add_class_to_element(li, 'd-flex')
  add_class_to_element(li, 'justify-content-between')
  add_class_to_element(li, 'lh-condensed')
  add_child_to_parent(li, div_h6)
  add_child_to_parent(div_h6, h6)
  add_text_to_parent(h6, 'Product name')
  add_child_to_parent(div_h6, small_muted)
  add_text_to_parent(small_muted, 'Brief description')
  add_child_to_parent(li, span_text)
  add_text_to_parent(span_text, '$12')
  add_child_to_parent(ul, li_2)
  add_class_to_element(li_2, 'd-flex')
  add_class_to_element(li_2, 'justify-content-between')
  add_class_to_element(li_2, 'lh-condensed')
  add_child_to_parent(li_2, div_h6_2)
  add_child_to_parent(div_h6_2, h6_2)
  add_text_to_parent(h6_2, 'Second product')
  add_child_to_parent(div_h6_2, small_muted_2)
  add_text_to_parent(small_muted_2, 'Brief description')
  add_child_to_parent(li_2, span_text_2)
  add_text_to_parent(span_text_2, '$8')
  add_child_to_parent(ul, li_3)
  add_class_to_element(li_3, 'd-flex')
  add_class_to_element(li_3, 'justify-content-between')
  add_class_to_element(li_3, 'lh-condensed')
  add_child_to_parent(li_3, div_h6_3)
  add_child_to_parent(div_h6_3, h6_3)
  add_text_to_parent(h6_3, 'Third item')
  add_child_to_parent(div_h6_3, small_muted_3)
  add_text_to_parent(small_muted_3, 'Brief description')
  add_child_to_parent(li_3, span_text_3)
  add_text_to_parent(span_text_3, '$5')
  var li_4 = create_element_with_class("li", "list-group-item")
  var div_h6_4 = create_element("div")
  var h6_4 = create_element_with_class("h6", "my-0")
  var small = create_element("small")
  var span_4 = create_element_with_class("span", "text-success")
  add_child_to_parent(ul, li_4)
  add_class_to_element(li_4, 'd-flex')
  add_class_to_element(li_4, 'justify-content-between')
  add_class_to_element(li_4, 'bg-light')
  add_child_to_parent(li_4, div_h6_4)
  add_class_to_element(div_h6_4, "text-success")
  add_child_to_parent(div_h6_4, h6_4)
  add_text_to_parent(h6_4, 'Promo code')
  add_child_to_parent(div_h6_4, small)
  add_text_to_parent(small, 'EXAMPLECODE')
  add_child_to_parent(li_4, span_4)
  add_text_to_parent(span_4, '-$5')
  var li_5 = create_element_with_class("li", "list-group-item")
  var span_5 = create_element("span")
  var strong = create_element("strong")
  add_child_to_parent(ul, li_5)
  add_class_to_element(li_5, 'd-flex')
  add_class_to_element(li_5, 'justify-content-between')
  add_child_to_parent(li_5, span_5)
  add_text_to_parent(span_5, 'Total (USD)')
  add_child_to_parent(li_5, strong)
  add_text_to_parent(strong, '$20')
  var form_card = create_element_with_class("form", "card" )
  var div_input = create_element_with_class("div", "input-group") 
  var input = create_element_with_class("input", "form-control")
  var div_group = create_element_with_class("div", "input-group-append")
  var button = create_element_with_class("button", "btn")
  add_child_to_parent(col_md_4, form_card)
  add_class_to_element(form_card, 'p-2')
  add_child_to_parent(form_card, div_input)  
  add_child_to_parent(div_input, input)
  add_attribute_to_parent(input, 'type', 'text')
  add_attribute_to_parent(input, 'placeholder', 'Promo code')
  add_child_to_parent(div_input, div_group)  
  add_child_to_parent(div_group, button)
  add_class_to_element(button, 'btn-secondary')
  add_attribute_to_parent(button, 'type', 'submit')
  add_text_to_parent(button, 'Redeem')
//second.2 div
    var col_md_8 = create_element_with_class("div", "col-md-8")
    var h4_2 = create_element_with_class("h4", "mb-3")
    var form_validation = create_element_with_class("form","needs-validation" )
    var divrow = create_element_with_class("div", "row" )
    var col_md_6 = create_element_with_class("div","col-md-6")
    var label = create_element("label") 
    var input_form = create_element_with_class("input", "form-control")
    var div_invalid = create_element_with_class("div", "invalid-feedback")
    var div_mb_3 = create_element_with_class("div", "col-md-6")
    var label_last = create_element("label")
    var input_last = create_element_with_class("input", "form-control")
    var div_invalid_2 = create_element_with_class("div", "invalid-feedback")
    add_child_to_parent(div_row, col_md_8)
    add_class_to_element(col_md_8, 'order-md-1')  
    add_child_to_parent(col_md_8, h4_2)
    add_text_to_parent(h4_2, 'Billing address')  
    add_child_to_parent(col_md_8, form_validation)
    add_attribute_to_parent(form_validation, 'novalidate', '')
    add_child_to_parent(form_validation, divrow)
    add_child_to_parent(divrow, col_md_6)
    add_class_to_element(col_md_6, 'mb-3')
    add_child_to_parent(col_md_6, label)
    add_attribute_to_parent(label, 'for', 'firstName')
    add_text_to_parent(label, 'First name')
    add_child_to_parent(col_md_6, input_form)
    add_attribute_to_parent(input_form, 'type', 'text')
    add_attribute_to_parent(input_form, 'id', 'firstName')
    add_attribute_to_parent(input_form, 'placeholder', '')
    add_attribute_to_parent(input_form, 'value', '')
    add_attribute_to_parent(input_form, 'required', '')
    add_child_to_parent(col_md_6, div_invalid)
    add_text_to_parent(div_invalid, 'Valid first name is required.')
    add_child_to_parent(divrow, div_mb_3)
    add_class_to_element(div_mb_3, 'mb-3')
    add_child_to_parent(div_mb_3, label_last)
    add_attribute_to_parent(label_last, 'for', 'lastName')
    add_text_to_parent(label_last, 'Last name')
    add_child_to_parent(div_mb_3, input_last)
    add_attribute_to_parent(input_last, 'type', 'text')
    add_attribute_to_parent(input_last, 'id', 'lastName')
    add_attribute_to_parent(input_last, 'placeholder', '')
    add_attribute_to_parent(input_last, 'value', '')
    add_attribute_to_parent(input_last, 'required', '')
    add_child_to_parent(div_mb_3, div_invalid_2)
    add_text_to_parent(div_invalid_2, 'Valid last name is required.')
    //second.3 username div
    var div_username = create_element_with_class("div", "mb-3")
    var lab_user = create_element("label")
    var input_group = create_element_with_class("div", "input-group")
    var prepend = create_element_with_class("div", "input-group-prepend")
    var span_group = create_element_with_class("span", "input-group-text")
    var input_user = create_element_with_class("input", "form-control")
    var inv_feed = create_element_with_class("div", "invalid-feedback")
    add_child_to_parent(form_validation, div_username)
    add_child_to_parent(div_username, lab_user)
    add_attribute_to_parent(lab_user, 'for', 'username')
    add_text_to_parent(lab_user, 'Username')
    add_child_to_parent(div_username, input_group)
    add_child_to_parent(input_group, prepend)
    add_child_to_parent(prepend, span_group)
    add_text_to_parent(span_group, '@')
    add_child_to_parent(input_group, input_user)
    add_attribute_to_parent(input_user, 'id', 'username')
    add_attribute_to_parent(input_user, 'placeholder', 'Username')
    add_attribute_to_parent(input_user, 'required', '')
    add_child_to_parent(input_group, inv_feed)
    add_attribute_to_parent(inv_feed, 'style', 'width: 100%;')
    add_text_to_parent(inv_feed, 'Your username is required.')
    //second.4 email div
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