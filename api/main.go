package main

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"fmt"

	"./helper"
	"./models"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)	

//Connection mongoDB with helper class
var collection = helper.ConnectDB()

func getFavorites(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// we created Favorite array
	var favorites []models.Favorite

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
		var book models.Favorite
		// & character returns the memory address of the following variable.
		err := cur.Decode(&book) // decode similar to deserialize process.
		if err != nil {
			log.Fatal(err)
		}

		// add item our array
		favorites = append(favorites, book)
	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	json.NewEncoder(w).Encode(favorites) // encode similar to serialize process.
}

func createFavorite(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var book models.Favorite

	// we decode our body request params
	_ = json.NewDecoder(r.Body).Decode(&book)

	// insert our book model.
	result, err := collection.InsertOne(context.TODO(), book)

	if err != nil {
		helper.GetError(err, w)
		return
	}

	json.NewEncoder(w).Encode(result)
}

func deleteFavorite(w http.ResponseWriter, r *http.Request) {
	// Set header
	w.Header().Set("Content-Type", "application/json")

	// get params
	var params = mux.Vars(r)

	// string to primitve.ObjectID
	id, err := primitive.ObjectIDFromHex(params["id"])

	// prepare filter.
	filter := bson.M{"_id": id}

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
	r.HandleFunc("/api/favorites", createFavorite).Methods("POST")
	r.HandleFunc("/api/favorites/{id}", deleteFavorite).Methods("DELETE")

	config := helper.GetConfiguration()
	fmt.Println(config)
	log.Fatal(http.ListenAndServe(config.Port, r))

}