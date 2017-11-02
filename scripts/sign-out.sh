#!/bin/bash

curl --include --request DELETE http://tic-tac-toe.wdibos.com/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN" \
