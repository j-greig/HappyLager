#!/bin/sh
curl "https://api.airtable.com/v0/app6c5PGL8ECac8DI/2018?maxRecords=999&view=Cleaned" \
-H "Authorization: Bearer keyhIK1RE4i5B0qJ3" -o "/home/forge/happylager.ghdev.xyz/web/data/dotall-tweets.json"
wait
wget -q -O- "https://happylager.ghdev.xyz/index.php?p=actions/feed-me/feeds/run-task&direct=1&feedId=3&passkey=P4mvCU2XLR" > /dev/null
echo "\n date +"%m-%d-%Y" - tweets imported :) \n"
