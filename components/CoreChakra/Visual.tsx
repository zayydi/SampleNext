"use client"
import { 
    Image as ChakraImage, 
    ImageProps
} from "@chakra-ui/next-js";
import {
    Tag as ChakraTag,
    TagProps 
} from '@chakra-ui/react';

export function Image(props: ImageProps) {
    return <ChakraImage {...props} />
}

export function Tag(props: TagProps) {
    return <ChakraTag {...props}>{props.children}</ChakraTag>
}