FROM golang
 
ARG app_env
ENV APP_ENV $app_env

ADD . /api/
WORKDIR /api

RUN	go get go.mongodb.org/mongo-driver/mongo
RUN go get github.com/gorilla/mux
RUN go get github.com/joho/godotenv
RUN go get github.com/rs/cors

RUN go build -o main .

EXPOSE 8080

CMD ["./main"]

