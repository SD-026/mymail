import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/clerk/webhook(.*)',
])

export default clerkMiddleware(async (auth, request) => {
  console.log("Incoming request:", request.url); // Debugging line
 
  if (!isPublicRoute(request)) {
    console.log("Protected Route:", request.url); // Debugging line
    await auth.protect()
  } else {
    console.log("Public Route:", request.url); // Debugging line
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
