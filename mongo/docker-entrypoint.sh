#!/bin/bash

mongo < create-sentilo-user.js
mongo -u sentilo -p sentilo sentilo /sentilo/scripts/mongodb/init_data.js
mongo -u sentilo -p sentilo sentilo /sentilo/scripts/mongodb/init_test_data.js
