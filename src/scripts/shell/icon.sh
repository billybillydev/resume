#!/bin/bash

ICON_NAME=$1
VIEWBOX=$2
SVG_PATH=$3
DIRECTORY_PATH="${HOME}/astro/astropine/src/components/icon"
if [ ! -d "$DIRECTORY_PATH" ]; then
    echo "Creating $DIRECTORY_PATH"
    mkdir $DIRECTORY_PATH
fi
ICON_PATH="$DIRECTORY_PATH/${ICON_NAME}Icon.astro"
touch $ICON_PATH

cat <<EOL >> $ICON_PATH
---
import { tailwindThemeConfig } from "@config/design";
import SVG from "@components/svg/SVG.astro";
import type { IconProps } from "@components/icon/props";

type Props = IconProps;

const { size = 4, applyDefsId, ...restProps } = Astro.props;
---

<SVG viewBox="$VIEWBOX" $( echo 'style={`width: ${tailwindThemeConfig.width[size]}; height: ${tailwindThemeConfig.height[size]};`}' ) {...restProps}>
  $SVG_PATH
</SVG>

EOL

