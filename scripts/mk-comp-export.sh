#!/bin/bash

echo "" > "./src/components/index.ts"
echo "" > "./src/components/index.scss"

for c in src/components/*; do
    comp=$(basename "$c")
    if [[ "$comp" == "index.ts" ]] || [[ "$comp" == "index.scss" ]]; then continue; fi

    echo -en "Creating exports for \e[96m$comp\e[0m... "
    # echo "export * from './$comp';" > "$c/index.ts"
    echo "export * from './$comp/$comp';" >> "./src/components/index.ts"
    echo -en "\e[92mts\e[0m, "

    echo "@import './components/$comp/$comp';" >> "./src/components/index.scss"
    echo -e "\e[92mscss\e[0m "
done