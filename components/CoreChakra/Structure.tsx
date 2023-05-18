"use client"
import {
    Stack as ChakraStack,
    StackProps,
    Flex as ChakraFlex,
    FlexProps,
    Box as ChakraBox,
    BoxProps,
    SimpleGrid as ChakraGrid,
    SimpleGridProps,
    HStack as ChakraHStack,
    VStack as ChakraVStack
} from '@chakra-ui/react';

export function Stack(props: StackProps) {
    return <ChakraStack {...props}>{props.children}</ChakraStack>
}

export function Flex(props: FlexProps) {
    return <ChakraFlex {...props}>{props.children}</ChakraFlex>
}

export function Box(props: BoxProps) {
    return <ChakraBox {...props}>{props.children}</ChakraBox>
}

export function SimpleGrid(props: SimpleGridProps) {
    return <ChakraGrid {...props}>{props.children}</ChakraGrid>
}

export function HStack(props: StackProps) {
    return <ChakraHStack {...props}>{props.children}</ChakraHStack>
}

export function VStack(props: StackProps) {
    return <ChakraVStack {...props}>{props.children}</ChakraVStack>
}