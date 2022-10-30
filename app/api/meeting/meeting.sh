#!/bin/bash

API_KEY="anayameet_default_secret"
ANAYAMEET_URL="https://anayameet.herokuapp.com/api/v1/meeting"

curl $ANAYAMEET_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --request POST