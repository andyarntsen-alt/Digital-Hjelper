#!/bin/bash
# Kjør dette scriptet for å generere alle ikoner fra favicon.svg
# Krever: inkscape eller rsvg-convert

SIZES=(72 96 128 144 152 192 384 512)

for size in "${SIZES[@]}"; do
  echo "Genererer icon-${size}x${size}.png..."
  # Bruk en av disse kommandoene (avhengig av hva du har installert):
  # rsvg-convert -w $size -h $size ../favicon.svg -o icon-${size}x${size}.png
  # inkscape ../favicon.svg -w $size -h $size -o icon-${size}x${size}.png
  # convert -background none ../favicon.svg -resize ${size}x${size} icon-${size}x${size}.png
done

echo "Kopier icon-512x512.png til icon-maskable-512x512.png"
echo "Ferdig! Husk å laste opp ikonene til /public/icons/"
