package handlers

import (
	"html/template"
	"net/http"
)

func PesquisaMapaHandleFunc(tlp *template.Template) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		tlp.ExecuteTemplate(w, "pesquisaEndereco.html", nil)
	}
}
