import { Stack } from "expo-router"

export default function MainLayout() {
    return (
        <Stack>
            <Stack.Screen 
                name="index"
                options={{ headerShown: false }} 
            />
            {/* -------- Public --------- */}
            <Stack.Screen 
                name="(public)/auth/page"
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="(public)/register/page"
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="(public)/forgot-password/page"
                options={{ headerShown: false }} 
            />
            {/* -------- Private --------- */}
            <Stack.Screen 
                name="(private)/home/page"
                options={{ headerShown: false }} 
            />
        </Stack>
    )
}