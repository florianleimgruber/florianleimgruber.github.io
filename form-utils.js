let url_params = new URLSearchParams(window.location.search);
let page = parseInt(url_params.get("page") || "1");
   
function create_form_str(title, content, action = "http://example.com", submit_text = "Submit") {
  return `<h3>${title}</h3>
  <form action=${action}>
    ${content}<br>
    <input type=submit value=${submit_text}>
  </form>`;
}

function create_form(title, content, action = "http://example.com", submit_text = "Submit") {
  document.body.innerHTML = create_form_str(title, content, action, submit_text);
}

function field(label, autocomplete_attribute = "") {
  return `<div><label>${label}</label><input autocomplete="${autocomplete_attribute}"></div>`;
}

function create_multiform(title, content, last = false) {
  if (last)
    document.body.innerHTML = "<h3>Done!</h3>";
  else
    create_form(title, `${content}
      <input type=hidden name=page value=${page+1}>`,
      "", last ? "Submit" : "Next");
}
