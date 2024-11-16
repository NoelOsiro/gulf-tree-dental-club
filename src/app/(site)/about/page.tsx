// app/about/page.tsx

import Image from 'next/image'
import { urlFor} from '@/sanity/lib/image'
import { client } from '@/sanity/lib/client'
import { Metadata } from 'next'
import { generateMetadata } from '@/app/seo'


export const metadata: Metadata = generateMetadata(
  'About Us',
  'Learn about the Gulf Tree Implant Centre Dental Club, our mission, vision, and team.',
  '/about'
)

async function getTeamMembers() {
  return await client.fetch(`*[_type == "teamMember"] | order(name asc)`)
}

export default async function AboutPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Gulf Tree Implant Centre Dental Club</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          Gulf Tree Implant Centre Dental Club is dedicated to advancing the field of implant dentistry through education, collaboration, and innovation. We strive to provide our members with the latest knowledge, techniques, and networking opportunities to excel in their practice.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg">
          To be the leading community for dental professionals in the Gulf region, fostering excellence in implant dentistry and improving patient outcomes through continuous learning and shared expertise.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member: { _id: string; image: string; name: string; role: string; bio: string }) => (
            <div key={member._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {member.image && (
                <Image
                  src={urlFor(member.image).url()}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}