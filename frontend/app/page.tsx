import {Suspense} from 'react'
import {PortableText} from '@portabletext/react'

import {RecentPosts} from '@/components/Posts'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'

export default async function Page() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  return (
      <section className="pt-24">
        <h1>
          {settings?.title || 'Author Blog Sanity'}
        </h1>
        {settings?.description && <PortableText value={settings.description} />}
        <div>
          <aside>
            <Suspense>{await RecentPosts()}</Suspense>
          </aside>
        </div>
      </section>
  )
}
