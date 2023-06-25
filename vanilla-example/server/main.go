package main

import (
	"log"
	"net/http"
)

func main() {
	log.Printf("Starting server on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", http.FileServer(http.Dir("../assets"))))
}
