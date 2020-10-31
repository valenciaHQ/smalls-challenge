package models

import "go.mongodb.org/mongo-driver/bson/primitive"

//Create Struct
type Favorite struct {
	ID     primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Title  string             `json:"title" bson:"title,omitempty"`
	Author string             `json:"author" bson:"author,omitempty"`
}
 