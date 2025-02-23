package handlers

import (
	"html/template"
	"net/http"
)

func IndexHandleFunc(tlp *template.Template) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		tlp.ExecuteTemplate(w, "index.html", nil)
	}
}
