#!/bin/bash

curl --include --request GET http://tic-tac-toe.wdibos.com/users/$ID \
  --header "Authorization: Token token=$TOKEN"
