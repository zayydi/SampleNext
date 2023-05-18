"use client"
import { Stack } from "@chakra-ui/react";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
    return (
        <Stack minH={'80vh'} overflowY={'scroll'} overflowX={'hidden'} p={4}>
            {children}
        </Stack>
    )
}