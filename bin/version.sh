#!/bin/sh
echo "Hello!"
echo "The version would be: $1"
echo "export const VERSION='$1'" > ./src/version.ts
echo "Thank you"