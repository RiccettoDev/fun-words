import { AuthProvider, useAuth } from "@/context/auth.context"
import { supabase } from "@/lib/supabase"
import { Stack, router } from "expo-router"
import { useEffect } from "react"

export default function RootLayout(){
    return(
        <AuthProvider>
            <MainLayout />
        </AuthProvider>
    )
}

function MainLayout() {

    const { setAuth } = useAuth()
    
    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {

            if(session){
                setAuth(session?.user || null)
                router.replace("/(private)/home/page")
                return
            }

            setAuth(null)
            router.replace("/(public)/welcome/page")
        })
    }, [])

    return (
        <Stack>
            <Stack.Screen 
                name="index"
                options={{ headerShown: false }} 
            />
            {/* -------- Public --------- */}
            <Stack.Screen 
                name="(public)/welcome/page"
                options={{ headerShown: false }} 
            />
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