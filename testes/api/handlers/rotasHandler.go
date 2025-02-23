package handlers

import (
	"html/template"
	"net/http"
)

func RotaHandlerFunc(tlp *template.Template) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		tlp.ExecuteTemplate(w, "rotas.html", nil)
	}
}
