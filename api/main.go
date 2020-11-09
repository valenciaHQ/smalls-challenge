package main

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"fmt"

	"./helper"
	"./models"
	"github.com/rs/cors"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
)	

//Connection mongoDB with helper class
var collection = helper.ConnectDB()

func getFavorites(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// we created Favorite array
	var Favorites []models.Favorite
	Favorites = make([]models.Favorite, 0)

	// bson.M{},  we passed empty filter. So we want to get all data.
	cur, err := collection.Find(context.TODO(), bson.M{})

	if err != nil {
		helper.GetError(err, w)
		return
	}

	// Close the cursor once finished
	/*A defer statement defers the execution of a function until the surrounding function returns.
	simply, run cur.Close() process but after cur.Next() finished.*/
	defer cur.Close(context.TODO())

	for cur.Next(context.TODO()) {
		// create a value into which the single document can be decoded
		var Favorite models.Favorite
		// & character returns the memory address of the following variable.
		err := cur.Decode(&Favorite) // decode similar to deserialize process.
		if err != nil {
			log.Fatal(err)
		}

		// add item our array
		Favorites = append(Favorites, Favorite)
	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	json.NewEncoder(w).Encode(Favorites) // encode similar to serialize process.
}

func getFavorite(w http.ResponseWriter, r *http.Request) {
	// set header.
	w.Header().Set("Content-Type", "application/json")

	var Favorite models.Favorite
	// we get params with mux.
	var params = mux.Vars(r)

	// string to primitive.ObjectID
	id, _ :=  params["id"]

	// We create filter. If it is unnecessary to sort data for you, you can use bson.M{}
	filter := bson.M{"postid": id}

	err := collection.FindOne(context.TODO(), filter).Decode(&Favorite) 

	if err != nil {
		w.WriteHeader(http.StatusNotFound)
        json.NewEncoder(w)
	}

	json.NewEncoder(w).Encode(Favorite)
  }

func createFavorite(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var favorite models.Favorite

	// we decode our body request params
	_ = json.NewDecoder(r.Body).Decode(&favorite)

	// insert our favorite model.
	result, err := collection.InsertOne(context.TODO(), favorite)

	if err != nil {
		helper.GetError(err, w)
		return
	}

	json.NewEncoder(w).Encode(result)
}

func deleteFavorite(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var params = mux.Vars(r)
	id := params["id"]

	filter := bson.M{"postid": id}

	deleteResult, err := collection.DeleteOne(context.TODO(), filter)

	if err != nil {
		helper.GetError(err, w)
		return
	}

	json.NewEncoder(w).Encode(deleteResult)
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/api/favorites", getFavorites).Methods("GET")
	r.HandleFunc("/api/favorites/{id:[0-9]+}", getFavorite).Methods("GET")
	r.HandleFunc("/api/favorites", createFavorite).Methods("POST") 
	r.HandleFunc("/api/favorites/{id:[0-9]+}", deleteFavorite).Methods("DELETE") 
 
	config := helper.GetConfiguration()
	handler := cors.AllowAll().Handler(r)
	fmt.Println("Listening on port: ", config.Port)
	log.Fatal(http.ListenAndServe(config.Port, handler))
}