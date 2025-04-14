import { NextRequest, NextResponse } from "next/server"

const protectedRoutes = ['/']
const publicRoutes = ['/login']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  const token = req.cookies.get('token')?.value || null;

  if (isProtectedRoute && token === null) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  if (
    isPublicRoute &&
    token == "true"
  ) {
    if (path === '/login') {
      return NextResponse.redirect(new URL('/', req.nextUrl))
    }
    return NextResponse.redirect(new URL(path, req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}