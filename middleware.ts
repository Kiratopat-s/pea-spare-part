import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const user = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    })

    const adminPaths = ['/admin', '/api/user', '/role', '/api/sparepart/get-all']

    const { pathname } = request.nextUrl

    if (pathname === '/' && user && user.role === 'admin') {
        return NextResponse.redirect(new URL('/admin', request.url))
    }

    if (adminPaths.some(path => pathname.startsWith(path)) && (!user || user.role !== 'admin')) {
        return NextResponse.redirect(new URL('/', request.url))
    }


    return NextResponse.next()
}