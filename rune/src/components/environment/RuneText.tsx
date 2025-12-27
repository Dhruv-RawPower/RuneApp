"use client"

import { Text } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Z_LAYERS } from "@/lib/zlayers"

type Props = {
    position: [number, number, number]
    content: string
    highlighted?: boolean
}

export default function RuneText({
    position,
    content,
    highlighted = false,
}: Props) {
    const ref = useRef<any>(null)

    useFrame(({ clock }) => {
    if (!highlighted || !ref.current) return
    ref.current.position.y = Math.sin(clock.elapsedTime * 1.5) * 0.015
    })


    return (
        <Text
            ref={ref}
            position={[0, 0, Z_LAYERS.TEXT]}
            fontSize={highlighted ? 0.3 : 0.28}
            maxWidth={1.1}
            lineHeight={1.1}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.01}
            outlineColor="#000000"
            >
            {content}

            {/* 👇 THIS is where depthWrite goes */}
            <meshStandardMaterial
                color={highlighted ? "#fff4cc" : "#e6d3a3"}
                depthWrite={false}
                depthTest={true}
                transparent
            />
        </Text>

    )
}
