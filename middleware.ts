import { getSession } from '@/lib/session'

import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    async authorized({ req }) {
      const session = await getSession(req.headers.get('cookie'))
      return !!session
    },
  },
})

export const config = { matcher: ['/dashboard/:path*', '/editor'] }
