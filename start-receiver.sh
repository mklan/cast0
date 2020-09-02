#!/bin/bash

set -e

"$(npm bin)/tsc" --noEmit --watch &
"$(npm bin)/parcel" ./src/receiver/index.html -p 2115 -d dist/receiver # --https
