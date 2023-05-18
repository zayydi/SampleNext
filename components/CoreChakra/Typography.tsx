"use client"
import {
    Heading as ChakraHeading,
    HeadingProps,
    Text as ChakraText,
    TextProps,
    Link as ChakraLink,
    LinkProps
} from "@chakra-ui/react";

export function Heading(props: HeadingProps) {
    return (
        <ChakraHeading
            {...props}
        >
            {props.children}
        </ChakraHeading>
    )
}

export function Text(props: TextProps) {
    return (
        <ChakraText
            {...props}
        >
            {props.children}
        </ChakraText>
    )
}

export function Link(props: LinkProps) {
    return <ChakraLink {...props}>{props.children}</ChakraLink>
}