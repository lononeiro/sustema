package handlers

import (
	"html/template"
	"net/http"
)

func MapaHandleFunc(tlp *template.Template) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		tlp.ExecuteTemplate(w, "mapa.html", nil)
	}
}
