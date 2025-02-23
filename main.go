package main

import (
	"html/template"
	"log"
	"net/http"
	"sustema/testes/api/handlers"
)

func main() {
	porta := ":9045"

	tlp := template.Must(template.ParseGlob("testes/api/templates/*.html"))
	http.Handle("/scripts/", http.StripPrefix("/scripts/", http.FileServer(http.Dir("testes/api/scripts/"))))

	http.Handle("/", handlers.IndexHandleFunc(tlp))
	http.Handle("/mapa-padrao", handlers.MapaHandleFunc(tlp))
	http.Handle("/mapa-rota", handlers.RotaHandlerFunc(tlp))
	http.Handle("/mapa-pesquisa", handlers.PesquisaMapaHandleFunc(tlp))

	log.Printf("Servidor rodando na porta: %s", porta)
	err := http.ListenAndServe(porta, nil)

	if err != nil {
		log.Fatal("erro ao iniciar o servidor: ", err)
	}
}
